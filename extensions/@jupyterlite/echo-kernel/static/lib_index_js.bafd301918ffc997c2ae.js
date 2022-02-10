"use strict";
(self["webpackChunk_jupyterlite_echo_kernel"] = self["webpackChunk_jupyterlite_echo_kernel"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/kernel */ "webpack/sharing/consume/default/@jupyterlite/kernel");
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kernel */ "./lib/kernel.js");
// Copyright (c) JupyterLite Contributors
// Distributed under the terms of the Modified BSD License.


/**
 * A plugin to register the echo kernel.
 */
const kernel = {
    id: '@jupyterlite/echo-kernel:kernel',
    autoStart: true,
    requires: [_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__.IKernelSpecs],
    activate: (app, kernelspecs) => {
        kernelspecs.register({
            spec: {
                name: 'echo',
                display_name: 'Echo',
                language: 'text',
                argv: [],
                spec: {
                    argv: [],
                    env: {},
                    display_name: 'Echo',
                    language: 'text',
                    interrupt_mode: 'message',
                    metadata: {}
                },
                resources: {
                    'logo-32x32': '',
                    'logo-64x64': ''
                }
            },
            create: async (options) => {
                return new _kernel__WEBPACK_IMPORTED_MODULE_1__.EchoKernel(options);
            }
        });
    }
};
const plugins = [kernel];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);


/***/ }),

/***/ "./lib/kernel.js":
/*!***********************!*\
  !*** ./lib/kernel.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchoKernel": () => (/* binding */ EchoKernel)
/* harmony export */ });
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/kernel */ "webpack/sharing/consume/default/@jupyterlite/kernel");
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A kernel that echos content back.
 */
class EchoKernel extends _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__.BaseKernel {
    /**
     * Handle a kernel_info_request message
     */
    async kernelInfoRequest() {
        const content = {
            implementation: 'Text',
            implementation_version: '0.1.0',
            language_info: {
                codemirror_mode: {
                    name: 'text/plain'
                },
                file_extension: '.txt',
                mimetype: 'text/plain',
                name: 'echo',
                nbconvert_exporter: 'text',
                pygments_lexer: 'text',
                version: 'es2017'
            },
            protocol_version: '5.3',
            status: 'ok',
            banner: 'An echo kernel running in the browser',
            help_links: [
                {
                    text: 'Echo Kernel',
                    url: 'https://github.com/jupyterlite/echo-kernel'
                }
            ]
        };
        return content;
    }
    /**
     * Handle an `execute_request` message
     *
     * @param msg The parent message.
     */
    async executeRequest(content) {
        const { code } = content;
        this.publishExecuteResult({
            execution_count: this.executionCount,
            data: {
                'text/plain': code
            },
            metadata: {}
        });
        return {
            status: 'ok',
            execution_count: this.executionCount,
            user_expressions: {}
        };
    }
    /**
     * Handle an complete_request message
     *
     * @param msg The parent message.
     */
    async completeRequest(content) {
        throw new Error('Not implemented');
    }
    /**
     * Handle an `inspect_request` message.
     *
     * @param content - The content of the request.
     *
     * @returns A promise that resolves with the response message.
     */
    async inspectRequest(content) {
        throw new Error('Not implemented');
    }
    /**
     * Handle an `is_complete_request` message.
     *
     * @param content - The content of the request.
     *
     * @returns A promise that resolves with the response message.
     */
    async isCompleteRequest(content) {
        throw new Error('Not implemented');
    }
    /**
     * Handle a `comm_info_request` message.
     *
     * @param content - The content of the request.
     *
     * @returns A promise that resolves with the response message.
     */
    async commInfoRequest(content) {
        throw new Error('Not implemented');
    }
    /**
     * Send an `input_reply` message.
     *
     * @param content - The content of the reply.
     */
    inputReply(content) {
        throw new Error('Not implemented');
    }
    /**
     * Send an `comm_open` message.
     *
     * @param msg - The comm_open message.
     */
    async commOpen(msg) {
        throw new Error('Not implemented');
    }
    /**
     * Send an `comm_msg` message.
     *
     * @param msg - The comm_msg message.
     */
    async commMsg(msg) {
        throw new Error('Not implemented');
    }
    /**
     * Send an `comm_close` message.
     *
     * @param close - The comm_close message.
     */
    async commClose(msg) {
        throw new Error('Not implemented');
    }
}


/***/ })

}]);
//# sourceMappingURL=lib_index_js.bafd301918ffc997c2ae.js.map