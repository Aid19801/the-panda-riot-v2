import { all } from 'redux-saga/effects';
import { watcherAppStateSaga } from './app-state';
import { watcherGigsSaga, watcherGigsTonightSaga } from './gigs';
import { watcherFetchNews } from './news-api';

function* rootSaga() {
    yield all([
        watcherAppStateSaga(),
        watcherFetchNews(),
        watcherGigsSaga(),
        watcherGigsTonightSaga(),
    ])
}

export default rootSaga;