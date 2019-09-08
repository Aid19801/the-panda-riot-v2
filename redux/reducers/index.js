import { combineReducers } from 'redux';
import { appStateReducer } from './app-state';
import signinPageReducer from './sigin-in';

const reducers = combineReducers({
    appState: appStateReducer,
    signIn: signinPageReducer,
})

export default reducers;

