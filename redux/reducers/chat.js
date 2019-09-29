import * as actions from '../constants';

const initialState = {
  loading: false,
  error: null,
};

/* eslint-disable */
const chatPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHAT_PAGE_LOADING:
      return {
        ...state,
        loading: true
      };
      break;

    case actions.CHAT_PAGE_LOADED:
      return {
        ...state,
        loading: false
      };
      break;

    case actions.CHAT_PAGE_FAILED:
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

export default chatPageReducer;
