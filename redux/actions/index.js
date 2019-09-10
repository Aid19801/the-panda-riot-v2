import * as actionTypes from '../constants';

export const startApp = () => {
  return { type: actionTypes.APP_LOADING };
};

// PAGE | Auth / Sign In
export const signInPageLoading = () => {
  return { type: actionTypes.SIGNIN_PAGE_LOADING };
};

export const signInPageLoaded = () => {
  return { type: actionTypes.SIGNIN_PAGE_LOADED };
};

export const signInPageFailed = () => {
  return { type: actionTypes.SIGNIN_PAGE_FAILED };
};

export const saveAuthenticatedUID = uid => ({ type: actionTypes.SAVE_UID, uid: uid });

// PAGE | Auth / Sign Up
export const signUpPageLoading = () => {
  return { type: actionTypes.SIGNUP_PAGE_LOADING };
};

export const signUpPageLoaded = () => {
  return { type: actionTypes.SIGNUP_PAGE_LOADED };
};

export const signUpPageFailed = () => {
  return { type: actionTypes.SIGNUP_PAGE_FAILED };
};


export const fetchGigsFromGist = () => {
  return { type: actionTypes.FETCH_GIGS_REQ }
}




// PAGE | Home

export const homePageLoading = () => {
  return { type: actionTypes.HOME_PAGE_LOADING };
};

export const homePageLoaded = () => {
  return { type: actionTypes.HOME_PAGE_LOADED };
};

export const homePageFailed = () => {
  return { type: actionTypes.HOME_PAGE_FAILED };
};
