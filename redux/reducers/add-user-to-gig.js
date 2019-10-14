import * as actions from '../constants';

const initialState = {
  loading: false,
  user: null,
  uid: null,
  gig: null
};

/* eslint-disable */
const addUserToGigReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADDDING_USER_TO_GIG:
      return {
        ...state,
        loading: true,
        user: action.user,
        uid: action.uid,
        gig: action.gig,
      };
      break;

    case actions.ADDDING_USER_TO_GIG_REQ:
      return {
        ...state,
        user: action.user,
        uid: action.uid,
        gig: action.gig,
      };
      break;

    case actions.ADDDING_USER_TO_GIG_RES:
      return {
        ...state,
        loading: false,
      };
      break;

    default:
      return state;
  }
};

export default addUserToGigReducer;
