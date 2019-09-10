webpackHotUpdate("static/development/pages/about.js",{

/***/ "./HOCs/with-auth.js":
/*!***************************!*\
  !*** ./HOCs/with-auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! . */ "./HOCs/index.js");
/* harmony import */ var _lib_cache__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/cache */ "./lib/cache.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");










var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/HOCs/with-auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;









var withAuthentication = function withAuthentication(PlatformSpecificComponent) {
  var withAuthenticationClass =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(withAuthenticationClass, _React$Component);

    function withAuthenticationClass(props) {
      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, withAuthenticationClass);

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(withAuthenticationClass).call(this, props));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "ifNotAuthRouteToSignIn", function () {
        _lib_cache__WEBPACK_IMPORTED_MODULE_14__["clearFromCache"]('userProfile');
        _lib_cache__WEBPACK_IMPORTED_MODULE_14__["clearFromCache"]('uid');

        _this.setState({
          authUser: null
        });

        next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/signin');
      });

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "ifAuthSaveToCache",
      /*#__PURE__*/
      function () {
        var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(authUser) {
          var userProfile, userProfileStatus;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // USER AUTH save authUser to local state, redux and cache.
                  _this.setState({
                    authUser: authUser
                  });

                  _this.props.updateStateWithUID(authUser.uid);

                  _lib_cache__WEBPACK_IMPORTED_MODULE_14__["saveToCache"]('uid', authUser.uid); // DATABASE / USER PROFILE
                  // get userProfile from cache (this is just a string bool)

                  _context.next = 5;
                  return _lib_cache__WEBPACK_IMPORTED_MODULE_14__["getFromCache"]('userProfile');

                case 5:
                  userProfile = _context.sent;
                  // console.log('userProfileStatus string ', userProfileStatus)
                  // switch to a real bool
                  userProfileStatus = userProfile === 'true' ? true : false; // console.log('userProfileStatus bool ', userProfileStatus)
                  // if its false, check the FB database, if it includes faveGig
                  // set to true.
                  // so first time it renders after signup, it will check if you
                  // entered a faveGig minimum for your profile, and if not,
                  // `userProfile` cache stays false.

                  if (userProfileStatus) {
                    _context.next = 10;
                    break;
                  }

                  // console.log('user prof status is false =>' , userProfileStatus, typeof userProfileStatus)
                  _this.props.firebase.user(authUser.uid).on('value', function (snapshot) {
                    // console.log('on value fired')
                    var fbuserProfile = snapshot.val(); // console.log('fbUserProfile snapshot val ', fbuserProfile)
                    // get FB profile, check if faveGig exists

                    if (fbuserProfile && fbuserProfile.faveGig === '') {
                      // if profile exists but faveGig empty, set cache to false (user hasnt completed db profile)
                      // console.log('fave gig doesnt exist, userProfile cache should be false');
                      _lib_cache__WEBPACK_IMPORTED_MODULE_14__["saveToCache"]('userProfile', 'false');
                    } // if it exists and it's not empty, set cache to true (user has completed db profile)


                    if (fbuserProfile && fbuserProfile.faveGig !== '') {
                      // console.log('fave gig DOES exist, userProfile cache should be true');
                      _lib_cache__WEBPACK_IMPORTED_MODULE_14__["saveToCache"]('userProfile', 'true');
                    }
                  });

                  return _context.abrupt("return");

                case 10:
                  return _context.abrupt("return", next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/home'));

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "signOut", function () {
        _lib_cache__WEBPACK_IMPORTED_MODULE_14__["clearFromCache"]('uid', '');
        _lib_cache__WEBPACK_IMPORTED_MODULE_14__["clearFromCache"]('userProfile', false);

        _this.props.firebase.doSignOut();

        next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/signin');
      });

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "signIn", function (email, password) {// this is done at page level. wrapping '/signin' with `withAuthentication`
        // would make it only visible to users who are signed in === Endless loop.
      });

      _this.state = {
        authUser: null
      };
      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(withAuthenticationClass, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // const uid = cache.getFromCache('uid');
        // if (!uid) {
        //   return Router.push('/signin');
        // }
        this.listener = this.props.firebase.auth.onAuthStateChanged(function (authUser) {
          authUser ? _this2.ifAuthSaveToCache(authUser) : _this2.ifNotAuthRouteToSignIn();
        });
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
        return __jsx(PlatformSpecificComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          authUser: authUser,
          signOut: this.signOut,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }));
      }
    }]);

    return withAuthenticationClass;
  }(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      updateStateWithUID: function updateStateWithUID(id) {
        return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_17__["saveAuthenticatedUID"])(id));
      }
    };
  };

  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_16___default()(withAuthenticationClass, PlatformSpecificComponent);

  if (withAuthenticationClass.getInitialProps) {
    withAuthenticationClass.getInitialProps();
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_11__["compose"])(___WEBPACK_IMPORTED_MODULE_13__["withFirebase"], Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(null, mapDispatchToProps))(withAuthenticationClass);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthentication);

/***/ })

})
//# sourceMappingURL=about.js.b11bbd86cb3ab701ae3a.hot-update.js.map