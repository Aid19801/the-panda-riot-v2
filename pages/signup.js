import React from 'react';
// import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';
import {
  signUpPageLoading,
  signUpPageLoaded,
  signUpPageFailed,
  saveAuthenticatedUID,
  updateStateAppLoading,
  updateStateAppLoaded,
} from '../redux/actions';
import { Banner, Button, Input, NavBar, Spinner } from '../components';
import { withFirebase } from '../HOCs';
import * as cache from '../lib/cache';
import withAnalytics from '../HOCs/with-ga';
import '../lib/index.css';
import withPage from '../HOCs/with-page';

class SignUpPage extends React.Component {

  constructor() {
    super();
    this.state = {
      stage: 0,
      submitting: false,
      error: null,

      // user info
      username: '',
      email: '',
      password: '',

      profilePicture: '',
      tagline: '',
      genre: '',
      faveGig: '',

      includeInActRater: true,
      youtube: '',
      youtubeChannelURL: '',
      facebook: '',
      twitter: '',
      website: '',
      rating: 0
    };
  }

  componentWillMount() {
    this.props.updateStateAppLoading();
  }

  componentDidMount() {
    const { pageLoading, pageLoaded, updateStateAppLoaded } = this.props;
    pageLoading();
    pageLoaded();
    updateStateAppLoaded()
  }

  onSubmit = () => {
    const {
      username,
      email,
      password,
      profilePicture,
      tagline,
      genre,
      faveGig,
      includeInActRater,
      youtube,
      youtubeChannelURL,
      facebook,
      twitter,
      website
    } = this.state;
    const { updateStateAuthenticatedUID, updateStateAppLoading } = this.props;
    
    updateStateAppLoading();
    // ^^ fires off spinner

    this.setState({
      submitting: true
    });

    // create user auth entry
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(res => {
        updateStateAuthenticatedUID(res.user.uid); // contains email & uid
        cache.saveToCache('uid', res.user.uid); // just uid

        // create DB entry for user info
        this.props.firebase.user(res.user.uid).set({
          username,
          email,
          tagline,
          profilePicture,
          includeInActRater,
          rating: 0,

          faveGig,
          genre,
          youtube,
          twitter,
          facebook,
          youtubeChannelURL,
          website
        });

        Router.push('/home');
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    console.log('onChange Fired : ', event.target);
    // analyticsEvent(`v2-signup-${event.target.name}`);
    this.setState({ [event.target.name]: event.target.value });
  };

  moveForward = () => {
    const currentStage = this.state.stage;
    if (currentStage <= 3) {
      this.setState({
        stage: currentStage + 1
      });
    }
  };
  render() {
    
    const { spinner } = this.props;

    if (spinner) {
      return <Spinner />
    }

    return (
      <div id="page-container" className="signup__page" >
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: 'Sign Up',
            description: 'Sign up to the panda riot open mic comedy webapp!',
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
        <Banner src="/static/banner-ldn.jpg" />
        <h1 className="funky-title">Sign Up: </h1>

        {this.state.stage === 0 && (
          <>
            <Input
              name="username"
              title="act name *"
              onChange={this.onChange}
              placeholder="eg. Lily Savage"
            />
            <Input
              name="email"
              title="email *"
              onChange={this.onChange}
              placeholder="abc@abc.com"
            />
            <Input
              name="password"
              title="password *"
              onChange={this.onChange}
              placeholder="password here"
              type="password"
            />
            <Button
              disabled={this.state.email === '' || this.state.password === '' || this.state.username === ''}
              text="Next =>"
              onClick={this.moveForward} color="grey"
            />
          </>
        )}

        {this.state.stage === 1 && (
          <>
            <Input
              name="profilePicture"
              title="Link to your profile pic*"
              helpTag="https://kb.benchmarkemail.com/what-is-an-image-url-and-how-do-i-find-the-image-url-for-an-image-i-want-to-use-in-benchmark-email/"
              onChange={this.onChange}
              placeholder="eg. https://some-picture.com/my-pic.jpg"
            />
            <Input
              name="tagline"
              title="My Tag Line *"
              onChange={this.onChange}
              placeholder="Always the joker, never the joke..."
            />
            <Input
              name="genre"
              title="genre *"
              onChange={this.onChange}
              placeholder="eg. Observational or Pun / One Liner"
              type="select"
              selectOptions={[
                'N/A',
                'Observational',
                'Pun Merchant',
                'One Liner',
                'Storytelling',
                'Musical Comedy',
                'MC',
                'Promoter',
                'Just a fan',
                'Adult',
                'Burlesque',
                'Abstract',
                'Political'
              ]}
            />
            <Button
              text="Next =>"
              onClick={this.moveForward} color="grey"
              disabled={this.state.profilePicture === '' || this.state.tagline === '' || this.state.genre === ''}
              />
          </>
        )}

        {this.state.stage === 2 && (
          <>
            <Input
              name="faveGig"
              title="Fave Open Mic Gig? *"
              onChange={this.onChange}
            />
            <Input
              name="includeInActRater"
              title="Include Me In Acts Section?"
              onChange={this.onChange}
              type="select"
              selectOptions={['yes', 'no']}
            />
            <Input
              name="youtube"
              title="Link To My YouTube Video"
              onChange={this.onChange}
              placeholder="eg. https://www.youtube.com/watch?v=5dsGWM5XGdg"
            />

            <Button text="Finish =>" onClick={this.moveForward} color="grey" />
          </>
        )}

        {this.state.stage === 3 && (
          <>
            <Input
              name="facebook"
              title="My Facebook Page"
              onChange={this.onChange}
            />
            <Input
              name="twitter"
              title="Link To My Twitter"
              onChange={this.onChange}
            />
            <Input
              name="youtubeChannelURL"
              title="Link To My YouTube Channel (not video)"
              onChange={this.onChange}
              placeholder="eg. https://www.youtube.com/channel/UCBpYWhSlD0CJn0eeJkr8wAg"
            />
            <Input
              name="website"
              title="My Website"
              onChange={this.onChange}
              placeholder="eg. www.ChucklyJoeSmith.com"
            />

            <Button text="Submit" onClick={this.onSubmit} color="grey" />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signUp.loading,
  error: state.signUp.error,
  spinner: state.appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(signUpPageLoading()),
  pageLoaded: () => dispatch(signUpPageLoaded()),
  pageFailed: () => dispatch(signUpPageFailed()),
  updateStateAuthenticatedUID: id => dispatch(saveAuthenticatedUID(id)),
  updateStateAppLoading: () => dispatch(updateStateAppLoading()),
  updateStateAppLoaded: () => dispatch(updateStateAppLoaded()),
});

export default compose(
  // withPage,
  withAnalytics,
  withFirebase,
  //   WithGigs,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignUpPage);
