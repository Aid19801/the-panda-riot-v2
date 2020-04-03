import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NextSeo } from 'next-seo';
import withAnalytics from '../HOCs/with-ga';
import withAuth from '../HOCs/with-auth';
import {
  UserCard,
  UserInfoCard,
  Banner,
  NavBar,
  FunkyTitle,
  Comments,
  Spinner
} from '../components';
import '../lib/index.css';
import {
  actPageLoading,
  actPageLoaded,
  actPageFailed,
  fetchActProfile,
  gotActProfile,
  updateStateAppLoaded,
} from '../redux/actions';
import withPage from '../HOCs/with-page';
// import { analyticsPage } from '../lib/utils';

class UserProfilePage extends Component {
  async getInitialProps(ctx) {
    // console.log('foobar', ctx);
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

    const location = window.location.href;
    const uid = location.split('acts/')[1];
    this.props.updateStateFetchActProfile(uid);
    this.props.firebase.user(uid).on('value', snapshot => {
      let faveGig = '';
      let genre = '';
      let youtube = '';
      let twitter = '';
      let facebook = '';
      let youtubeChannelURL = '';
      let website = '';
      let actsComments = [];

      const user = snapshot.val();
      console.log('user is ', user);
      const {
        username,
        tagline,
        profilePicture,
        rating,
        includeInActRater,
        comments,
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

      user && user.comments && user.comments.length ? actsComments = user.comments : actsComments = [];

      let includeInActRaterStatus = includeInActRater || false;
      let persistRatingFromDb = rating !== 0 && rating ? rating : 0;

      this.setState({
        usersProfile: user,
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
        comments: actsComments,
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

  handleClick = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    // console.log('this props ', this.props);
    // console.log('this state ', this.state);

    const {
      profilePicture,
      username,
      usersProfile,
      tagline,
      faveGig,
      genre,
      rating,
      youtube,
      twitter,
      facebook,
      youtubeChannelURL,
      website,
      comments,
      showSpinner
    } = this.state;

    const { spinner, firebase } = this.props;

    if (spinner) {
      return <Spinner />
    }

    return (
      <>
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `My Comedy Profile On ThePandaRiot.com`,
            description:
              "Find new acts, see their sets, explore the most exciting act profiles from London's electric open mic comedy scene.",
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

        <div className="container">
          <div className="row margin-top">
            {showSpinner && <Spinner />}
            {!showSpinner && (
              <>
              <div className="col-sm-12 flex-center">
                <h1 className="act-name">{username}</h1>
              </div>
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

                <Comments
                  firebase={firebase}
                  comments={comments && comments.filter(each => each.pageId.includes('act')) || []}
                  refetchData={() => this.fetchUser()}
                />

              </>
            )
            }
          </div>
        </div>
      </>
    );
  }
}
// TO-DO tidy up spinner ^^

const mapStateToProps = state => ({
  actProfile: state.act.actProfile,
  spinner: state.appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(actPageLoading()),
  pageLoaded: obj => dispatch(actPageLoaded(obj)),
  pageFailed: () => dispatch(actPageFailed()),
  updateStateFetchActProfile: uid => dispatch(fetchActProfile(uid)),
  updateStateGotActProfile: actProfile => dispatch(gotActProfile(actProfile)),
  updateStateAppLoaded: () => dispatch(updateStateAppLoaded()),
});

export default compose(
  withPage,
  withAnalytics,
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UserProfilePage);
