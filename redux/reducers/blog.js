import * as actions from '../constants';

const initialState = {
  loading: false,
  content: null,
  error: null,
};

/* eslint-disable */
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BLOG_PAGE_LOADING:
      console.log('reducer heard BLOG_PAGE_LOADING...');
      return {
        ...state,
        loading: true
      };
      break;

    case actions.BLOG_PAGE_LOADED:
      console.log('reducer heard BLOG_PAGE_LOADED ', action);
      return {
        ...state,
        loading: false,
      };
      break;

    case actions.BLOG_PAGE_FAILED:
      console.log('reducer heard BLOG_PAGE_FAILED', action);
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      break;

    case actions.FETCH_BLOG_REQ:
      console.log('reducer heard FETCH_BLOG_REQ ', action);
      return {
        ...state,
        loading: true,
      };
      break;

    case actions.FETCH_BLOG_RES:
      console.log('reducer heard FETCH_BLOG_RES', action);
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

export default blogReducer;
