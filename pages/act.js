import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import withAuth from '../HOCs/with-auth';
import { UserCard, UserInfoCard } from '../components';
import '../lib/index.css';
import {
  actPageLoading,
  actPageLoaded,
  actPageFailed,
  fetchActProfile,
  gotActProfile
} from '../redux/actions';

class UserProfilePage extends Component {
  async getInitialProps(ctx) {
    console.log('foobar', ctx);
    return {
      foo: 'bar'
    };
  }

  constructor() {
    super();
    this.state = {
      advertsOn: false,
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
      website: ''
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

    const location = window.location.href;
    console.log('AT | location is: ', location);
    const uid = location.split('acts/')[1];
    console.log('AT | uid ', uid);
    // let uid = params.id;
    this.props.updateStateFetchActProfile(uid);
    this.props.firebase.user(uid).on('value', snapshot => {
      let faveGig = '';
      let genre = '';
      let youtube = '';
      let twitter = '';
      let facebook = '';
      let youtubeChannelURL = '';
      let website = '';

      const user = snapshot.val();
      const {
        username,
        tagline,
        profilePicture,
        rating,
        includeInActRater
      } = user;

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
        website
      });

      // TO-DO write a validator that always converts info into one, consistent
      // shaped object.
      
    });
  };

  componentDidMount() {
    this.props.pageLoaded();
  }

  handleClick = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    console.log('this props ', this.props);
    console.log('this state ', this.state);

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
      youtubeChannelURL,
      website
    } = this.state;

    return (
      <>
        <div className="container">
          <div className="row full-width margin-top">
            <div className="col-sm-6">
              <UserCard
                profilePicture={profilePicture}
                username={username}
                tagline={tagline}
              />
            </div>
            <div className="col-sm-6">
              <UserInfoCard
                faveGig={faveGig}
                genre={genre}
                rating={rating}
                youtube={youtube}
                twitter={twitter}
                facebook={facebook}
                youtubeChannelURL={youtubeChannelURL}
                website={website}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  actProfile: state.act.actProfile
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(actPageLoading()),
  pageLoaded: obj => dispatch(actPageLoaded(obj)),
  pageFailed: () => dispatch(actPageFailed()),
  updateStateFetchActProfile: uid => dispatch(fetchActProfile(uid)),
  updateStateGotActProfile: actProfile => dispatch(gotActProfile(actProfile))
});

export default compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UserProfilePage);
