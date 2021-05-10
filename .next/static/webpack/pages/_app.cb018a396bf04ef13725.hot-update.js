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
    getUserData(this.jwt, this); // getInitServices(this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiY29uc3RydWN0b3IiLCJwYXJzZUNvb2tpZXMiLCJqd3QiLCJ1bmRlZmluZWQiLCJtYWtlQXV0b09ic2VydmFibGUiLCJnZXRVc2VyRGF0YSIsInNldFNlcnZpY2VzIiwic2VydmljZXMiLCJzZXRVc2VyIiwidXNlciIsIm9wZW5Gb3JtIiwiZm9ybUlzT3BlbiIsImNsb3NlRm9ybSIsIm9wZW5SZWdpc3Rlck1vZGFsIiwibG9naW5Nb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuTG9naW5Nb2RhbCIsIm9wZW5Ecm9wZG93biIsImRyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm5hbWUiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQU4sQ0FBWTtBQVFWQyxhQUFXLEdBQUc7QUFBQSxxS0FQSCxFQU9HOztBQUFBLGdLQU5SQyxxREFBWSxHQUFHQyxHQUFmLElBQXNCLEtBTWQ7O0FBQUEsaUtBTFBDLFNBS087O0FBQUEsdUtBSkQsS0FJQzs7QUFBQSx1S0FIRCxJQUdDOztBQUFBLHFLQUZILEtBRUc7O0FBQ1pDLDREQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUMsZUFBVyxDQUFDLEtBQUtILEdBQU4sRUFBVyxJQUFYLENBQVgsQ0FGWSxDQUdaO0FBQ0Q7O0FBRURJLGFBQVcsQ0FBQ0MsUUFBRCxFQUFXO0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7O0FBQ0RDLFNBQU8sQ0FBQ0MsSUFBRCxFQUFPO0FBQ1osU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBQ0RDLFVBQVEsR0FBRztBQUNULFNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7QUFDREMsV0FBUyxHQUFHO0FBQ1YsU0FBS0QsVUFBTCxHQUFrQixLQUFsQjtBQUNEOztBQUNERSxtQkFBaUIsR0FBRztBQUNsQixTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtGLFVBQWpCO0FBQ0Q7O0FBQ0RHLGdCQUFjLEdBQUc7QUFDZixTQUFLSCxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRURJLGNBQVksR0FBRztBQUNiLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtBQUNEOztBQUNEQyxlQUFhLEdBQUc7QUFDZCxTQUFLRCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBdkNTOztBQTBDWiwrREFBZSxJQUFJcEIsS0FBSixFQUFmOztBQUVBLGVBQWVNLFdBQWYsQ0FBMkJILEdBQTNCLEVBQWdDSCxLQUFoQyxFQUF1QztBQUNyQyxNQUFJRyxHQUFHLEtBQUssS0FBWixFQUFtQjtBQUVuQm1CLGtEQUFBLENBQ08sZ0NBRFAsRUFDeUM7QUFDckNDLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFHLFVBQVNyQixHQUFJO0FBRHRCO0FBRDRCLEdBRHpDLEVBTUdzQixJQU5ILENBTVNDLEdBQUQsSUFBUztBQUNiVixXQUFPLENBQUNDLEdBQVIsQ0FBWVMsR0FBRyxDQUFDQyxJQUFoQjtBQUNBLFdBQU9ELEdBQUcsQ0FBQ0MsSUFBWDtBQUNELEdBVEgsRUFVR0YsSUFWSCxDQVVTRSxJQUFELElBQVU7QUFDZDNCLFNBQUssQ0FBQ1MsT0FBTixDQUFja0IsSUFBZDtBQUNBWCxXQUFPLENBQUNDLEdBQVIsQ0FBWWpCLEtBQUssQ0FBQ1UsSUFBTixDQUFXa0IsSUFBdkI7QUFDQTtBQUNELEdBZEgsRUFlR0MsS0FmSCxDQWVVQyxLQUFELElBQVc7QUFDaEJkLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYSxLQUFaO0FBQ0QsR0FqQkg7QUFrQkQsQyxDQUVEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2IwMThhMzk2YmYwNGVmMTM3MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcbi8vIE5vdCBzZWN1cmUgd2F5IHRvIHN0b3JlIGNvb2tpZXMuIE5lZWQgdG8gaW1wcm92ZSBsYXRlclxyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jbGFzcyBTdG9yZSB7XHJcbiAgc2VydmljZXMgPSBbXTtcclxuICBqd3QgPSBwYXJzZUNvb2tpZXMoKS5qd3QgfHwgZmFsc2U7XHJcbiAgdXNlciA9IHVuZGVmaW5lZDtcclxuICBmb3JtSXNPcGVuID0gZmFsc2U7XHJcbiAgbG9naW5Nb2RhbCA9IHRydWU7XHJcbiAgZHJvcGRvd24gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBtYWtlQXV0b09ic2VydmFibGUodGhpcyk7XHJcbiAgICBnZXRVc2VyRGF0YSh0aGlzLmp3dCwgdGhpcyk7XHJcbiAgICAvLyBnZXRJbml0U2VydmljZXModGhpcylcclxuICB9XHJcblxyXG4gIHNldFNlcnZpY2VzKHNlcnZpY2VzKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VzID0gc2VydmljZXM7XHJcbiAgfVxyXG4gIHNldFVzZXIodXNlcikge1xyXG4gICAgdGhpcy51c2VyID0gdXNlcjtcclxuICB9XHJcbiAgb3BlbkZvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm1Jc09wZW4gPSB0cnVlO1xyXG4gIH1cclxuICBjbG9zZUZvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm1Jc09wZW4gPSBmYWxzZTtcclxuICB9XHJcbiAgb3BlblJlZ2lzdGVyTW9kYWwoKSB7XHJcbiAgICB0aGlzLmxvZ2luTW9kYWwgPSBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubG9naW5Nb2RhbCk7XHJcbiAgfVxyXG4gIG9wZW5Mb2dpbk1vZGFsKCkge1xyXG4gICAgdGhpcy5sb2dpbk1vZGFsID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9wZW5Ecm9wZG93bigpIHtcclxuICAgIHRoaXMuZHJvcGRvd24gPSAhdGhpcy5kcm9wZG93bjtcclxuICB9XHJcbiAgY2xvc2VEcm9wZG93bigpIHtcclxuICAgIHRoaXMuZHJvcGRvd24gPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTdG9yZSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckRhdGEoand0LCBTdG9yZSkge1xyXG4gIGlmIChqd3QgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gIGF4aW9zXHJcbiAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXJzL21lXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIFN0b3JlLnNldFVzZXIoZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFN0b3JlLnVzZXIubmFtZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRJbml0U2VydmljZXMoU3RvcmUpIHtcclxuICBcclxuLy8gICBheGlvc1xyXG4vLyAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zZXJ2aWNlc1wiKVxyXG4vLyAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbi8vICAgICAgIHJldHVybiByZXMuZGF0YTtcclxuLy8gICAgIH0pXHJcbi8vICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4vLyAgICAgICBTdG9yZS5zZXRTZXJ2aWNlcyhkYXRhKTtcclxuLy8gICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuLy8gICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfSlcclxuLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==