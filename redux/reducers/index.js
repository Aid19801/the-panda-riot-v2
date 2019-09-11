import { combineReducers } from 'redux';
import { appStateReducer } from './app-state';
import signinPageReducer from './sign-in';
import signUpPageReducer from './sign-up';
import homePageReducer from './home';
import gigsReducer from './gigs';
import blogReducer from './blog';

const reducers = combineReducers({
    appState: appStateReducer,
    signIn: signinPageReducer,
    signUp: signUpPageReducer,
    home: homePageReducer,
    gigs: gigsReducer,
    blog: blogReducer,
})

export default reducers;

