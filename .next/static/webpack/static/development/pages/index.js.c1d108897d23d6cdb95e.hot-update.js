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
    }, __jsx("div", {
      className: "jsx-3005338663",
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
        lineNumber: 30,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, "Date Published:"), " ", e.publishedAt, __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-3005338663" + " " + "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, "Author:"), ' ', __jsx("i", {
      className: "jsx-3005338663" + " " + "bx bx-tada bxs-phone-call",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }), " ", e.author, __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }, "Description:"), ' ', __jsx("span", {
      className: "jsx-3005338663" + " " + "brd text-justify",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, e.description), __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }, "Content:"), " ", __jsx("span", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 45
      }
    }, e.content), __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }), __jsx("strong", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, "LinkToImage:"), __jsx("a", {
      href: e.urlToImage,
      target: "_blank",
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }, ' ', "Link to Image"), __jsx("hr", {
      id: "bottomStyle",
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }), __jsx("br", {
      className: "jsx-3005338663",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    })))));
  }), ' '), __jsx("div", {
    className: "jsx-3005338663" + " " + "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_components_newsUploadForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3005338663",
    __self: _this
  }, "br.jsx-3005338663{margin-bottom:1em;}.colored.jsx-3005338663{padding:10px;background-color:#fafafa;border:2px solid #efefef;}p.jsx-3005338663{font-size:17px;}.allNews.jsx-3005338663{padding-right:20px;}#capitalized.jsx-3005338663{text-transform:capitalize;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUGxhbiBCXFxEZXNrdG9wXFxXb3JrU3BhY2VcXFVwQmFzZSBMdGRcXE5ld3MtRGV2LVRlc3QtSnVseVxcY29tcG9uZW50c1xcTmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRE8sQUFHNkIsQUFHTCxBQU1FLEFBSUksQUFJTyxhQWJELEVBTTNCLEdBVEEsQ0FhQSxPQUltQixZQWJRLEtBYzNCLG9CQWJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUGxhbiBCXFxEZXNrdG9wXFxXb3JrU3BhY2VcXFVwQmFzZSBMdGRcXE5ld3MtRGV2LVRlc3QtSnVseVxcY29tcG9uZW50c1xcTmV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTmV3c1VwbG9hZEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9uZXdzVXBsb2FkRm9ybSc7XHJcbi8vaW1wb3J0IE5ld3NDYXRlZ29yeSBmcm9tICcuLi9jb21wb25lbnRzL05ld3NDYXRlZ29yeSc7XHJcblxyXG5jb25zdCBOZXdzID0gcHJvcHMgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiYWxsTmV3c1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgQnJlYWtpbmcgTmV3c1xyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAge3Byb3BzLm5ld3NMaXN0LmFydGljbGVzLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbG9yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpdGxlOjwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzJGQTRFNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXBpdGFsaXplZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGF0ZSBQdWJsaXNoZWQ6PC9zdHJvbmc+IHtlLnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkF1dGhvcjo8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieC10YWRhIGJ4cy1waG9uZS1jYWxsXCI+PC9pPiB7ZS5hdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZCB0ZXh0LWp1c3RpZnlcIj57ZS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbnRlbnQ6PC9zdHJvbmc+IDxzcGFuPntlLmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MaW5rVG9JbWFnZTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZS51cmxUb0ltYWdlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIExpbmsgdG8gSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgaWQ9XCJib3R0b21TdHlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfXsnICd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPE5ld3NVcGxvYWRGb3JtIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICAgIGJyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbG9yZWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWxsTmV3cyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NhcGl0YWxpemVkIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Plan B\\\\Desktop\\\\WorkSpace\\\\UpBase Ltd\\\\News-Dev-Test-July\\\\components\\\\News.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld3MuanMiXSwibmFtZXMiOlsiTmV3cyIsInByb3BzIiwibmV3c0xpc3QiLCJhcnRpY2xlcyIsIm1hcCIsImUiLCJpbmRleCIsImNvbG9yIiwidGl0bGUiLCJwdWJsaXNoZWRBdCIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInVybFRvSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFDLEtBQUs7QUFBQSxTQUNoQjtBQUFBLHdDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixrQkFERixFQUtHQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsUUFBZixDQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsV0FDM0I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWEsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBQzBCLEdBRDFCLEVBRUU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsYUFBSyxFQUFFO0FBREYsT0FEVDtBQUlFLFFBQUUsRUFBQyxhQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1HRixDQUFDLENBQUNHLEtBTkwsQ0FGRixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYkYsT0Fhb0NILENBQUMsQ0FBQ0ksV0FidEMsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFkRixFQWVFO0FBQUEsMENBQWtCLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsRUFlbUQsR0FmbkQsRUFnQkU7QUFBQSwwQ0FBYSwyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaEJGLE9BZ0JpREosQ0FBQyxDQUFDSyxNQWhCbkQsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BakJGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFsQkYsRUFrQmdDLEdBbEJoQyxFQW1CRTtBQUFBLDBDQUFnQixrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQ0wsQ0FBQyxDQUFDTSxXQUF0QyxDQW5CRixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFwQkYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCRixPQXFCNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9OLENBQUMsQ0FBQ08sT0FBVCxDQXJCNUIsRUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdEJGLEVBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF2QkYsRUF3QkU7QUFBRyxVQUFJLEVBQUVQLENBQUMsQ0FBQ1EsVUFBWDtBQUF1QixZQUFNLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csR0FESCxrQkF4QkYsRUE0QkU7QUFBSSxRQUFFLEVBQUMsYUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE1QkYsRUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BN0JGLENBREYsQ0FERixDQURGLENBRDJCO0FBQUEsR0FBNUIsQ0FMSCxFQTJDTSxHQTNDTixDQURGLEVBOENFO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E5Q0YsQ0FERjtBQUFBO0FBQUE7QUFBQSx5MUlBRGdCO0FBQUEsQ0FBbEI7O0tBQU1iLEk7QUErRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMWQxMDg4OTdkMjNkNmNkYjk1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOZXdzVXBsb2FkRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL25ld3NVcGxvYWRGb3JtJztcclxuLy9pbXBvcnQgTmV3c0NhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3c0NhdGVnb3J5JztcclxuXHJcbmNvbnN0IE5ld3MgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJhbGxOZXdzXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBCcmVha2luZyBOZXdzXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICB7cHJvcHMubmV3c0xpc3QuYXJ0aWNsZXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sb3JlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGl0bGU6PC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMkZBNEU3JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcGl0YWxpemVkXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRlIFB1Ymxpc2hlZDo8L3N0cm9uZz4ge2UucHVibGlzaGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QXV0aG9yOjwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LXRhZGEgYnhzLXBob25lLWNhbGxcIj48L2k+IHtlLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJkIHRleHQtanVzdGlmeVwiPntlLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGVudDo8L3N0cm9uZz4gPHNwYW4+e2UuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkxpbmtUb0ltYWdlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtlLnVybFRvSW1hZ2V9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgTGluayB0byBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxociBpZD1cImJvdHRvbVN0eWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9eycgJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICA8TmV3c1VwbG9hZEZvcm0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgYnIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sb3JlZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbGxOZXdzIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY2FwaXRhbGl6ZWQge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9