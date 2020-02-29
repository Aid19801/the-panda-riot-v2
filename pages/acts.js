import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import {
  actsPageLoading,
  actsPageLoaded,
  updateStateAppLoaded,
  updateStateAppLoading
} from '../redux/actions';
import withAuth from '../HOCs/with-auth';
import withAnalytics from '../HOCs/with-ga';
import { tooSoon } from '../lib/utils';
import { ProfilePic, Spinner } from '../components';
import ClapIcon from '../components/Icons/clap-icon';
import DownArrow from '../components/Icons/down-arrow';
import WithResponsivityHOC from '../HOCs/with-responsivity';
import withProgressBar from '../HOCs/with-progress';
import { Fade } from 'react-reveal';
import '../lib/index.css';
class ActsPage extends Component {
  constructor() {
    super();
    this.state = {
      acts: [],
      showModal: false,
      downVoteSwitchedOn: false
    };
  }

  renderActs = () => {
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      const filteredOutNonVotingUsers = usersList.filter(
        each => each.includeInActRater
      );
      let sortedActs = filteredOutNonVotingUsers
        .sort((a, b) => a.rating - b.rating)
        .reverse();
      this.setState({ acts: sortedActs });
    });
  };

  // eg. voteAct('up', actObject)
  voteAct = (upOrDownString, actObject) => {
    // console.log('act obj coming through ', actObject);
    let chosenUser = {};
    let isTooSoon = tooSoon();
    // if it was longer than 10 seconds
    if (!isTooSoon) {
      // 1. GET THE ACT YOUVE CHOSEN TO UPVOTE
      this.props.firebase.user(actObject.uid).on('value', snapshot => {
        chosenUser = snapshot.val();
      });

      // set their record to be the same but with
      // rating incremented by +1

      let un = chosenUser && chosenUser.username ? chosenUser.username : '';
      let em = chosenUser && chosenUser.email ? chosenUser.email : '';
      let tl = chosenUser && chosenUser.tagline ? chosenUser.tagline : 'I dont have a tagline!';
      let pp = chosenUser && chosenUser.profilePicture ? chosenUser.profilePicture : '';
      let rating = chosenUser && chosenUser.rating ? chosenUser.rating : 0;
      let yt = chosenUser && chosenUser.youtube ? chosenUser.youtube : '';
      let att = chosenUser && chosenUser.attended ? chosenUser.attended : [];
      let fg = chosenUser && chosenUser.faveGig ? chosenUser.faveGig : '';
      let gen = chosenUser && chosenUser.genre ? chosenUser.genre : '';
      let ws = chosenUser && chosenUser.website ? chosenUser.website : '';
      let tw = chosenUser && chosenUser.twitter ? chosenUser.twitter : '';
      let fb = chosenUser && chosenUser.facebook ? chosenUser.facebook : '';
      let ytCh = chosenUser && chosenUser.youtubeChannelURL ? chosenUser.youtubeChannelURL : '';

      // 2. SET THE ACT WITH ITS NEW RATING IN DB
      this.props.firebase.user(actObject.uid).set({
        username: un,
        email: em,
        tagline: tl,
        profilePicture: pp,
        includeInActRater: true,
        attended: att,
        faveGig: fg,
        youtube: yt,
        genre: gen,
        website: ws,
        twitter: tw,
        facebook: fb,
        youtubeChannelURL: ytCh,
        rating: upOrDownString === 'up' ? rating + 1 : rating - 1
      });
      debugger;

      // 3. SAVE LOCALSTORAGE TO STOP PERSISTENT VOTING
      localStorage.setItem('timevoted', Date.now());
    } else {
      return this.setState({ showModal: true });
    }
  };

  updateActs = () => {
    return;
  };

  componentWillMount() {
    this.props.showProgressBar(true);
    this.renderActs();
    this.props.pageLoading();
  }

  componentDidMount() {
    this.props.pageLoaded();
    setTimeout(() => {
      this.props.showProgressBar(false);
    }, 300);
    this.props.updateStateAppLoaded();
  }

  processTagline = str => {
    let res = '';
    if (str.length > 45) {
      res = str.slice(0, 45) + '...';
    } else {
      res = str;
    }
    return res;
  };

  updateStateLoading = () => this.props.updateStateAppLoading();

  render() {
    const { downVoteSwitchedOn } = this.state;
    const { spinner } = this.props;

    if (spinner) {
      return <Spinner />
    }

    return (
      <>
        <NextSeo
          title="The Panda Riot | ACTS"
          description="Find acts and watch their sets on London's favourite Open Mic Comedy web-app"
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `The Panda Riot Acts Page`,
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
      
      <div className="container">
          <div className="row flex-center margin-top">
            
            <div className="col-sm-10 flex-center flex-col margin-top">
              {this.state.acts.map((each, i) => {
                // console.log('each is ', each.username);
                return (
                  <>
                    <Fade>
                      <div
                        key={i}
                        className="each-act-container"
<<<<<<< Updated upstream
=======
                        onClick={() => this.bounceToActsProfile(each)}
>>>>>>> Stashed changes
                      >
                        <div className="each-act-row">
                          <div className="each-act-rating-container">
                            <div
                              className="up-svg-container"
                              onClick={() => this.voteAct('up', each)}
                            >
                              <ClapIcon />
                            </div>
<<<<<<< Updated upstream

                            <h2 className="each-act-rating">{each.rating}</h2>

=======

                            <h2 className="each-act-rating">{each.rating}</h2>

>>>>>>> Stashed changes
                            {downVoteSwitchedOn && (
                              <div
                                className="down-svg-container"
                                onClick={() => this.voteAct('down', each)}
                              >
                                <DownArrow />
                              </div>
                            )}
                          </div>

                          <div
                            onClick={() => this.updateStateLoading()}
                          >
                            <Link href={`/acts/${each.uid}`}>
                              <a>
                                <ProfilePic srcProp={each.profilePicture} />

                                <div className="each-act-name">
                                  <h4>{each.username}</h4>
                                  <p>{this.processTagline(each.tagline)}</p>
                                </div>
                              </a>
                            </Link>
                          </div>


                        </div>
                      </div>

                    </Fade>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.acts.loading,
  spinner: state.appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(actsPageLoading()),
  pageLoaded: () => dispatch(actsPageLoaded()),
  updateStateAppLoaded: () => dispatch(updateStateAppLoaded()),
  updateStateAppLoading: () => dispatch(updateStateAppLoading()),
});

export default compose(
  withPage,
  withAnalytics,
  WithResponsivityHOC,
  withAuth,
  withProgressBar,
  // withFunding,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ActsPage);
