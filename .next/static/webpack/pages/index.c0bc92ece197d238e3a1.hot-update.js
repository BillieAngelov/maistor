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
    children: [console.log(props), _Store__WEBPACK_IMPORTED_MODULE_3__.default.services && _Store__WEBPACK_IMPORTED_MODULE_3__.default.services.map(service => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      to: `${service.slug}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceCard, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServImage, {
          className: "service_image",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServImg, {
            src: `http://localhost:8000${service.images[0]}`,
            alt: `${service.images[0]}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AvatarSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AvatarImage, {
            className: "avatar",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Avatar, {
              src: checkForAvatar(service.ownerAvatar),
              atl: "avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceInfo, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Paragraph, {
              children: service.ownerName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Description, {
          children: service.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, undefined)
    }, service.id, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }, undefined))]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvU2VydmljZUxpc3QuanN4Il0sIm5hbWVzIjpbIlNlcnZpY2VDb250YWluZXIiLCJzdHlsZWQiLCJTZXJ2aWNlQ2FyZCIsIlNlcnZJbWFnZSIsIkF2YXRhckltYWdlIiwiQXZhdGFyU2VjdGlvbiIsIlBhcmFncmFwaCIsIlNlcnZpY2VJbmZvIiwiRGVzY3JpcHRpb24iLCJBdmF0YXIiLCJSYXRpbmdBbmRQcmljZSIsIlN0cm9uZ1AiLCJTZXJ2SW1nIiwiU2VydmljZXNMaXN0Iiwib2JzZXJ2ZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJTdG9yZSIsInNlcnZpY2UiLCJzbHVnIiwiaW1hZ2VzIiwiY2hlY2tGb3JBdmF0YXIiLCJvd25lckF2YXRhciIsIm93bmVyTmFtZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJjYWxjdWxhdGVTZXJ2aWNlUmF0aW5nIiwiY29tbWVudHMiLCJsZW5ndGgiLCJyYXRpbmciLCJmb3JFYWNoIiwiY29tbWVudCIsIlJhdGluZyIsImltYWdlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGdCQUFnQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSwyREFBdEI7S0FBTUQsZ0I7QUFNTixNQUFNRSxXQUFXLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRkQUFqQjtNQUFNQyxXO0FBNEJOLE1BQU1DLFNBQVMsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0NBQWY7TUFBTUUsUztBQUlOLE1BQU1DLFdBQVcsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0NBQWpCO01BQU1HLFc7QUFJTixNQUFNQyxhQUFhLEdBQUdKLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFFQUFuQjtNQUFNSSxhO0FBTU4sTUFBTUMsU0FBUyxHQUFHTCxtRUFBSDtBQUFBO0FBQUE7QUFBQSxt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QSxLQUFLLEtBQUtDLFNBQVYsSUFBdUJELEtBQUssS0FBSyxJQUFyQyxFQUEyQztBQUN6QyxXQUFPLG9CQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBUSx3QkFBdUJBLEtBQU0sRUFBckM7QUFDRDtBQUNGLENBTkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzBiYzkyZWNlMTk3ZDIzOGUzYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uL1N0b3JlXCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmNvbnN0IFNlcnZpY2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgU2VydmljZUNhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDIwJTtcclxuICBtaW4td2lkdGg6IDI4NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIG1heC13aWR0aDogMzMlO1xyXG4gICAgd2lkdGg6IDMxJTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZXJ2SW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcbmNvbnN0IEF2YXRhckltYWdlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwcHg7XHJcbmA7XHJcbmNvbnN0IEF2YXRhclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbmA7XHJcbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IFNlcnZpY2VJbmZvID0gc3R5bGVkLmRpdmBgO1xyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5gO1xyXG5jb25zdCBBdmF0YXIgPSBzdHlsZWQuaW1nYFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuY29uc3QgUmF0aW5nQW5kUHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTMlKTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG5gO1xyXG5jb25zdCBTdHJvbmdQID0gc3R5bGVkLnBgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcbmNvbnN0IFNlcnZJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFNlcnZpY2VzTGlzdCA9IG9ic2VydmVyKCh7cHJvcHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZXJ2aWNlQ29udGFpbmVyPlxyXG4gICAgICB7Y29uc29sZS5sb2cocHJvcHMpfVxyXG4gICAgICB7U3RvcmUuc2VydmljZXMgJiZcclxuICAgICAgICBTdG9yZS5zZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgIDxMaW5rIHRvPXtgJHtzZXJ2aWNlLnNsdWd9YH0ga2V5PXtzZXJ2aWNlLmlkfT5cclxuICAgICAgICAgICAgPFNlcnZpY2VDYXJkPlxyXG4gICAgICAgICAgICAgIDxTZXJ2SW1hZ2UgY2xhc3NOYW1lPVwic2VydmljZV9pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFNlcnZJbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDAwJHtzZXJ2aWNlLmltYWdlc1swXX1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake3NlcnZpY2UuaW1hZ2VzWzBdfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU2VydkltYWdlPlxyXG5cclxuICAgICAgICAgICAgICA8QXZhdGFyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y2hlY2tGb3JBdmF0YXIoc2VydmljZS5vd25lckF2YXRhcil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXRsPVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFySW1hZ2U+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlcnZpY2VJbmZvPlxyXG4gICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoPntzZXJ2aWNlLm93bmVyTmFtZX08L1BhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgICAgey8qIDxQYXJhZ3JhcGg+e3NlcnZpY2UuYnJhbmNofTwvUGFyYWdyYXBoPiAqL31cclxuICAgICAgICAgICAgICAgIDwvU2VydmljZUluZm8+XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvbj57c2VydmljZS5kZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIHsvKiA8UmF0aW5nQW5kUHJpY2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlU2VydmljZVJhdGluZyhzZXJ2aWNlKX1cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPih7c2VydmljZS5jb21tZW50cy5sZW5ndGh9KTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzZXJ2aWNlLnByaWNlICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdHJvbmdQPntzZXJ2aWNlLnByaWNlLnRvU3RyaW5nKCl90LvQsi48L1N0cm9uZ1A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Ryb25nUD4mbmJzcDs8L1N0cm9uZ1A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvUmF0aW5nQW5kUHJpY2U+ICovfVxyXG4gICAgICAgICAgICA8L1NlcnZpY2VDYXJkPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9TZXJ2aWNlQ29udGFpbmVyPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXNMaXN0O1xyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlU2VydmljZVJhdGluZyhzZXJ2aWNlKSB7XHJcbiAgaWYgKHNlcnZpY2UuY29tbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuICBsZXQgcmF0aW5nID0gMDtcclxuICBsZXQgY29tbWVudHMgPSBzZXJ2aWNlLmNvbW1lbnRzLmxlbmd0aDtcclxuICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgc2VydmljZS5jb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICByYXRpbmcgKz0gY29tbWVudC5SYXRpbmc7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJhdGluZyAvIGNvbW1lbnRzO1xyXG59XHJcblxyXG5jb25zdCBjaGVja0ZvckF2YXRhciA9IChpbWFnZSkgPT4ge1xyXG4gIGlmIChpbWFnZSA9PT0gdW5kZWZpbmVkIHx8IGltYWdlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gXCIvZGVmQXZhdGFyRGFyay5wbmdcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OjgwMDAke2ltYWdlfWA7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9