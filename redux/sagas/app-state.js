import { put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../constants';

export function* watcherAppStateSaga() {
    console.log('watcherAppStateSaga fired');
    yield(takeLatest(actionTypes.APP_LOADING, workerAppStateSaga));
}

export function* workerAppStateSaga() {
    console.log('workerAppStateSaga fired');
    yield put({ type: actionTypes.APP_LOADED })
}