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

export const saveAuthenticatedUID = uid => ({
  type: actionTypes.SAVE_UID,
  uid: uid
});

export const userAuthenticatedAsAdmin = () => {
  return {
    type: actionTypes.IS_ADMIN,
  }
}

export const userIsSignedIn = () => ({
  type: actionTypes.USER_SIGNED_IN,
});

export const userIsSignedOut = () => ({
  type: actionTypes.USER_SIGNED_OUT,
});

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

// GIGS, api and gigs map page
export const gigsPageLoading = () => {
  return { type: actionTypes.GIGS_PAGE_LOADING };
};

export const gigsPageLoaded = () => {
  return { type: actionTypes.GIGS_PAGE_LOADED };
};

export const gigsPageFailed = () => {
  return { type: actionTypes.GIGS_PAGE_LOADED };
};
// GIGS api
export const fetchGigsFromGist = () => {
  return { type: actionTypes.FETCH_GIGS_REQ };
};

export const gotGigsFromGist = gigs => {
  return { type: actionTypes.FETCH_GIGS_RESP, data: gigs };
};

export const fetchFilters = () => {
  return { type: actionTypes.LOAD_FILTERS };
};

export const filtersLoaded = () => {
  return { type: actionTypes.LOADED_FILTERS };
};
export const filtersChanged = arr => {
  return { type: actionTypes.FILTERS_CHANGED, filters: arr };
};

export const resetGigs = gigs => {
  return { type: actionTypes.RESET_GIGS, gigs };
};

export const userSelectedGig = obj => {
  return { type: actionTypes.SELECTED_GIG, selectedGig: obj };
};

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

// news api

export const newsContainerLoading = () => {
  return { type: actionTypes.NEWS_CONTAINER_LOADING }
}

export const newsContainerLoaded = () => {
  return { type: actionTypes.NEWS_CONTAINER_LOADED }
}

export const getAllNews = () => {
  return { type: actionTypes.NEWS_API_REQ };
};

export const newsApiFailed = (error) => {
  return { type: actionTypes.NEWS_API_FAIL, error };
};

export const newsApiSuccess = (res) => {
  return { type: actionTypes.NEWS_API_SUCCESS, stories: res };
};


// PAGE | Blog
export const newsPageLoading = () => {
  return { type: actionTypes.NEWS_PAGE_LOADING };
};

export const newsPageLoaded = () => {
  return { type: actionTypes.NEWS_PAGE_LOADED };
};

export const newsPageFailed = () => {
  return { type: actionTypes.NEWS_PAGE_FAILED };
};

export const fetchNewsPageReq = () => {
  return { type: actionTypes.FETCH_NEWS_REQ };
};

export const fetchNewsPageRes = content => {
  return { type: actionTypes.FETCH_NEWS_RES, content };
};
