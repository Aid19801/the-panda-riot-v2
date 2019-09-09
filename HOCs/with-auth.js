import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '.';
import * as cache from '../lib/cache';
import Router from 'next/router';
import { saveUid } from '../redux/actions';

const withAuthentication = Component => {
  class withAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.ifAuthSaveToCache(authUser)
          : this.ifNotAuthRouteToSignIn();
      });
      // this.ifNotAuthRouteToSignIn();
    }

    ifNotAuthRouteToSignIn = () => {
      this.setState({
        authUser: null
      });
      Router.push('/signin');
    };

    ifAuthSaveToCache = authUser => {
      this.setState({ authUser });
      this.props.updateStateUID(authUser.uid);
      return cache.saveToCache('uid', authUser.uid);
    };

    componentWillUnmount() {
      this.listener();
    }

    signOut = () => {
      cache.clearFromCache('uid', '');
      Router.push('/signin');
    };

    signIn = (email, password) => {
      // this is done at page level. wrapping '/signin' with `withAuthentication`
      // would make it only visible to users who are signed in === Endless loop.
    };

    render() {
      const { authUser } = this.state;
      return (
        <Component {...this.props} authUser={authUser} signOut={this.signOut} />
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
      updateStateUID: (uid) => dispatch(saveUid(uid)),
  })
  
  return compose(
      withFirebase,
      connect(null, mapDispatchToProps),
  )(withAuthentication)
};

export default withAuthentication;
