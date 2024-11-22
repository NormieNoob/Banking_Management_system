"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/signup/page",{

/***/ "(app-pages-browser)/./src/app/(auth)/signup/page.js":
/*!***************************************!*\
  !*** ./src/app/(auth)/signup/page.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signup)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"{process.env.NEXT_PUBLIC_BACKEND_URL}/signup\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\nfunction Signup() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        username: '',\n        password: ''\n    });\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch($(_templateObject()), {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(formData)\n            });\n            const data = await response.json();\n            if (!response.ok) {\n                throw new Error(data.message || 'Failed to sign up');\n            }\n            setMessage(data.message);\n        } catch (error) {\n            setMessage(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Signup\"\n            }, void 0, false, {\n                fileName: \"/Users/mithun/CSU Fullerton Dropbox/Mithun Surve/Mac/Documents/Classes/Backend 449/Project/frontend/banking_sys/src/app/(auth)/signup/page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Username\",\n                        value: formData.username,\n                        onChange: (e)=>setFormData({\n                                ...formData,\n                                username: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/mithun/CSU Fullerton Dropbox/Mithun Surve/Mac/Documents/Classes/Backend 449/Project/frontend/banking_sys/src/app/(auth)/signup/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        value: formData.password,\n                        onChange: (e)=>setFormData({\n                                ...formData,\n                                password: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/mithun/CSU Fullerton Dropbox/Mithun Surve/Mac/Documents/Classes/Backend 449/Project/frontend/banking_sys/src/app/(auth)/signup/page.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mithun/CSU Fullerton Dropbox/Mithun Surve/Mac/Documents/Classes/Backend 449/Project/frontend/banking_sys/src/app/(auth)/signup/page.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mithun/CSU Fullerton Dropbox/Mithun Surve/Mac/Documents/Classes/Backend 449/Project/frontend/banking_sys/src/app/(auth)/signup/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/mithun/CSU Fullerton Dropbox/Mithun Surve/Mac/Documents/Classes/Backend 449/Project/frontend/banking_sys/src/app/(auth)/signup/page.js\",\n                lineNumber: 47,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mithun/CSU Fullerton Dropbox/Mithun Surve/Mac/Documents/Classes/Backend 449/Project/frontend/banking_sys/src/app/(auth)/signup/page.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Signup, \"LA3N1Il6HiG8RV+GcfAOJPW9j6o=\");\n_c = Signup;\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL3NpZ251cC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBRWxCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7UUFBRUksVUFBVTtRQUFJQyxVQUFVO0lBQUc7SUFDdEUsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUMsc0JBQWlEO2dCQUM1RUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNoQjtZQUN2QjtZQUNBLE1BQU1pQixPQUFPLE1BQU1SLFNBQVNTLElBQUk7WUFDaEMsSUFBSSxDQUFDVCxTQUFTVSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTUgsS0FBS2IsT0FBTyxJQUFJO1lBQ2xDO1lBQ0FDLFdBQVdZLEtBQUtiLE9BQU87UUFDekIsRUFBRSxPQUFPaUIsT0FBTztZQUNkaEIsV0FBV2dCLE1BQU1qQixPQUFPO1FBQzFCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2tCOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVuQjs7a0NBQ2QsOERBQUNvQjt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBTzdCLFNBQVNFLFFBQVE7d0JBQ3hCNEIsVUFBVSxDQUFDdkIsSUFBTU4sWUFBWTtnQ0FBRSxHQUFHRCxRQUFRO2dDQUFFRSxVQUFVSyxFQUFFd0IsTUFBTSxDQUFDRixLQUFLOzRCQUFDOzs7Ozs7a0NBRXZFLDhEQUFDSDt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBTzdCLFNBQVNHLFFBQVE7d0JBQ3hCMkIsVUFBVSxDQUFDdkIsSUFBTU4sWUFBWTtnQ0FBRSxHQUFHRCxRQUFRO2dDQUFFRyxVQUFVSSxFQUFFd0IsTUFBTSxDQUFDRixLQUFLOzRCQUFDOzs7Ozs7a0NBRXZFLDhEQUFDRzt3QkFBT0wsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7O1lBRXZCdkIseUJBQVcsOERBQUM2QjswQkFBRzdCOzs7Ozs7Ozs7Ozs7QUFHdEI7R0E3Q3dCTDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21pdGh1bi9DU1UgRnVsbGVydG9uIERyb3Bib3gvTWl0aHVuIFN1cnZlL01hYy9Eb2N1bWVudHMvQ2xhc3Nlcy9CYWNrZW5kIDQ0OS9Qcm9qZWN0L2Zyb250ZW5kL2Jhbmtpbmdfc3lzL3NyYy9hcHAvKGF1dGgpL3NpZ251cC9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cCgpIHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJGB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L3NpZ251cGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBzaWduIHVwJyk7XG4gICAgICB9XG4gICAgICBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldE1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5TaWdudXA8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlcm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWdudXA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHttZXNzYWdlICYmIDxwPnttZXNzYWdlfTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTaWdudXAiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIiQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9rIiwiRXJyb3IiLCJlcnJvciIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/signup/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/esm/_tagged_template_literal.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _: () => (/* binding */ _tagged_template_literal)\n/* harmony export */ });\nfunction _tagged_template_literal(strings, raw) {\n    if (!raw) raw = strings.slice(0);\n\n    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvZXNtL190YWdnZWRfdGVtcGxhdGVfbGl0ZXJhbC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFQSw0REFBNEQsT0FBTyw2QkFBNkI7QUFDaEc7QUFDeUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXRodW4vQ1NVIEZ1bGxlcnRvbiBEcm9wYm94L01pdGh1biBTdXJ2ZS9NYWMvRG9jdW1lbnRzL0NsYXNzZXMvQmFja2VuZCA0NDkvUHJvamVjdC9mcm9udGVuZC9iYW5raW5nX3N5cy9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2VzbS9fdGFnZ2VkX3RlbXBsYXRlX2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3RhZ2dlZF90ZW1wbGF0ZV9saXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICAgIGlmICghcmF3KSByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTtcbn1cbmV4cG9ydCB7IF90YWdnZWRfdGVtcGxhdGVfbGl0ZXJhbCBhcyBfIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\n"));

/***/ })

});