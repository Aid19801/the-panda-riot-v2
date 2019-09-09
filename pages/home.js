import React from 'react';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';
import {
  homePageLoading,
  homePageLoaded,
  homePageFailed,
} from '../redux/actions';
import * as cache from '../lib/cache';
import '../lib/index.css';
import withAuthentication from '../HOCs/with-auth';

class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }
  //   static async getInitialProps({ req }) {
  //     // const isServer = !!req
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const json = await res.json();

  //     return {
  //       users: json
  //     };
  //   }

  componentDidMount() {
    const { pageLoading } = this.props;
    const { reduxUID } = this.props;
    const cacheUID = cache.getFromCache('uid');
    pageLoading();
    console.log('props ', this.props);

    // NEXT = vv put redux uid and/or cache uid from firebase as condition that bounces it back to signin.
    if (!reduxUID && !cacheUID) {
      Router.push('/signin')
    }
  }

  signOut = () => {
    this.props.signOut();
  }

  componentWillReceiveProps = nextProps => {
    console.log('nextProps: ', nextProps);
    const { pageLoaded } = nextProps;
    if (nextProps.authUser) {
      pageLoaded();
    }
  }


  render() {

    return (
      <div id="page-container">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/gigs',
            title: 'Sign In',
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error,
  reduxUID: state.signIn.uid,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(homePageLoading()),
  pageLoaded: () => dispatch(homePageLoaded()),
  pageFailed: () => dispatch(homePageFailed())
});

export default compose(
  withAuthentication,
  connect(mapStateToProps, mapDispatchToProps),
)(HomePage)
