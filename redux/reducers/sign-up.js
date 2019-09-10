import * as actions from '../constants';

const initialState = {
  loading: false,
  progressBarStatus: false,
  error: null,
  authUser: ''
};

/* eslint-disable */
const signUpPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNUP_PAGE_LOADING:
      return {
        ...state,
        loading: true
      };
      break;

    case actions.SIGNUP_PAGE_LOADED:
      return {
        ...state,
        loading: false
      };
      break;

    case actions.SIGNUP_PAGE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
      break;

    default:
      return state;
  }
};

export default signUpPageReducer;
