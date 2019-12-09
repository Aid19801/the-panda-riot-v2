import * as actionTypes from '../constants';

export const startApp = () => {
  return { type: actionTypes.APP_LOADING };
};

export const getDevice = () => {
  return { type: actionTypes.GET_DEVICE };
};

export const gotDevice = res => {
  return { type: actionTypes.GOT_DEVICE, isMobile: res };
};

export const updateStateAppLoading = () => ({
  type: actionTypes.SHOW_SPINNER,
});

export const updateStateAppLoaded = () => ({
  type: actionTypes.HIDE_SPINNER,
})

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
    type: actionTypes.IS_ADMIN
  };
};

export const userIsSignedIn = () => ({
  type: actionTypes.USER_SIGNED_IN
});

export const userIsSignedOut = () => ({
  type: actionTypes.USER_SIGNED_OUT
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

// PAGE | Me / my account
export const mePageLoading = () => {
  return { type: actionTypes.ME_PAGE_LOADING };
};

export const mePageLoaded = () => {
  return { type: actionTypes.ME_PAGE_LOADED };
};

export const mePageFailed = () => {
  return { type: actionTypes.ME_PAGE_FAILED };
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

export const fetchGigsTonight = () => {
  return { type: actionTypes.FETCH_GIGS_TONIGHT };
};

export const gotGigsTonight = res => {
  return { type: actionTypes.GIGS_TONIGHT_RESP, gigsTonight: res };
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

// add a user to a gig on the gigs gist.
export const addUserToGig = (user, uid, gig) => {
  return { type: actionTypes.ADDDING_USER_TO_GIG, user, uid, gig };
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

// prismic news tpr_stories api

export const prismicNewsApiReq = () => {
  return { type: actionTypes.PRISMIC_API_REQ };
};

export const prismicNewsApiSuccess = res => {
  return { type: actionTypes.PRISMIC_API_SUCCESS, tpr_stories: res };
};

export const prismicNewsApiFail = err => {
  return { type: actionTypes.PRISMIC_API_FAIL, error: err };
};

// prismic fetching *ONE* individual TPR news story news/:id
export const fetchTPRStory = () => {
  return { type: actionTypes.FETCH_TPR_STORY };
};

export const fetchTPRSuccess = res => {
  return { type: actionTypes.FETCH_TPR_SUCCESS, content: res };
};

export const fetchTPRFail = err => {
  return { type: actionTypes.FETCH_TPR_FAIL, error: err };
};

// news api

export const newsContainerLoading = () => {
  return { type: actionTypes.NEWS_CONTAINER_LOADING };
};

export const newsContainerLoaded = () => {
  return { type: actionTypes.NEWS_CONTAINER_LOADED };
};

export const getAllNews = () => {
  return { type: actionTypes.NEWS_API_REQ };
};

export const newsApiFailed = error => {
  return { type: actionTypes.NEWS_API_FAIL, error };
};

export const newsApiSuccess = res => {
  return { type: actionTypes.NEWS_API_SUCCESS, stories: res };
};

// PAGE | CHat

export const chatPageLoading = () => {
  return {
    type: actionTypes.CHAT_PAGE_LOADING
  };
};

export const chatPageLoaded = () => {
  return {
    type: actionTypes.CHAT_PAGE_LOADED
  };
};

export const chatPageFailed = () => {
  return {
    type: actionTypes.CHAT_PAGE_FAILED
  };
};

// PAGE | Acts

export const actsPageLoading = () => {
  return { type: actionTypes.ACTS_PAGE_LOADING };
};

export const actsPageLoaded = () => {
  return { type: actionTypes.ACTS_PAGE_LOADED };
};

export const actsPageFailed = () => {
  return { type: actionTypes.ACTS_PAGE_FAILED };
};

// PAGE | Act

export const actPageLoading = () => {
  return { type: actionTypes.ACT_PAGE_LOADING };
};

export const actPageLoaded = res => {
  return { type: actionTypes.ACT_PAGE_LOADED, userProfile: res };
};

export const actPageFailed = error => {
  return { type: actionTypes.ACT_PAGE_FAILED, error };
};

export const fetchActProfile = uid => {
  return { type: actionTypes.FETCH_ACT_PROFILE, uid };
};

export const gotActProfile = actProfile => {
  return { type: actionTypes.GOT_ACT_PROFILE, actProfile };
};


// PAGE | News

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