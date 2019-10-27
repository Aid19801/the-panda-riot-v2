import * as actionTypes from '../constants/index.js';

const initialState = {
  loading: false,
  error: null,
  isMob: false,
  spinner: false,
};

export const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_LOADING:
      return {
        ...state,
        loading: true
      };
      break;

    case actionTypes.APP_LOADED:
      return {
        ...state,
        loading: false
      };
      break;

    case actionTypes.APP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
      break;

    case actionTypes.SHOW_SPINNER:
      return {
        ...state,
        spinner: true
      };
      break;

    case actionTypes.HIDE_SPINNER:
      return {
        ...state,
        spinner: false
      };
      break;

    default:
      return state;
  }
};
