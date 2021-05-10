self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/Store/index.js":
/*!****************************!*\
  !*** ./src/Store/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_WORK_1_GitHub_Repos_Maistor_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

 // Not secure way to store cookies. Need to improve later




class Store {
  constructor() {
    (0,D_WORK_1_GitHub_Repos_Maistor_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "services", []);

    (0,D_WORK_1_GitHub_Repos_Maistor_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "jwt", (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)().jwt || false);

    (0,D_WORK_1_GitHub_Repos_Maistor_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "user", undefined);

    (0,D_WORK_1_GitHub_Repos_Maistor_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "formIsOpen", false);

    (0,D_WORK_1_GitHub_Repos_Maistor_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "loginModal", true);

    (0,D_WORK_1_GitHub_Repos_Maistor_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "dropdown", false);

    (0,mobx__WEBPACK_IMPORTED_MODULE_3__.makeAutoObservable)(this);
    getUserData(this.jwt, this);
    getInitServices(this);
  }

  setServices(services) {
    this.services = services;
  }

  setUser(user) {
    this.user = user;
  }

  openForm() {
    this.formIsOpen = true;
  }

  closeForm() {
    this.formIsOpen = false;
  }

  openRegisterModal() {
    this.loginModal = false;
    console.log(this.loginModal);
  }

  openLoginModal() {
    this.loginModal = true;
  }

  openDropdown() {
    this.dropdown = !this.dropdown;
  }

  closeDropdown() {
    this.dropdown = false;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Store());

async function getUserData(jwt, Store) {
  if (jwt === false) return;
  axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://localhost:8000/users/me", {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }).then(res => {
    console.log(res.data);
    return res.data;
  }).then(data => {
    Store.setUser(data);
    console.log(Store.user.name);
    return;
  }).catch(error => {
    console.log(error);
  });
} // async function getInitServices(Store) {
//   axios
//     .get("http://localhost:8000/services")
//     .then((res) => {
//       console.log(res.data);
//       return res.data;
//     })
//     .then((data) => {
//       Store.setServices(data);
//       console.log(data)
//       return;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiY29uc3RydWN0b3IiLCJwYXJzZUNvb2tpZXMiLCJqd3QiLCJ1bmRlZmluZWQiLCJtYWtlQXV0b09ic2VydmFibGUiLCJnZXRVc2VyRGF0YSIsImdldEluaXRTZXJ2aWNlcyIsInNldFNlcnZpY2VzIiwic2VydmljZXMiLCJzZXRVc2VyIiwidXNlciIsIm9wZW5Gb3JtIiwiZm9ybUlzT3BlbiIsImNsb3NlRm9ybSIsIm9wZW5SZWdpc3Rlck1vZGFsIiwibG9naW5Nb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuTG9naW5Nb2RhbCIsIm9wZW5Ecm9wZG93biIsImRyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm5hbWUiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQU4sQ0FBWTtBQVFWQyxhQUFXLEdBQUc7QUFBQSxxS0FQSCxFQU9HOztBQUFBLGdLQU5SQyxxREFBWSxHQUFHQyxHQUFmLElBQXNCLEtBTWQ7O0FBQUEsaUtBTFBDLFNBS087O0FBQUEsdUtBSkQsS0FJQzs7QUFBQSx1S0FIRCxJQUdDOztBQUFBLHFLQUZILEtBRUc7O0FBQ1pDLDREQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUMsZUFBVyxDQUFDLEtBQUtILEdBQU4sRUFBVyxJQUFYLENBQVg7QUFDQUksbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDRDs7QUFFREMsYUFBVyxDQUFDQyxRQUFELEVBQVc7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7QUFDREMsU0FBTyxDQUFDQyxJQUFELEVBQU87QUFDWixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7QUFDREMsVUFBUSxHQUFHO0FBQ1QsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNEOztBQUNEQyxXQUFTLEdBQUc7QUFDVixTQUFLRCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0Q7O0FBQ0RFLG1CQUFpQixHQUFHO0FBQ2xCLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0YsVUFBakI7QUFDRDs7QUFDREcsZ0JBQWMsR0FBRztBQUNmLFNBQUtILFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7QUFFREksY0FBWSxHQUFHO0FBQ2IsU0FBS0MsUUFBTCxHQUFnQixDQUFDLEtBQUtBLFFBQXRCO0FBQ0Q7O0FBQ0RDLGVBQWEsR0FBRztBQUNkLFNBQUtELFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7QUF2Q1M7O0FBMENaLCtEQUFlLElBQUlyQixLQUFKLEVBQWY7O0FBRUEsZUFBZU0sV0FBZixDQUEyQkgsR0FBM0IsRUFBZ0NILEtBQWhDLEVBQXVDO0FBQ3JDLE1BQUlHLEdBQUcsS0FBSyxLQUFaLEVBQW1CO0FBRW5Cb0Isa0RBQUEsQ0FDTyxnQ0FEUCxFQUN5QztBQUNyQ0MsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsVUFBU3RCLEdBQUk7QUFEdEI7QUFENEIsR0FEekMsRUFNR3VCLElBTkgsQ0FNU0MsR0FBRCxJQUFTO0FBQ2JWLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUyxHQUFHLENBQUNDLElBQWhCO0FBQ0EsV0FBT0QsR0FBRyxDQUFDQyxJQUFYO0FBQ0QsR0FUSCxFQVVHRixJQVZILENBVVNFLElBQUQsSUFBVTtBQUNkNUIsU0FBSyxDQUFDVSxPQUFOLENBQWNrQixJQUFkO0FBQ0FYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsS0FBSyxDQUFDVyxJQUFOLENBQVdrQixJQUF2QjtBQUNBO0FBQ0QsR0FkSCxFQWVHQyxLQWZILENBZVVDLEtBQUQsSUFBVztBQUNoQmQsV0FBTyxDQUFDQyxHQUFSLENBQVlhLEtBQVo7QUFDRCxHQWpCSDtBQWtCRCxDLENBRUQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMzM3ODRjMzk5Yjc3Mzg3N2EzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUF1dG9PYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuLy8gTm90IHNlY3VyZSB3YXkgdG8gc3RvcmUgY29va2llcy4gTmVlZCB0byBpbXByb3ZlIGxhdGVyXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNsYXNzIFN0b3JlIHtcclxuICBzZXJ2aWNlcyA9IFtdO1xyXG4gIGp3dCA9IHBhcnNlQ29va2llcygpLmp3dCB8fCBmYWxzZTtcclxuICB1c2VyID0gdW5kZWZpbmVkO1xyXG4gIGZvcm1Jc09wZW4gPSBmYWxzZTtcclxuICBsb2dpbk1vZGFsID0gdHJ1ZTtcclxuICBkcm9wZG93biA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzKTtcclxuICAgIGdldFVzZXJEYXRhKHRoaXMuand0LCB0aGlzKTtcclxuICAgIGdldEluaXRTZXJ2aWNlcyh0aGlzKVxyXG4gIH1cclxuXHJcbiAgc2V0U2VydmljZXMoc2VydmljZXMpIHtcclxuICAgIHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcztcclxuICB9XHJcbiAgc2V0VXNlcih1c2VyKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gIH1cclxuICBvcGVuRm9ybSgpIHtcclxuICAgIHRoaXMuZm9ybUlzT3BlbiA9IHRydWU7XHJcbiAgfVxyXG4gIGNsb3NlRm9ybSgpIHtcclxuICAgIHRoaXMuZm9ybUlzT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuICBvcGVuUmVnaXN0ZXJNb2RhbCgpIHtcclxuICAgIHRoaXMubG9naW5Nb2RhbCA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5sb2dpbk1vZGFsKTtcclxuICB9XHJcbiAgb3BlbkxvZ2luTW9kYWwoKSB7XHJcbiAgICB0aGlzLmxvZ2luTW9kYWwgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb3BlbkRyb3Bkb3duKCkge1xyXG4gICAgdGhpcy5kcm9wZG93biA9ICF0aGlzLmRyb3Bkb3duO1xyXG4gIH1cclxuICBjbG9zZURyb3Bkb3duKCkge1xyXG4gICAgdGhpcy5kcm9wZG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0b3JlKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyRGF0YShqd3QsIFN0b3JlKSB7XHJcbiAgaWYgKGp3dCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgYXhpb3NcclxuICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvdXNlcnMvbWVcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dH1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgU3RvcmUuc2V0VXNlcihkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coU3RvcmUudXNlci5uYW1lKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGdldEluaXRTZXJ2aWNlcyhTdG9yZSkge1xyXG4gIFxyXG4vLyAgIGF4aW9zXHJcbi8vICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NlcnZpY2VzXCIpXHJcbi8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuLy8gICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4vLyAgICAgfSlcclxuLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbi8vICAgICAgIFN0b3JlLnNldFNlcnZpY2VzKGRhdGEpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9