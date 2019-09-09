webpackHotUpdate("static/development/pages/signin.js",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _HOCs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../HOCs */ "./HOCs/index.js");
/* harmony import */ var _lib_index_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/index.css */ "./lib/index.css");
/* harmony import */ var _lib_index_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_lib_index_css__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/pages/signin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
 // import fetch from 'isomorphic-unfetch';










var SignInPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignInPage, _React$Component);

  function SignInPage() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignInPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignInPage).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", function () {
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;
      console.log('email ', email);
      console.log('password ', password);

      _this.setState({
        submitting: true
      });

      _this.props.firebase.doSignInWithEmailAndPassword(email, password).then(function (res) {
        var uid = res.user.uid;

        _this.setState({
          email: '',
          password: ''
        });

        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/home');
      })["catch"](function (error) {
        _this.setState({
          error: error
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (event) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.name, event.target.value));
    });

    _this.state = {
      email: '',
      password: '',
      submitting: false,
      error: null
    };
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
      var pageLoading = this.props.pageLoading;
      pageLoading();
      console.log('props ', this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          submitting = _this$state2.submitting,
          error = _this$state2.error;
      console.log('this state ', this.state);
      return __jsx("div", {
        id: "page-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
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
          lineNumber: 75
        },
        __self: this
      }), __jsx("h1", {
        className: "funky-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Sign In: "), __jsx(_components__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        name: "email",
        title: "email",
        onChange: this.onChange,
        placeholder: "abc@abc.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx(_components__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        name: "password",
        title: "password",
        onChange: this.onChange,
        placeholder: "password here",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), __jsx(_components__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        text: "Submit",
        onClick: this.onSubmit,
        color: "grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), submitting && __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Signing In.."), error && __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, error.message));
    }
  }]);

  return SignInPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.signIn.loading,
    error: state.signIn.error
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

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_9__["compose"])(_HOCs__WEBPACK_IMPORTED_MODULE_14__["withFirebase"], Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps))(SignInPage));

/***/ })

})
//# sourceMappingURL=signin.js.7fb71bc0b5977b2508f5.hot-update.js.map