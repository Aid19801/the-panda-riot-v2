import * as actions from '../constants';

const initialState = {
  loading: false,
  content: null,
  error: null,
};

/* eslint-disable */
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEWS_PAGE_LOADING:
      console.log('reducer heard NEWS_PAGE_LOADING...');
      return {
        ...state,
        loading: true
      };
      break;

    case actions.NEWS_PAGE_LOADED:
      console.log('reducer heard NEWS_PAGE_LOADED ', action);
      return {
        ...state,
        loading: false,
      };
      break;

    case actions.NEWS_PAGE_FAILED:
      console.log('reducer heard NEWS_PAGE_FAILED', action);
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      break;

    case actions.FETCH_NEWS_REQ:
      console.log('reducer heard FETCH_NEWS_REQ ', action);
      return {
        ...state,
        loading: true,
      };
      break;

    case actions.FETCH_NEWS_RES:
      console.log('reducer heard FETCH_NEWS_RES', action);
      return {
        ...state,
        loading: false,
        content: action.data
      };
      break;

    default:
      return state;
  }
};

export default newsReducer;
