import * as actions from '../constants';

const initialState = {
  isMobile: false,
  loading: false,
};

/* eslint-disable */
const responsiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DEVICE:
      return {
        ...state,
        loading: true
      };
      break;

    case actions.GOT_DEVICE:
      return {
        ...state,
        loading: false,
        isMobile: action.isMobile,
      };
      break;

    default:
      return state;
  }
};

export default responsiveReducer;
