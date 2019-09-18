import { takeLatest, put } from 'redux-saga/effects';
import * as cache from '../../lib/cache';
import * as constants from '../constants';
import mockNews from '../../lib/mock-news.json';


export function* watcherFetchNews() {
    yield takeLatest(constants.NEWS_API_REQ, workerFetchNews);
}

function* workerFetchNews() {
    console.log('===== old saga *not* SSR fetching news ===== ');

    let retrievedArticles = [];
    let rawUrl = '';
    let error = null;

    const cachedNews = cache.getFromCache('stories');
    
    // if cached exists, return that.
    if (cachedNews) {
      const fromCache = JSON.parse(localStorage.getItem('stories'));
      yield put({ type: constants.NEWS_API_SUCCESS, stories: fromCache })
      return;
    }
    
    // otherwise, if in Prod...
    if (process.env.NODE_ENV === 'production') {
        // go to gist
        yield fetch('https://api.github.com/gists/424b043765bf5ad54cb686032f141b34')
            .then(res => res.json())
            .then(json => {
                return rawUrl = json.files.articles.raw_url;
            })
            .catch(err => error = err);
        
        // get dirty raw url for all the articles
        yield fetch(rawUrl)
            .then(res => res.json())
            .then(json => {
                retrievedArticles = json.articles.slice(0, 12);
                console.log('retrieved articals are ', retrievedArticles.length);
                cache.saveToCache('stories', JSON.stringify(retrievedArticles));
                return retrievedArticles;
            })
            .catch(err => console.log('saga | news stories error ', err))
    
            retrievedArticles.length > 0 ?
            yield put({ type: constants.NEWS_API_SUCCESS, stories: retrievedArticles })
            :
            yield put({ type: constants.NEWS_API_FAIL, error: error })
    }
    if (process.env.NODE_ENV === 'development') {
        yield put({ type: constants.NEWS_API_SUCCESS, stories: mockNews.articles })
    }
    
}
