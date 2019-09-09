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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _lib_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/index.css */ "./lib/index.css");
/* harmony import */ var _lib_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _HOCs_Session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HOCs/Session */ "./HOCs/Session/index.js");





var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/pages/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








var SignInPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SignInPage, _React$Component);

  function SignInPage() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignInPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignInPage).call(this));
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


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignInPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pageLoading = this.props.pageLoading; // pageLoading();

      console.log('props ', this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "page-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__["NextSeo"], {
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
          lineNumber: 42
        },
        __self: this
      }), __jsx("h1", {
        className: "funky-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Home"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "you can only see me if youre logged in"));
    }
  }]);

  return SignInPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.signIn.loading,
    error: state.signIn.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    pageLoading: function pageLoading() {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["signInPageLoading"])());
    },
    pageLoaded: function pageLoaded() {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["signInPageLoaded"])());
    },
    pageFailed: function pageFailed() {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["signInPageFailed"])());
    }
  };
};

var condition = function condition(authUser) {
  return !!authUser;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(_HOCs_Session__WEBPACK_IMPORTED_MODULE_11__["withAuthorization"])(condition), Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, null))(SignInPage));

/***/ })

})
//# sourceMappingURL=home.js.3c5f0b04ded8f05d8f28.hot-update.js.map