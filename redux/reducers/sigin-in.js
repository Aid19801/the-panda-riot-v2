import * as actions from '../constants';

const initialState = {
  loading: false,
  progressBarStatus: false,
  error: null,
  uid: ''
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

    default:
      return state;
  }
};

export default signinPageReducer;
