import React from 'react';
// import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';
import Link from 'next/link';
import {
  signInPageLoading,
  signInPageLoaded,
  signInPageFailed,
  saveAuthUser,
  saveAuthenticatedUID,
  updateStateAppLoaded,
  updateStateAppLoading
} from '../redux/actions';
import { Banner, Button, Input, NavBar, Spinner } from '../components';
import { withFirebase } from '../HOCs';
import withAnalytics from '../HOCs/with-ga';
import * as cache from '../lib/cache';

import '../lib/index.css';

class SignInPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'cultureslutlondon@gmail.com',
      password: 'London01',
      submitting: false,
      error: null
    };
  }

  componentDidMount() {
    const { pageLoading, pageLoaded, updateStateAppLoaded } = this.props;
    pageLoading();
    pageLoaded();
    updateStateAppLoaded();
    // analyticsPage('v2-signin-page');
  }

  onSubmit = () => {
    const { email, password } = this.state;
    const { updateStateAuthenticatedUID } = this.props;
    // console.log('email ', email);
    // console.log('password ', password);

    this.setState({
      submitting: true
    });
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(res => {
        updateStateAuthenticatedUID(res.user.uid);
        cache.saveToCache('uid', res.user.uid);
        this.setState({ email: '', password: '' });

        // console.log('user prof status is false =>' , userProfileStatus, typeof userProfileStatus)
        this.props.firebase.user(res.user.uid).on('value', snapshot => {
          let fbuserProfile = snapshot.val();
          console.log('SIGNIN | user has firebase profile: ', fbuserProfile);
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
            cache.saveToCache(
              'user-profile-object',
              JSON.stringify(fbuserProfile)
            );
            return cache.saveToCache('userProfile', 'true');
          }
          console.log('SIGNIN | submitting this', fbuserProfile);
        });
        setTimeout(() => {
          console.log('12947');
        }, 3000);
        return Router.push('/home');
      })
      .catch(error => {
        console.log('error in state is ', error);
        this.setState({ error: error.message, submitting: false });
      });
  };

  onChange = event => {
    // analyticsEvent(`v2-signin-${event.target.name}`);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { submitting, error } = this.state;
    
    const { spinner } = this.props;

    if (spinner || submitting) {
      return <Spinner />
    }

    return (
      <div id="page-container" className="signin__page h-100">
        <NextSeo
          title="The Panda Riot | Sign in to experience London's Open Mic scene"
          description="London's electric Open Mic Comedy Circuit - all in one handy, modern web-app!"
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/signin',
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
        <NavBar />
        <Banner src="https://www.king-apparel.com/media/wysiwyg/our-story-king-apparel-banner.jpg" />

        {submitting && (
          <div style={{ marginTop: 100 }}>
            <Spinner />
          </div>
        )}

        {!submitting && (
          <>
            <h1 className="funky-title">Sign In: </h1>
            <Input
              name="email"
              title="email"
              onChange={this.onChange}
              placeholder="abc@abc.com"
            />
            <Input
              name="password"
              title="password"
              type="password"
              onChange={this.onChange}
              placeholder="password here"
            />
            <Button text="Submit" onClick={this.onSubmit} color="grey" />
            {error && <p className="flex-center white">{error}</p>}
            <Link href="/signup">
              <a className="btn btn-warning">Sign up?</a>
            </Link>
            {error && (
              <p className="black white flex-center">{error.message}</p>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error,
  spinner: state.appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(signInPageLoading()),
  pageLoaded: () => dispatch(signInPageLoaded()),
  pageFailed: () => dispatch(signInPageFailed()),
  updateStateAuthenticatedUID: id => dispatch(saveAuthenticatedUID(id)),
  updateStateAppLoading: () => dispatch(updateStateAppLoading()),
  updateStateAppLoaded: () => dispatch(updateStateAppLoaded()),
});

export default compose(
  withAnalytics,
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInPage);
