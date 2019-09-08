import * as actionTypes from '../constants';

export const startApp = () => {
  return { type: actionTypes.APP_LOADING };
};

// PAGE | Sign in
export const signInPageLoading = () => {
  return { type: actionTypes.SIGNIN_PAGE_LOADING };
};

export const signInPageLoaded = () => {
  return { type: actionTypes.SIGNIN_PAGE_LOADED };
};

export const signInPageFailed = () => {
  return { type: actionTypes.SIGNIN_PAGE_FAILED };
};
