self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiY29uc3RydWN0b3IiLCJwYXJzZUNvb2tpZXMiLCJqd3QiLCJ1bmRlZmluZWQiLCJtYWtlQXV0b09ic2VydmFibGUiLCJnZXRVc2VyRGF0YSIsInNldFNlcnZpY2VzIiwic2VydmljZXMiLCJzZXRVc2VyIiwidXNlciIsIm9wZW5Gb3JtIiwiZm9ybUlzT3BlbiIsImNsb3NlRm9ybSIsIm9wZW5SZWdpc3Rlck1vZGFsIiwibG9naW5Nb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuTG9naW5Nb2RhbCIsIm9wZW5Ecm9wZG93biIsImRyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm5hbWUiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQU4sQ0FBWTtBQVFWQyxhQUFXLEdBQUc7QUFBQSxxS0FQSCxFQU9HOztBQUFBLGdLQU5SQyxxREFBWSxHQUFHQyxHQUFmLElBQXNCLEtBTWQ7O0FBQUEsaUtBTFBDLFNBS087O0FBQUEsdUtBSkQsS0FJQzs7QUFBQSx1S0FIRCxJQUdDOztBQUFBLHFLQUZILEtBRUc7O0FBQ1pDLDREQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUMsZUFBVyxDQUFDLEtBQUtILEdBQU4sRUFBVyxJQUFYLENBQVgsQ0FGWSxDQUdaO0FBQ0Q7O0FBRURJLGFBQVcsQ0FBQ0MsUUFBRCxFQUFXO0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7O0FBQ0RDLFNBQU8sQ0FBQ0MsSUFBRCxFQUFPO0FBQ1osU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBQ0RDLFVBQVEsR0FBRztBQUNULFNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7QUFDREMsV0FBUyxHQUFHO0FBQ1YsU0FBS0QsVUFBTCxHQUFrQixLQUFsQjtBQUNEOztBQUNERSxtQkFBaUIsR0FBRztBQUNsQixTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtGLFVBQWpCO0FBQ0Q7O0FBQ0RHLGdCQUFjLEdBQUc7QUFDZixTQUFLSCxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRURJLGNBQVksR0FBRztBQUNiLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtBQUNEOztBQUNEQyxlQUFhLEdBQUc7QUFDZCxTQUFLRCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBdkNTOztBQTBDWiwrREFBZSxJQUFJcEIsS0FBSixFQUFmOztBQUVBLGVBQWVNLFdBQWYsQ0FBMkJILEdBQTNCLEVBQWdDSCxLQUFoQyxFQUF1QztBQUNyQyxNQUFJRyxHQUFHLEtBQUssS0FBWixFQUFtQjtBQUVuQm1CLGtEQUFBLENBQ08sZ0NBRFAsRUFDeUM7QUFDckNDLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFHLFVBQVNyQixHQUFJO0FBRHRCO0FBRDRCLEdBRHpDLEVBTUdzQixJQU5ILENBTVNDLEdBQUQsSUFBUztBQUNiVixXQUFPLENBQUNDLEdBQVIsQ0FBWVMsR0FBRyxDQUFDQyxJQUFoQjtBQUNBLFdBQU9ELEdBQUcsQ0FBQ0MsSUFBWDtBQUNELEdBVEgsRUFVR0YsSUFWSCxDQVVTRSxJQUFELElBQVU7QUFDZDNCLFNBQUssQ0FBQ1MsT0FBTixDQUFja0IsSUFBZDtBQUNBWCxXQUFPLENBQUNDLEdBQVIsQ0FBWWpCLEtBQUssQ0FBQ1UsSUFBTixDQUFXa0IsSUFBdkI7QUFDQTtBQUNELEdBZEgsRUFlR0MsS0FmSCxDQWVVQyxLQUFELElBQVc7QUFDaEJkLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYSxLQUFaO0FBQ0QsR0FqQkg7QUFrQkQsQyxDQUVEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNiMDE4YTM5NmJmMDRlZjEzNzI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG4vLyBOb3Qgc2VjdXJlIHdheSB0byBzdG9yZSBjb29raWVzLiBOZWVkIHRvIGltcHJvdmUgbGF0ZXJcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY2xhc3MgU3RvcmUge1xyXG4gIHNlcnZpY2VzID0gW107XHJcbiAgand0ID0gcGFyc2VDb29raWVzKCkuand0IHx8IGZhbHNlO1xyXG4gIHVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgZm9ybUlzT3BlbiA9IGZhbHNlO1xyXG4gIGxvZ2luTW9kYWwgPSB0cnVlO1xyXG4gIGRyb3Bkb3duID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMpO1xyXG4gICAgZ2V0VXNlckRhdGEodGhpcy5qd3QsIHRoaXMpO1xyXG4gICAgLy8gZ2V0SW5pdFNlcnZpY2VzKHRoaXMpXHJcbiAgfVxyXG5cclxuICBzZXRTZXJ2aWNlcyhzZXJ2aWNlcykge1xyXG4gICAgdGhpcy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xyXG4gIH1cclxuICBzZXRVc2VyKHVzZXIpIHtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgfVxyXG4gIG9wZW5Gb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtSXNPcGVuID0gdHJ1ZTtcclxuICB9XHJcbiAgY2xvc2VGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtSXNPcGVuID0gZmFsc2U7XHJcbiAgfVxyXG4gIG9wZW5SZWdpc3Rlck1vZGFsKCkge1xyXG4gICAgdGhpcy5sb2dpbk1vZGFsID0gZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvZ2luTW9kYWwpO1xyXG4gIH1cclxuICBvcGVuTG9naW5Nb2RhbCgpIHtcclxuICAgIHRoaXMubG9naW5Nb2RhbCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duID0gIXRoaXMuZHJvcGRvd247XHJcbiAgfVxyXG4gIGNsb3NlRHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RvcmUoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJEYXRhKGp3dCwgU3RvcmUpIHtcclxuICBpZiAoand0ID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICBheGlvc1xyXG4gICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy9tZVwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBTdG9yZS5zZXRVc2VyKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhTdG9yZS51c2VyLm5hbWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0SW5pdFNlcnZpY2VzKFN0b3JlKSB7XHJcbiAgXHJcbi8vICAgYXhpb3NcclxuLy8gICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvc2VydmljZXNcIilcclxuLy8gICAgIC50aGVuKChyZXMpID0+IHtcclxuLy8gICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4vLyAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuLy8gICAgICAgU3RvcmUuc2V0U2VydmljZXMoZGF0YSk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbi8vICAgICAgIHJldHVybjtcclxuLy8gICAgIH0pXHJcbi8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICAgIH0pO1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=