webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/home.js":
/*!********************************!*\
  !*** ./redux/reducers/home.js ***!
  \********************************/
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

var homePageReducer = function homePageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["HOME_PAGE_LOADING"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["HOME_PAGE_LOADED"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["HOME_PAGE_FAILED"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: action.error
      });
      break;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (homePageReducer);

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-state */ "./redux/reducers/app-state.js");
/* harmony import */ var _sigin_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sigin-in */ "./redux/reducers/sigin-in.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./redux/reducers/home.js");




var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  appState: _app_state__WEBPACK_IMPORTED_MODULE_1__["appStateReducer"],
  signIn: _sigin_in__WEBPACK_IMPORTED_MODULE_2__["default"],
  home: _home__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ })

})
//# sourceMappingURL=_app.js.a2070dd43d152c30fc22.hot-update.js.map