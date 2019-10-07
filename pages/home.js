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
  fetchGigsTonight,
  gotGigsFromGist,
  getAllNews,
  newsApiSuccess,
  prismicNewsApiReq,
  prismicNewsApiSuccess,
  prismicNewsApiFail
} from '../redux/actions';
import * as cache from '../lib/cache';

import { prismicEndpoint } from '../lib/prismic'; // prismic yo
import Prismic from 'prismic-javascript'; // prismic yo
// import { RichText } from 'prismic-reactjs';

import withAuth from '../HOCs/with-auth';
import mockGigs from '../lib/mock-gigs.json';
import mockNews from '../lib/mock-news.json';
import mockTpr_stories from '../lib/mock-tpr_stories.json';
import {
  Banner,
  NavBar,
  SignOutButton,
  NewsContainer,
  FunkyTitle,
  Bulletin
} from '../components';

import '../lib/index.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static async getInitialProps({ reduxStore, req }) {
    let sortedGigs = [];
    let retrievedArticles = [];
    let retrievedPrismicStories = [];

    // if we're in dev, pass in the mocks
    if (process.env.NODE_ENV !== 'production') {
      console.log('NODE ENV NOT EQUAL TO PROD: ', process.env.NODE_ENV)
      reduxStore.dispatch(gotGigsFromGist(mockGigs.gigs));
      reduxStore.dispatch(newsApiSuccess(mockNews.articles));
      reduxStore.dispatch(prismicNewsApiSuccess(mockTpr_stories.results));
      return {
        gigs: mockGigs.gigs,
        stories: mockNews.articles,
        tpr_stories: mockTpr_stories.results
      };
    }

    // IF IN *PROD*, GET ALL GIGS IN SSR
    try {
      const res = await fetch(
        `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
      );
      const json = await res.json();
      const rawUrl = json.files.gigs.raw_url;
      const req = await fetch(rawUrl);
      const reqJson = await req.json();

      sortedGigs = reqJson.gigs.sort((a, b) => {
        var textA = a.name;
        var textB = b.name;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      // cache.saveToCache('gigs', sortedGigs);
      console.log('PROD GIGS ===> ', sortedGigs);
      reduxStore.dispatch(gotGigsFromGist(sortedGigs));
    } catch (error) {
      console.log('GIGS getInitialProps err: ', error);
    }

    // GET ALL NEWS IN SSR
    try {
      const res = await fetch(
        'https://api.github.com/gists/424b043765bf5ad54cb686032f141b34'
      );
      // console.log('prod news res', res);
      const json = await res.json();
      // console.log('prod news json', res);
      const rawUrl = json.files.articles.raw_url;
      // console.log('prod news rawUrl', rawUrl);
      const req = await fetch(rawUrl);
      // console.log('prod news req', req);
      const reqJson = await req.json();
      // console.log('prod news reqJson', reqJson);

      retrievedArticles = reqJson.articles.slice(0, 12);
      // console.log('prod news retrievedArticles', retrievedArticles.length);
      // console.log('retrieved articals are ', retrievedArticles.length);
      // cache.saveToCache('stories', JSON.stringify(retrievedArticles));
      reduxStore.dispatch(newsApiSuccess(retrievedArticles));
    } catch (error) {
      console.log('NEWS getInitialProps err: ', error);
    }

    // GET ALL PRISMIC STORIES

    try {
      reduxStore.dispatch(prismicNewsApiReq()); // update state, requesting it
      retrievedPrismicStories = await this.fetchPrismic(); // get the stories
      reduxStore.dispatch(prismicNewsApiSuccess(retrievedPrismicStories)); // update state with them.
    } catch (error) {
      console.log('error | PRISMIC getInitialProps ==> ', error);
      reduxStore.dispatch(prismicNewsApiFail(error));
    }

    return {
      gigs: sortedGigs,
      stories: retrievedArticles,
      tpr_stories: retrievedPrismicStories
    };
  }

  static async fetchPrismic() {
    const client = Prismic.client(prismicEndpoint);
    try {
      const res = await client.query(
        Prismic.Predicates.at('document.type', 'news-story'),
        { orderings: '[document.last_publication_date]' }
      );
      let mostRecentFirst = res.results.reverse();
      return mostRecentFirst;
    } catch (error) {
      this.props.updateStatePrismicFailed(error);
    }
  }

  async componentDidMount() {
    const {
      pageLoading,
      updateStatefetchNews,
      pageLoaded,
      gigsTonight,
      stories,
      tpr_stories,
      updateStateFetchPrismicStories,
      updateStatefetchGigsTonight,
    } = this.props;
    pageLoading();
    if (!stories) {
      console.log('client / there are no stories so fetching them...');
      updateStatefetchNews();
    }
    if (!gigsTonight) {
      console.log('client / there are no gigs so fetching them...');
      updateStatefetchGigsTonight();
    }
    if (!tpr_stories) {
      console.log('client / there are no prismic stories so fetching them...');
      const res = await this.fetchPrismic();
      updateStateFetchPrismicStories(res);
    }

    pageLoaded();

    if (process.browser) {
      this.saveNewsAndGigsToCache();
    }
  }

  signOut = () => {
    this.props.signOut();
  };

  saveNewsAndGigsToCache = () => {
    const cachedGigs = cache.getFromCache('gigs');
    const cachedNews = cache.getFromCache('stories');
    if (!cachedGigs) {
      cache.saveToCache('gigs', JSON.stringify(this.props.gigs));
    }
    if (!cachedNews) {
      cache.saveToCache('stories', JSON.stringify(this.props.stories));
    }
  };

  componentDidUpdate = newProps => {
    console.log('nextProps: ', newProps.stories !== this.props.stories);
  };

  render() {
    if (process.browser) {
      // console.log('homepage props ==> ', mockNews.articles);
    }
    return (
      <div id="page-container" className="page__homepage flex-center">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `${this.props.gigs[0].name}`,
            description: 'News, gig-map and act profiles from London\'s electric open mic comedy scene.',
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
        {this.props.gigsTonight && <Bulletin stories={this.props.gigsTonight} /> }
        
        <Banner src="/static/mic.jpg" />

        <div className="container">
          <div className="row margin-top">
            <FunkyTitle text="Home" />
            <NewsContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error,
  reduxUserAuth: state.signIn.userAuth,
  gigsTonight: state.gigs.gigsTonight,
  stories: state.newsApi.stories,
  tpr_stories: state.prismic.tpr_stories
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(homePageLoading()),
  updateStatefetchNews: () => dispatch(getAllNews()),
  updateStateFetchPrismicStories: () => dispatch(prismicNewsApiReq()), // get prismic stories
  updateStatePrismicFailed: (err) => dispatch(prismicNewsApiFail(err)),
  updateStatefetchGigsTonight: () => dispatch(fetchGigsTonight()),
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
