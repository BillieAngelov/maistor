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
const ServicesList = (0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.observer)(_c11 = () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvU2VydmljZUxpc3QuanN4Il0sIm5hbWVzIjpbIlNlcnZpY2VDb250YWluZXIiLCJzdHlsZWQiLCJTZXJ2aWNlQ2FyZCIsIlNlcnZJbWFnZSIsIkF2YXRhckltYWdlIiwiQXZhdGFyU2VjdGlvbiIsIlBhcmFncmFwaCIsIlNlcnZpY2VJbmZvIiwiRGVzY3JpcHRpb24iLCJBdmF0YXIiLCJSYXRpbmdBbmRQcmljZSIsIlN0cm9uZ1AiLCJTZXJ2SW1nIiwiU2VydmljZXNMaXN0Iiwib2JzZXJ2ZXIiLCJTdG9yZSIsInNlcnZpY2UiLCJzbHVnIiwiaW1hZ2VzIiwiY2hlY2tGb3JBdmF0YXIiLCJvd25lckF2YXRhciIsIm93bmVyTmFtZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJjYWxjdWxhdGVTZXJ2aWNlUmF0aW5nIiwiY29tbWVudHMiLCJsZW5ndGgiLCJyYXRpbmciLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImNvbW1lbnQiLCJSYXRpbmciLCJpbWFnZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsMkRBQXRCO0tBQU1ELGdCO0FBTU4sTUFBTUUsV0FBVyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSw0ZEFBakI7TUFBTUMsVztBQTRCTixNQUFNQyxTQUFTLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdDQUFmO01BQU1FLFM7QUFJTixNQUFNQyxXQUFXLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtDQUFqQjtNQUFNRyxXO0FBSU4sTUFBTUMsYUFBYSxHQUFHSixxRUFBSDtBQUFBO0FBQUE7QUFBQSxxRUFBbkI7TUFBTUksYTtBQU1OLE1BQU1DLFNBQVMsR0FBR0wsbUVBQUg7QUFBQTtBQUFBO0FBQUEsbUNBQWY7TUFB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RCxNQUVPO0FBQ0wsV0FBUSx3QkFBdUJBLEtBQU0sRUFBckM7QUFDRDtBQUNGLENBTkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzMwMzQ0MDUxMjIxMzgyZGJiMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uL1N0b3JlXCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmNvbnN0IFNlcnZpY2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgU2VydmljZUNhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDIwJTtcclxuICBtaW4td2lkdGg6IDI4NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIG1heC13aWR0aDogMzMlO1xyXG4gICAgd2lkdGg6IDMxJTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZXJ2SW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcbmNvbnN0IEF2YXRhckltYWdlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwcHg7XHJcbmA7XHJcbmNvbnN0IEF2YXRhclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbmA7XHJcbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IFNlcnZpY2VJbmZvID0gc3R5bGVkLmRpdmBgO1xyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5gO1xyXG5jb25zdCBBdmF0YXIgPSBzdHlsZWQuaW1nYFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuY29uc3QgUmF0aW5nQW5kUHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTMlKTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG5gO1xyXG5jb25zdCBTdHJvbmdQID0gc3R5bGVkLnBgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcbmNvbnN0IFNlcnZJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFNlcnZpY2VzTGlzdCA9IG9ic2VydmVyKCgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlcnZpY2VDb250YWluZXI+XHJcbiAgICAgIHtTdG9yZS5zZXJ2aWNlcyAmJlxyXG4gICAgICAgIFN0b3JlLnNlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgdG89e2Ake3NlcnZpY2Uuc2x1Z31gfSBrZXk9e3NlcnZpY2UuaWR9PlxyXG4gICAgICAgICAgICA8U2VydmljZUNhcmQ+XHJcbiAgICAgICAgICAgICAgPFNlcnZJbWFnZSBjbGFzc05hbWU9XCJzZXJ2aWNlX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VydkltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwMDAke3NlcnZpY2UuaW1hZ2VzWzBdfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7c2VydmljZS5pbWFnZXNbMF19YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TZXJ2SW1hZ2U+XHJcblxyXG4gICAgICAgICAgICAgIDxBdmF0YXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhckltYWdlIGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGVja0ZvckF2YXRhcihzZXJ2aWNlLm93bmVyQXZhdGFyKX1cclxuICAgICAgICAgICAgICAgICAgICBhdGw9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXJJbWFnZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VydmljZUluZm8+XHJcbiAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGg+e3NlcnZpY2Uub3duZXJOYW1lfTwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPFBhcmFncmFwaD57c2VydmljZS5icmFuY2h9PC9QYXJhZ3JhcGg+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9TZXJ2aWNlSW5mbz5cclxuICAgICAgICAgICAgICA8L0F2YXRhclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgey8qIDxSYXRpbmdBbmRQcmljZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVTZXJ2aWNlUmF0aW5nKHNlcnZpY2UpfVxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+KHtzZXJ2aWNlLmNvbW1lbnRzLmxlbmd0aH0pPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2UucHJpY2UgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgPFN0cm9uZ1A+e3NlcnZpY2UucHJpY2UudG9TdHJpbmcoKX3Qu9CyLjwvU3Ryb25nUD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdHJvbmdQPiZuYnNwOzwvU3Ryb25nUD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9SYXRpbmdBbmRQcmljZT4gKi99XHJcbiAgICAgICAgICAgIDwvU2VydmljZUNhcmQ+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L1NlcnZpY2VDb250YWluZXI+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlc0xpc3Q7XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVTZXJ2aWNlUmF0aW5nKHNlcnZpY2UpIHtcclxuICBpZiAoc2VydmljZS5jb21tZW50cy5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG4gIGxldCByYXRpbmcgPSAwO1xyXG4gIGxldCBjb21tZW50cyA9IHNlcnZpY2UuY29tbWVudHMubGVuZ3RoO1xyXG4gIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICBzZXJ2aWNlLmNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgIHJhdGluZyArPSBjb21tZW50LlJhdGluZztcclxuICB9KTtcclxuICByZXR1cm4gcmF0aW5nIC8gY29tbWVudHM7XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrRm9yQXZhdGFyID0gKGltYWdlKSA9PiB7XHJcbiAgaWYgKGltYWdlID09PSB1bmRlZmluZWQgfHwgaW1hZ2UgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBcIi9kZWZBdmF0YXJEYXJrLnBuZ1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCR7aW1hZ2V9YDtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=