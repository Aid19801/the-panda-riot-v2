import * as actions from '../constants';

const initialState = {
  loading: false,
  acts: [],
  error: null
};

/* eslint-disable */
const actsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ACTS_PAGE_LOADING:
      return {
        ...state,
        loading: true
      };
      break;

    case actions.ACTS_PAGE_LOADED:
      return {
        ...state,
        loading: false
      };
      break;

    case actions.ACTS_PAGE_FAILED:
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

export default actsPageReducer;
