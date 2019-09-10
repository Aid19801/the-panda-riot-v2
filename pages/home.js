import React from 'react';
// import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import Router from 'next/router';
import {
  homePageLoading,
  homePageLoaded,
  homePageFailed,
  fetchGigsFromGist
} from '../redux/actions';
// import * as cache from '../lib/cache';
import '../lib/index.css';
import withAuth from '../HOCs/with-auth';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static async getInitialProps({ reduxStore, req }) {
    await reduxStore.dispatch(fetchGigsFromGist())
    return {};
  }

  async componentDidMount() {
    const { pageLoading, pageLoaded, updateStateFetchGigs } = this.props;
    pageLoading();
    updateStateFetchGigs();
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
  gigs: state.gigs.data,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(homePageLoading()),
  pageLoaded: () => dispatch(homePageLoaded()),
  pageFailed: () => dispatch(homePageFailed()),
  updateStateFetchGigs: () => dispatch(fetchGigsFromGist())
});

export default compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage);
