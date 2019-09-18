import * as actions from '../constants';

const initialState = {
  loading: false,
  stories: [],
  error: null,
};

/* eslint-disable */
const newsApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEWS_API_REQ:
      console.log('reducer heard NEWS_API_REQ...');
      return {
        ...state,
        loading: true
      };
      break;

    case actions.NEWS_API_SUCCESS:
      console.log('reducer heard NEWS_API_SUCCESS ');
      return {
        ...state,
        loading: false,
        stories: action.stories,
      };
      break;

    case actions.NEWS_API_FAIL:
      console.log('reducer heard NEWS_API_FAIL', action.error);
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      break;

    default:
      return state;
  }
};

export default newsApiReducer;
