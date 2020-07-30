webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_newsUploadForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/newsUploadForm */ "./components/newsUploadForm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Plan B\\Desktop\\WorkSpace\\UpBase Ltd\\News-Dev-Test-July\\components\\News.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //import NewsCategory from '../components/NewsCategory';

var News = function News(props) {
  return __jsx("div", {
    className: "jsx-381316400" + " " + "allNews",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "jsx-381316400" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-381316400" + " " + "col-md-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "jsx-381316400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("br", {
    className: "jsx-381316400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), "Breaking News"), props.newsList.articles.map(function (e, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-381316400" + " " + "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-381316400" + " " + "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "jsx-381316400" + " " + "colored",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, __jsx("strong", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 19
      }
    }, "Title:"), ' ', __jsx("span", {
      style: {
        color: '#2FA4E7'
      },
      id: "capitalized",
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }, e.title), __jsx("br", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 19
      }
    }, "Date Published:"), " ", e.publishedAt, __jsx("br", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-381316400" + " " + "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, "Author:"), ' ', __jsx("i", {
      className: "jsx-381316400" + " " + "bx bx-tada bxs-phone-call",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }), " ", e.author, __jsx("br", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }, "Description:"), ' ', __jsx("span", {
      className: "jsx-381316400" + " " + "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }
    }, e.description), __jsx("br", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, "Content:"), " ", __jsx("span", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 45
      }
    }, e.content), __jsx("br", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }, "LinkToImage:"), __jsx("a", {
      href: e.urlToImage,
      target: "_blank",
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, ' ', "Link to Image"), __jsx("hr", {
      id: "bottomStyle",
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 19
      }
    }), __jsx("br", {
      className: "jsx-381316400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }
    })))));
  }), ' '), __jsx("div", {
    className: "jsx-381316400" + " " + "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_components_newsUploadForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "381316400",
    __self: _this
  }, ".colored.jsx-381316400{padding:10px;background-color:#fafafa;border:2px solid #efefef;}p.jsx-381316400{font-size:17px;}.allNews.jsx-381316400{padding-right:20px;}#capitalized.jsx-381316400{text-transform:capitalize;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUGxhbiBCXFxEZXNrdG9wXFxXb3JrU3BhY2VcXFVwQmFzZSBMdGRcXE5ld3MtRGV2LVRlc3QtSnVseVxcY29tcG9uZW50c1xcTmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RE8sQUFHd0IsQUFNRSxBQUlJLEFBSU8sYUFiRCxFQU0zQixJQUlBLE9BSW1CLFlBYlEsS0FjM0Isb0JBYkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQbGFuIEJcXERlc2t0b3BcXFdvcmtTcGFjZVxcVXBCYXNlIEx0ZFxcTmV3cy1EZXYtVGVzdC1KdWx5XFxjb21wb25lbnRzXFxOZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOZXdzVXBsb2FkRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL25ld3NVcGxvYWRGb3JtJztcclxuLy9pbXBvcnQgTmV3c0NhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3c0NhdGVnb3J5JztcclxuXHJcbmNvbnN0IE5ld3MgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJhbGxOZXdzXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBCcmVha2luZyBOZXdzXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICB7cHJvcHMubmV3c0xpc3QuYXJ0aWNsZXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sb3JlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpdGxlOjwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzJGQTRFNycsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhcGl0YWxpemVkXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkRhdGUgUHVibGlzaGVkOjwvc3Ryb25nPiB7ZS5wdWJsaXNoZWRBdH1cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BdXRob3I6PC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdGFkYSBieHMtcGhvbmUtY2FsbFwiPjwvaT4ge2UuYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntlLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVudDo8L3N0cm9uZz4gPHNwYW4+e2UuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkxpbmtUb0ltYWdlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtlLnVybFRvSW1hZ2V9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgTGluayB0byBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxociBpZD1cImJvdHRvbVN0eWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9eycgJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICA8TmV3c1VwbG9hZEZvcm0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgLmNvbG9yZWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWxsTmV3cyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NhcGl0YWxpemVkIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Plan B\\\\Desktop\\\\WorkSpace\\\\UpBase Ltd\\\\News-Dev-Test-July\\\\components\\\\News.js */"));
};

_c = News;
/* harmony default export */ __webpack_exports__["default"] = (News);

var _c;

$RefreshReg$(_c, "News");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld3MuanMiXSwibmFtZXMiOlsiTmV3cyIsInByb3BzIiwibmV3c0xpc3QiLCJhcnRpY2xlcyIsIm1hcCIsImUiLCJpbmRleCIsImNvbG9yIiwidGl0bGUiLCJwdWJsaXNoZWRBdCIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInVybFRvSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFDLEtBQUs7QUFBQSxTQUNoQjtBQUFBLHVDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixrQkFERixFQUtHQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsUUFBZixDQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsV0FDM0I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSx5Q0FBZSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLHlDQUFlLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEseUNBQWEsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBQzBCLEdBRDFCLEVBRUU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsYUFBSyxFQUFFO0FBREYsT0FEVDtBQUlFLFFBQUUsRUFBQyxhQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1HRixDQUFDLENBQUNHLEtBTkwsQ0FGRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVhGLE9BV29DSCxDQUFDLENBQUNJLFdBWHRDLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWkYsRUFhRTtBQUFBLHlDQUFrQixhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLEVBYW1ELEdBYm5ELEVBY0U7QUFBQSx5Q0FBYSwyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZEYsT0FjaURKLENBQUMsQ0FBQ0ssTUFkbkQsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFmRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaEJGLEVBZ0JnQyxHQWhCaEMsRUFpQkU7QUFBQSx5Q0FBZ0IsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQkwsQ0FBQyxDQUFDTSxXQUFqQyxDQWpCRixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFsQkYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5CRixPQW1CNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9OLENBQUMsQ0FBQ08sT0FBVCxDQW5CNUIsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcEJGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFyQkYsRUFzQkU7QUFBRyxVQUFJLEVBQUVQLENBQUMsQ0FBQ1EsVUFBWDtBQUF1QixZQUFNLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csR0FESCxrQkF0QkYsRUEwQkU7QUFBSSxRQUFFLEVBQUMsYUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUExQkYsRUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BM0JGLENBREYsQ0FERixDQURGLENBRDJCO0FBQUEsR0FBNUIsQ0FMSCxFQXlDTSxHQXpDTixDQURGLEVBNENFO0FBQUEsdUNBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E1Q0YsQ0FERjtBQUFBO0FBQUE7QUFBQSx3bUlBRGdCO0FBQUEsQ0FBbEI7O0tBQU1iLEk7QUEwRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44NzUxNGFiNDYxNzRiNDNiNTRjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOZXdzVXBsb2FkRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL25ld3NVcGxvYWRGb3JtJztcclxuLy9pbXBvcnQgTmV3c0NhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3c0NhdGVnb3J5JztcclxuXHJcbmNvbnN0IE5ld3MgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJhbGxOZXdzXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBCcmVha2luZyBOZXdzXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICB7cHJvcHMubmV3c0xpc3QuYXJ0aWNsZXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sb3JlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpdGxlOjwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzJGQTRFNycsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhcGl0YWxpemVkXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkRhdGUgUHVibGlzaGVkOjwvc3Ryb25nPiB7ZS5wdWJsaXNoZWRBdH1cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BdXRob3I6PC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdGFkYSBieHMtcGhvbmUtY2FsbFwiPjwvaT4ge2UuYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntlLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVudDo8L3N0cm9uZz4gPHNwYW4+e2UuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkxpbmtUb0ltYWdlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtlLnVybFRvSW1hZ2V9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgTGluayB0byBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxociBpZD1cImJvdHRvbVN0eWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9eycgJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICA8TmV3c1VwbG9hZEZvcm0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgLmNvbG9yZWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWxsTmV3cyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NhcGl0YWxpemVkIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==