import { all } from 'redux-saga/effects';
import { watcherAppStateSaga } from './app-state';
import { watcherGigsSaga, watcherGigsTonightSaga } from './gigs';
import { watcherFetchNews } from './news-api';
import { watcherAddPeopleToGigs } from './add-people-to-gigs';

function* rootSaga() {
    yield all([
        watcherAppStateSaga(),
        watcherFetchNews(),
        watcherGigsSaga(),
        watcherGigsTonightSaga(),
        watcherAddPeopleToGigs(),
    ])
}

export default rootSaga;