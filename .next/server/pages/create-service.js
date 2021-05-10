(function() {
var exports = {};
exports.id = "pages/create-service";
exports.ids = ["pages/create-service"];
exports.modules = {

/***/ "./src/Store/index.js":
/*!****************************!*\
  !*** ./src/Store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not secure way to store cookies. Need to improve later




class Store {
  constructor() {
    _defineProperty(this, "services", []);

    _defineProperty(this, "jwt", (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)().jwt || false);

    _defineProperty(this, "user", undefined);

    _defineProperty(this, "formIsOpen", false);

    _defineProperty(this, "loginModal", true);

    _defineProperty(this, "dropdown", false);

    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
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

/***/ }),

/***/ "./src/global/globalStyles.js":
/*!************************************!*\
  !*** ./src/global/globalStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "globalStyles__Container",
  componentId: "oyn28y-0"
})(["max-width:1280px;margin:0 auto;padding:0 15px;"]);

/***/ }),

/***/ "./src/global/index.js":
/*!*****************************!*\
  !*** ./src/global/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerToApp": function() { return /* binding */ registerToApp; },
/* harmony export */   "sendServiceData": function() { return /* binding */ sendServiceData; },
/* harmony export */   "LoginToApp": function() { return /* binding */ LoginToApp; },
/* harmony export */   "Logout": function() { return /* binding */ Logout; },
/* harmony export */   "LogoutAll": function() { return /* binding */ LogoutAll; }
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store */ "./src/Store/index.js");



async function registerToApp(registerInfo) {
  axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:8000/users/`, registerInfo).then(res => {
    return res.data;
  }).then(data => {
    (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, "jwt", data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });
    if (registerInfo.file === undefined) return window.location.reload(false);
    let formData = new FormData();
    formData.append("avatar", registerInfo.file);
    axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:8000/users/me/avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${data.token}`
      }
    });
    return window.location.reload(false);
    return;
  }).catch(error => {
    console.log(error);
  });
}
async function sendServiceData(serviceInfo, images) {
  // 1.Create Service
  axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:8000/services`, serviceInfo, {
    headers: {
      Authorization: `Bearer ${_Store__WEBPACK_IMPORTED_MODULE_2__.default.jwt}`
    }
  }) // 2. If Service have images create formData and upload them to DB.
  .then(res => {
    // console.log(res.data);
    if (images.length === 0) return;
    let formData = new FormData();
    images.forEach(image => {
      formData.append("images", image);
    }); // Content-Type is special for array of images.

    return axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:8000/services/${res.data._id}/images`, formData, {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2),
        Authorization: `Bearer ${_Store__WEBPACK_IMPORTED_MODULE_2__.default.jwt}`
      }
    });
  }).then(res => {
    console.log(res.data);
    return;
  }).catch(error => {
    console.log(error);
  });
}
async function LoginToApp(loginInfo) {
  axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:8000/users/login`, loginInfo).then(res => {
    console.log(res.data);
    return res.data;
  }).then(data => {
    (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, "jwt", data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });
    window.location.reload(false);
    return;
  }).catch(error => {
    console.log(error);
  });
}
async function Logout() {
  console.log(`${_Store__WEBPACK_IMPORTED_MODULE_2__.default.jwt}`);
  axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:8000/users/logout`, {}, {
    headers: {
      Authorization: `Bearer ${_Store__WEBPACK_IMPORTED_MODULE_2__.default.jwt}`
    }
  }).then(() => {
    (0,nookies__WEBPACK_IMPORTED_MODULE_0__.destroyCookie)(null, "jwt");
    return window.location.reload(false);
  }).catch(error => {
    console.log(error);
  });
}
async function LogoutAll() {
  console.log(`${_Store__WEBPACK_IMPORTED_MODULE_2__.default.jwt}`);
  axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:8000/users/logoutAll`, {}, {
    headers: {
      Authorization: `Bearer ${_Store__WEBPACK_IMPORTED_MODULE_2__.default.jwt}`
    }
  }).then(() => {
    (0,nookies__WEBPACK_IMPORTED_MODULE_0__.destroyCookie)(null, "jwt");
    return window.location.reload(false);
  }).catch(error => {
    console.log(error);
  });
}

/***/ }),

/***/ "./src/pages/create-service.js":
/*!*************************************!*\
  !*** ./src/pages/create-service.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global */ "./src/global/index.js");
/* harmony import */ var _global_globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/globalStyles */ "./src/global/globalStyles.js");

var _jsxFileName = "D:\\WORK\\1.GitHub Repos\\Maistor\\src\\pages\\create-service.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import styled from "styled-components";






const SignupSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__.string().min(2, "Too Short!").max(70, "Too Long!").required("Required"),
  description: yup__WEBPACK_IMPORTED_MODULE_3__.string().min(2, "Too Short!").max(1000, "Too Long!").required("Required"),
  price: yup__WEBPACK_IMPORTED_MODULE_3__.number("Invalid price")
});

const CreateService = () => {
  const {
    0: files,
    1: setFiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    getRootProps,
    getInputProps
  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone)({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  const images = files.map(file => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: file.preview,
        style: {
          width: "200px"
        },
        alt: "preview"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, file.name, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_globalStyles__WEBPACK_IMPORTED_MODULE_6__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: {
        name: "",
        description: "",
        price: ""
      },
      validationSchema: SignupSchema,
      onSubmit: values => {
        console.log(values, files);
        (0,_global__WEBPACK_IMPORTED_MODULE_5__.sendServiceData)(values, files);
      },
      children: ({
        setFieldValue,
        errors,
        touched
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "name",
          children: "\u0418\u043C\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
          name: "name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "description",
          children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "description",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
          name: "description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "price",
          children: "\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u0430 \u0446\u0435\u043D\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "price",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
          name: "price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({}, getInputProps()), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Drop files here"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, undefined)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CreateService);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("mobx");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dropzone");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/create-service.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWlzdG9yLXJlYWN0LWFwcC8uL3NyYy9TdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYWlzdG9yLXJlYWN0LWFwcC8uL3NyYy9nbG9iYWwvZ2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovL21haXN0b3ItcmVhY3QtYXBwLy4vc3JjL2dsb2JhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYWlzdG9yLXJlYWN0LWFwcC8uL3NyYy9wYWdlcy9jcmVhdGUtc2VydmljZS5qcyIsIndlYnBhY2s6Ly9tYWlzdG9yLXJlYWN0LWFwcC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbWFpc3Rvci1yZWFjdC1hcHAvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9tYWlzdG9yLXJlYWN0LWFwcC9leHRlcm5hbCBcIm1vYnhcIiIsIndlYnBhY2s6Ly9tYWlzdG9yLXJlYWN0LWFwcC9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9tYWlzdG9yLXJlYWN0LWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWFpc3Rvci1yZWFjdC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1kcm9wem9uZVwiIiwid2VicGFjazovL21haXN0b3ItcmVhY3QtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbWFpc3Rvci1yZWFjdC1hcHAvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL21haXN0b3ItcmVhY3QtYXBwL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiU3RvcmUiLCJjb25zdHJ1Y3RvciIsInBhcnNlQ29va2llcyIsImp3dCIsInVuZGVmaW5lZCIsIm1ha2VBdXRvT2JzZXJ2YWJsZSIsImdldFVzZXJEYXRhIiwic2V0U2VydmljZXMiLCJzZXJ2aWNlcyIsInNldFVzZXIiLCJ1c2VyIiwib3BlbkZvcm0iLCJmb3JtSXNPcGVuIiwiY2xvc2VGb3JtIiwib3BlblJlZ2lzdGVyTW9kYWwiLCJsb2dpbk1vZGFsIiwiY29uc29sZSIsImxvZyIsIm9wZW5Mb2dpbk1vZGFsIiwib3BlbkRyb3Bkb3duIiwiZHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwibmFtZSIsImNhdGNoIiwiZXJyb3IiLCJDb250YWluZXIiLCJzdHlsZWQiLCJyZWdpc3RlclRvQXBwIiwicmVnaXN0ZXJJbmZvIiwic2V0Q29va2llIiwidG9rZW4iLCJtYXhBZ2UiLCJwYXRoIiwiZmlsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInNlbmRTZXJ2aWNlRGF0YSIsInNlcnZpY2VJbmZvIiwiaW1hZ2VzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImltYWdlIiwiX2lkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiTG9naW5Ub0FwcCIsImxvZ2luSW5mbyIsIkxvZ291dCIsImRlc3Ryb3lDb29raWUiLCJMb2dvdXRBbGwiLCJTaWdudXBTY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm1pbiIsIm1heCIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIkNyZWF0ZVNlcnZpY2UiLCJmaWxlcyIsInNldEZpbGVzIiwidXNlU3RhdGUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwibWFwIiwiT2JqZWN0IiwiYXNzaWduIiwicHJldmlldyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwidmFsdWVzIiwic2V0RmllbGRWYWx1ZSIsImVycm9ycyIsInRvdWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQU4sQ0FBWTtBQVFW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QW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEYsZUF5QkUscUdBQVNoQixZQUFZLEVBQXJCO0FBQUEsa0NBQ0UseUZBQVdDLGFBQWEsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6QkYsZUE2QkU7QUFBQSxvQkFBTTNCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3QkYsZUErQkU7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9ERCxDQTNFRDs7QUE2RUEsK0RBQWVzQixhQUFmLEU7Ozs7Ozs7Ozs7O0FDbEdBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2NyZWF0ZS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUF1dG9PYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuLy8gTm90IHNlY3VyZSB3YXkgdG8gc3RvcmUgY29va2llcy4gTmVlZCB0byBpbXByb3ZlIGxhdGVyXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNsYXNzIFN0b3JlIHtcclxuICBzZXJ2aWNlcyA9IFtdO1xyXG4gIGp3dCA9IHBhcnNlQ29va2llcygpLmp3dCB8fCBmYWxzZTtcclxuICB1c2VyID0gdW5kZWZpbmVkO1xyXG4gIGZvcm1Jc09wZW4gPSBmYWxzZTtcclxuICBsb2dpbk1vZGFsID0gdHJ1ZTtcclxuICBkcm9wZG93biA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzKTtcclxuICAgIGdldFVzZXJEYXRhKHRoaXMuand0LCB0aGlzKTtcclxuICAgIC8vIGdldEluaXRTZXJ2aWNlcyh0aGlzKVxyXG4gIH1cclxuXHJcbiAgc2V0U2VydmljZXMoc2VydmljZXMpIHtcclxuICAgIHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcztcclxuICB9XHJcbiAgc2V0VXNlcih1c2VyKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gIH1cclxuICBvcGVuRm9ybSgpIHtcclxuICAgIHRoaXMuZm9ybUlzT3BlbiA9IHRydWU7XHJcbiAgfVxyXG4gIGNsb3NlRm9ybSgpIHtcclxuICAgIHRoaXMuZm9ybUlzT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuICBvcGVuUmVnaXN0ZXJNb2RhbCgpIHtcclxuICAgIHRoaXMubG9naW5Nb2RhbCA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5sb2dpbk1vZGFsKTtcclxuICB9XHJcbiAgb3BlbkxvZ2luTW9kYWwoKSB7XHJcbiAgICB0aGlzLmxvZ2luTW9kYWwgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb3BlbkRyb3Bkb3duKCkge1xyXG4gICAgdGhpcy5kcm9wZG93biA9ICF0aGlzLmRyb3Bkb3duO1xyXG4gIH1cclxuICBjbG9zZURyb3Bkb3duKCkge1xyXG4gICAgdGhpcy5kcm9wZG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0b3JlKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyRGF0YShqd3QsIFN0b3JlKSB7XHJcbiAgaWYgKGp3dCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgYXhpb3NcclxuICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvdXNlcnMvbWVcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dH1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgU3RvcmUuc2V0VXNlcihkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coU3RvcmUudXNlci5uYW1lKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGdldEluaXRTZXJ2aWNlcyhTdG9yZSkge1xyXG4gIFxyXG4vLyAgIGF4aW9zXHJcbi8vICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NlcnZpY2VzXCIpXHJcbi8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuLy8gICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4vLyAgICAgfSlcclxuLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbi8vICAgICAgIFN0b3JlLnNldFNlcnZpY2VzKGRhdGEpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBkZXN0cm95Q29va2llLCBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vU3RvcmVcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclRvQXBwKHJlZ2lzdGVySW5mbykge1xyXG4gIGF4aW9zXHJcbiAgICAucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXJzL2AsIHJlZ2lzdGVySW5mbylcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHNldENvb2tpZShudWxsLCBcImp3dFwiLCBkYXRhLnRva2VuLCB7XHJcbiAgICAgICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCxcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVnaXN0ZXJJbmZvLmZpbGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYXZhdGFyXCIsIHJlZ2lzdGVySW5mby5maWxlKTtcclxuICAgICAgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXJzL21lL2F2YXRhcmAsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7ZGF0YS50b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFNlcnZpY2VEYXRhKHNlcnZpY2VJbmZvLCBpbWFnZXMpIHtcclxuICAvLyAxLkNyZWF0ZSBTZXJ2aWNlXHJcbiAgYXhpb3NcclxuICAgIC5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvc2VydmljZXNgLCBzZXJ2aWNlSW5mbywge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke1N0b3JlLmp3dH1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIC8vIDIuIElmIFNlcnZpY2UgaGF2ZSBpbWFnZXMgY3JlYXRlIGZvcm1EYXRhIGFuZCB1cGxvYWQgdGhlbSB0byBEQi5cclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlc1wiLCBpbWFnZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ29udGVudC1UeXBlIGlzIHNwZWNpYWwgZm9yIGFycmF5IG9mIGltYWdlcy5cclxuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zZXJ2aWNlcy8ke3Jlcy5kYXRhLl9pZH0vaW1hZ2VzYCxcclxuICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XHJcbiAgICAgICAgICAgICAgXCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBjaGFyc2V0PXV0Zi04OyBib3VuZGFyeT1cIiArXHJcbiAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnN1YnN0cigyKSxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke1N0b3JlLmp3dH1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTG9naW5Ub0FwcChsb2dpbkluZm8pIHtcclxuICBheGlvc1xyXG4gICAgLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy9sb2dpbmAsIGxvZ2luSW5mbylcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgc2V0Q29va2llKG51bGwsIFwiand0XCIsIGRhdGEudG9rZW4sIHtcclxuICAgICAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTG9nb3V0KCkge1xyXG4gIGNvbnNvbGUubG9nKGAke1N0b3JlLmp3dH1gKTtcclxuICBheGlvc1xyXG4gICAgLnBvc3QoXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwMDAvdXNlcnMvbG9nb3V0YCxcclxuICAgICAge30sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7U3RvcmUuand0fWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkZXN0cm95Q29va2llKG51bGwsIFwiand0XCIpO1xyXG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIExvZ291dEFsbCgpIHtcclxuICBjb25zb2xlLmxvZyhgJHtTdG9yZS5qd3R9YCk7XHJcbiAgYXhpb3NcclxuICAgIC5wb3N0KFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXJzL2xvZ291dEFsbGAsXHJcbiAgICAgIHt9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke1N0b3JlLmp3dH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGVzdHJveUNvb2tpZShudWxsLCBcImp3dFwiKTtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQsIEVycm9yTWVzc2FnZSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcclxuaW1wb3J0IHsgc2VuZFNlcnZpY2VEYXRhIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2dsb2JhbC9nbG9iYWxTdHlsZXNcIjtcclxuXHJcbmNvbnN0IFNpZ251cFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAubWluKDIsIFwiVG9vIFNob3J0IVwiKVxyXG4gICAgLm1heCg3MCwgXCJUb28gTG9uZyFcIilcclxuICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIGRlc2NyaXB0aW9uOiBZdXAuc3RyaW5nKClcclxuICAgIC5taW4oMiwgXCJUb28gU2hvcnQhXCIpXHJcbiAgICAubWF4KDEwMDAsIFwiVG9vIExvbmchXCIpXHJcbiAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBwcmljZTogWXVwLm51bWJlcihcIkludmFsaWQgcHJpY2VcIiksXHJcbn0pO1xyXG5cclxuY29uc3QgQ3JlYXRlU2VydmljZSA9ICgpID0+IHtcclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMgfSA9IHVzZURyb3B6b25lKHtcclxuICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXHJcbiAgICBvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB7XHJcbiAgICAgIHNldEZpbGVzKFxyXG4gICAgICAgIGFjY2VwdGVkRmlsZXMubWFwKChmaWxlKSA9PlxyXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihmaWxlLCB7XHJcbiAgICAgICAgICAgIHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgaW1hZ2VzID0gZmlsZXMubWFwKChmaWxlKSA9PiAoXHJcbiAgICA8ZGl2IGtleT17ZmlsZS5uYW1lfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz17ZmlsZS5wcmV2aWV3fSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19IGFsdD1cInByZXZpZXdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgIHByaWNlOiBcIlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17U2lnbnVwU2NoZW1hfVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMsIGZpbGVzKTtcclxuICAgICAgICAgIHNlbmRTZXJ2aWNlRGF0YSh2YWx1ZXMsIGZpbGVzKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IHNldEZpZWxkVmFsdWUsIGVycm9ycywgdG91Y2hlZCB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+0JjQvNC1PC9sYWJlbD5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJuYW1lXCIgLz5cclxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwibmFtZVwiIC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+0J7Qv9C40YHQsNC90LjQtTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj7QodGC0LDRgNGC0L7QstCwINGG0LXQvdCwPC9sYWJlbD5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJwcmljZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicHJpY2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwiYXZhdGFyXCI+0JDQstCw0YLQsNGAPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKFwiZmlsZVwiLCBldmVudC5jdXJyZW50VGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImF2YXRhclwiIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxyXG4gICAgICAgICAgICAgIDxwPkRyb3AgZmlsZXMgaGVyZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2ltYWdlc308L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVNlcnZpY2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYnhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kcm9wem9uZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9