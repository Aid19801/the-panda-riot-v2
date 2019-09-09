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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./HOCs/context.js":
/*!*************************!*\
  !*** ./HOCs/context.js ***!
  \*************************/
/*! exports provided: withFirebase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFirebase", function() { return withFirebase; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/HOCs/context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const FirebaseContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null); // with Firebase is the HOC that returns the consumer
// of whatever we pass to the provider.

const withFirebase = Component => props => __jsx(FirebaseContext.Consumer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, firebase => __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  firebase: firebase,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})));
/* harmony default export */ __webpack_exports__["default"] = (FirebaseContext);

/***/ }),

/***/ "./HOCs/firebase.js":
/*!**************************!*\
  !*** ./HOCs/firebase.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_3__);




const config = {
  apiKey: "AIzaSyBlImZQu-pKMTJr2t9Eg22KHxxlBsRbZvI",
  authDomain: "the-panda-riot.firebaseapp.com",
  databaseURL: "https://the-panda-riot.firebaseio.com",
  projectId: "the-panda-riot",
  storageBucket: "the-panda-riot.appspot.com",
  messagingSenderId: "276121448519"
};

class Firebase {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "doCreateUserWithEmailAndPassword", (email, password) => {
      return this.auth.createUserWithEmailAndPassword(email, password);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "doSignInWithEmailAndPassword", (email, password) => {
      return this.auth.signInWithEmailAndPassword(email, password);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "doSignOut", () => this.auth.signOut());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "doPasswordReset", email => this.auth.sendPasswordResetEmail(email));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "doPasswordUpdate", password => this.auth.currentUser.updatePassword(password));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "meQuery", () => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          return user;
        } else {
          return console.log('no one signed in');
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "user", uid => this.db.ref(`users/${uid}`));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "users", () => this.db.ref(`users`));

    !firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(config) : firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.app(); // app.initializeApp(config);

    this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth();
    this.db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.database();
  } // Firebase *Authentication*
  // create user


}

/* harmony default export */ __webpack_exports__["default"] = (Firebase);

/***/ }),

/***/ "./HOCs/index.js":
/*!***********************!*\
  !*** ./HOCs/index.js ***!
  \***********************/
/*! exports provided: default, FirebaseContext, withFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./HOCs/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseContext", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFirebase", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["withFirebase"]; });

/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ "./HOCs/firebase.js");


/* harmony default export */ __webpack_exports__["default"] = (_firebase__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./components/Button/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/components/Button/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Button({
  text,
  color,
  onClick
}) {
  return __jsx("div", {
    className: `button__button-container ${color}`,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, text));
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/styles.css":
/*!**************************************!*\
  !*** ./components/Button/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
  name,
  placeholder,
  onChange
}) => {
  return __jsx("div", {
    className: "input__input-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, title), __jsx("input", {
    name: name,
    className: "input__input",
    placeholder: placeholder,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Button, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./components/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./lib/cache.js":
/*!**********************!*\
  !*** ./lib/cache.js ***!
  \**********************/
/*! exports provided: saveToCache, getFromCache, clearFromCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToCache", function() { return saveToCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromCache", function() { return getFromCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFromCache", function() { return clearFromCache; });
const saveToCache = (key, val) => {
  if (false) {}

  return;
};
const getFromCache = key => {
  if (false) {}
};
const clearFromCache = key => {
  if (false) {}
};

/***/ }),

/***/ "./lib/index.css":
/*!***********************!*\
  !*** ./lib/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _HOCs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../HOCs */ "./HOCs/index.js");
/* harmony import */ var _lib_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/cache */ "./lib/cache.js");
/* harmony import */ var _lib_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/index.css */ "./lib/index.css");
/* harmony import */ var _lib_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_index_css__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/pages/signin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import fetch from 'isomorphic-unfetch';











class SignInPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", () => {
      const {
        email,
        password
      } = this.state;
      const {
        updateStateSaveUid
      } = this.props;
      console.log('email ', email);
      console.log('password ', password);
      this.setState({
        submitting: true
      });
      this.props.firebase.doSignInWithEmailAndPassword(email, password).then(res => {
        const {
          uid
        } = res.user;
        updateStateSaveUid(uid);
        _lib_cache__WEBPACK_IMPORTED_MODULE_9__["saveToCache"]('uid', uid);
        this.setState({
          email: '',
          password: ''
        });
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/home');
      }).catch(error => {
        this.setState({
          error
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });

    this.state = {
      email: '',
      password: '',
      submitting: false,
      error: null
    };
  } //   static async getInitialProps({ req }) {
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
    console.log('props ', this.props);
  }

  render() {
    const {
      submitting,
      error
    } = this.state;
    console.log('this state ', this.state);
    return __jsx("div", {
      id: "page-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
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
        lineNumber: 77
      },
      __self: this
    }), __jsx("h1", {
      className: "funky-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Sign In: "), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Input"], {
      name: "email",
      title: "email",
      onChange: this.onChange,
      placeholder: "abc@abc.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Input"], {
      name: "password",
      title: "password",
      onChange: this.onChange,
      placeholder: "password here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      text: "Submit",
      onClick: this.onSubmit,
      color: "grey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), submitting && __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Signing In.."), error && __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, error.message));
  }

}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["signInPageLoading"])()),
  pageLoaded: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["signInPageLoaded"])()),
  pageFailed: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["signInPageFailed"])()),
  updateStateSaveUid: uid => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["saveUid"])(uid))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(_HOCs__WEBPACK_IMPORTED_MODULE_8__["withFirebase"], Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps))(SignInPage));

/***/ }),

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
const saveUid = uid => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SAVE_UID"],
  uid
}); // PAGE | Home

const homePageLoading = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["HOME_PAGE_LOADING"]
  };
};
const homePageLoaded = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["HOME_PAGE_LOADED"]
  };
};
const homePageFailed = () => {
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
const APP_LOADING = 'APP_LOADING';
const APP_LOADED = 'APP_LOADED';
const APP_FAILED = 'APP_FAILED'; // sign in

const SIGNIN_PAGE_LOADING = 'SIGNIN_PAGE_LOADING';
const SIGNIN_PAGE_LOADED = 'SIGNIN_PAGE_LOADED';
const SIGNIN_PAGE_FAILED = 'SIGNIN_PAGE_FAILED';
const SAVE_UID = 'SAVE_UID'; // home page

const HOME_PAGE_LOADING = 'HOME_PAGE_LOADING';
const HOME_PAGE_LOADED = 'HOME_PAGE_LOADED';
const HOME_PAGE_FAILED = 'HOME_PAGE_FAILED';

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adrianthompson/Documents/with-redux-app/pages/signin.js */"./pages/signin.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=signin.js.map