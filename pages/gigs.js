import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  gigsPageLoading,
  gigsPageLoaded,
  fetchGigsFromGist,
  gotGigsFromGist
} from '../redux/actions';
import withAuth from '../HOCs/with-auth';
import mockGigs from '../lib/mock-gigs.json';
import * as cache from '../lib/cache';

import '../lib/index.css';
import Filters from '../components/Filters';
import MapBox from '../components/MapBox';

// 1. load GIGS and FILTERS into local state
// 2. gigs: render whatever is in local state out
// 3.

class GigsPage extends Component {
  constructor() {
    super();
    this.state = {
      gigs: [],
      filteredGigs: [],
      finalGigs: [],

      filters: [],
      loading: false
    };
  }
  static async getInitialProps({ reduxStore, req }) {
    let sortedGigs = [];
    // if we're in dev,  pass in the mocks
    if (process.env.NODE_ENV !== 'production') {
      reduxStore.dispatch(gotGigsFromGist(mockGigs.gigs));
      return { gigs: mockGigs.gigs };
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

      cache.saveToCache('gigs', sortedGigs);
      reduxStore.dispatch(gotGigsFromGist(sortedGigs));
    } catch (error) {
      console.log('getInitialProps err: ', error);
    }

    return {
      gigs: sortedGigs
    };
  }

  componentDidMount() {
    const cachedGigs = cache.getFromCache('gigs');
    if (!cachedGigs) {
      cache.saveToCache('gigs', this.props.gigs);
    }
    if (cachedGigs) {
      const checking = cache.getFromCache('gigs');
      console.log('checking: ', checking);
    }
  }

  render() {

    return (
      <div id="page-container" className="container">
        <h1>gigs</h1>

        {this.state.loading && <p>loading...</p>}

        <div className="row">
          <div className="col-sm-6">
            <Filters results={this.props.gigs} />
          </div>

          <div className="col-sm-6">
            <ul className="ul__gigs">
              {this.props.gigs.map((each, i) => (
                <li key={i}>{each.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gigs: state.gigs.data,
  filters: state.filters.filters
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(gigsPageLoading()),
  pageLoaded: () => dispatch(gigsPageLoaded()),
  fetchGigs: () => dispatch(fetchGigsFromGist()),
  updateStateLoadInNewGigs: arr => dispatch(gotGigsFromGist(arr))
});

export default compose(
  //   withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GigsPage);
