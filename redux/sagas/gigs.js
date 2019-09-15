import { put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import * as actionTypes from '../constants';
import * as cache from '../../lib/cache';
import mockGigs from '../../lib/mock-gigs.json';

export function* watcherGigsSaga() {
  console.log('BOOM! saga fired!');
  yield takeLatest(actionTypes.FILTERS_CHANGED, workerGigsSaga);
}

export function* workerGigsSaga({ filters }) {
  // console.log('BAP! filtering down...', filters);
  let onlyActiveFilters = filters.filter(each => each.active !== false);
  const cachedGigs = cache.getFromCache('gigs');
  // console.log('cached Gigs yo ', cachedGigs);

  let gigs = [];
  let rawUrl = '';
  let error = null;

  if (cachedGigs) {
    gigs = JSON.parse(localStorage.getItem('gigs'));
  }

  if (!cachedGigs) {
    // go to gist
    yield fetch(`https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`)
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
        return (gigs = json.gigs);
      })
      .catch(err => console.log('err ', err));

  }

  let activeFilterTwo = {};
  let activeFilterThree = {};

  // first filter
  let activeFilterOne = filters.filter(each => each.active === true)[0].name;

  // if second filter exists, declare it as activeFilterTwo
  if (onlyActiveFilters && onlyActiveFilters.length > 1) {
    console.log('if activeFilters > 1');
    activeFilterTwo = filters.filter(each => each.active === true)[1].name;
  }

  // if THIRD filter exists, declare it as activeFilterThree
  if (onlyActiveFilters && onlyActiveFilters.length > 2) {
    console.log('if activeFilters > 2');
    activeFilterThree = filters.filter(each => each.active === true[2]).name;
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

  // filter three
  if (activeFilterThree === 'Bringers') {
    console.log('active filter three ', activeFilterThree);
    updatedGigs = updatedGigs.filter(each => each.bringer === true);
    console.log('active filter three GIGS ', updatedGigs);
  }

  if (activeFilterThree === 'Non-bringers') {
    updatedGigs = updatedGigs.filter(each => each.bringer !== true);
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
    updatedGigs = updatedGigs.filter(each =>
      each.nights.includes(activeFilterThree)
    );
  }

  if (
    activeFilterOne === 'All' ||
    activeFilterTwo === 'All' ||
    activeFilterThree === 'All'
  ) {
    // console.log('re-setting to show ALL gigs')
    updatedGigs = gigs;
  }

  yield put({ type: actionTypes.GIGS_FILTERED, data: updatedGigs });
}
