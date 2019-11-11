import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NextSeo } from 'next-seo';
import {
  gigsPageLoading,
  gigsPageLoaded,
  fetchGigsFromGist,
  gotGigsFromGist,
  updateStateAppLoaded,
  updateStateAppLoading
  // getDevice
} from '../redux/actions';
import withAuth from '../HOCs/with-auth';
import withAnalytics from '../HOCs/with-ga';
import mockGigs from '../lib/mock-gigs.json';
import * as cache from '../lib/cache';

import Filters from '../components/Filters';
import { InfoCard } from '../components/InfoCard';
import MapBox from '../components/MapBox';
import MoreInfoCard from '../components/MoreInfoCard';
import { NavBar, FunkyTitle, Banner, HaveIPlayedHere, Spinner, Button } from '../components';
import WithResponsivityHOC from '../HOCs/with-responsivity';

// 1. load GIGS and FILTERS into local state
// 2. gigs: render whatever is in local state out

import withPage from '../HOCs/with-page';
import '../lib/index.css';
// import { analyticsPage } from '../lib/utils';

class GigsPage extends Component {
  constructor() {
    super();
    this.state = {
      gigs: [],
      filteredGigs: [],
      finalGigs: [],
      toggleMarker: false,
      loading: false
    };
  }
  static async getInitialProps({ reduxStore, req }) {
    let sortedGigs = [];
    // if we're in dev,  pass in the mocks
    // if (process.env.NODE_ENV !== 'production') {
    //   reduxStore.dispatch(gotGigsFromGist(mockGigs.gigs));
    //   return {
    //     gigs: mockGigs.gigs
    //   };
    // }

    try {
      const res = await fetch(
        `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
      );
      const json = await res.json();
      const rawUrl = json.files.gigs.raw_url;
      const req = await fetch(rawUrl);
      const reqJson = await req.json();
      // console.log('REQ JSON ===>> ', reqJson);
      sortedGigs = reqJson.sort((a, b) => {
        var textA = a.name;
        var textB = b.name;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      // cache.saveToCache('gigs', sortedGigs);
      reduxStore.dispatch(gotGigsFromGist(sortedGigs));
    } catch (error) {
      console.log('getInitialProps err: ', error);
    }

    return {
      gigs: sortedGigs
    };
  }

  async componentDidMount() {
    console.log('AT | 1 CDM');
    if (!this.props.gigs) {
      console.log('AT | 2 CDM no gigs so firing fetch gigs');
      this.fetchGigs();
    }
    this.props.updateStateAppLoaded();
  }

  fetchGigs = async () => {
    console.log('AT | 3 fetchGigs fired');
    if (process.env.NODE_ENV !== 'production') {
      console.log('AT | 4 firing updateStateLoadInNewGigs with mocks');
      return this.props.updateStateLoadInNewGigs(mockGigs.gigs);
    } else {
      try {
        console.log('AT | 5 getting from gist');
        const res = await fetch(
          `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
        );
        const json = await res.json();
        const rawUrl = json.files.gigs.raw_url;
        console.log('AT | 6 rawUrl ', rawUrl);
        const req = await fetch(rawUrl);
        const reqJson = await req.json();

        sortedGigs = reqJson.gigs.sort((a, b) => {
          var textA = a.name;
          var textB = b.name;
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });

        cache.saveToCache('gigs', sortedGigs);
        console.log('AT | 7 sortedGigs ', sortedGigs);
        return this.props.updateStateLoadInNewGigs(sortedGigs);
      } catch (error) {
        console.log('getInitialProps err: ', error);
      }
    }
  };

  componentWillReceiveProps = newProps => {
    if (newProps.filters !== this.props.filters) {
      this.scrollDownToMap();
    }
    if (newProps.selectedGig !== this.props.selectedGig) {
      this.scrollDownToInfoPane();
    }
  };

  scrollDownToMap = () => {
    const { isMobile } = this.props;
    if (isMobile && process.browser) {
      const map = document.querySelector('.map__container');
      return map.scrollIntoView(false);
    }
  };

  scrollDownToInfoPane = () => {
    const { isMobile } = this.props;
    if (isMobile && process.browser) {
      setTimeout(() => {
        const el = document.querySelector('.gigs__more-info-container');
        return el.scrollIntoView(false);
      }, 500);
    }
  };

  showAll = () => {
    this.props.updateStateAppLoading();
    window.location.reload();
  }

  render() {
    const { selectedGig, spinner } = this.props;

    if (spinner) {
      return <Spinner />
    }

    return (
      <div id="page-container" className="flex-center">
        <NextSeo
          title="The Panda Riot | GIGS"
          description="Find gigs using London's favourite Open Mic Comedy web-app"
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `The Panda Riot Gigs Map`,
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
          <div className="row margin-top">
            <Filters results={this.props.gigs} />
          </div>
          <div className="flex-center fade-in">
            <Button text="Show All" color="grey" onClick={this.showAll} />
          </div>

          {this.state.loading && <p>loading...</p>}

          <div className="row full-width">
            {!selectedGig && (
              <div className="col-sm-12 flex-center">
                <MapBox />
              </div>
            )}

            {selectedGig && (
              <>
                <div className="col-sm-6">
                  <MapBox />
                </div>
                <div className="col-sm-6 flex-col flex-center">
                  <InfoCard
                    paneInfo={selectedGig}
                    toggleMarker={selectedGig ? true : false}
                  />

                  <MoreInfoCard paneInfo={selectedGig} isGigs />
                  <HaveIPlayedHere gig={selectedGig} />
                </div>
              </>
            )}
          </div>

          <div className="row full-width">
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gigs: state.gigs.data,
  filters: state.filters.filters,
  selectedGig: state.gigs.selectedGig,
  isMobile: state.responsive.isMobile,
  spinner: state.appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(gigsPageLoading()),
  pageLoaded: () => dispatch(gigsPageLoaded()),
  fetchGigs: () => dispatch(fetchGigsFromGist()),
  updateStateLoadInNewGigs: arr => dispatch(gotGigsFromGist(arr)),
  updateStateAppLoading: () => dispatch(updateStateAppLoading()),
  updateStateAppLoaded: () => dispatch(updateStateAppLoaded()),
});

export default compose(
  withPage,
  withAnalytics,
  WithResponsivityHOC,
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GigsPage);
