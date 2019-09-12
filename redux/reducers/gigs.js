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
      console.log('reducer heard FETCH GIGS RESP ', action);
      return {
        ...state,
        loading: false,
        data: action.data
      };
      break;

    case actions.GIGS_PAGE_LOADING:
      console.log('reducer heard GIGS_PAGE_LOADED', action);
      return {
        ...state,
        loading: true
      };
      break;

    case actions.GIGS_PAGE_LOADED:
      console.log('reducer heard GIGS_PAGE_LOADED', action);
      return {
        ...state,
        loading: false
      };
      break;


    case actions.GIGS_PAGE_FAILED:
        console.log('reducer heard GIGS_PAGE_FAILED', action);
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

export default gigsReducer;
