webpackHotUpdate("static/development/pages/home.js",{

/***/ "./HOCs/with-auth.js":
/*!***************************!*\
  !*** ./HOCs/with-auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./HOCs/index.js");
/* harmony import */ var _lib_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/cache */ "./lib/cache.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/HOCs/with-auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var withAuthentication = function withAuthentication(Component) {
  var withAuthentication =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(withAuthentication, _React$Component);

    function withAuthentication(props) {
      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, withAuthentication);

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(withAuthentication).call(this, props));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "ifNotAuthRouteToSignIn", function () {
        _this.setState({
          authUser: null
        });

        next_router__WEBPACK_IMPORTED_MODULE_11__["Router"].push('/signin');
      });

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "ifAuthSaveToCache", function (authUser) {
        _this.setState({
          authUser: authUser
        });
      });

      _this.state = {
        authUser: null
      };
      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(withAuthentication, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.listener = this.props.firebase.auth.onAuthStateChanged(function (authUser) {
          authUser ? _this2.ifAuthSaveToCache(authUser) : _this2.ifNotAuthRouteToSignIn();
        }); // this.ifNotAuthRouteToSignIn();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.listener();
      }
    }, {
      key: "render",
      value: function render() {
        var authUser = this.state.authUser;
        return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          authUser: authUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }));
      }
    }]);

    return withAuthentication;
  }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

  return Object(___WEBPACK_IMPORTED_MODULE_9__["withFirebase"])(withAuthentication);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthentication);

/***/ })

})
//# sourceMappingURL=home.js.de5b65f75d1f86206f6b.hot-update.js.map