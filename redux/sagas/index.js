import { all } from 'redux-saga/effects';
import { watcherAppStateSaga } from './app-state';
import { watcherGigsSaga } from './gigs';

function* rootSaga() {
    yield all([
        watcherAppStateSaga(),
        // watcherGigsSaga(),
    ])
}

export default rootSaga;