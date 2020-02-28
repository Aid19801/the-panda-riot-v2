import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '.';
import * as cache from '../lib/cache';
import Router from 'next/router';
import {
  saveAuthenticatedUID,
  userAuthenticatedAsAdmin,
  userIsSignedIn
} from '../redux/actions';

// const myProm = new Promise((resolve, reject) => {});

export default function withAuth(PlatformSpecificComponent) {
  class withAuthenticationClass extends React.Component {
    static async getInitialProps(ctx) {
      // Check if Page has a `getInitialProps`; if so, call it.
      const pageProps =
        PlatformSpecificComponent.getInitialProps &&
        (await PlatformSpecificComponent.getInitialProps(ctx));
      // Return props.
      return { ...pageProps, query: ctx.query };
    }

    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
        uid: ''
      };
    }

    componentWillMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.checkAuthStatus(authUser)
          : this.handleNotSignedIn();
      });
      // const checkCache = cache.getFromCache('uid');
    }

    handleNotSignedIn = () => {
      // check if it's a news article. If it is, fine, if not, boot back to sign in.
      if (process.browser) {
        let isNews = window.location.href.includes('/news/');
        let isDownloads = window.location.href.includes('/downloads');
        // console.log('📰 News Article, no login required');
        if (isNews || isDownloads) {
          return;
        }
        if (!isNews && !isDownloads) {
          return this.routeToSignIn();
        }
      }
    }

    routeToSignIn = () => {
      if (process.browser) {
        return Router.push('/signin');
      }
    };

    // route based on whats in cache
    checkAuthStatus = async userObj => {
      // console.log('checking auth status for: ', userObj);
      const cacheUID = await cache.getFromCache('uid');
      if (
        cacheUID &&
        cacheUID !== '' &&
        cacheUID !== 'undefined' &&
        cacheUID !== undefined &&
        cacheUID !== null &&
        cacheUID.length > 10
      ) {
        // console.log('cacheUID uid iexists, updating signed in ', cacheUID);
        this.props.updateStateUserSignedIn();
      }
      // if theres no uid in cache, save one.
      if (!cacheUID) {
        console.log('no uid in cache');
        cache.saveToCache('uid', userObj.uid);
      }

      // if the uid from firebase matches the admin password, update state to isAdmin true
      if (userObj.uid === process.env.REACT_APP_PANDA_RIOT_ADMINI) {
        this.props.updateStateIsAdmin();
      }
      // if user has no DB profile, route to `/me`

      // DATABASE / USER PROFILE
      // get userProfile from cache (this is just a string bool)
      let hasProfileCacheString = await cache.getFromCache('userProfile');
      // transform to a real bool
      let hasProfile = hasProfileCacheString === 'true' ? true : false;
      // if its false, check the FB database, if it includes faveGig
      // set to true.
      // so first time it renders after signup, it will check if you
      // entered a faveGig minimum for your profile, and if not,
      // `userProfile` cache stays false.
      if (!hasProfile) {
        // console.log('user prof status is false =>' , userProfileStatus, typeof userProfileStatus)
        this.props.firebase.user(userObj.uid).on('value', snapshot => {
          // console.log('on value fired');
          let fbuserProfile = snapshot.val();
          // console.log('user has firebase profile: ', fbuserProfile);
          // get FB profile, check if faveGig exists
          if (
            (fbuserProfile && fbuserProfile.faveGig === '') ||
            (fbuserProfile && !fbuserProfile['faveGig'])
          ) {
            // if profile exists but faveGig empty, set cache to false (user hasnt completed db profile)
            // console.log('fave gig doesnt exist, userProfile cache should be false');
            cache.saveToCache('userProfile', 'false');
            return Router.push('/me');
            // if user doesnt have faveGig / userProfile is false, bounce to me page
          }
          // if it exists and it's not empty, set cache to true (user has completed db profile)
          if (fbuserProfile && fbuserProfile.faveGig) {
            // console.log('fave gig DOES exist, userProfile cache should be true');
            cache.saveToCache('user-profile-object', JSON.stringify(fbuserProfile));
            return cache.saveToCache('userProfile', 'true');
          }
        });
        return;
      }
      // return Router.push('/home')
    };

    signOut = () => {
      cache.clearFromCache('uid', '');
      cache.clearFromCache('userProfile', 'false');
      this.props.firebase.doSignOut();
      Router.push('/signin');
    };

    render() {
      const { authUser } = this.state;
      return (
        <PlatformSpecificComponent {...this.props} signOut={this.signOut} />
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    updateStateWithUID: id => dispatch(saveAuthenticatedUID(id)),
    updateStateIsAdmin: () => dispatch(userAuthenticatedAsAdmin()),
    updateStateUserSignedIn: () => dispatch(userIsSignedIn())
  });

  return compose(
    withFirebase,
    connect(
      null,
      mapDispatchToProps
    )
  )(withAuthenticationClass);
}
