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
  gotGigsFromGist
} from '../redux/actions';
import * as cache from '../lib/cache';
import withAuth from '../HOCs/with-auth';
import mockGigs from '../lib/mock-gigs.json';

import '../lib/index.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static async getInitialProps({ reduxStore, req }) {

    let sortedGigs = [];
    // if we're in dev,  pass in the mocks
    if (process.env.NODE_ENV !== 'production') {
      reduxStore.dispatch(gotGigsFromGist(mockGigs.gigs));
      return;
    }

    try {
      const res = await fetch(
        `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
      );
      const json = await res.json();
      const rawUrl = json.files.gigs.raw_url;

      const req = await fetch(rawUrl);
      const reqJson = await req.json();

      sortedGigs = (reqJson.gigs.sort((a, b) => {
        var textA = a.name;
        var textB = b.name;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }));

      cache.saveToCache('gigs', sortedGigs);
      reduxStore.dispatch(gotGigsFromGist(sortedGigs));

    } catch (error) {
      console.log('getInitialProps err: ', error);
    }

    return {
      gigs: sortedGigs,
    };
  }

  async componentDidMount() {
    const { pageLoading, pageLoaded } = this.props;
    pageLoading();
    pageLoaded();
  }

  signOut = () => {
    this.props.signOut();
  };

  componentDidUpdate = nextProps => {
    console.log('nextProps: ', nextProps);
  };

  render() {
    if (process.browser) {
      console.log('homepage props ==> ', this.props);
    }
    return (
      <div id="page-container">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/gigs',
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
        <h1 className="funky-title">Home</h1>
        <button onClick={this.signOut}>Sign Out</button>
        <p>you can only see me if youre logged in</p>
        <p>gigs are back: {this.props.gigs && this.props.gigs.length}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error,
  reduxUserAuth: state.signIn.userAuth,
  gigs: state.gigs.data
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(homePageLoading()),
  pageLoaded: () => dispatch(homePageLoaded()),
  pageFailed: () => dispatch(homePageFailed()),
});

export default compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage);
