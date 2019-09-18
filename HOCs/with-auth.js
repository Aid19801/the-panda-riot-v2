import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '.';
import * as cache from '../lib/cache';
import Router from 'next/router';
import { saveAuthenticatedUID, userAuthenticatedAsAdmin, userIsSignedIn } from '../redux/actions';

export default function withAuth(PlatformSpecificComponent) {
  class withAuthenticationClass extends React.Component {
    static async getInitialProps(ctx) {
      // Check if Page has a `getInitialProps`; if so, call it.
      const pageProps =
        PlatformSpecificComponent.getInitialProps &&
        (await PlatformSpecificComponent.getInitialProps(ctx));
      // Return props.
      return { ...pageProps };
    }

    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
        uid: ''
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.checkAuthStatus(authUser.uid)
          : this.ifNotAuthRouteToSignIn();
      });

      this.checkAuthStatus();
    }

    ifNotAuthRouteToSignIn = () => {
      return Router.push('/signin');
    }

    // route based on whats in cache
    checkAuthStatus = async (fbUID) => {
      const cacheUID = await cache.getFromCache('uid');
      if (fbUID && fbUID !== '') {
        this.props.updateStateUserSignedIn();
      }
      // if theres no uid in cache, save one.
      if (!cacheUID) {
        cache.saveToCache('uid', fbUID);
      }
      
      // if the uid from firebase matches the admin password, update state to isAdmin true
      if (fbUID === process.env.REACT_APP_PANDA_RIOT_ADMINI) {
        this.props.updateStateIsAdmin();
      }
      // if user has no DB profile, route to `/me`

      // DATABASE / USER PROFILE
      // get userProfile from cache (this is just a string bool)
      let hasProfileCacheString = await cache.getFromCache('userProfile');
      // transform to a real bool
      let hasProfile = hasProfileCacheString === 'true' ? true : false;
      // console.log('userProfileStatus bool ', userProfileStatus)
      // if its false, check the FB database, if it includes faveGig
      // set to true.
      // so first time it renders after signup, it will check if you
      // entered a faveGig minimum for your profile, and if not,
      // `userProfile` cache stays false.
      if (!hasProfile) {
        // console.log('user prof status is false =>' , userProfileStatus, typeof userProfileStatus)
        this.props.firebase.user(cacheUID)
        .on('value', snapshot => {
          console.log('on value fired');
          let fbuserProfile = snapshot.val();
          console.log('user has firestore profile: ', fbuserProfile);
          // get FB profile, check if faveGig exists
          if ((fbuserProfile && fbuserProfile.faveGig === '') || fbuserProfile && !fbuserProfile["faveGig"]) {
            // if profile exists but faveGig empty, set cache to false (user hasnt completed db profile)
            // console.log('fave gig doesnt exist, userProfile cache should be false');
            cache.saveToCache('userProfile', 'false');
            return Router.push('/me');
          }
          // if it exists and it's not empty, set cache to true (user has completed db profile)
          if (fbuserProfile && fbuserProfile.faveGig !== '') {
            // console.log('fave gig DOES exist, userProfile cache should be true');
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
      return <PlatformSpecificComponent {...this.props} signOut={this.signOut} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    updateStateWithUID: id => dispatch(saveAuthenticatedUID(id)),
    updateStateIsAdmin: () => dispatch(userAuthenticatedAsAdmin()),
    updateStateUserSignedIn: () => dispatch(userIsSignedIn()),
  });

  return compose(
    withFirebase,
    connect(
      null,
      mapDispatchToProps
    )
  )(withAuthenticationClass);
}
