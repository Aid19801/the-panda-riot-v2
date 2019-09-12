import * as actions from '../constants';
import { filters as initialStateFilters } from '../../components/Filters/filters';

const initialState = {
  loading: false,
  filters: initialStateFilters,
};

/* eslint-disable */
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_FILTERS:
            console.log('reducer heard LOAD_FILTERS ', action);
      return {
        ...state,
        loading: true
      };
      break;

    case actions.LOADED_FILTERS:
      console.log('reducer heard LOADED_FILTERS ', action);
      return {
        ...state,
        loading: false,
      };
      break;

    case actions.FILTERS_CHANGED:
      console.log('reducer heard FILTERS_CHANGED', action);
      return {
        ...state,
        filters: action.filters,
      };
      break;

    default:
      return state;
  }
};

export default filtersReducer;
