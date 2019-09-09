import { combineReducers } from 'redux';
import { appStateReducer } from './app-state';
import signinPageReducer from './sigin-in';
import homePageReducer from './home';

const reducers = combineReducers({
    appState: appStateReducer,
    signIn: signinPageReducer,
    home: homePageReducer,
})

export default reducers;

