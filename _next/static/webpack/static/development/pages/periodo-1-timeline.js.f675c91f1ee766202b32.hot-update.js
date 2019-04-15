webpackHotUpdate("static/development/pages/periodo-1-timeline.js",{

/***/ "./componentes/sources/ActiveLinkPpal.js":
/*!***********************************************!*\
  !*** ./componentes/sources/ActiveLinkPpal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wdleonsa/Documents/LeonardoRestrepo/CaracolTV/Proyectos/Especiales/Festival-Vallenato/componentes/sources/ActiveLinkPpal.js";



var ActiveLinkPpal = function ActiveLinkPpal(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;
  var ruta = router.pathname.split("-");
  var rutahref = href.split("-");
  var className = ruta[2] === rutahref[2] ? 'active' : 'inactive';

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLinkPpal));

/***/ })

})
//# sourceMappingURL=periodo-1-timeline.js.f675c91f1ee766202b32.hot-update.js.map