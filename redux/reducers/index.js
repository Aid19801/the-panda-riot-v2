import { combineReducers } from 'redux';
import { appStateReducer } from './app-state';
import signinPageReducer from './sign-in';
import signUpPageReducer from './sign-up';
import homePageReducer from './home';
import gigsReducer from './gigs';
import newsReducer from './news';

const reducers = combineReducers({
    appState: appStateReducer,
    signIn: signinPageReducer,
    signUp: signUpPageReducer,
    home: homePageReducer,
    gigs: gigsReducer,
    news: newsReducer,
})

export default reducers;

