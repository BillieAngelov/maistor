self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/ServiceList.jsx":
/*!****************************************!*\
  !*** ./src/Components/ServiceList.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store */ "./src/Store/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\WORK\\1.GitHub Repos\\Maistor\\src\\Components\\ServiceList.jsx";





const ServiceContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ServiceList__ServiceContainer",
  componentId: "a39da3-0"
})(["display:flex;justify-content:center;flex-wrap:wrap;"]);
_c = ServiceContainer;
const ServiceCard = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ServiceList__ServiceCard",
  componentId: "a39da3-1"
})(["position:relative;max-width:20%;min-width:285px;background-color:#fff;border-radius:4px;margin:10px;cursor:pointer;-webkit-box-shadow:0px 0px 5px 1px rgba(0,0,0,0.24);-moz-box-shadow:0px 0px 5px 1px rgba(0,0,0,0.24);box-shadow:0px 0px 5px 1px rgba(0,0,0,0.24);@media (max-width:1280px){max-width:33%;width:31%;}@media (max-width:900px){max-width:50%;width:46%;}@media (max-width:640px){margin:10px;min-width:250px;}@media (max-width:560px){max-width:350px;width:100%;}"]);
_c2 = ServiceCard;
const ServImage = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ServiceList__ServImage",
  componentId: "a39da3-2"
})(["height:55%;display:flex;"]);
_c3 = ServImage;
const AvatarImage = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ServiceList__AvatarImage",
  componentId: "a39da3-3"
})(["width:100%;max-width:40px;"]);
_c4 = AvatarImage;
const AvatarSection = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ServiceList__AvatarSection",
  componentId: "a39da3-4"
})(["display:flex;align-items:center;padding:8px;padding-bottom:0;"]);
_c5 = AvatarSection;
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.p.withConfig({
  displayName: "ServiceList__Paragraph",
  componentId: "a39da3-5"
})(["margin:0;padding-left:10px;"]);
_c6 = Paragraph;
const ServiceInfo = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ServiceList__ServiceInfo",
  componentId: "a39da3-6"
})([""]);
_c7 = ServiceInfo;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ServiceList__Description",
  componentId: "a39da3-7"
})(["height:40px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;padding:5px 8px;margin-bottom:50px;"]);
_c8 = Description;
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.img.withConfig({
  displayName: "ServiceList__Avatar",
  componentId: "a39da3-8"
})(["border-radius:50%;width:100%;"]);
_c9 = Avatar;
const RatingAndPrice = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ServiceList__RatingAndPrice",
  componentId: "a39da3-9"
})(["display:flex;justify-content:space-between;background-color:hsl(0,0%,93%);padding:10px 20px;margin-top:15px;position:absolute;width:100%;bottom:0px;"]);
const StrongP = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.p.withConfig({
  displayName: "ServiceList__StrongP",
  componentId: "a39da3-10"
})(["font-weight:700;margin:0;"]);
const ServImg = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.img.withConfig({
  displayName: "ServiceList__ServImg",
  componentId: "a39da3-11"
})(["width:100%;height:100%;"]);
_c10 = ServImg;
const ServicesList = (0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.observer)(_c11 = ({
  props
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceContainer, {
    children: _Store__WEBPACK_IMPORTED_MODULE_3__.default.services && _Store__WEBPACK_IMPORTED_MODULE_3__.default.services.map(service => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      to: `${service.slug}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceCard, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServImage, {
          className: "service_image",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServImg, {
            src: `http://localhost:8000${service.images[0]}`,
            alt: `${service.images[0]}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AvatarSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AvatarImage, {
            className: "avatar",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Avatar, {
              src: checkForAvatar(service.ownerAvatar),
              atl: "avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceInfo, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Paragraph, {
              children: service.ownerName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Description, {
          children: service.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, undefined)
    }, service.id, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, undefined);
});
_c12 = ServicesList;
/* harmony default export */ __webpack_exports__["default"] = (ServicesList);

function calculateServiceRating(service) {
  if (service.comments.length === 0) return 0;
  let rating = 0;
  let comments = service.comments.length;
  console.log(comments);
  service.comments.forEach(comment => {
    rating += comment.Rating;
  });
  return rating / comments;
}

const checkForAvatar = image => {
  if (image === undefined || image === null) {
    return "/defAvatarDark.png";
  } else {
    return `http://localhost:8000${image}`;
  }
};

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "ServiceContainer");
$RefreshReg$(_c2, "ServiceCard");
$RefreshReg$(_c3, "ServImage");
$RefreshReg$(_c4, "AvatarImage");
$RefreshReg$(_c5, "AvatarSection");
$RefreshReg$(_c6, "Paragraph");
$RefreshReg$(_c7, "ServiceInfo");
$RefreshReg$(_c8, "Description");
$RefreshReg$(_c9, "Avatar");
$RefreshReg$(_c10, "ServImg");
$RefreshReg$(_c11, "ServicesList$observer");
$RefreshReg$(_c12, "ServicesList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvU2VydmljZUxpc3QuanN4Il0sIm5hbWVzIjpbIlNlcnZpY2VDb250YWluZXIiLCJzdHlsZWQiLCJTZXJ2aWNlQ2FyZCIsIlNlcnZJbWFnZSIsIkF2YXRhckltYWdlIiwiQXZhdGFyU2VjdGlvbiIsIlBhcmFncmFwaCIsIlNlcnZpY2VJbmZvIiwiRGVzY3JpcHRpb24iLCJBdmF0YXIiLCJSYXRpbmdBbmRQcmljZSIsIlN0cm9uZ1AiLCJTZXJ2SW1nIiwiU2VydmljZXNMaXN0Iiwib2JzZXJ2ZXIiLCJwcm9wcyIsIlN0b3JlIiwic2VydmljZSIsInNsdWciLCJpbWFnZXMiLCJjaGVja0ZvckF2YXRhciIsIm93bmVyQXZhdGFyIiwib3duZXJOYW1lIiwiZGVzY3JpcHRpb24iLCJpZCIsImNhbGN1bGF0ZVNlcnZpY2VSYXRpbmciLCJjb21tZW50cyIsImxlbmd0aCIsInJhdGluZyIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiY29tbWVudCIsIlJhdGluZyIsImltYWdlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGdCQUFnQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSwyREFBdEI7S0FBTUQsZ0I7QUFNTixNQUFNRSxXQUFXLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRkQUFqQjtNQUFNQyxXO0FBNEJOLE1BQU1DLFNBQVMsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0NBQWY7TUFBTUUsUztBQUlOLE1BQU1DLFdBQVcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0NBQWpCO01BQU1HLFc7QUFJTixNQUFNQyxhQUFhLEdBQUdKLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFFQUFuQjtNQUFNSSxhO0FBTU4sTUFBTUMsU0FBUyxHQUFHTCxtRUFBSDtBQUFBO0FBQUE7QUFBQSxt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QTJDO0FBQ3pDLFdBQU8sb0JBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFRLHdCQUF1QkEsS0FBTSxFQUFyQztBQUNEO0FBQ0YsQ0FORCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZmY3NTdkN2Q1OWU5MzI4M2NiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vU3RvcmVcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5cclxuY29uc3QgU2VydmljZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG4gIG1pbi13aWR0aDogMjg1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgbWF4LXdpZHRoOiAzMyU7XHJcbiAgICB3aWR0aDogMzElO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgd2lkdGg6IDQ2JTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlcnZJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA1NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuY29uc3QgQXZhdGFySW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDBweDtcclxuYDtcclxuY29uc3QgQXZhdGFyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuYDtcclxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuYDtcclxuY29uc3QgU2VydmljZUluZm8gPSBzdHlsZWQuZGl2YGA7XHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbmA7XHJcbmNvbnN0IEF2YXRhciA9IHN0eWxlZC5pbWdgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5jb25zdCBSYXRpbmdBbmRQcmljZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5MyUpO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbmA7XHJcbmNvbnN0IFN0cm9uZ1AgPSBzdHlsZWQucGBcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMDtcclxuYDtcclxuY29uc3QgU2VydkltZyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgU2VydmljZXNMaXN0ID0gb2JzZXJ2ZXIoKHtwcm9wc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlcnZpY2VDb250YWluZXI+XHJcbiAgICAgIHtTdG9yZS5zZXJ2aWNlcyAmJlxyXG4gICAgICAgIFN0b3JlLnNlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgdG89e2Ake3NlcnZpY2Uuc2x1Z31gfSBrZXk9e3NlcnZpY2UuaWR9PlxyXG4gICAgICAgICAgICA8U2VydmljZUNhcmQ+XHJcbiAgICAgICAgICAgICAgPFNlcnZJbWFnZSBjbGFzc05hbWU9XCJzZXJ2aWNlX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VydkltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwMDAke3NlcnZpY2UuaW1hZ2VzWzBdfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7c2VydmljZS5pbWFnZXNbMF19YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TZXJ2SW1hZ2U+XHJcblxyXG4gICAgICAgICAgICAgIDxBdmF0YXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhckltYWdlIGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGVja0ZvckF2YXRhcihzZXJ2aWNlLm93bmVyQXZhdGFyKX1cclxuICAgICAgICAgICAgICAgICAgICBhdGw9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXJJbWFnZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VydmljZUluZm8+XHJcbiAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGg+e3NlcnZpY2Uub3duZXJOYW1lfTwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPFBhcmFncmFwaD57c2VydmljZS5icmFuY2h9PC9QYXJhZ3JhcGg+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9TZXJ2aWNlSW5mbz5cclxuICAgICAgICAgICAgICA8L0F2YXRhclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgey8qIDxSYXRpbmdBbmRQcmljZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVTZXJ2aWNlUmF0aW5nKHNlcnZpY2UpfVxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+KHtzZXJ2aWNlLmNvbW1lbnRzLmxlbmd0aH0pPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2UucHJpY2UgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgPFN0cm9uZ1A+e3NlcnZpY2UucHJpY2UudG9TdHJpbmcoKX3Qu9CyLjwvU3Ryb25nUD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdHJvbmdQPiZuYnNwOzwvU3Ryb25nUD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9SYXRpbmdBbmRQcmljZT4gKi99XHJcbiAgICAgICAgICAgIDwvU2VydmljZUNhcmQ+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L1NlcnZpY2VDb250YWluZXI+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlc0xpc3Q7XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVTZXJ2aWNlUmF0aW5nKHNlcnZpY2UpIHtcclxuICBpZiAoc2VydmljZS5jb21tZW50cy5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG4gIGxldCByYXRpbmcgPSAwO1xyXG4gIGxldCBjb21tZW50cyA9IHNlcnZpY2UuY29tbWVudHMubGVuZ3RoO1xyXG4gIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICBzZXJ2aWNlLmNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgIHJhdGluZyArPSBjb21tZW50LlJhdGluZztcclxuICB9KTtcclxuICByZXR1cm4gcmF0aW5nIC8gY29tbWVudHM7XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrRm9yQXZhdGFyID0gKGltYWdlKSA9PiB7XHJcbiAgaWYgKGltYWdlID09PSB1bmRlZmluZWQgfHwgaW1hZ2UgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBcIi9kZWZBdmF0YXJEYXJrLnBuZ1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCR7aW1hZ2V9YDtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=