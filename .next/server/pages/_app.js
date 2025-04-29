/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    // This effect will run on the client side to remove any unwanted elements\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Function to remove the cloud image\n            const removeCloudImage = {\n                \"MyApp.useEffect.removeCloudImage\": ()=>{\n                    // Target SVGs that might be the cloud image\n                    const svgs = document.querySelectorAll('svg');\n                    svgs.forEach({\n                        \"MyApp.useEffect.removeCloudImage\": (svg)=>{\n                            // Check if it's a large SVG that might be the cloud\n                            const rect = svg.getBoundingClientRect();\n                            if (rect.width > 300 && rect.height > 300) {\n                                svg.style.display = 'none';\n                                svg.remove();\n                            }\n                        }\n                    }[\"MyApp.useEffect.removeCloudImage\"]);\n                    // Also remove any large images\n                    const images = document.querySelectorAll('img');\n                    images.forEach({\n                        \"MyApp.useEffect.removeCloudImage\": (img)=>{\n                            const rect = img.getBoundingClientRect();\n                            if (rect.width > 300 && rect.height > 300 && !img.closest('.image-container')) {\n                                img.style.display = 'none';\n                                img.remove();\n                            }\n                        }\n                    }[\"MyApp.useEffect.removeCloudImage\"]);\n                    // Check for any fixed positioned elements at the bottom\n                    const allElements = document.querySelectorAll('*');\n                    allElements.forEach({\n                        \"MyApp.useEffect.removeCloudImage\": (el)=>{\n                            const style = window.getComputedStyle(el);\n                            if (style.position === 'fixed' && (style.bottom === '0px' || parseInt(style.bottom) < 100) && !el.closest('.nav-button')) {\n                                el.style.display = 'none';\n                                el.remove();\n                            }\n                        }\n                    }[\"MyApp.useEffect.removeCloudImage\"]);\n                }\n            }[\"MyApp.useEffect.removeCloudImage\"];\n            // Run immediately and also set an interval to keep checking\n            removeCloudImage();\n            const interval = setInterval(removeCloudImage, 1000);\n            // Clean up\n            return ({\n                \"MyApp.useEffect\": ()=>clearInterval(interval)\n            })[\"MyApp.useEffect\"];\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2b769c5ab62cb0d4\",\n                children: 'body::after,body>svg,body>img,#__next::after,#__next>svg,#__next>img,[class*=\"cloud\"],[class*=\"background-image\"],[class*=\"large-image\"]{display:none!important;opacity:0!important;visibility:hidden!important}'\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                className: \"jsx-2b769c5ab62cb0d4\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\askib\\\\OneDrive\\\\Desktop\\\\work\\\\New folder\\\\inpiration-homepage\\\\react-inspirational-homepage\\\\pages\\\\_app.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDRDtBQUVsQyxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLDBFQUEwRTtJQUMxRUgsZ0RBQVNBOzJCQUFDO1lBQ1IscUNBQXFDO1lBQ3JDLE1BQU1JO29EQUFtQjtvQkFDdkIsNENBQTRDO29CQUM1QyxNQUFNQyxPQUFPQyxTQUFTQyxnQkFBZ0IsQ0FBQztvQkFDdkNGLEtBQUtHLE9BQU87NERBQUNDLENBQUFBOzRCQUNYLG9EQUFvRDs0QkFDcEQsTUFBTUMsT0FBT0QsSUFBSUUscUJBQXFCOzRCQUN0QyxJQUFJRCxLQUFLRSxLQUFLLEdBQUcsT0FBT0YsS0FBS0csTUFBTSxHQUFHLEtBQUs7Z0NBQ3pDSixJQUFJSyxLQUFLLENBQUNDLE9BQU8sR0FBRztnQ0FDcEJOLElBQUlPLE1BQU07NEJBQ1o7d0JBQ0Y7O29CQUVBLCtCQUErQjtvQkFDL0IsTUFBTUMsU0FBU1gsU0FBU0MsZ0JBQWdCLENBQUM7b0JBQ3pDVSxPQUFPVCxPQUFPOzREQUFDVSxDQUFBQTs0QkFDYixNQUFNUixPQUFPUSxJQUFJUCxxQkFBcUI7NEJBQ3RDLElBQUlELEtBQUtFLEtBQUssR0FBRyxPQUFPRixLQUFLRyxNQUFNLEdBQUcsT0FBTyxDQUFDSyxJQUFJQyxPQUFPLENBQUMscUJBQXFCO2dDQUM3RUQsSUFBSUosS0FBSyxDQUFDQyxPQUFPLEdBQUc7Z0NBQ3BCRyxJQUFJRixNQUFNOzRCQUNaO3dCQUNGOztvQkFFQSx3REFBd0Q7b0JBQ3hELE1BQU1JLGNBQWNkLFNBQVNDLGdCQUFnQixDQUFDO29CQUM5Q2EsWUFBWVosT0FBTzs0REFBQ2EsQ0FBQUE7NEJBQ2xCLE1BQU1QLFFBQVFRLE9BQU9DLGdCQUFnQixDQUFDRjs0QkFDdEMsSUFBSVAsTUFBTVUsUUFBUSxLQUFLLFdBQ2xCVixDQUFBQSxNQUFNVyxNQUFNLEtBQUssU0FBU0MsU0FBU1osTUFBTVcsTUFBTSxJQUFJLEdBQUUsS0FDdEQsQ0FBQ0osR0FBR0YsT0FBTyxDQUFDLGdCQUFnQjtnQ0FDOUJFLEdBQUdQLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO2dDQUNuQk0sR0FBR0wsTUFBTTs0QkFDWDt3QkFDRjs7Z0JBQ0Y7O1lBRUEsNERBQTREO1lBQzVEWjtZQUNBLE1BQU11QixXQUFXQyxZQUFZeEIsa0JBQWtCO1lBRS9DLFdBQVc7WUFDWDttQ0FBTyxJQUFNeUIsY0FBY0Y7O1FBQzdCOzBCQUFHLEVBQUU7SUFFTCxxQkFDRTs7Ozs7OzBCQWlCRSw4REFBQ3pCO2dCQUFXLEdBQUdDLFNBQVM7MkRBQVRBLGFBQUFBLCtCQUFBQTs7Ozs7Ozs7QUFHckI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhc2tpYlxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtcXE5ldyBmb2xkZXJcXGlucGlyYXRpb24taG9tZXBhZ2VcXHJlYWN0LWluc3BpcmF0aW9uYWwtaG9tZXBhZ2VcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBUaGlzIGVmZmVjdCB3aWxsIHJ1biBvbiB0aGUgY2xpZW50IHNpZGUgdG8gcmVtb3ZlIGFueSB1bndhbnRlZCBlbGVtZW50c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgY2xvdWQgaW1hZ2VcbiAgICBjb25zdCByZW1vdmVDbG91ZEltYWdlID0gKCkgPT4ge1xuICAgICAgLy8gVGFyZ2V0IFNWR3MgdGhhdCBtaWdodCBiZSB0aGUgY2xvdWQgaW1hZ2VcbiAgICAgIGNvbnN0IHN2Z3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdmcnKTtcbiAgICAgIHN2Z3MuZm9yRWFjaChzdmcgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGEgbGFyZ2UgU1ZHIHRoYXQgbWlnaHQgYmUgdGhlIGNsb3VkXG4gICAgICAgIGNvbnN0IHJlY3QgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChyZWN0LndpZHRoID4gMzAwICYmIHJlY3QuaGVpZ2h0ID4gMzAwKSB7XG4gICAgICAgICAgc3ZnLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgc3ZnLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQWxzbyByZW1vdmUgYW55IGxhcmdlIGltYWdlc1xuICAgICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gICAgICBpbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gaW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAocmVjdC53aWR0aCA+IDMwMCAmJiByZWN0LmhlaWdodCA+IDMwMCAmJiAhaW1nLmNsb3Nlc3QoJy5pbWFnZS1jb250YWluZXInKSkge1xuICAgICAgICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENoZWNrIGZvciBhbnkgZml4ZWQgcG9zaXRpb25lZCBlbGVtZW50cyBhdCB0aGUgYm90dG9tXG4gICAgICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcbiAgICAgIGFsbEVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnICYmIFxuICAgICAgICAgICAgKHN0eWxlLmJvdHRvbSA9PT0gJzBweCcgfHwgcGFyc2VJbnQoc3R5bGUuYm90dG9tKSA8IDEwMCkgJiYgXG4gICAgICAgICAgICAhZWwuY2xvc2VzdCgnLm5hdi1idXR0b24nKSkge1xuICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBSdW4gaW1tZWRpYXRlbHkgYW5kIGFsc28gc2V0IGFuIGludGVydmFsIHRvIGtlZXAgY2hlY2tpbmdcbiAgICByZW1vdmVDbG91ZEltYWdlKCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChyZW1vdmVDbG91ZEltYWdlLCAxMDAwKTtcblxuICAgIC8vIENsZWFuIHVwXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLyogT3ZlcnJpZGUgYW55IGNsb3VkIGltYWdlIHRoYXQgbWlnaHQgYmUgYWRkZWQgYnkgYSB0aGlyZC1wYXJ0eSBzY3JpcHQgKi9cbiAgICAgICAgYm9keTo6YWZ0ZXIsIFxuICAgICAgICBib2R5ID4gc3ZnLCBcbiAgICAgICAgYm9keSA+IGltZyxcbiAgICAgICAgI19fbmV4dDo6YWZ0ZXIsXG4gICAgICAgICNfX25leHQgPiBzdmcsXG4gICAgICAgICNfX25leHQgPiBpbWcsXG4gICAgICAgIFtjbGFzcyo9XCJjbG91ZFwiXSxcbiAgICAgICAgW2NsYXNzKj1cImJhY2tncm91bmQtaW1hZ2VcIl0sXG4gICAgICAgIFtjbGFzcyo9XCJsYXJnZS1pbWFnZVwiXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlbW92ZUNsb3VkSW1hZ2UiLCJzdmdzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInN2ZyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSIsImltYWdlcyIsImltZyIsImNsb3Nlc3QiLCJhbGxFbGVtZW50cyIsImVsIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwiYm90dG9tIiwicGFyc2VJbnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();