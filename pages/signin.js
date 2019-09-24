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
  saveAuthenticatedUID
} from '../redux/actions';
import { Banner, Button, Input, NavBar } from '../components';
import { withFirebase } from '../HOCs';
import * as cache from '../lib/cache';

import '../lib/index.css';
import withGigs from '../HOCs/with-gigs';

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
  static async getInitialProps({ req }) {
    console.log('getInitialProps fired');
    // const isServer = !!req
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    console.log('getInitialProps ', json);
    return {
      users: json
    };
  }

  componentDidMount() {
    const { pageLoading, pageLoaded } = this.props;
    pageLoading();
    pageLoaded();
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
        Router.push('/home');
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { submitting, error } = this.state;
    // console.log('this state ', this.state);
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
        <NavBar />
        <Banner src="https://www.king-apparel.com/media/wysiwyg/our-story-king-apparel-banner.jpg" />
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

        <Link href="/signup">
          <a>Sign up</a>
        </Link>

        {submitting && <p>Signing In..</p>}
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(signInPageLoading()),
  pageLoaded: () => dispatch(signInPageLoaded()),
  pageFailed: () => dispatch(signInPageFailed()),
  updateStateAuthenticatedUID: id => dispatch(saveAuthenticatedUID(id))
});

export default compose(
  // withGigs,
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInPage);
