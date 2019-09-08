module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Input/index.js":
/*!***********************************!*\
  !*** ./components/Input/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./components/Input/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/components/Input/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Input = ({
  title,
  placeholder,
  onChange
}) => {
  return __jsx("div", {
    className: "input__input-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, title), __jsx("input", {
    className: "input__input",
    placeholder: placeholder,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/Input/styles.css":
/*!*************************************!*\
  !*** ./components/Input/styles.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ "./components/Input/index.js");
var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/pages/signin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import fetch from 'isomorphic-unfetch';






class SignInPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  //   static async getInitialProps({ req }) {
  //     // const isServer = !!req
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const json = await res.json();
  //     return {
  //       users: json
  //     };
  //   }
  componentDidMount() {
    const {
      pageLoading
    } = this.props;
    pageLoading();
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
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
        lineNumber: 31
      },
      __self: this
    }), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Sign In: "), ";", __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "email",
      onChange: e => console.log(e),
      placeholder: "abc@abc.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "password",
      onChange: e => console.log(e),
      placeholder: "password here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  }

}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["signInPageLoading"])()),
  pageLoaded: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["signInPageLoaded"])()),
  pageFailed: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["signInPageFailed"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(SignInPage));

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: startApp, signInPageLoading, signInPageLoaded, signInPageFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startApp", function() { return startApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInPageLoading", function() { return signInPageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInPageLoaded", function() { return signInPageLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInPageFailed", function() { return signInPageFailed; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./redux/constants/index.js");

const startApp = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["APP_LOADING"]
  };
}; // PAGE | Sign in

const signInPageLoading = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_PAGE_LOADING"]
  };
};
const signInPageLoaded = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_PAGE_LOADED"]
  };
};
const signInPageFailed = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_PAGE_FAILED"]
  };
};

/***/ }),

/***/ "./redux/constants/index.js":
/*!**********************************!*\
  !*** ./redux/constants/index.js ***!
  \**********************************/
/*! exports provided: APP_LOADING, APP_LOADED, APP_FAILED, SIGNIN_PAGE_LOADING, SIGNIN_PAGE_LOADED, SIGNIN_PAGE_FAILED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOADING", function() { return APP_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOADED", function() { return APP_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_FAILED", function() { return APP_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_PAGE_LOADING", function() { return SIGNIN_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_PAGE_LOADED", function() { return SIGNIN_PAGE_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_PAGE_FAILED", function() { return SIGNIN_PAGE_FAILED; });
// app state
const APP_LOADING = 'APP_LOADING';
const APP_LOADED = 'APP_LOADED';
const APP_FAILED = 'APP_FAILED'; // sign in

const SIGNIN_PAGE_LOADING = 'SIGNIN_PAGE_LOADING';
const SIGNIN_PAGE_LOADED = 'SIGNIN_PAGE_LOADED';
const SIGNIN_PAGE_FAILED = 'SIGNIN_PAGE_FAILED';

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adrianthompson/Documents/with-redux-app/pages/signin.js */"./pages/signin.js");


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=signin.js.map