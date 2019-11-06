import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';
import withAuth from '../HOCs/with-auth';
import withAnalytics from '../HOCs/with-ga';
import { getFromCache, saveToCache } from '../lib/cache';
import {
  Input,
  Banner,
  NavBar,
  FunkyTitle,
  ProfilePic,
  Button,
  Spinner
} from '../components';

import '../lib/index.css';
import {
  mePageLoading,
  mePageLoaded,
  mePageFailed,
  fetchActProfile,
  gotActProfile,
  updateStateAppLoaded
} from '../redux/actions';
// import { analyticsEvent } from '../lib/utils';

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
      let tl = '';
      let youtubeChannelURL = '';
      let website = '';
      let pp = '';

      const user = snapshot.val();
      // console.log('user is ', user);
      const {
        email,
        username,
        tagline,
        profilePicture,
        rating,
        includeInActRater
      } = user;

      user && !user.profilePicture
        ? (pp = '/static/no_prof_pic.png')
        : (pp = user.profilePicture);
      user && !user.email ? (em = 'unknown@dunno.com') : (em = user.email);
      user && !user.faveGig ? (faveGig = 'n/a') : (faveGig = user.faveGig);
      user && !user.genre ? (genre = 'unknown') : (genre = user.genre);

      user && !user.tagline ? (tl = 'i dont have a tagline!') : (tl = user.tagline);

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
        tagline: tl,
        profilePicture: pp,
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
    this.props.updateStateAppLoaded();
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
    };

    saveToCache('user-profile-object', objectForCache);
    saveToCache('userProfile', 'true');
    this.setState({ showSpinner: false });
    Router.push(`/acts/${uid}`);
  };

  handleChange = e => {
    // console.log('handleChange ', e.target);
    // analyticsEvent(`v2-me-${e.target.name}`);
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleEditProfilePicture = () => {
    this.setState({ isEditingProfilePicture: !this.state.isEditingProfilePicture });
  }

  render() {
    // console.log('this props ', this.props);
    // console.log('this state ', this.state);

    const {
      profilePicture,
      username,
      tagline,
      faveGig,
      genre,
      youtube,
      twitter,
      facebook,
      email,
      youtubeChannelURL,
      website,
      showSpinner,
      isEditingProfilePicture
    } = this.state;

    const { spinner } = this.props;

    if (spinner) {
      return <Spinner />
    }
    
    return (
      <div id="page-container" className="page__actpage flex-center">
        <NavBar firebase={this.props.firebase} />
        <Banner src="/static/audience.jpg" />

        <div className="container">
          <div className="row margin-top">
            {showSpinner && <Spinner />}
            {!showSpinner && (
              <>
                <FunkyTitle text="My Profile" />

                <div className="col-sm-12 flex-center flex-col">
                  <ProfilePic editable srcProp={profilePicture} handleEditProfilePicture={this.handleEditProfilePicture} />
                  {!profilePicture ||
                  profilePicture === '/static/no_prof_pic.png' ||
                  profilePicture === '' ||
                  profilePicture === 'n/a' ? (
                    <p style={{ marginBottom: 0, color: 'red' }}>
                      You need a profile picture!
                    </p>
                  ) : null}
                </div>

                {isEditingProfilePicture && (
                  <div className="col-sm-12 flex-center">
                    <Input
                      title="Profile Picture"
                      name="profilePicture"
                      placeholder="https://www.some-photo.com/123.jpg"
                      onChange={this.handleChange}
                      darkorange
                    />
                  </div>
                )}

                <div className="col-sm-12 flex-center">
                  <Input
                    title="email"
                    name="email"
                    value={email}
                    onChange={() => null}
                  />
                </div>
                <div className="col-sm-12 flex-center">
                  <Input
                    title="username"
                    name="username"
                    placeholder={username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-12 flex-center">
                  <Input
                    title="tagline"
                    name="tagline"
                    placeholder={tagline}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-12 flex-center">
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

                <div className="col-sm-12 flex-center flex-col">
                  <Input
                    title="favourite gig"
                    name="faveGig"
                    placeholder={faveGig}
                    onChange={this.handleChange}
                  />
                  {!faveGig || faveGig === '' || faveGig === 'n/a' ? (
                    <p style={{ marginBottom: 0, color: 'red' }}>
                      Please tell us your favourite gig!{' '}
                    </p>
                  ) : null}
                </div>
                <div className="col-sm-12 flex-center">
                  <Input
                    title="My YouTube Video URL"
                    name="youtube"
                    placeholder={youtube}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-12 flex-center">
                  <Input
                    title="My Twitter"
                    name="twitter"
                    placeholder={twitter}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-12 flex-center">
                  <Input
                    title="My Facebook Page"
                    name="facebook"
                    placeholder={facebook}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-12 flex-center">
                  <Input
                    title="My YouTube Channel"
                    name="youtubeChannelURL"
                    placeholder={youtubeChannelURL}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-12 flex-center">
                  <Input
                    title="My Website"
                    name="website"
                    placeholder={website}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="col-sm-12 flex-center margin-top">
                  <Button text="save" color="black" onClick={this.onSubmit} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
// TO-DO tidy up spinner ^^

const mapStateToProps = state => ({
  actProfile: state.act.actProfile,
  spinner: state.appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(mePageLoading()),
  pageLoaded: obj => dispatch(mePageLoaded(obj)),
  pageFailed: () => dispatch(mePageFailed()),
  updateStateFetchActProfile: uid => dispatch(fetchActProfile(uid)),
  updateStateAppLoaded: () => dispatch(updateStateAppLoaded()),
  updateStateGotActProfile: actProfile => dispatch(gotActProfile(actProfile))
});

export default compose(
  withAnalytics,
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MePage);
