webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/constants/index.js":
/*!**********************************!*\
  !*** ./redux/constants/index.js ***!
  \**********************************/
/*! exports provided: APP_LOADING, APP_LOADED, APP_FAILED, SIGNIN_PAGE_LOADING, SIGNIN_PAGE_LOADED, SIGNIN_PAGE_FAILED, SAVE_UID */
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
// app state
var APP_LOADING = 'APP_LOADING';
var APP_LOADED = 'APP_LOADED';
var APP_FAILED = 'APP_FAILED'; // sign in

var SIGNIN_PAGE_LOADING = 'SIGNIN_PAGE_LOADING';
var SIGNIN_PAGE_LOADED = 'SIGNIN_PAGE_LOADED';
var SIGNIN_PAGE_FAILED = 'SIGNIN_PAGE_FAILED';
var SAVE_UID = 'SAVE_UID';

/***/ }),

/***/ "./redux/reducers/sigin-in.js":
/*!************************************!*\
  !*** ./redux/reducers/sigin-in.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./redux/constants/index.js");


var initialState = {
  loading: false,
  progressBarStatus: false,
  error: null
};
/* eslint-disable */

var signinPageReducer = function signinPageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_PAGE_LOADING"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_PAGE_LOADED"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_PAGE_FAILED"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: action.error
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SAVE_UID"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        uid: action.uid
      });
      break;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (signinPageReducer);

/***/ })

})
//# sourceMappingURL=_app.js.980502fa21fc96f6c029.hot-update.js.map