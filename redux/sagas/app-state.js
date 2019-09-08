import { put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../constants';

export function* watcherAppStateSaga() {
    console.log('watcher fired');
    yield(takeLatest(actionTypes.APP_LOADING, workerAppStateSaga));
}

export function* workerAppStateSaga() {
    console.log('worker fired');
    yield put({ type: actionTypes.APP_LOADED })
}