webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _lib_cache__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/cache */ "./lib/cache.js");
/* harmony import */ var _lib_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/index.css */ "./lib/index.css");
/* harmony import */ var _lib_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_lib_index_css__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/pages/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var HomePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HomePage, _React$Component);

  function HomePage() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "signOut", function () {
      _lib_cache__WEBPACK_IMPORTED_MODULE_13__["saveToCache"]('uid', '');
    });

    _this.state = {};
    return _this;
  } //   static async getInitialProps({ req }) {
  //     // const isServer = !!req
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const json = await res.json();
  //     return {
  //       users: json
  //     };
  //   }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pageLoading = this.props.pageLoading;
      var reduxUID = this.props.reduxUID;
      var cacheUID = _lib_cache__WEBPACK_IMPORTED_MODULE_13__["getFromCache"]('uid'); // pageLoading();

      console.log('props ', this.props); // NEXT = vv put redux uid and/or cache uid from firebase as condition that bounces it back to signin.

      if (!reduxUID && !cacheUID) {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/signin');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "page-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_8__["NextSeo"], {
        openGraph: {
          type: 'website',
          url: 'https://www.thePandaRiot.com/gigs',
          title: 'Sign In',
          description: 'Sign in to the panda riot open mic comedy webapp!',
          images: [{
            url: 'https://i.ytimg.com/vi/kQBHzHBMlM4/hqdefault.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt'
          }, {
            url: 'https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt 2'
          }]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("h1", {
        className: "funky-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Home"), __jsx("button", {
        onClick: this.signOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Sign Out"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "you can only see me if youre logged in"));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.signIn.loading,
    error: state.signIn.error,
    reduxUID: state.signIn.uid
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    pageLoading: function pageLoading() {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["signInPageLoading"])());
    },
    pageLoaded: function pageLoaded() {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["signInPageLoaded"])());
    },
    pageFailed: function pageFailed() {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_12__["signInPageFailed"])());
    }
  };
};

var condition = function condition(authUser) {
  return !!authUser;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, null))(HomePage));

/***/ })

})
//# sourceMappingURL=home.js.8ad6a9eb55cebf4ee481.hot-update.js.map