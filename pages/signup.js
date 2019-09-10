import React from 'react';
// import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import Router from 'next/router';
import {
  signUpPageLoading,
  signUpPageLoaded,
  signUpPageFailed,
  saveAuthenticatedUID,
  fetchGigsFromGist
} from '../redux/actions';
import { Button, Input } from '../components';
import { withFirebase } from '../HOCs';
import * as cache from '../lib/cache';

import '../lib/index.css';
// import WithGigs from '../HOCs/with-gigs';

class SignUpPage extends React.Component {

  static async getInitialProps({ req }) {
    console.log('======== server firing ========')
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  constructor() {
    super();
    this.state = {
      stage: 1,
      submitting: false,
      error: null,

      // user info
      username: 'joe bloggs',
      email: 'cultureSlutLondon@gmail.com',
      password: 'London01',
      profilePicture:
        'https://www.logolynx.com/images/logolynx/23/23938578fb8d88c02bc59906d12230f3.png',
      tagline: 'tagline here',
      genre: 'genre here',
      faveGig: 'Jester Jesters',
      includeInActRater: false,
      youtube: 'https://www.youtube.com/watch?v=nwNGtb_0MEQ',
      youtubeChannelURL:
        'https://www.youtube.com/channel/UC2ccm1GajfSujz7T18d7cKA',
      facebook: 'https://www.facebook.com/AidThompsin/',
      twitter: 'https://twitter.com/aidThompsin',
      website: 'www.stuffAndThings.net',
      rating: 0
    };
  }

  componentDidMount() {
    const { pageLoading, pageLoaded } = this.props;
    pageLoading();
    pageLoaded();
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
    const { updateStateAuthenticatedUID } = this.props;

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
    //     const { submitting, error } = this.state;
    // console.log('this state ', this.state);
    console.log('this props ', this.props);
    return (
      <div id="page-container">
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
        <h1 className="funky-title">Sign Up: </h1>

        {this.state.stage === 0 && (
          <>
            <Input
              name="username"
              title="act name"
              onChange={this.onChange}
              placeholder="eg. Lily Savage"
            />
            <Input
              name="email"
              title="email"
              onChange={this.onChange}
              placeholder="abc@abc.com"
            />
            <Input
              name="password"
              title="password"
              onChange={this.onChange}
              placeholder="password here"
            />
            <Button text="Continue" onClick={this.moveForward} color="grey" />
          </>
        )}

        {this.state.stage === 1 && (
          <>
            <Input
              name="profilePicture"
              title="Link to your profile picture"
              onChange={this.onChange}
              placeholder="eg. https://some-picture.com/my-pic.jpg"
            />
            <Input
              name="tagline"
              title="My Tag Line"
              onChange={this.onChange}
              placeholder="Always the joker, never the joke..."
            />
            <Input
              name="genre"
              title="genre"
              onChange={this.onChange}
              placeholder="eg. Observational or Pun / One Liner"
              type="select"
              selectOptions={[
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
            <Button text="Continue" onClick={this.moveForward} color="grey" />
          </>
        )}

        {this.state.stage === 2 && (
          <>
            <Input
              name="faveGig"
              title="My Favourite Gig?"
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

            <Button text="Continue" onClick={this.moveForward} color="grey" />
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

            <Button text="Continue" onClick={this.moveForward} color="grey" />
          </>
        )}

        {this.state.stage === 4 && (
          <>
            <h1>Almost There...</h1>

            <Button text="Submit" onClick={this.onSubmit} color="grey" />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signUp.loading,
  error: state.signUp.error
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(signUpPageLoading()),
  pageLoaded: () => dispatch(signUpPageLoaded()),
  pageFailed: () => dispatch(signUpPageFailed()),
  updateStateAuthenticatedUID: id => dispatch(saveAuthenticatedUID(id))
});

export default compose(
  withFirebase,
  //   WithGigs,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignUpPage);
