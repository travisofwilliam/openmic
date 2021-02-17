webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ArtistList.js":
/*!**********************************!*\
  !*** ./components/ArtistList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/openmic/components/ArtistList.js\",\n    _this = undefined;\n\nvar ArtistList = function ArtistList(_ref) {\n  var signedUp = _ref.signedUp,\n      setSignedUp = _ref.setSignedUp;\n\n  var handleDelete = function handleDelete(index) {\n    var updatedSignedUp = signedUp.splice(index);\n    setSignedUp(updatedSignedUp);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-sm-7 text-center\",\n    style: {\n      height: '400px',\n      opacity: '0.9'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"col-sm-12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card\",\n        style: {\n          minHeight: '400px'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"list-group\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-header\",\n            children: \"Schedule\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-body\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              style: {\n                listStyleType: 'none',\n                paddingLeft: '0px'\n              },\n              children: signedUp.length < 1 ? 'No artists currently signed up' : signedUp.map(function (currentSignedUp, idx) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: \"d-flex list-group-item justify-content-between\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    children: [currentSignedUp.artist, \" (\", currentSignedUp.timeSlot, \")\"]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 24,\n                    columnNumber: 49\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    className: \"btn btn-danger\",\n                    onClick: function onClick(e) {\n                      e.preventDefault();\n                      handleDelete(idx);\n                      console.log('deleted');\n                    },\n                    children: \"Delete\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 25,\n                    columnNumber: 53\n                  }, _this)]\n                }, idx, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 23,\n                  columnNumber: 48\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = ArtistList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtistList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ArtistList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpc3RMaXN0LmpzPzEwNDkiXSwibmFtZXMiOlsiQXJ0aXN0TGlzdCIsInNpZ25lZFVwIiwic2V0U2lnbmVkVXAiLCJoYW5kbGVEZWxldGUiLCJpbmRleCIsInVwZGF0ZWRTaWduZWRVcCIsInNwbGljZSIsImhlaWdodCIsIm9wYWNpdHkiLCJtaW5IZWlnaHQiLCJsaXN0U3R5bGVUeXBlIiwicGFkZGluZ0xlZnQiLCJsZW5ndGgiLCJtYXAiLCJjdXJyZW50U2lnbmVkVXAiLCJpZHgiLCJhcnRpc3QiLCJ0aW1lU2xvdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBK0I7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFFOUMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBRTVCLFFBQU1DLGVBQWUsR0FBR0osUUFBUSxDQUFDSyxNQUFULENBQWdCRixLQUFoQixDQUF4QjtBQUVBRixlQUFXLENBQUNHLGVBQUQsQ0FBWDtBQUNILEdBTEQ7O0FBT0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsU0FBSyxFQUFFO0FBQUVFLFlBQU0sRUFBRSxPQUFWO0FBQW1CQyxhQUFPLEVBQUU7QUFBNUIsS0FBN0M7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUU7QUFBWixTQUE3QjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNJO0FBQUksbUJBQUssRUFBRTtBQUFFQyw2QkFBYSxFQUFFLE1BQWpCO0FBQXlCQywyQkFBVyxFQUFFO0FBQXRDLGVBQVg7QUFBQSx3QkFFUVYsUUFBUSxDQUFDVyxNQUFULEdBQWtCLENBQWxCLEdBQXNCLGdDQUF0QixHQUNFWCxRQUFRLENBQUNZLEdBQVQsQ0FBYSxVQUFDQyxlQUFELEVBQWtCQyxHQUFsQixFQUEwQjtBQUNyQyxvQ0FBTztBQUFjLDJCQUFTLEVBQUMsZ0RBQXhCO0FBQUEsMENBQ0M7QUFBQSwrQkFBT0QsZUFBZSxDQUFDRSxNQUF2QixRQUFxQ0YsZUFBZSxDQUFDRyxRQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsZUFFSztBQUFRLDZCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLDJCQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUMvQ0EsdUJBQUMsQ0FBQ0MsY0FBRjtBQUNBaEIsa0NBQVksQ0FBQ1ksR0FBRCxDQUFaO0FBQ0FLLDZCQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0gscUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkw7QUFBQSxtQkFBU04sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFQO0FBUUgsZUFUQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOEJILENBdkNEOztLQUFNZixVO0FBeUNTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXJ0aXN0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFydGlzdExpc3QgPSAoeyBzaWduZWRVcCwgc2V0U2lnbmVkVXAgfSkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGluZGV4KSA9PiB7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZFNpZ25lZFVwID0gc2lnbmVkVXAuc3BsaWNlKGluZGV4KVxuXG4gICAgICAgIHNldFNpZ25lZFVwKHVwZGF0ZWRTaWduZWRVcClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS03IHRleHQtY2VudGVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNDAwcHgnLCBvcGFjaXR5OiAnMC45JyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3ttaW5IZWlnaHQ6ICc0MDBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NoZWR1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ25vbmUnLCBwYWRkaW5nTGVmdDogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lZFVwLmxlbmd0aCA8IDEgPyAnTm8gYXJ0aXN0cyBjdXJyZW50bHkgc2lnbmVkIHVwJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2lnbmVkVXAubWFwKChjdXJyZW50U2lnbmVkVXAsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpZHh9IGNsYXNzTmFtZT1cImQtZmxleCBsaXN0LWdyb3VwLWl0ZW0ganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50U2lnbmVkVXAuYXJ0aXN0fSAmIzQwO3tjdXJyZW50U2lnbmVkVXAudGltZVNsb3R9JiM0MTs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUoaWR4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpc3RMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArtistList.js\n");

/***/ })

})