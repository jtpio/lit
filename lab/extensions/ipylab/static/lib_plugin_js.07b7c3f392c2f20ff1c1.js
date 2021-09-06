"use strict";
(self["webpackChunkipylab"] = self["webpackChunkipylab"] || []).push([["lib_plugin_js"],{

/***/ "./lib/plugin.js":
/*!***********************!*\
  !*** ./lib/plugin.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base?f753");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget */ "./lib/widgets/frontend.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget */ "./lib/widgets/shell.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget */ "./lib/widgets/commands.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget */ "./lib/widgets/palette.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget */ "./lib/widgets/sessions.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget */ "./lib/widget.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./version */ "./lib/version.js");
// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.





const EXTENSION_ID = 'ipylab:plugin';
/**
 * The default plugin.
 */
const extension = {
    id: EXTENSION_ID,
    autoStart: true,
    requires: [_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__.IJupyterWidgetRegistry, _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILabShell],
    optional: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ICommandPalette],
    activate: (app, registry, shell, palette) => {
        // add globals
        _widget__WEBPACK_IMPORTED_MODULE_3__.JupyterFrontEndModel.app = app;
        _widget__WEBPACK_IMPORTED_MODULE_4__.ShellModel.shell = shell;
        _widget__WEBPACK_IMPORTED_MODULE_5__.CommandRegistryModel.commands = app.commands;
        _widget__WEBPACK_IMPORTED_MODULE_6__.CommandPaletteModel.palette = palette;
        _widget__WEBPACK_IMPORTED_MODULE_7__.SessionManagerModel.sessions = app.serviceManager.sessions;
        _widget__WEBPACK_IMPORTED_MODULE_7__.SessionManagerModel.shell = shell;
        registry.registerWidget({
            name: _version__WEBPACK_IMPORTED_MODULE_8__.MODULE_NAME,
            version: _version__WEBPACK_IMPORTED_MODULE_8__.MODULE_VERSION,
            exports: _widget__WEBPACK_IMPORTED_MODULE_9__,
        });
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);
//# sourceMappingURL=plugin.js.map

/***/ })

}]);
//# sourceMappingURL=lib_plugin_js.07b7c3f392c2f20ff1c1.js.map