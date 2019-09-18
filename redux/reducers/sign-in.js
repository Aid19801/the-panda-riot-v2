import * as actions from '../constants';

const initialState = {
  loading: false,
  progressBarStatus: false,
  error: null,
  uid: '',
  isAdmin: false,
  isSignedIn: false
};

/* eslint-disable */
const signinPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNIN_PAGE_LOADING:
      return {
        ...state,
        loading: true
      };
      break;

    case actions.SIGNIN_PAGE_LOADED:
      return {
        ...state,
        loading: false
      };
      break;

    case actions.SIGNIN_PAGE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
      break;

    case actions.SAVE_UID:
      return {
        ...state,
        uid: action.uid
      };
      break;

    case actions.USER_SIGNED_IN:
      return {
        ...state,
        isSignedIn: true
      };
      break;

    case actions.USER_SIGNED_OUT:
      return {
        ...state,
        isSignedIn: false,
        isAdmin: false
      };
      break;

    case actions.IS_ADMIN:
      return {
        ...state,
        isAdmin: true
      };
      break;

    default:
      return state;
  }
};

export default signinPageReducer;
