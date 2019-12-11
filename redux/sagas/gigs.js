import { put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import * as actionTypes from '../constants';
import * as cache from '../../lib/cache';
import mockGigs from '../../lib/mock-gigs.json';
import { whatDayIsIt } from '../../lib/utils';

export function* watcherGigsSaga() {
  yield takeLatest(actionTypes.FILTERS_CHANGED, workerGigsSaga);
}

export function* watcherGigsTonightSaga() {
  yield takeLatest(actionTypes.FETCH_GIGS_TONIGHT, workerGigsTonightSaga);
}

// used on Homepage, to work out whats on tonight
export function* workerGigsTonightSaga(actionObj) {
  let gigs = [];
  let rawUrl = '';
  let error = null;

  // PROD | CHECK CACHE, GET GIST, ASSIGN TO `gigs`
  if (process.env.NODE_ENV === 'production') {
    let cachedGigs = null;
    if (process.browser) {
      cachedGigs = JSON.parse(cache.getFromCache('gigs'));
      if (cachedGigs) {
        gigs = cachedGigs;
      }
      if (!cachedGigs) {
        yield fetch(
          `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
        )
          .then(res => res.json())
          .then(json => {
            return (rawUrl = json.files.gigs.raw_url);
          })
          .catch(err => (error = err));

        // get dirty raw url for all the gigs
        yield fetch(rawUrl)
          .then(res => res.json())
          .then(json => {
            cache.saveToCache('gigs', json);
            return gigs = json;
          })
          .catch(err => console.log('err ', err));
      }
    }
  }
  // DEV | GET MOCKS, ASSIGN TO `gigs`
  if (process.env.NODE_ENV === 'development') {
    console.log('====== IN DEV NOT PROD =====');
    gigs = mockGigs;
  }

  // get what day it is
  const today = whatDayIsIt();

  // filter down to gigs that include that day
  let updatedGigs = gigs.filter(each => each.nights.includes(today));

  // update state
  yield put({ type: actionTypes.GIGS_TONIGHT_RESP, gigsTonight: updatedGigs });
}

export function* workerGigsSaga({ filters }) {
  let onlyActiveFilters = filters.filter(each => each.active !== false);
  const cachedGigs = cache.getFromCache('gigs');

  let gigs = [];
  let rawUrl = '';
  let error = null;

  if (process.env.NODE_ENV === 'production') {
    if (cachedGigs) {
      gigs = JSON.parse(localStorage.getItem('gigs'));
    }

    if (!cachedGigs) {
      // go to gist
      yield fetch(
        `https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`
      )
        .then(res => res.json())
        .then(json => {
          return (rawUrl = json.files.gigs.raw_url);
        })
        .catch(err => (error = err));

      // get dirty raw url for all the gigs
      yield fetch(rawUrl)
        .then(res => res.json())
        .then(json => {
          cache.saveToCache('gigs', json.gigs);
          return gigs = json;
        })
        .catch(err => console.log('err ', err));
    }
  }

  if (process.env.NODE_ENV === 'development') {
    gigs = mockGigs;
    // console.log('AT | gigs are ', gigs);
    // console.log('AT | mockGigs are ', mockGigs);
  }

  let activeFilterTwo = {};
  let activeFilterThree = {};

  // first filter
  let activeFilterOne = filters.filter(each => each.active === true)[0].name;

  // if second filter exists, declare it as activeFilterTwo
  if (onlyActiveFilters && onlyActiveFilters.length > 1) {
    console.log('if activeFilters > 1', onlyActiveFilters);
    activeFilterTwo = filters.filter(each => each.active === true)[1].name;
  }

  // if THIRD filter exists, declare it as activeFilterThree
  if (onlyActiveFilters && onlyActiveFilters.length > 2) {
    console.log('if activeFilters > 2', onlyActiveFilters);
    activeFilterThree = filters.filter(each => each.active === true[1]).name;
  }

  // create array to push results into
  let updatedGigs = [];

  // if the active filter one is Bringers, make results equal to that value
  if (activeFilterOne === 'Bringers') {
    updatedGigs = gigs.filter(each => each.bringer === true);
  }

  // if the active filter one is Non-bringers, make results equal to that value
  if (activeFilterOne === 'Non-bringers') {
    updatedGigs = gigs.filter(each => each.bringer !== true);
  }

  // if active filter one is a Day-of-week, filter it down to that...
  if (
    activeFilterOne === 'Mon' ||
    activeFilterOne === 'Tue' ||
    activeFilterOne === 'Wed' ||
    activeFilterOne === 'Thu' ||
    activeFilterOne === 'Fri' ||
    activeFilterOne === 'Sat' ||
    activeFilterOne === 'Sun'
  ) {
    updatedGigs = gigs.filter(each => each.nights.includes(activeFilterOne));
  }

  // filter two
  if (activeFilterTwo === 'Bringers') {
    console.log('active filter two ', activeFilterTwo);
    updatedGigs = updatedGigs.filter(each => each.bringer === true);
    console.log('active filter two GIGS ', updatedGigs);
  }

  if (activeFilterTwo === 'Non-bringers') {
    updatedGigs = updatedGigs.filter(each => each.bringer !== true);
  }

  // if active filter one is a Day-of-week, filter it down to that...
  if (
    activeFilterTwo === 'Mon' ||
    activeFilterTwo === 'Tue' ||
    activeFilterTwo === 'Wed' ||
    activeFilterTwo === 'Thu' ||
    activeFilterTwo === 'Fri' ||
    activeFilterTwo === 'Sat' ||
    activeFilterTwo === 'Sun'
  ) {
    updatedGigs = updatedGigs.filter(each =>
      each.nights.includes(activeFilterTwo)
    );
  }
  console.log('actuce 3: ', activeFilterTwo);
  // filter three
  if (activeFilterThree === 'Bringers') {
    console.log('active filter three ', activeFilterThree);
    updatedGigs = updatedGigs.filter(each => each.bringer === true);
    console.log('active filter three GIGS ', updatedGigs);
  }

  if (activeFilterThree === 'Non-bringers') {
    updatedGigs = updatedGigs.filter(each => each.bringer !== true);
    console.log('active filter three GIGS ', updatedGigs);
  }

  // if active filter one is a Day-of-week, filter it down to that...
  if (
    activeFilterThree === 'Mon' ||
    activeFilterThree === 'Tue' ||
    activeFilterThree === 'Wed' ||
    activeFilterThree === 'Thu' ||
    activeFilterThree === 'Fri' ||
    activeFilterThree === 'Sat' ||
    activeFilterThree === 'Sun'
  ) {
    console.log('active filter 3 is ', activeFilterThree);
    updatedGigs = updatedGigs.filter(each =>
      each.nights.includes(activeFilterThree)
    );
    console.log('active filter three GIGS ', updatedGigs);
  }

  if (
    activeFilterOne === 'All' ||
    activeFilterTwo === 'All' ||
    activeFilterThree === 'All'
  ) {
    console.log('re-setting to show ALL gigs');
    updatedGigs = gigs;
  }

  yield put({ type: actionTypes.GIGS_FILTERED, data: updatedGigs });
}
