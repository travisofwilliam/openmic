webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ArtistList.js":
/*!**********************************!*\
  !*** ./components/ArtistList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/openmic/components/ArtistList.js\",\n    _this = undefined;\n\nvar ArtistList = function ArtistList(_ref) {\n  var signedUp = _ref.signedUp;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-sm-7 text-center\",\n    style: {\n      height: '400px',\n      opacity: '0.9'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"col-sm-12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card\",\n        style: {\n          minHeight: '400px'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"list-group\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-header\",\n            children: \"Schedule\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 8,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-body\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              style: {\n                listStyleType: 'none',\n                paddingLeft: '0px'\n              },\n              children: signedUp.length < 1 ? 'No artists currently signed up' : signedUp.map(function (currentSignedUp, idx) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: \"d-flex list-group-item justify-content-between\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    children: [currentSignedUp.artist, \" (\", currentSignedUp.timeSlot, \")\"]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 17,\n                    columnNumber: 49\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    className: \"btn btn-danger\",\n                    children: \"Delete\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 18,\n                    columnNumber: 53\n                  }, _this)]\n                }, idx, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 16,\n                  columnNumber: 48\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = ArtistList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtistList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ArtistList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpc3RMaXN0LmpzPzEwNDkiXSwibmFtZXMiOlsiQXJ0aXN0TGlzdCIsInNpZ25lZFVwIiwiaGVpZ2h0Iiwib3BhY2l0eSIsIm1pbkhlaWdodCIsImxpc3RTdHlsZVR5cGUiLCJwYWRkaW5nTGVmdCIsImxlbmd0aCIsIm1hcCIsImN1cnJlbnRTaWduZWRVcCIsImlkeCIsImFydGlzdCIsInRpbWVTbG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBRWpDLHNCQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQXNDLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUUsT0FBVjtBQUFtQkMsYUFBTyxFQUFFO0FBQTVCLEtBQTdDO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLGFBQUssRUFBRTtBQUFDQyxtQkFBUyxFQUFFO0FBQVosU0FBN0I7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDSTtBQUFJLG1CQUFLLEVBQUU7QUFBRUMsNkJBQWEsRUFBRSxNQUFqQjtBQUF5QkMsMkJBQVcsRUFBRTtBQUF0QyxlQUFYO0FBQUEsd0JBRVFMLFFBQVEsQ0FBQ00sTUFBVCxHQUFrQixDQUFsQixHQUFzQixnQ0FBdEIsR0FDRU4sUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQ0MsZUFBRCxFQUFrQkMsR0FBbEIsRUFBMEI7QUFDckMsb0NBQU87QUFBYywyQkFBUyxFQUFDLGdEQUF4QjtBQUFBLDBDQUNDO0FBQUEsK0JBQU9ELGVBQWUsQ0FBQ0UsTUFBdkIsUUFBcUNGLGVBQWUsQ0FBQ0csUUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURELGVBRUs7QUFBUSw2QkFBUyxFQUFDLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGTDtBQUFBLG1CQUFTRixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFJSCxlQUxDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0E1QkQ7O0tBQU1WLFU7QUE4QlNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BcnRpc3RMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXJ0aXN0TGlzdCA9ICh7IHNpZ25lZFVwIH0pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTcgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICc0MDBweCcsIG9wYWNpdHk6ICcwLjknIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17e21pbkhlaWdodDogJzQwMHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlZHVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiAnbm9uZScsIHBhZGRpbmdMZWZ0OiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmVkVXAubGVuZ3RoIDwgMSA/ICdObyBhcnRpc3RzIGN1cnJlbnRseSBzaWduZWQgdXAnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzaWduZWRVcC5tYXAoKGN1cnJlbnRTaWduZWRVcCwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZC1mbGV4IGxpc3QtZ3JvdXAtaXRlbSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRTaWduZWRVcC5hcnRpc3R9ICYjNDA7e2N1cnJlbnRTaWduZWRVcC50aW1lU2xvdH0mIzQxOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpc3RMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArtistList.js\n");

/***/ })

})