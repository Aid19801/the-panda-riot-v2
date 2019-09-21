import { combineReducers } from 'redux';
import { appStateReducer } from './app-state';
import signinPageReducer from './sign-in';
import signUpPageReducer from './sign-up';
import homePageReducer from './home';
import gigsReducer from './gigs';
import newsReducer from './news';
import newsApiReducer from './news-api';
import filtersReducer from './filters';
import prismicApiReducer from './prismic-api';

const reducers = combineReducers({
    appState: appStateReducer,
    signIn: signinPageReducer,
    signUp: signUpPageReducer,
    home: homePageReducer,
    gigs: gigsReducer,// all gigs live here.
    filters: filtersReducer, // filteredGigs live here.
    news: newsReducer,
    newsApi: newsApiReducer,
    prismic: prismicApiReducer,
})

export default reducers;

