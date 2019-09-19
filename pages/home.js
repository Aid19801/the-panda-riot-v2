import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import Router from 'next/router';
import {
  homePageLoading,
  homePageLoaded,
  homePageFailed,
  gotGigsFromGist,
  getAllNews,
  newsApiSuccess
} from '../redux/actions';
import * as cache from '../lib/cache';
import withAuth from '../HOCs/with-auth';
import mockGigs from '../lib/mock-gigs.json';
import mockNews from '../lib/mock-news.json';

import '../lib/index.css';
import { NavBar, SignOutButton } from '../components';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static async getInitialProps({ reduxStore, req }) {
    let sortedGigs = [];
    let retrievedArticles = [];
    // if we're in dev,  pass in the mocks
    if (process.env.NODE_ENV !== 'production') {
      console.log('we are not in production');
      reduxStore.dispatch(gotGigsFromGist(mockGigs.gigs));
      reduxStore.dispatch(newsApiSuccess(mockNews.articles));
      return {
        gigs: mockGigs.gigs,
        stories: mockNews.articles
      };
    }

    // IF IN PROD, GET ALL GIGS IN SSR
    try {
      const res = await fetch(
        `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
      );
      console.log('prod res: ', res);
      const json = await res.json();
      console.log('prod json ', json);
      const rawUrl = json.files.gigs.raw_url;
      console.log('prod rawUrl ', rawUrl);
      const req = await fetch(rawUrl);
      console.log('prod req ', req);
      const reqJson = await req.json();
      console.log('prod reqJson ', reqJson);
      sortedGigs = reqJson.gigs.sort((a, b) => {
        var textA = a.name;
        var textB = b.name;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      cache.saveToCache('gigs', sortedGigs);
      reduxStore.dispatch(gotGigsFromGist(sortedGigs));
    } catch (error) {
      console.log('GIGS getInitialProps err: ', error);
    }

    // GET ALL NEWS IN SSR
    try {
      const res = await fetch(
        'https://api.github.com/gists/424b043765bf5ad54cb686032f141b34'
      );
      console.log('prod news res', res);
      const json = await res.json();
      console.log('prod news json', res);
      const rawUrl = json.files.articles.raw_url;
      console.log('prod news rawUrl', rawUrl);
      const req = await fetch(rawUrl);
      console.log('prod news req', req);
      const reqJson = await req.json();
      console.log('prod news reqJson', reqJson);

      retrievedArticles = reqJson.articles.slice(0, 12);
      console.log('prod news retrievedArticles', retrievedArticles.length);
      // console.log('retrieved articals are ', retrievedArticles.length);
      // cache.saveToCache('stories', JSON.stringify(retrievedArticles));
      reduxStore.dispatch(newsApiSuccess(retrievedArticles));
    } catch (error) {
      console.log('NEWS getInitialProps err: ', error);
    }

    return {
      gigs: sortedGigs,
      stories: retrievedArticles,
    };
  }

  async componentDidMount() {
    const {
      pageLoading,
      updateStatefetchNews,
      pageLoaded,
      gigs,
      stories
    } = this.props;
    pageLoading();
    if (!stories) {
      console.log('there are no stories so fetching them...')
      updateStatefetchNews();
    }
    if (!gigs) {
      console.log('there are no gigs so fetching them...')
      updateStatefetchGigs();
    }
    pageLoaded();
    // this.saveNewsAndGigsToCache();
  }

  signOut = () => {
    this.props.signOut();
  };

  saveNewsAndGigsToCache = () => {
    const cachedGigs = cache.getFromCache('gigs');
    const cachedNews = cache.getFromCache('stories');
    if (!cachedGigs) { cache.saveToCache('gigs', JSON.stringify(this.props.gigs))}
    if (!cachedNews) { cache.saveToCache('stories', JSON.stringify(this.props.stories))}
  }

  componentDidUpdate = newProps => {
    console.log('nextProps: ', newProps.stories !== this.props.stories);
  };

  render() {
    if (process.browser) {
      // console.log('homepage props ==> ', mockNews.articles);
    }
    return (
      <div id="page-container">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `${this.props.gigs[0].name}`,
            description: 'Sign in to the panda riot open mic comedy webapp!',
            images: [
              {
                url: 'https://i.ytimg.com/vi/kQBHzHBMlM4/hqdefault.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt'
              },
              {
                url:
                  'https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png',
                width: 800,
                height: 600,
                alt: 'Og Image Alt 2'
              }
            ]
          }}
        />
        <NavBar firebase={this.props.firebase} />
        <h1 className="funky-title">Home</h1>
        <p>you can only see me if youre logged in</p>
        <p>gigs are back: {this.props.gigs && this.props.gigs.length}</p>
        <p>news is back: {this.props.stories && this.props.stories.length}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error,
  reduxUserAuth: state.signIn.userAuth,
  gigs: state.gigs.data,
  stories: state.newsApi.stories
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(homePageLoading()),
  updateStatefetchNews: () => dispatch(getAllNews()),
  updateStatefetchGigs: () => dispatch(fetchGigsFromGist()),
  pageLoaded: () => dispatch(homePageLoaded()),
  pageFailed: () => dispatch(homePageFailed())
});

export default compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage);
