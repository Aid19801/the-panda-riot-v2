import { combineReducers } from 'redux';
import { appStateReducer } from './app-state';
import signinPageReducer from './sign-in';
import actsPageReducer from './acts';
import actPageReducer from './act';
import chatPageReducer from './chat';
import signUpPageReducer from './sign-up';
import homePageReducer from './home';
import gigsReducer from './gigs';
import newsReducer from './news';
import newsApiReducer from './news-api';
import filtersReducer from './filters';
import prismicApiReducer from './prismic-api';
import responsiveReducer from './responsive';

const reducers = combineReducers({
    appState: appStateReducer,
    acts: actsPageReducer,
    act: actPageReducer,
    chat: chatPageReducer,
    signIn: signinPageReducer,
    signUp: signUpPageReducer,
    home: homePageReducer,
    gigs: gigsReducer,// all gigs live here.
    filters: filtersReducer, // filteredGigs live here.
    news: newsReducer,
    newsApi: newsApiReducer,
    prismic: prismicApiReducer,
    responsive: responsiveReducer,
})

export default reducers;

