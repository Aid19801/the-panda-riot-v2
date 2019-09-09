webpackHotUpdate("static/development/pages/home.js",{

/***/ "./HOCs/Session/with-authorization.js":
/*!********************************************!*\
  !*** ./HOCs/Session/with-authorization.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ */ "./HOCs/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./HOCs/Session/index.js");






var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/HOCs/Session/with-authorization.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
 // import { withRouter } from 'react-router-dom';


 // import * as ROUTES from '../../constants/routes';



var withAuthorization = function withAuthorization(condition) {
  return function (Component) {
    var WithAuthorization =
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WithAuthorization, _React$Component);

      function WithAuthorization() {
        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WithAuthorization);

        return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WithAuthorization).apply(this, arguments));
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WithAuthorization, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.listener = this.props.firebase.auth.onAuthStateChanged(function (authUser) {
            console.log('authUser ', authUser);

            if (!condition(authUser)) {
              Router.push('/signin');
            }
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
          var _this = this;

          return __jsx(___WEBPACK_IMPORTED_MODULE_9__["AuthUserContext"].Consumer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, function (authUser) {
            return condition(authUser) ? __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })) : null;
          });
        }
      }]);

      return WithAuthorization;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

    return Object(redux__WEBPACK_IMPORTED_MODULE_7__["compose"])( // withRouter,
    ___WEBPACK_IMPORTED_MODULE_8__["withFirebase"])(WithAuthorization);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthorization);

/***/ })

})
//# sourceMappingURL=home.js.4836ff02f3ade15e23fd.hot-update.js.map