/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
;(() => {
    var exports = {}
    exports.id = 'pages/_app'
    exports.ids = ['pages/_app']
    exports.modules = {
        /***/ './src/commons/utils/log.util.ts':
            /*!***************************************!*\
  !*** ./src/commons/utils/log.util.ts ***!
  \***************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                'use strict'
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "LogUtils": () => (/* binding */ LogUtils),\n/* harmony export */   "error": () => (/* binding */ error),\n/* harmony export */   "log": () => (/* binding */ log)\n/* harmony export */ });\nconst appName = "Reserva Slot";\nconst logStyle = "background: #71c7ec; border-radius: 3px; color: #fff; padding: 0 4px";\nconst logErrorStyle = "background: #C62828; border-radius: 3px; color: #fff; padding: 0 4px";\nconst errorProps = (message, tag)=>({\n        tag,\n        path: window.location.pathname,\n        timestamp: new Date().toISOString(),\n        error: message\n    });\nconst log = (message, tag = "")=>{\n    console.log(`%c${appName} - ${tag ? `${tag} ` : ""}Log`, logStyle, message);\n};\nconst error = (message, tag = "")=>{\n    console.error(`%c${appName} - ${tag ? `${tag} ` : ""}Error`, logErrorStyle, errorProps(message, tag));\n};\nconst LogUtils = {\n    log,\n    error\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9ucy91dGlscy9sb2cudXRpbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxVQUFVO0FBQ2hCLE1BQU1DLFdBQ0Y7QUFDSixNQUFNQyxnQkFDRjtBQUVKLE1BQU1DLGFBQWEsQ0FBQ0MsU0FBY0MsTUFBaUI7UUFDL0NBO1FBQ0FDLE1BQU1DLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUTtRQUM5QkMsV0FBVyxJQUFJQyxPQUFPQyxXQUFXO1FBQ2pDQyxPQUFPVDtJQUNYO0FBRU8sTUFBTVUsTUFBTSxDQUFDVixTQUFjQyxNQUFjLEVBQUUsR0FBSztJQUNuRFUsUUFBUUQsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFZCxRQUFRLEdBQUcsRUFBRUssTUFBTSxDQUFDLEVBQUVBLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFSixVQUFVRztBQUN2RSxFQUFDO0FBRU0sTUFBTVMsUUFBUSxDQUFDVCxTQUFjQyxNQUFjLEVBQUUsR0FBSztJQUNyRFUsUUFBUUYsS0FBSyxDQUNULENBQUMsRUFBRSxFQUFFYixRQUFRLEdBQUcsRUFBRUssTUFBTSxDQUFDLEVBQUVBLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUM3Q0gsZUFDQUMsV0FBV0MsU0FBU0M7QUFFNUIsRUFBQztBQUVNLE1BQU1XLFdBQVc7SUFDcEJGO0lBQ0FEO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYm9pbGVycGxhdGUvLi9zcmMvY29tbW9ucy91dGlscy9sb2cudXRpbC50cz81YzdmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcE5hbWUgPSAnUmVzZXJ2YSBTbG90J1xuY29uc3QgbG9nU3R5bGUgPVxuICAgICdiYWNrZ3JvdW5kOiAjNzFjN2VjOyBib3JkZXItcmFkaXVzOiAzcHg7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAwIDRweCdcbmNvbnN0IGxvZ0Vycm9yU3R5bGUgPVxuICAgICdiYWNrZ3JvdW5kOiAjQzYyODI4OyBib3JkZXItcmFkaXVzOiAzcHg7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAwIDRweCdcblxuY29uc3QgZXJyb3JQcm9wcyA9IChtZXNzYWdlOiBhbnksIHRhZzogc3RyaW5nKSA9PiAoe1xuICAgIHRhZyxcbiAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgZXJyb3I6IG1lc3NhZ2UsXG59KVxuXG5leHBvcnQgY29uc3QgbG9nID0gKG1lc3NhZ2U6IGFueSwgdGFnOiBzdHJpbmcgPSAnJykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGAlYyR7YXBwTmFtZX0gLSAke3RhZyA/IGAke3RhZ30gYCA6ICcnfUxvZ2AsIGxvZ1N0eWxlLCBtZXNzYWdlKVxufVxuXG5leHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZTogYW55LCB0YWc6IHN0cmluZyA9ICcnKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYCVjJHthcHBOYW1lfSAtICR7dGFnID8gYCR7dGFnfSBgIDogJyd9RXJyb3JgLFxuICAgICAgICBsb2dFcnJvclN0eWxlLFxuICAgICAgICBlcnJvclByb3BzKG1lc3NhZ2UsIHRhZylcbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBMb2dVdGlscyA9IHtcbiAgICBsb2csXG4gICAgZXJyb3IsXG59XG4iXSwibmFtZXMiOlsiYXBwTmFtZSIsImxvZ1N0eWxlIiwibG9nRXJyb3JTdHlsZSIsImVycm9yUHJvcHMiLCJtZXNzYWdlIiwidGFnIiwicGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciLCJlcnJvciIsImxvZyIsImNvbnNvbGUiLCJMb2dVdGlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/commons/utils/log.util.ts\n'
                )

                /***/
            },

        /***/ './src/components/Error/FrontError.tsx':
            /*!*********************************************!*\
  !*** ./src/components/Error/FrontError.tsx ***!
  \*********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                'use strict'
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/Error/index.tsx");\n\n\n\nconst FrontErrorPage = ()=>{\n    const message = "Ops! Algo deu errado.";\n    const details = "Por favor, entre em contato com a administra\\xe7\\xe3o do sistema para reportar o problema.";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__["default"], {\n        message: message,\n        details: details\n    }, void 0, false, {\n        fileName: "/Users/murilo/Development/React/next-boilerplate/src/components/Error/FrontError.tsx",\n        lineNumber: 10,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontErrorPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FcnJvci9Gcm9udEVycm9yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBRUE7QUFFekIsTUFBTUUsaUJBQWlCLElBQU07SUFDekIsTUFBTUMsVUFBVTtJQUNoQixNQUFNQyxVQUNGO0lBRUoscUJBQU8sOERBQUNILHlDQUFTQTtRQUFDRSxTQUFTQTtRQUFTQyxTQUFTQTs7Ozs7O0FBQ2pEO0FBRUEsaUVBQWVGLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRXJyb3IvRnJvbnRFcnJvci50c3g/MDdiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQYWdlRXJyb3IgZnJvbSAnLidcblxuY29uc3QgRnJvbnRFcnJvclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICdPcHMhIEFsZ28gZGV1IGVycmFkby4nXG4gICAgY29uc3QgZGV0YWlscyA9XG4gICAgICAgICdQb3IgZmF2b3IsIGVudHJlIGVtIGNvbnRhdG8gY29tIGEgYWRtaW5pc3RyYcOnw6NvIGRvIHNpc3RlbWEgcGFyYSByZXBvcnRhciBvIHByb2JsZW1hLidcblxuICAgIHJldHVybiA8UGFnZUVycm9yIG1lc3NhZ2U9e21lc3NhZ2V9IGRldGFpbHM9e2RldGFpbHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250RXJyb3JQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQYWdlRXJyb3IiLCJGcm9udEVycm9yUGFnZSIsIm1lc3NhZ2UiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Error/FrontError.tsx\n'
                )

                /***/
            },

        /***/ './src/components/Error/index.tsx':
            /*!****************************************!*\
  !*** ./src/components/Error/index.tsx ***!
  \****************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                'use strict'
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PageError = (props)=>{\n    const { message , statusCode , details , button  } = props;\n    const statusCodeMessage = statusCode ? `Erro ${statusCode} - ` : "";\n    const pageMessage = `${statusCodeMessage}${message}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            className: "text-center pt50-xs pb50-xs",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {\n                    children: pageMessage\n                }, void 0, false, {\n                    fileName: "/Users/murilo/Development/React/next-boilerplate/src/components/Error/index.tsx",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined),\n                details && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                    children: details\n                }, void 0, false, {\n                    fileName: "/Users/murilo/Development/React/next-boilerplate/src/components/Error/index.tsx",\n                    lineNumber: 25,\n                    columnNumber: 29\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {\n                    fileName: "/Users/murilo/Development/React/next-boilerplate/src/components/Error/index.tsx",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined),\n                button && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                    onClick: button.onClick,\n                    children: button.label\n                }, void 0, false, {\n                    fileName: "/Users/murilo/Development/React/next-boilerplate/src/components/Error/index.tsx",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/murilo/Development/React/next-boilerplate/src/components/Error/index.tsx",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: "/Users/murilo/Development/React/next-boilerplate/src/components/Error/index.tsx",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageError);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FcnJvci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBY2hELE1BQU1DLFlBQStDLENBQUNDLFFBQVU7SUFDNUQsTUFBTSxFQUFFQyxRQUFPLEVBQUVDLFdBQVUsRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUUsR0FBR0o7SUFFakQsTUFBTUssb0JBQW9CSCxhQUFhLENBQUMsS0FBSyxFQUFFQSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUU7SUFDbkUsTUFBTUksY0FBYyxDQUFDLEVBQUVELGtCQUFrQixFQUFFSixRQUFRLENBQUM7SUFFcEQscUJBQ0ksOERBQUNNO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7OEJBQUlIOzs7Ozs7Z0JBQ0pILHlCQUFXLDhEQUFDTzs4QkFBR1A7Ozs7Ozs4QkFDaEIsOERBQUNROzs7OztnQkFDQVAsd0JBQ0csOERBQUNBO29CQUFPUSxTQUFTUixPQUFPUSxPQUFPOzhCQUFHUixPQUFPUyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRTtBQUVBLGlFQUFlZCxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Vycm9yL2luZGV4LnRzeD8xZGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xuICAgIGxhYmVsOiBzdHJpbmdcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBQYWdlRXJyb3JQcm9wcyB7XG4gICAgbWVzc2FnZTogc3RyaW5nXG4gICAgc3RhdHVzQ29kZT86IG51bWJlclxuICAgIGRldGFpbHM/OiBzdHJpbmdcbiAgICBidXR0b24/OiBCdXR0b25Qcm9wc1xufVxuXG5jb25zdCBQYWdlRXJyb3I6IEZ1bmN0aW9uQ29tcG9uZW50PFBhZ2VFcnJvclByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgc3RhdHVzQ29kZSwgZGV0YWlscywgYnV0dG9uIH0gPSBwcm9wc1xuXG4gICAgY29uc3Qgc3RhdHVzQ29kZU1lc3NhZ2UgPSBzdGF0dXNDb2RlID8gYEVycm8gJHtzdGF0dXNDb2RlfSAtIGAgOiAnJ1xuICAgIGNvbnN0IHBhZ2VNZXNzYWdlID0gYCR7c3RhdHVzQ29kZU1lc3NhZ2V9JHttZXNzYWdlfWBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0NTAteHMgcGI1MC14c1wiPlxuICAgICAgICAgICAgICAgIDxoMj57cGFnZU1lc3NhZ2V9PC9oMj5cbiAgICAgICAgICAgICAgICB7ZGV0YWlscyAmJiA8cD57ZGV0YWlsc308L3A+fVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIHtidXR0b24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J1dHRvbi5vbkNsaWNrfT57YnV0dG9uLmxhYmVsfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlRXJyb3JcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2VFcnJvciIsInByb3BzIiwibWVzc2FnZSIsInN0YXR1c0NvZGUiLCJkZXRhaWxzIiwiYnV0dG9uIiwic3RhdHVzQ29kZU1lc3NhZ2UiLCJwYWdlTWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImJyIiwib25DbGljayIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Error/index.tsx\n'
                )

                /***/
            },

        /***/ './src/components/ErrorBoundary/index.tsx':
            /*!************************************************!*\
  !*** ./src/components/ErrorBoundary/index.tsx ***!
  \************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                'use strict'
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _commons_utils_log_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/commons/utils/log.util */ "./src/commons/utils/log.util.ts");\n/* harmony import */ var _Error_FrontError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Error/FrontError */ "./src/components/Error/FrontError.tsx");\n\n\n\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static getDerivedStateFromError(error) {\n        return {\n            hasError: true,\n            error: error?.stack\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        _commons_utils_log_util__WEBPACK_IMPORTED_MODULE_2__.LogUtils.error(`${error}`);\n    }\n    render() {\n        if (this.state.hasError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Error_FrontError__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {\n            fileName: "/Users/murilo/Development/React/next-boilerplate/src/components/ErrorBoundary/index.tsx",\n            lineNumber: 30,\n            columnNumber: 41\n        }, this);\n        return this.props.children;\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            hasError: false\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUVKO0FBQ0g7QUFZaEQsTUFBTUcsc0JBQXNCSCw0Q0FBU0E7SUFLakMsT0FBY0kseUJBQXlCQyxLQUFZLEVBQVM7UUFDeEQsT0FBTztZQUFFQyxVQUFVLElBQUk7WUFBRUQsT0FBT0EsT0FBT0U7UUFBTTtJQUNqRDtJQUVPQyxrQkFBa0JILEtBQVksRUFBRUksU0FBb0IsRUFBRTtRQUN6RFIsbUVBQWMsQ0FBQyxDQUFDLEVBQUVJLE1BQU0sQ0FBQztJQUM3QjtJQUVPSyxTQUFTO1FBQ1osSUFBSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsUUFBUSxFQUFFLHFCQUFPLDhEQUFDSix5REFBY0E7Ozs7O1FBQy9DLE9BQU8sSUFBSSxDQUFDVSxLQUFLLENBQUNDLFFBQVE7SUFDOUI7OzthQWZPRixRQUFlO1lBQ2xCTCxVQUFVLEtBQUs7UUFDbkI7O0FBY0o7QUFFQSxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L2luZGV4LnRzeD9mMDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXJyb3JJbmZvLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgTG9nVXRpbHMgfSBmcm9tICdAL2NvbW1vbnMvdXRpbHMvbG9nLnV0aWwnXG5pbXBvcnQgRnJvbnRFcnJvclBhZ2UgZnJvbSAnLi4vRXJyb3IvRnJvbnRFcnJvcidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gICAgaGFzRXJyb3I6IGJvb2xlYW5cbiAgICBlcnJvcj86IHN0cmluZyB8IEVycm9yIHwgdW5kZWZpbmVkXG4gICAgZXJyb3JJbmZvPzogRXJyb3JJbmZvIHwgdW5kZWZpbmVkXG59XG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yOiBFcnJvcik6IFN0YXRlIHtcbiAgICAgICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUsIGVycm9yOiBlcnJvcj8uc3RhY2sgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgICAgIExvZ1V0aWxzLmVycm9yKGAke2Vycm9yfWApXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHJldHVybiA8RnJvbnRFcnJvclBhZ2UgLz5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnlcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJMb2dVdGlscyIsIkZyb250RXJyb3JQYWdlIiwiRXJyb3JCb3VuZGFyeSIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImVycm9yIiwiaGFzRXJyb3IiLCJzdGFjayIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3JJbmZvIiwicmVuZGVyIiwic3RhdGUiLCJwcm9wcyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ErrorBoundary/index.tsx\n'
                )

                /***/
            },

        /***/ './src/pages/_app.tsx':
            /*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                'use strict'
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ "./src/styles/globals.css");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_template_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/template.css */ "./src/styles/template.css");\n/* harmony import */ var _styles_template_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_template_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ "next-i18next");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ErrorBoundary */ "./src/components/ErrorBoundary/index.tsx");\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__["default"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: "/Users/murilo/Development/React/next-boilerplate/src/pages/_app.tsx",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: "/Users/murilo/Development/React/next-boilerplate/src/pages/_app.tsx",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.appWithTranslation)(App /*, nextI18NextConfig */ ));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQztBQUVtQjtBQUNLO0FBRXRELE1BQU1FLE1BQU0sQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUFLO0lBQ2hELHFCQUNJLDhEQUFDSCxpRUFBYUE7a0JBQ1YsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHcEM7QUFFQSxpRUFBZUosZ0VBQWtCQSxDQUFDRSxJQUFJLHNCQUFzQixNQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJ0Avc3R5bGVzL3RlbXBsYXRlLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJ0AvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5J1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oQXBwIC8qLCBuZXh0STE4TmV4dENvbmZpZyAqLylcbiJdLCJuYW1lcyI6WyJhcHBXaXRoVHJhbnNsYXRpb24iLCJFcnJvckJvdW5kYXJ5IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n'
                )

                /***/
            },

        /***/ './src/styles/globals.css':
            /*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
            /***/ () => {
                /***/
            },

        /***/ './src/styles/template.css':
            /*!*********************************!*\
  !*** ./src/styles/template.css ***!
  \*********************************/
            /***/ () => {
                /***/
            },

        /***/ 'next-i18next':
            /*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
            /***/ (module) => {
                'use strict'
                module.exports = require('next-i18next')

                /***/
            },

        /***/ react:
            /*!************************!*\
  !*** external "react" ***!
  \************************/
            /***/ (module) => {
                'use strict'
                module.exports = require('react')

                /***/
            },

        /***/ 'react/jsx-dev-runtime':
            /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
            /***/ (module) => {
                'use strict'
                module.exports = require('react/jsx-dev-runtime')

                /***/
            },
    }
    // load runtime
    var __webpack_require__ = require('../webpack-runtime.js')
    __webpack_require__.C(exports)
    var __webpack_exec__ = (moduleId) =>
        __webpack_require__((__webpack_require__.s = moduleId))
    var __webpack_exports__ = __webpack_exec__('./src/pages/_app.tsx')
    module.exports = __webpack_exports__
})()
