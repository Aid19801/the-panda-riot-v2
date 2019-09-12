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

// 1. load GIGS and FILTERS into local state
// 2.
// 3.

class GigsPage extends Component {
  constructor() {
    super();
    this.state = {
      gigs: [],
      filters: [],
      loading: false,
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

  async componentDidMount() {
    if (this.props.gigs) {
      this.setState({ gigs: this.props.gigs });
    }
    if (this.props.filters) {
      this.setState({ filters: this.props.filters });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.filters !== this.state.filters) {
      this.setState({ filters: nextProps.filters }, () =>
        this.updateGigsBasedOnUpdatedFilters()
      );
    }
  };

  updateGigsBasedOnUpdatedFilters = () => {
    const activeFilters = this.state.filters.filter(
      each => each.active !== false
    );
    console.log('active Filters are ', activeFilters);
    this.setState({ loading: true })

    activeFilters.map(each => {
      if (each.name === 'Mon') {
        let res = this.state.gigs.filter(each => each.nights.includes('Mon'));
        this.setState({ gigs: res });
      }
      if (each.name === 'Tue') {
        let res = this.state.gigs.filter(each => each.nights.includes('Tue'));
        this.setState({ gigs: res });
      }
      if (each.name === 'Wed') {
        let res = this.state.gigs.filter(each => each.nights.includes('Wed'));
        this.setState({ gigs: res });
      }
      if (each.name === 'Thu') {
        console.log('filtering thursday...');
        let res = this.state.gigs.filter(each => each.nights.includes('Thu'));
        console.log('res for filtering thursday is ', res);
        this.setState({ gigs: res });
      }
      if (each.name === 'Fri') {
        let res = this.state.gigs.filter(each => each.nights.includes('Fri'));
        this.setState({ gigs: res });
      }
      if (each.name === 'Sat') {
        let res = this.state.gigs.filter(each => each.nights.includes('Sat'));
        this.setState({ gigs: res });
      }
      if (each.name === 'Sun') {
        let res = this.state.gigs.filter(each => each.nights.includes('Sun'));
        this.setState({ gigs: res });
      }
      if (each.name === 'Bringers') {
        let res = this.state.gigs.filter(each => each.bringer === true);
        this.setState({ gigs: res });
      }
      if (each.name === 'Non-Bringers') {
        let res = this.state.gigs.filter(each => each.bringer !== true);
        this.setState({ gigs: res });
      }
    });
    this.setState({ loading: false })
  };

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
              {this.state.gigs &&
                this.state.gigs.map((each, i) => {
                  return <li key={i}>{each.name}</li>;
                })}
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
  updateGigsWithFilter: arr => dispatch(gotGigsFromGist(arr))
});

export default compose(
  //   withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GigsPage);
