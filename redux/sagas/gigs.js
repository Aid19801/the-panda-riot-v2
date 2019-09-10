import { put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import * as actionTypes from '../constants';

export function* watcherGigsSaga() {
  console.log('watcherGigsSaga fired');
  yield takeLatest(actionTypes.FETCH_GIGS_REQ, workerGigsSaga);
}

export function* workerGigsSaga(actionObj) {
  console.log('workerGigsSaga fired');
  console.log('action obj is ', actionObj);

  let rawUrl = '';
  let retrievedGigs;
  let error = null;
  console.log('gist env var', process.env.REACT_APP_GIG_GIST);
  
  // go to gist
  yield fetch(`https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`)
    .then(res => res.json())
    .then(json => {
        console.log('json is back: ', json);
      return (rawUrl = json.files.gigs.raw_url);
    })
    .catch(err => (error = err));

  // get dirty raw url for all the gigs
  yield fetch(rawUrl)
    .then(res => res.json())
    .then(json => {
      return (retrievedGigs = json.gigs.sort((a, b) => {
        var textA = a.name;
        var textB = b.name;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }));
    })
    .catch(err => console.log('err ', err));

  retrievedGigs && retrievedGigs.length !== 0
    ? yield put({ type: actions.FETCH_GIGS_RESP, data: retrievedGigs })
    : yield put({ type: actions.FETCH_GIGS_RESP, data: error });

}
