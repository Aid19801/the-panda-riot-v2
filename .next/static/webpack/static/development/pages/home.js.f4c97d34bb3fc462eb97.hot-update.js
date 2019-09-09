webpackHotUpdate("static/development/pages/home.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: startApp, signInPageLoading, signInPageLoaded, signInPageFailed, saveUid, homePageLoading, homePageLoaded, homePageFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startApp", function() { return startApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInPageLoading", function() { return signInPageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInPageLoaded", function() { return signInPageLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInPageFailed", function() { return signInPageFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUid", function() { return saveUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePageLoading", function() { return homePageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePageLoaded", function() { return homePageLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePageFailed", function() { return homePageFailed; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./redux/constants/index.js");

var startApp = function startApp() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_LOADING"]
  };
}; // PAGE | Sign in

var signInPageLoading = function signInPageLoading() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_PAGE_LOADING"]
  };
};
var signInPageLoaded = function signInPageLoaded() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_PAGE_LOADED"]
  };
};
var signInPageFailed = function signInPageFailed() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_PAGE_FAILED"]
  };
};
var saveUid = function saveUid(uid) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SAVE_UID"],
    uid: uid
  };
}; // PAGE | Home

var homePageLoading = function homePageLoading() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["HOME_PAGE_LOADING"]
  };
};
var homePageLoaded = function homePageLoaded() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["HOME_PAGE_LOADED"]
  };
};
var homePageFailed = function homePageFailed() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["HOME_PAGE_FAILED"]
  };
};

/***/ }),

/***/ "./redux/constants/index.js":
/*!**********************************!*\
  !*** ./redux/constants/index.js ***!
  \**********************************/
/*! exports provided: APP_LOADING, APP_LOADED, APP_FAILED, SIGNIN_PAGE_LOADING, SIGNIN_PAGE_LOADED, SIGNIN_PAGE_FAILED, SAVE_UID, HOME_PAGE_LOADING, HOME_PAGE_LOADED, HOME_PAGE_FAILED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOADING", function() { return APP_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOADED", function() { return APP_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_FAILED", function() { return APP_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_PAGE_LOADING", function() { return SIGNIN_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_PAGE_LOADED", function() { return SIGNIN_PAGE_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_PAGE_FAILED", function() { return SIGNIN_PAGE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_UID", function() { return SAVE_UID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_LOADING", function() { return HOME_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_LOADED", function() { return HOME_PAGE_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_FAILED", function() { return HOME_PAGE_FAILED; });
// app state
var APP_LOADING = 'APP_LOADING';
var APP_LOADED = 'APP_LOADED';
var APP_FAILED = 'APP_FAILED'; // sign in

var SIGNIN_PAGE_LOADING = 'SIGNIN_PAGE_LOADING';
var SIGNIN_PAGE_LOADED = 'SIGNIN_PAGE_LOADED';
var SIGNIN_PAGE_FAILED = 'SIGNIN_PAGE_FAILED';
var SAVE_UID = 'SAVE_UID'; // home page

var HOME_PAGE_LOADING = 'HOME_PAGE_LOADING';
var HOME_PAGE_LOADED = 'HOME_PAGE_LOADED';
var HOME_PAGE_FAILED = 'HOME_PAGE_FAILED'; // export const SAVE_UID = 'SAVE_UID';

/***/ })

})
//# sourceMappingURL=home.js.f4c97d34bb3fc462eb97.hot-update.js.map