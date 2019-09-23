import * as actions from '../constants';

const initialState = {
  loading: false,
  tpr_stories: [],
  error: null
};

/* eslint-disable */
const prismicApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PRISMIC_API_REQ:
      console.log('reducer heard PRISMIC_API_REQ...');
      return {
        ...state,
        loading: true
      };
      break;

    case actions.PRISMIC_API_SUCCESS:
      console.log('reducer heard PRISMIC_API_SUCCESS ', action);
      return {
        ...state,
        loading: false,
        tpr_stories: action.tpr_stories
      };
      break;

    case actions.PRISMIC_API_FAIL:
      console.log('reducer heard PRISMIC_API_FAIL', action.error);
      return {
        ...state,
        loading: false,
        error: action.error
      };
      break;
    

    case actions.FETCH_TPR_STORY:
      console.log('reducer heard FETCH_TPR_STORY');
      return {
        ...state,
        loading: true,
      };
      break;


    case actions.FETCH_TPR_SUCCESS:
      console.log('reducer heard FETCH_TPR_SUCCESS');
      return {
        ...state,
        loading: false,
        content: action.content,
      };
      break;


    case actions.FETCH_TPR_FAIL:
      console.log('reducer heard FETCH_TPR_FAIL', action);
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

export default prismicApiReducer;
