self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./src/components/ImageSwiper.jsx":
/*!****************************************!*\
  !*** ./src/components/ImageSwiper.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\WORK\\1.GitHub Repos\\Maistor\\src\\components\\ImageSwiper.jsx";




swiper__WEBPACK_IMPORTED_MODULE_2__.default.use([swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation]);
const SwiperContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "ImageSwiper__SwiperContainer",
  componentId: "sc-13jay24-0"
})(["max-width:700px;"]);
_c = SwiperContainer;

const ImageSwiper = ({
  images
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwiperContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: {
        prevEl: `.prev`,
        nextEl: `.next`
      },
      children: [images.map(image => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: `http://localhost:8000${image.url}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined)
        }, image.name, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: `prev`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Slider prev button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: `next`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Slider next button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

_c2 = ImageSwiper;
/* harmony default export */ __webpack_exports__["default"] = (ImageSwiper);

var _c, _c2;

$RefreshReg$(_c, "SwiperContainer");
$RefreshReg$(_c2, "ImageSwiper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VTd2lwZXIuanN4Il0sIm5hbWVzIjpbIlN3aXBlckNvcmUiLCJOYXZpZ2F0aW9uIiwiU3dpcGVyQ29udGFpbmVyIiwic3R5bGVkIiwiSW1hZ2VTd2lwZXIiLCJpbWFnZXMiLCJwcmV2RWwiLCJuZXh0RWwiLCJtYXAiLCJpbWFnZSIsInVybCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsK0NBQUEsQ0FBZSxDQUFDQyw4Q0FBRCxDQUFmO0FBRUEsTUFBTUMsZUFBZSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3QkFBckI7S0FBTUQsZTs7QUFJTixNQUFNRSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDbEMsc0JBQ0UsOERBQUMsZUFBRDtBQUFBLDJCQUNFLDhEQUFDLGdEQUFEO0FBQ0Usa0JBQVksRUFBRSxFQURoQjtBQUVFLG1CQUFhLEVBQUUsQ0FGakI7QUFHRSxnQkFBVSxFQUFFO0FBQ1ZDLGNBQU0sRUFBRyxPQURDO0FBRVZDLGNBQU0sRUFBRztBQUZDLE9BSGQ7QUFBQSxpQkFRR0YsTUFBTSxDQUFDRyxHQUFQLENBQVlDLEtBQUQsSUFBVztBQUNyQiw0QkFDRSw4REFBQyxxREFBRDtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFHLHdCQUF1QkEsS0FBSyxDQUFDQyxHQUFJO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFrQkQsS0FBSyxDQUFDRSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBS0QsT0FOQSxDQVJILGVBZUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFHLE1BQWxDO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBa0JFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBRyxNQUFsQztBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMEJELENBM0JEOztNQUFNUCxXO0FBNkJOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzbHVnXS4wY2VjOTc1ZWE3YzViMDU4MTdiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xyXG5cclxuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb25dKTtcclxuXHJcbmNvbnN0IFN3aXBlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlU3dpcGVyID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlckNvbnRhaW5lcj5cclxuICAgICAgPFN3aXBlclxyXG4gICAgICAgIHNwYWNlQmV0d2Vlbj17NTB9XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICBuYXZpZ2F0aW9uPXt7XHJcbiAgICAgICAgICBwcmV2RWw6IGAucHJldmAsXHJcbiAgICAgICAgICBuZXh0RWw6IGAubmV4dGAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW1hZ2UubmFtZX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwMDAke2ltYWdlLnVybH1gfSAvPlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2BwcmV2YH0+XHJcbiAgICAgICAgICA8c3Bhbj5TbGlkZXIgcHJldiBidXR0b248L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgbmV4dGB9PlxyXG4gICAgICAgICAgPHNwYW4+U2xpZGVyIG5leHQgYnV0dG9uPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L1N3aXBlcj5cclxuICAgIDwvU3dpcGVyQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVN3aXBlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==