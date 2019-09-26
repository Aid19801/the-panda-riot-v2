import * as actions from '../constants';

const initialState = {
  loading: false,
  uid: null,
  actProfile: {},
  error: null
};

/* eslint-disable */
const actPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ACT_PAGE_LOADING:
      return {
        ...state,
        loading: true
      };
      break;

    case actions.ACT_PAGE_LOADED:
      return {
        ...state,
        loading: false
      };
      break;

    case actions.ACT_PAGE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };

      break;

    case actions.FETCH_ACT_PROFILE:
      return {
        ...state,
        loading: true,
        uid: action.uid
      };
      break;

    case actions.GOT_ACT_PROFILE:
      return {
        ...state,
        loading: false,
        actProfile: action.actProfile
      };
      break;

    default:
      return state;
  }
};

export default actPageReducer;
