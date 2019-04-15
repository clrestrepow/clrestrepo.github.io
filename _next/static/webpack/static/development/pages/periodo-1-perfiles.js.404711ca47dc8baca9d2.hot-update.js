webpackHotUpdate("static/development/pages/periodo-1-perfiles.js",{

/***/ "./pages/periodo-1-perfiles.js":
/*!*************************************!*\
  !*** ./pages/periodo-1-perfiles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _componentes_secciones_Perfiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/secciones/Perfiles */ "./componentes/secciones/Perfiles.js");
/* harmony import */ var _componentes_sources_Navegacion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/sources/Navegacion */ "./componentes/sources/Navegacion.js");
/* harmony import */ var _sass_global_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sass/global.sass */ "./sass/global.sass");
/* harmony import */ var _sass_global_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sass_global_sass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sass_menu_sass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sass/menu.sass */ "./sass/menu.sass");
/* harmony import */ var _sass_menu_sass__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sass_menu_sass__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sass_txt_content_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sass/txt_content.sass */ "./sass/txt_content.sass");
/* harmony import */ var _sass_txt_content_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sass_txt_content_sass__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/wdleonsa/Documents/LeonardoRestrepo/CaracolTV/Proyectos/Especiales/Festival-Vallenato/pages/periodo-1-perfiles.js";








var PeriodoUnoPerfiles =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PeriodoUnoPerfiles, _Component);

  function PeriodoUnoPerfiles() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PeriodoUnoPerfiles);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PeriodoUnoPerfiles).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PeriodoUnoPerfiles, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        data: this.props.data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderComponent = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_componentes_secciones_Perfiles__WEBPACK_IMPORTED_MODULE_9__["default"], {
        perfiles: this.state.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      });

      if (this.state.data === null) {
        renderComponent = "Servicio no disponible - Recarga la página para volver a intentarlo";
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "perfiles-p1",
        className: "content txt-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_componentes_sources_Navegacion__WEBPACK_IMPORTED_MODULE_10__["default"], {
        menu: "oculto",
        navperidodos: "visible",
        link: "periodos",
        seccion: "perfiles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "title-seccion-generico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Perfiles"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-seccion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Finales del siglo XIX - 1940")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        id: "seccion-periodo1perfiles",
        className: "seccion-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, renderComponent)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data, _data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()('https://especiales.caracoltv.com/loscaminosdelvallenato/services/periodo-i/perfiles.json');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data
                });

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log("Error al consumir el servicio");
                _data = null;
                return _context.abrupt("return", {
                  data: _data
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PeriodoUnoPerfiles;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PeriodoUnoPerfiles);

/***/ })

})
//# sourceMappingURL=periodo-1-perfiles.js.404711ca47dc8baca9d2.hot-update.js.map