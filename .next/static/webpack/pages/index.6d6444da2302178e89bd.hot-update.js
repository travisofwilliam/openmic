webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignUpForm.js":
/*!**********************************!*\
  !*** ./components/SignUpForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_traviswilliams_Desktop_openmic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/openmic/components/SignUpForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar SignUpForm = function SignUpForm(_ref) {\n  _s();\n\n  var signedUp = _ref.signedUp,\n      setSignedUp = _ref.setSignedUp;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      artist = _useState[0],\n      setArtist = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      taken = _useState2[0],\n      setTaken = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      timeSlot = _useState3[0],\n      setTimeSlot = _useState3[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n\n    if (taken.includes(timeSlot)) {\n      alert('That time slot is not available!');\n    } else if (timeSlot === '--' || timeSlot === '') {\n      alert('Please select a time slot!');\n    } else if (artist === '') {\n      alert('Please enter an artist/band name!');\n    } else if (signedUp.some(function (signedUpArtist) {\n      return signedUpArtist.artist === artist;\n    })) {\n      alert(\"\".concat(artist, \" is already signed up for Open Mic!\"));\n    } else {\n      var signUpObject = {\n        artist: artist,\n        timeSlot: timeSlot\n      };\n      setSignedUp([].concat(Object(_Users_traviswilliams_Desktop_openmic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(signedUp), [signUpObject]));\n      setTaken([].concat(Object(_Users_traviswilliams_Desktop_openmic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taken), [timeSlot]));\n    }\n\n    setArtist('');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-sm-5 signup\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"col-sm-12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card text-center\",\n        style: {\n          height: '400px',\n          opacity: '0.9'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n          className: \"card-header\",\n          children: \"Sign Up!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"row card-body h-100 align-items-center text-center justify-content-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n            onSubmit: handleSubmit,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              value: artist,\n              placeholder: \"Band/Artist\",\n              onChange: function onChange(e) {\n                setArtist(e.target.value);\n              },\n              className: \"mb-4\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"dropdown\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n                className: \"btn btn-secondary dropdown-toggle\",\n                onChange: function onChange(e) {\n                  setTimeSlot(e.target.value);\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                  value: \"--\",\n                  children: \"Time Slot\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 41\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                  value: \"5:45pm - 6:00pm\",\n                  disabled: taken.includes('5:45pm - 6:00pm') ? true : null,\n                  children: \"5:45pm - 6:00pm\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 41\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                  value: \"6:00pm - 6:15pm\",\n                  disabled: taken.includes('6:00pm - 6:15pm') ? true : null,\n                  children: \"6:00pm - 6:15pm\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 41\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                  value: \"6:15pm - 6:30pm\",\n                  disabled: taken.includes('6:15pm - 6:30pm') ? true : null,\n                  children: \"6:15pm - 6:30pm\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 41\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                  value: \"6:30pm - 6:45pm\",\n                  disabled: taken.includes('6:30pm - 6:45pm') ? true : null,\n                  children: \"6:30pm - 6:45pm\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 41\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"submit\",\n              className: \"btn btn-primary\",\n              children: \"Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SignUpForm, \"DvoxzpvyT5ICtcHxlGU/KTs1r9U=\");\n\n_c = SignUpForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUpForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXBGb3JtLmpzPzJmM2UiXSwibmFtZXMiOlsiU2lnblVwRm9ybSIsInNpZ25lZFVwIiwic2V0U2lnbmVkVXAiLCJ1c2VTdGF0ZSIsImFydGlzdCIsInNldEFydGlzdCIsInRha2VuIiwic2V0VGFrZW4iLCJ0aW1lU2xvdCIsInNldFRpbWVTbG90IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5jbHVkZXMiLCJhbGVydCIsInNvbWUiLCJzaWduZWRVcEFydGlzdCIsInNpZ25VcE9iamVjdCIsImhlaWdodCIsIm9wYWNpdHkiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQUEsa0JBRWxCQyxzREFBUSxDQUFDLEVBQUQsQ0FGVTtBQUFBLE1BRXZDQyxNQUZ1QztBQUFBLE1BRS9CQyxTQUYrQjs7QUFBQSxtQkFHcEJGLHNEQUFRLENBQUMsRUFBRCxDQUhZO0FBQUEsTUFHdkNHLEtBSHVDO0FBQUEsTUFHaENDLFFBSGdDOztBQUFBLG1CQUlkSixzREFBUSxDQUFDLEVBQUQsQ0FKTTtBQUFBLE1BSXZDSyxRQUp1QztBQUFBLE1BSTdCQyxXQUo2Qjs7QUFNOUMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSU4sS0FBSyxDQUFDTyxRQUFOLENBQWVMLFFBQWYsQ0FBSixFQUE4QjtBQUMxQk0sV0FBSyxDQUFDLGtDQUFELENBQUw7QUFDSCxLQUZELE1BRU8sSUFBSU4sUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxFQUF0QyxFQUEwQztBQUM3Q00s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QSxxQkFIUixlQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkosZUFhSTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0FoRUQ7O0dBQU1iLFU7O0tBQUFBLFU7QUFrRVNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWduVXBGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgU2lnblVwRm9ybSA9ICh7IHNpZ25lZFVwLCBzZXRTaWduZWRVcCB9KSA9PiB7XG5cbiAgICBjb25zdCBbYXJ0aXN0LCBzZXRBcnRpc3RdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3Rha2VuLCBzZXRUYWtlbl0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbdGltZVNsb3QsIHNldFRpbWVTbG90XSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgaWYgKHRha2VuLmluY2x1ZGVzKHRpbWVTbG90KSkge1xuICAgICAgICAgICAgYWxlcnQoJ1RoYXQgdGltZSBzbG90IGlzIG5vdCBhdmFpbGFibGUhJylcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lU2xvdCA9PT0gJy0tJyB8fCB0aW1lU2xvdCA9PT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgdGltZSBzbG90IScpXG4gICAgICAgIH0gZWxzZSBpZiAoYXJ0aXN0ID09PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhbiBhcnRpc3QvYmFuZCBuYW1lIScpXG4gICAgICAgIH0gZWxzZSBpZiAoc2lnbmVkVXAuc29tZShzaWduZWRVcEFydGlzdCA9PiBzaWduZWRVcEFydGlzdC5hcnRpc3QgPT09IGFydGlzdCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KGAke2FydGlzdH0gaXMgYWxyZWFkeSBzaWduZWQgdXAgZm9yIE9wZW4gTWljIWApXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNpZ25VcE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBhcnRpc3QsXG4gICAgICAgICAgICAgICAgdGltZVNsb3RcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0U2lnbmVkVXAoW1xuICAgICAgICAgICAgICAgIC4uLnNpZ25lZFVwLFxuICAgICAgICAgICAgICAgIHNpZ25VcE9iamVjdFxuICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgc2V0VGFrZW4oW1xuICAgICAgICAgICAgICAgIC4uLnRha2VuLFxuICAgICAgICAgICAgICAgIHRpbWVTbG90XG4gICAgICAgICAgICBdKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0QXJ0aXN0KCcnKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tNSBzaWdudXAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICc0MDBweCcsIG9wYWNpdHk6ICcwLjknIH19PlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcic+U2lnbiBVcCE8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjYXJkLWJvZHkgaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXthcnRpc3R9IHBsYWNlaG9sZGVyPVwiQmFuZC9BcnRpc3RcIiBvbkNoYW5nZT17KGUpID0+IHtzZXRBcnRpc3QoZS50YXJnZXQudmFsdWUpfX0gY2xhc3NOYW1lPVwibWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcIiBvbkNoYW5nZT17KGUpID0+IHtzZXRUaW1lU2xvdChlLnRhcmdldC52YWx1ZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLS1cIj5UaW1lIFNsb3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTo0NXBtIC0gNjowMHBtXCIgZGlzYWJsZWQ9eyB0YWtlbi5pbmNsdWRlcygnNTo0NXBtIC0gNjowMHBtJykgPyB0cnVlIDogbnVsbCB9PjU6NDVwbSAtIDY6MDBwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2OjAwcG0gLSA2OjE1cG1cIiBkaXNhYmxlZD17IHRha2VuLmluY2x1ZGVzKCc2OjAwcG0gLSA2OjE1cG0nKSA/IHRydWUgOiBudWxsIH0+NjowMHBtIC0gNjoxNXBtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjY6MTVwbSAtIDY6MzBwbVwiIGRpc2FibGVkPXsgdGFrZW4uaW5jbHVkZXMoJzY6MTVwbSAtIDY6MzBwbScpID8gdHJ1ZSA6IG51bGwgfT42OjE1cG0gLSA2OjMwcG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjozMHBtIC0gNjo0NXBtXCIgZGlzYWJsZWQ9eyB0YWtlbi5pbmNsdWRlcygnNjozMHBtIC0gNjo0NXBtJykgPyB0cnVlIDogbnVsbCB9PjY6MzBwbSAtIDY6NDVwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBVcDwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignUpForm.js\n");

/***/ })

})