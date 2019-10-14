import { put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import * as actionTypes from '../constants';
import mockGigs from '../../lib/mock-gigs.json';

const GitHub = require('github-base');

const github = new GitHub({
  token: process.env.REACT_APP_NEW_GIST_POST_TOKEN
});

export function* watcherAddPeopleToGigs() {
  yield takeLatest(actionTypes.ADDDING_USER_TO_GIG, workerAddPeopleToGigs);
}

function* workerAddPeopleToGigs({ user, uid, gig }) {
  // pull in all of the gigs
  let gigs = [];
  let rawUrl = '';

  if (process.env.NODE_ENV === 'production') {
  yield fetch(`https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`)
    .then(res => res.json())
    .then(json => {
      return (rawUrl = json.files.gigs.raw_url);
    })
    .catch(err => {
        error = err;
        console.log('error ', error);
    });
  // get ^ dirty raw url for all the gigs

  yield fetch(rawUrl)
    .then(res => res.json())
    .then(json => {
      return gigs = json;
    })
    .catch(err => console.log('err ', err));
    } else {
      return gigs = mockGigs;
    }

  // identify the gig that matches this gig
  const gigToEdit = gigs.filter(each => each.id === gig.id)[0];
  const allOtherGigs = gigs.filter(each => each.id !== gig.id);

  gigToEdit.attended.push({
    uid: uid,
    profilePicture: user.profilePicture,
    username: user.username
  });
  // ^^ push user into `attended` array

  allOtherGigs.push(gigToEdit);
  // ^^ push the gig back into all other gigs array

  allOtherGigs.sort((a, b) => a.id - b.id);
  // ^^ re-sort in order

  const options = {
    files: {
      gigs: {
        content: JSON.stringify(allOtherGigs)
      }
    }
  };

  if (process.env.NODE_ENV === 'production') {
    github
      .patch(`/gists/${process.env.REACT_APP_GIG_GIST}`, options)
      .then(res => {
        console.log('res ', res.body);
      })
      .catch(err => console.log(err));
  } else {
    console.log('dev env so havent updated.')
  }
}
