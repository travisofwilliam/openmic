webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ArtistList.js":
/*!**********************************!*\
  !*** ./components/ArtistList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/openmic/components/ArtistList.js\",\n    _this = undefined;\n\nvar ArtistList = function ArtistList(_ref) {\n  var signedUp = _ref.signedUp,\n      setSignedUp = _ref.setSignedUp,\n      taken = _ref.taken,\n      setTaken = _ref.setTaken;\n\n  var handleDelete = function handleDelete(index, timeSlot) {\n    setTaken(taken.filter(function (time) {\n      return time != timeSlot;\n    }));\n    setSignedUp(signedUp.filter(function (artist, idx) {\n      return idx != index;\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-sm-7 text-center\",\n    style: {\n      height: '400px',\n      opacity: '0.9'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"col-sm-12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card\",\n        style: {\n          minHeight: '400px'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"list-group\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-header\",\n            children: \"Schedule\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-body\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              style: {\n                listStyleType: 'none',\n                paddingLeft: '0px'\n              },\n              children: signedUp.length < 1 ? 'No artists currently signed up' : signedUp.map(function (currentSignedUp, idx) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: \"d-flex list-group-item justify-content-between\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    children: [currentSignedUp.artist, \" (\", currentSignedUp.timeSlot, \")\"]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 22,\n                    columnNumber: 49\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    className: \"btn btn-danger\",\n                    onClick: function onClick(e) {\n                      e.preventDefault();\n                      handleDelete(idx);\n                    },\n                    children: \"Delete\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 23,\n                    columnNumber: 53\n                  }, _this)]\n                }, idx, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 21,\n                  columnNumber: 48\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = ArtistList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtistList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ArtistList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpc3RMaXN0LmpzPzEwNDkiXSwibmFtZXMiOlsiQXJ0aXN0TGlzdCIsInNpZ25lZFVwIiwic2V0U2lnbmVkVXAiLCJ0YWtlbiIsInNldFRha2VuIiwiaGFuZGxlRGVsZXRlIiwiaW5kZXgiLCJ0aW1lU2xvdCIsImZpbHRlciIsInRpbWUiLCJhcnRpc3QiLCJpZHgiLCJoZWlnaHQiLCJvcGFjaXR5IiwibWluSGVpZ2h0IiwibGlzdFN0eWxlVHlwZSIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiY3VycmVudFNpZ25lZFVwIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdEO0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUFBLE1BQW5DQyxXQUFtQyxRQUFuQ0EsV0FBbUM7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUUvRCxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDdENILFlBQVEsQ0FBQ0QsS0FBSyxDQUFDSyxNQUFOLENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksSUFBSUYsUUFBbEI7QUFBQSxLQUFiLENBQUQsQ0FBUjtBQUNBTCxlQUFXLENBQUNELFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixVQUFDRSxNQUFELEVBQVNDLEdBQVQ7QUFBQSxhQUFpQkEsR0FBRyxJQUFJTCxLQUF4QjtBQUFBLEtBQWhCLENBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsU0FBSyxFQUFFO0FBQUVNLFlBQU0sRUFBRSxPQUFWO0FBQW1CQyxhQUFPLEVBQUU7QUFBNUIsS0FBN0M7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUU7QUFBWixTQUE3QjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNJO0FBQUksbUJBQUssRUFBRTtBQUFFQyw2QkFBYSxFQUFFLE1BQWpCO0FBQXlCQywyQkFBVyxFQUFFO0FBQXRDLGVBQVg7QUFBQSx3QkFFUWYsUUFBUSxDQUFDZ0IsTUFBVCxHQUFrQixDQUFsQixHQUFzQixnQ0FBdEIsR0FDRWhCLFFBQVEsQ0FBQ2lCLEdBQVQsQ0FBYSxVQUFDQyxlQUFELEVBQWtCUixHQUFsQixFQUEwQjtBQUNyQyxvQ0FBTztBQUFjLDJCQUFTLEVBQUMsZ0RBQXhCO0FBQUEsMENBQ0M7QUFBQSwrQkFBT1EsZUFBZSxDQUFDVCxNQUF2QixRQUFxQ1MsZUFBZSxDQUFDWixRQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsZUFFSztBQUFRLDZCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLDJCQUFPLEVBQUUsaUJBQUNhLENBQUQsRUFBTztBQUMvQ0EsdUJBQUMsQ0FBQ0MsY0FBRjtBQUNBaEIsa0NBQVksQ0FBQ00sR0FBRCxDQUFaO0FBQ0gscUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkw7QUFBQSxtQkFBU0EsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFQO0FBT0gsZUFSQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkJILENBcENEOztLQUFNWCxVO0FBc0NTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXJ0aXN0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFydGlzdExpc3QgPSAoeyBzaWduZWRVcCwgc2V0U2lnbmVkVXAsIHRha2VuLCBzZXRUYWtlbiB9KSA9PiB7XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgsIHRpbWVTbG90KSA9PiB7XG4gICAgICAgIHNldFRha2VuKHRha2VuLmZpbHRlcigodGltZSkgPT4gdGltZSAhPSB0aW1lU2xvdCkpXG4gICAgICAgIHNldFNpZ25lZFVwKHNpZ25lZFVwLmZpbHRlcigoYXJ0aXN0LCBpZHgpID0+IGlkeCAhPSBpbmRleCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNyB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IGhlaWdodDogJzQwMHB4Jywgb3BhY2l0eTogJzAuOScgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7bWluSGVpZ2h0OiAnNDAwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6ICdub25lJywgcGFkZGluZ0xlZnQ6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduZWRVcC5sZW5ndGggPCAxID8gJ05vIGFydGlzdHMgY3VycmVudGx5IHNpZ25lZCB1cCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNpZ25lZFVwLm1hcCgoY3VycmVudFNpZ25lZFVwLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJkLWZsZXggbGlzdC1ncm91cC1pdGVtIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y3VycmVudFNpZ25lZFVwLmFydGlzdH0gJiM0MDt7Y3VycmVudFNpZ25lZFVwLnRpbWVTbG90fSYjNDE7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKGlkeClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdExpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArtistList.js\n");

/***/ })

})