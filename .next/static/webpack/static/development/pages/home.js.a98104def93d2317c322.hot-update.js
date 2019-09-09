webpackHotUpdate("static/development/pages/home.js",{

/***/ "./HOCs/context.js":
false,

/***/ "./HOCs/firebase.js":
false,

/***/ "./HOCs/index.js":
false,

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/cache */ "./lib/cache.js");






var _jsxFileName = "/home/adrianthompson/Documents/with-redux-app/HOCs/with-auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


 // import { withFirebase } from '.';

var withAuthentication = function withAuthentication(Component) {
  var WithAuthentication =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WithAuthentication, _Component);

    function WithAuthentication() {
      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WithAuthentication);

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WithAuthentication).call(this));
      _this.state = {};
      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WithAuthentication, [{
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "render",
      value: function render() {
        return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          poo: "poo"
        }, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }));
      }
    }]);

    return WithAuthentication;
  }(Component);

  return WithAuthentication;
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthentication);

/***/ }),

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
false,

/***/ "./node_modules/@firebase/database/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/polyfill/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/es/array/find-index.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/es/array/find.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/es/object/assign.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/es/string/repeat.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/es/string/starts-with.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/es/symbol/index.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/es/symbol/iterator.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/features/array/find-index.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/features/array/find.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/features/object/assign.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/features/string/repeat.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/features/string/starts-with.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/features/symbol/index.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/features/symbol/iterator.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/a-function.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/add-to-unscopables.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/an-object.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/array-includes.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/array-method-has-species-support.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/array-methods.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/array-species-create.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/bind-context.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/classof-raw.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/classof.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/copy-constructor-properties.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/correct-is-regexp-logic.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/correct-prototype-getter.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/create-iterator-constructor.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/create-property-descriptor.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/create-property.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/define-iterator.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/define-well-known-symbol.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/descriptors.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/document-create-element.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/dom-iterables.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/entry-unbind.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/enum-bug-keys.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/enum-keys.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/export.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/fails.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/function-to-string.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/global.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/has.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/hidden-keys.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/hide.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/html.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/ie8-dom-define.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/indexed-object.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/internal-state.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/is-array.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/is-forced.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/is-object.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/is-pure.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/is-regexp.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/iterators-core.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/iterators.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/native-symbol.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/native-weak-map.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-assign.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-create.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-define-properties.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-define-property.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-get-own-property-descriptor.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-get-own-property-names-external.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-get-own-property-names.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-get-own-property-symbols.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-get-prototype-of.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-keys-internal.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-keys.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-property-is-enumerable.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-set-prototype-of.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/object-to-string.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/own-keys.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/path.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/redefine.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/require-object-coercible.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/set-global.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/set-to-string-tag.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/shared-key.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/shared.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/string-at.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/string-repeat.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/to-absolute-index.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/to-indexed-object.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/to-integer.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/to-length.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/to-object.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/to-primitive.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/uid.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/validate-string-method-arguments.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/well-known-symbol.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/internals/wrapped-well-known-symbol.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.array.concat.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.array.find-index.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.array.find.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.array.iterator.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.json.to-string-tag.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.math.to-string-tag.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.object.assign.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.object.to-string.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.string.iterator.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.string.repeat.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.string.starts-with.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.async-iterator.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.description.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.has-instance.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.is-concat-spreadable.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.iterator.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.match.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.replace.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.search.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.species.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.split.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.to-primitive.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.to-string-tag.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/es.symbol.unscopables.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/esnext.symbol.dispose.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/esnext.symbol.observable.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/esnext.symbol.pattern-match.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/core-js/modules/web.dom-collections.iterator.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
false,

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
false,

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/database/dist/index.esm.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/promise-polyfill/lib/polyfill.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/whatwg-fetch/fetch.js":
false

})
//# sourceMappingURL=home.js.a98104def93d2317c322.hot-update.js.map