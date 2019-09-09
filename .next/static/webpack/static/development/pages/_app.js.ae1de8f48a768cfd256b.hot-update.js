webpackHotUpdate("static/development/pages/_app.js",{

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
  error: null,
  uid: ''
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
//# sourceMappingURL=_app.js.ae1de8f48a768cfd256b.hot-update.js.map