import * as actionTypes from '../constants/index.js';

const initialState = {
  loading: false,
  error: null,
  isMob: false
};

export const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_LOADING:
      console.log('reducer heard app loading')
      return {
        ...state,
        loading: true
      };

    case actionTypes.APP_LOADED:
      return {
        ...state,
        loading: false
      };

    case actionTypes.APP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
