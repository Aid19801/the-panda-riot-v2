import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';
import withAuth from '../HOCs/with-auth';
import { getFromCache, saveToCache } from '../lib/cache';
import {
  Input,
  Banner,
  NavBar,
  FunkyTitle,
  ProfilePic,
  Button
} from '../components';

import '../lib/index.css';
import {
  mePageLoading,
  mePageLoaded,
  mePageFailed,
  fetchActProfile,
  gotActProfile
} from '../redux/actions';

class MePage extends Component {
  //   async getInitialProps(ctx) {
  //     console.log('foobar', ctx);
  //     return {
  //       foo: 'bar'
  //     };
  //   }

  constructor() {
    super();
    this.state = {
      uid: '',
      username: '',
      tagline: '',
      profilePicture: '',
      includeInActRater: false,
      email: '',
      rating: null,
      faveGig: '',
      genre: '',
      youtube: '',
      twitter: '',
      facebook: '',
      youtubeChannelURL: '',
      website: '',
      showSpinner: true
    };
  }

  componentWillMount() {
    this.setState({ showSpinner: true });
    // this.props.pageLoading();

    if (process.browser) {
      this.fetchUser();
    }
  }

  fetchUser = () => {
    // http://localhost:3000/user?id=seVFOFwaXJh8z20Mx6vdmut7SuI2
    // 0D8ZSflLohc9LWiQgJZs6zT65vg1
    // seVFOFwaXJh8z20Mx6vdmut7SuI2
    // 6Rk5ZlGX04TTvQEGy0JuVdXwCgv2
    // const myUid = cache.getFromCache('uid');

    // const location = window.location.href;
    // const uid = location.split('acts/')[1];
    const uid = getFromCache('uid');
    this.setState({ uid });
    this.props.updateStateFetchActProfile(uid);
    this.props.firebase.user(uid).on('value', snapshot => {
      // TO-DO just take this all from cache! Why use Firebase API
      // again!?
      let faveGig = '';
      let em = '';
      let genre = '';
      let youtube = '';
      let twitter = '';
      let facebook = '';
      let youtubeChannelURL = '';
      let website = '';

      const user = snapshot.val();
      console.log('user is ', user);
      const {
        email,
        username,
        tagline,
        profilePicture,
        rating,
        includeInActRater
      } = user;

      user && !user.email ? (em = 'unknown@dunno.com') : (em = user.email);
      user && !user.faveGig ? (faveGig = 'n/a') : (faveGig = user.faveGig);
      user && !user.genre ? (genre = 'unknown') : (genre = user.genre);
      user && !user.youtube ? (youtube = 'unknown') : (youtube = user.youtube);
      user && !user.twitter ? (twitter = 'unknown') : (twitter = user.twitter);
      user && !user.facebook
        ? (facebook = 'unknown')
        : (facebook = user.facebook);
      user && !user.youtubeChannelURL
        ? (youtubeChannelURL = 'unknown')
        : (youtubeChannelURL = user.youtubeChannelURL);
      user && !user.website ? (website = 'unknown') : (website = user.website);

      let includeInActRaterStatus = includeInActRater || false;
      let persistRatingFromDb = rating !== 0 && rating ? rating : 0;

      this.setState({
        email: em,
        username,
        tagline,
        profilePicture,
        includeInActRater: includeInActRaterStatus,
        rating: persistRatingFromDb,
        faveGig,
        genre,
        youtube,
        twitter,
        facebook,
        youtubeChannelURL,
        website,
        showSpinner: false
      });

      // TO-DO write a validator that always converts info into one, consistent
      // shaped object.
    });
  };

  componentDidMount() {
    this.props.pageLoaded();
  }

  onSubmit = event => {
    const {
        uid,
      email,
      tagline,
      profilePicture,
      username,
      includeInActRater,
      faveGig,
      genre,
      youtube,
      twitter,
      facebook,
      youtubeChannelURL,
      website
    } = this.state;

    this.props.firebase.user(uid).set({
      username,
      email,
      tagline,
      profilePicture,
      includeInActRater,
      rating: this.state.rating,

      faveGig,
      genre,
      youtube,
      twitter,
      facebook,
      youtubeChannelURL,
      website
    });

    event.preventDefault();

    const objectForCache = {
        username,
        email,
        tagline,
        profilePicture,
        faveGig,
        genre,
        youtube,
        twitter,
        facebook,
        youtubeChannelURL,
        website
    }

    saveToCache('user-profile-object', objectForCache);
    saveToCache('userProfile', 'true');
    this.setState({ showSpinner: false });
    Router.push(`/acts/${uid}`)
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log('this props ', this.props);
    // console.log('this state ', this.state);

    const {
      profilePicture,
      username,
      tagline,
      faveGig,
      genre,
      rating,
      youtube,
      twitter,
      facebook,
      email,
      youtubeChannelURL,
      website,
      showSpinner
    } = this.state;

    return (
      <div id="page-container" className="page__actpage border-on flex-center">
        <NavBar firebase={this.props.firebase} />
        <Banner src="/static/audience.jpg" />

        <div className="container">
          <div className="row margin-top flex-center">
            {showSpinner && <h1>Loading...</h1>}
            {!showSpinner && <FunkyTitle text="My Profile" />}

            <div className="col-sm-10 flex-center">
              <ProfilePic srcProp={profilePicture} />
            </div>

            <div className="col-sm-10 flex-center">
              <Input
                title="email"
                name="email"
                placeholder={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-10 flex-center">
              <Input
                title="username"
                name="username"
                placeholder={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-10 flex-center">
              <Input
                title="tagline"
                name="tagline"
                placeholder={tagline}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-10 flex-center">
              <Input
                type="select"
                selectOptions={[
                  genre,
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
                title="type of comedian"
                name="genre"
                onChange={this.handleChange}
              />
            </div>

            <div className="col-sm-10 flex-center">
              <Input
                title="favourite gig"
                name="faveGig"
                placeholder={faveGig}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-10 flex-center">
              <Input
                title="My YouTube Video URL"
                name="youtube"
                placeholder={youtube}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-10 flex-center">
              <Input
                title="My Twitter"
                name="twitter"
                placeholder={twitter}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-10 flex-center">
              <Input
                title="My Facebook Page"
                name="facebook"
                placeholder={facebook}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-10 flex-center">
              <Input
                title="My YouTube Channel"
                name="youtubeChannelURL"
                placeholder={youtubeChannelURL}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-10 flex-center">
              <Input
                title="My Website"
                name="website"
                placeholder={website}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-sm-12 flex-center margin-top">
              <Button text="save" color="grey" onClick={this.onSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// TO-DO tidy up spinner ^^

const mapStateToProps = state => ({
  actProfile: state.act.actProfile
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(mePageLoading()),
  pageLoaded: obj => dispatch(mePageLoaded(obj)),
  pageFailed: () => dispatch(mePageFailed()),
  updateStateFetchActProfile: uid => dispatch(fetchActProfile(uid)),
  updateStateGotActProfile: actProfile => dispatch(gotActProfile(actProfile))
});

export default compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MePage);
