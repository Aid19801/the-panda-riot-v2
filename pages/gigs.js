import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NextSeo } from 'next-seo';
import {
  gigsPageLoading,
  gigsPageLoaded,
  fetchGigsFromGist,
  gotGigsFromGist
  // getDevice
} from '../redux/actions';
import withAuth from '../HOCs/with-auth';
import withAnalytics from '../HOCs/with-ga';
import mockGigs from '../lib/mock-gigs.json';
import * as cache from '../lib/cache';

import '../lib/index.css';
import Filters from '../components/Filters';
import { InfoCard } from '../components/InfoCard';
import MapBox from '../components/MapBox';
import MoreInfoCard from '../components/MoreInfoCard';
import { NavBar, FunkyTitle, Banner } from '../components';
import WithResponsivityHOC from '../HOCs/with-responsivity';

// 1. load GIGS and FILTERS into local state
// 2. gigs: render whatever is in local state out

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
    if (process.env.NODE_ENV !== 'production') {
      reduxStore.dispatch(gotGigsFromGist(mockGigs.gigs));
      return {
        gigs: mockGigs.gigs
      };
    }

    try {
      const res = await fetch(
        `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
      );
      const json = await res.json();
      const rawUrl = json.files.gigs.raw_url;

      const req = await fetch(rawUrl);
      const reqJson = await req.json();

      sortedGigs = reqJson.gigs.sort((a, b) => {
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
    if (!this.props.gigs) {
      this.fetchGigs();
    }
    // analyticsPage('v2-gigs-page');
  }

  fetchGigs = async () => {
    if (process.env.NODE_ENV !== 'production') {
      return this.props.updateStateLoadInNewGigs(mockGigs.gigs);
    } else {
      try {
        const res = await fetch(
          `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
        );
        const json = await res.json();
        const rawUrl = json.files.gigs.raw_url;

        const req = await fetch(rawUrl);
        const reqJson = await req.json();

        sortedGigs = reqJson.gigs.sort((a, b) => {
          var textA = a.name;
          var textB = b.name;
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });

        cache.saveToCache('gigs', sortedGigs);
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

  render() {
    const { selectedGig } = this.props;
    return (
      <div id="page-container" className="page__gigspage">
        <NextSeo
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
        <NavBar firebase={this.props.firebase} />
        <Banner src="/static/location.jpg" />
        <div className="container">
          <div className="row full-width flex-center margin-top">
            <FunkyTitle text="Gigs" />
            <Filters results={this.props.gigs} />
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
                  <MoreInfoCard paneInfo={selectedGig} />
                </div>
              </>
            )}
          </div>

          <div className="row full-width">
            <div className="col-sm-12"></div>
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
  isMobile: state.responsive.isMobile
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(gigsPageLoading()),
  pageLoaded: () => dispatch(gigsPageLoaded()),
  fetchGigs: () => dispatch(fetchGigsFromGist()),
  updateStateLoadInNewGigs: arr => dispatch(gotGigsFromGist(arr))
  // updateStateGettingDevice: () => dispatch(getDevice()),
});

export default compose(
  withAnalytics,
  WithResponsivityHOC,
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GigsPage);
