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
    className: "jsx-3005338663" + " " + "allNews",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "jsx-3005338663" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3005338663" + " " + "col-md-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "jsx-3005338663",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("br", {
    className: "jsx-3005338663",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), "Breaking News"), props.newsList.articles.map(function (e, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-3005338663" + " " + "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-3005338663" + " " + "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "jsx-3005338663" + " " + "colored",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-3005338663" + " " + "brd",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 19
      }
    }, __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, "Title:"), ' ', __jsx("span", {
      style: {
        color: '#2FA4E7'
      },
      id: "capitalized",
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, e.title)), __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "jsx-3005338663" + " " + "brd",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }, __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, "Date Published:"), " ", e.publishedAt, __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    })), __jsx("span", {
      className: "jsx-3005338663" + " " + "brd",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }, __jsx("strong", {
      className: "jsx-3005338663" + " " + "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, "Author:"), ' ', __jsx("i", {
      className: "jsx-3005338663" + " " + "bx bx-tada bxs-phone-call",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }), " ", e.author, __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    })), __jsx("span", {
      className: "jsx-3005338663" + " " + "brd",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, "Description:"), ' ', __jsx("span", {
      className: "jsx-3005338663" + " " + "brd text-justify",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, e.description), __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    })), __jsx("span", {
      className: "jsx-3005338663" + " " + "brd",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, "Content:"), " ", __jsx("span", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 47
      }
    }, e.content), __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    })), __jsx("span", {
      className: "jsx-3005338663" + " " + "brd",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }, __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, "LinkToImage:"), __jsx("a", {
      href: e.urlToImage,
      target: "_blank",
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, ' ', "Link to Image"), __jsx("hr", {
      id: "bottomStyle",
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }), __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }))))));
  }), ' '), __jsx("div", {
    className: "jsx-3005338663" + " " + "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_components_newsUploadForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3005338663",
    __self: _this
  }, "br.jsx-3005338663{margin-bottom:1em;}.colored.jsx-3005338663{padding:10px;background-color:#fafafa;border:2px solid #efefef;}p.jsx-3005338663{font-size:17px;}.allNews.jsx-3005338663{padding-right:20px;}#capitalized.jsx-3005338663{text-transform:capitalize;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUGxhbiBCXFxEZXNrdG9wXFxXb3JrU3BhY2VcXFVwQmFzZSBMdGRcXE5ld3MtRGV2LVRlc3QtSnVseVxcY29tcG9uZW50c1xcTmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRU8sQUFHNkIsQUFHTCxBQU1FLEFBSUksQUFJTyxhQWJELEVBTTNCLEdBVEEsQ0FhQSxPQUltQixZQWJRLEtBYzNCLG9CQWJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUGxhbiBCXFxEZXNrdG9wXFxXb3JrU3BhY2VcXFVwQmFzZSBMdGRcXE5ld3MtRGV2LVRlc3QtSnVseVxcY29tcG9uZW50c1xcTmV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTmV3c1VwbG9hZEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9uZXdzVXBsb2FkRm9ybSc7XHJcbi8vaW1wb3J0IE5ld3NDYXRlZ29yeSBmcm9tICcuLi9jb21wb25lbnRzL05ld3NDYXRlZ29yeSc7XHJcblxyXG5jb25zdCBOZXdzID0gcHJvcHMgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiYWxsTmV3c1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgQnJlYWtpbmcgTmV3c1xyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAge3Byb3BzLm5ld3NMaXN0LmFydGljbGVzLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaXRsZTo8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMyRkE0RTcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2FwaXRhbGl6ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGF0ZSBQdWJsaXNoZWQ6PC9zdHJvbmc+IHtlLnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BdXRob3I6PC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieC10YWRhIGJ4cy1waG9uZS1jYWxsXCI+PC9pPiB7ZS5hdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZCB0ZXh0LWp1c3RpZnlcIj57ZS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250ZW50Ojwvc3Ryb25nPiA8c3Bhbj57ZS5jb250ZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkxpbmtUb0ltYWdlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2UudXJsVG9JbWFnZX0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgTGluayB0byBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgaWQ9XCJib3R0b21TdHlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX17JyAnfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxOZXdzVXBsb2FkRm9ybSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICBiciB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xvcmVkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VmZWZlZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFsbE5ld3Mge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjYXBpdGFsaXplZCB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Plan B\\\\Desktop\\\\WorkSpace\\\\UpBase Ltd\\\\News-Dev-Test-July\\\\components\\\\News.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld3MuanMiXSwibmFtZXMiOlsiTmV3cyIsInByb3BzIiwibmV3c0xpc3QiLCJhcnRpY2xlcyIsIm1hcCIsImUiLCJpbmRleCIsImNvbG9yIiwidGl0bGUiLCJwdWJsaXNoZWRBdCIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInVybFRvSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFDLEtBQUs7QUFBQSxTQUNoQjtBQUFBLHdDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixrQkFERixFQUtHQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsUUFBZixDQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsV0FDM0I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWEsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FB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QUFBQTtBQUFBLDY1SkFEZ0I7QUFBQSxDQUFsQjs7S0FBTWIsSTtBQTBGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ5M2QwNzgyMjM4YTc2M2ZjZGU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE5ld3NVcGxvYWRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvbmV3c1VwbG9hZEZvcm0nO1xyXG4vL2ltcG9ydCBOZXdzQ2F0ZWdvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdzQ2F0ZWdvcnknO1xyXG5cclxuY29uc3QgTmV3cyA9IHByb3BzID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImFsbE5ld3NcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIEJyZWFraW5nIE5ld3NcclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIHtwcm9wcy5uZXdzTGlzdC5hcnRpY2xlcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xvcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGl0bGU6PC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMkZBNEU3JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcGl0YWxpemVkXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRhdGUgUHVibGlzaGVkOjwvc3Ryb25nPiB7ZS5wdWJsaXNoZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QXV0aG9yOjwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdGFkYSBieHMtcGhvbmUtY2FsbFwiPjwvaT4ge2UuYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmQgdGV4dC1qdXN0aWZ5XCI+e2UuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVudDo8L3N0cm9uZz4gPHNwYW4+e2UuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MaW5rVG9JbWFnZTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtlLnVybFRvSW1hZ2V9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgIExpbmsgdG8gSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGlkPVwiYm90dG9tU3R5bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9eycgJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICA8TmV3c1VwbG9hZEZvcm0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgYnIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sb3JlZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbGxOZXdzIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY2FwaXRhbGl6ZWQge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9