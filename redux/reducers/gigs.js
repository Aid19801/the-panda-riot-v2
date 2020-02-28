import * as actions from '../constants';

const initialState = {
  loading: false,
  data: null,
  selectedGig: null
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
      console.log('reducer heard FETCH GIGS RESP ');
      return {
        ...state,
        loading: false,
        data: action.data
      };
      break;

    case actions.GIGS_PAGE_LOADING:
      console.log('reducer heard GIGS_PAGE_LOADED');
      return {
        ...state,
        loading: true
      };
      break;

    case actions.GIGS_PAGE_LOADED:
      console.log('reducer heard GIGS_PAGE_LOADED');
      return {
        ...state,
        loading: false
      };
      break;

    case actions.GIGS_FILTERED:
      console.log('reducer heard GIGS_FILTERED: ');
      return {
        ...state,
        data: action.data
      };
      break;

    case actions.SELECTED_GIG:
      console.log('reducer heard SELECTED_GIG: ');
      return {
        ...state,
        selectedGig: action.selectedGig
      };
      break;

      case actions.FETCH_GIGS_TONIGHT:
        console.log('heard FETCH GIGS TONIGHT');
        return {
          ...state,
          loading: true,
        }
        break;

      case actions.GIGS_TONIGHT_RESP:
          console.log('heard GIGS_TONIGHT_RESP');
          return {
            ...state,
            gigsTonight: action.gigsTonight,
            loading: false,
          }
          break;

    case actions.GIGS_PAGE_FAILED:
      console.log('reducer heard GIGS_PAGE_FAILED');
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

export default gigsReducer;
