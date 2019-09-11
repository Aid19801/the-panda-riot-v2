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


export const gotGigsFromGist = (gigs) => {
  return { type: actionTypes.FETCH_GIGS_RESP, data: gigs }
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


// PAGE | Blog
export const blogPageLoading = () => {
  return { type: actionTypes.NEWS_PAGE_LOADING };
}
export const blogPageLoaded = () => {
  return { type: actionTypes.NEWS_PAGE_LOADED };
}
export const blogPageFailed = () => {
  return { type: actionTypes.NEWS_PAGE_FAILED };
}

export const fetchBlogPageReq = () => {
  return { type: actionTypes.FETCH_NEWS_REQ }
}

export const fetchBlogPageRes = (content) => {
  return { type: actionTypes.FETCH_NEWS_RES, content }
}
