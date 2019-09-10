import * as actions from '../constants';

const initialState = {
  loading: false,
  data: null,
};

/* eslint-disable */
const gigsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_GIGS_REQ:
      return {
        ...state,
        loading: true
      };
      break;

    case actions.FETCH_GIGS_RESP:
      return {
        ...state,
        loading: false,
        data: action.data
      };
      break;

    default:
      return state;
  }
};

export default gigsReducer;
