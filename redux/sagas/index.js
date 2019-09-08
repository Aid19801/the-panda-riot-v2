import { all } from 'redux-saga/effects';
import { watcherAppStateSaga } from './app-state';

function* rootSaga() {
    yield all([
        watcherAppStateSaga(),
    ])
}

export default rootSaga;