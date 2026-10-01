/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/Idle-boy sync \\.png$":
/*!***************************************************!*\
  !*** ./src/img/Idle-boy sync nonrecursive \.png$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Idle1.png": "./src/img/Idle-boy/Idle1.png",
	"./Idle2.png": "./src/img/Idle-boy/Idle2.png",
	"./Idle3.png": "./src/img/Idle-boy/Idle3.png",
	"./Idle4.png": "./src/img/Idle-boy/Idle4.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/Idle-boy sync \\.png$";

/***/ }),

/***/ "./src/img/Idle-boy/Idle1.png":
/*!************************************!*\
  !*** ./src/img/Idle-boy/Idle1.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cbddbf9b08b85dbb8ef0dcc94b694b36.png");

/***/ }),

/***/ "./src/img/Idle-boy/Idle2.png":
/*!************************************!*\
  !*** ./src/img/Idle-boy/Idle2.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "35c42d61c7596217049a9ad0d5cb5bc0.png");

/***/ }),

/***/ "./src/img/Idle-boy/Idle3.png":
/*!************************************!*\
  !*** ./src/img/Idle-boy/Idle3.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dfbe00849f0a5f293abf7e7cfe6a0402.png");

/***/ }),

/***/ "./src/img/Idle-boy/Idle4.png":
/*!************************************!*\
  !*** ./src/img/Idle-boy/Idle4.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f2471e76ca1dc28320d26c9e94751e51.png");

/***/ }),

/***/ "./src/img/Jump-boy sync \\.png$":
/*!***************************************************!*\
  !*** ./src/img/Jump-boy sync nonrecursive \.png$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Jump1.png": "./src/img/Jump-boy/Jump1.png",
	"./Jump2.png": "./src/img/Jump-boy/Jump2.png",
	"./Jump3.png": "./src/img/Jump-boy/Jump3.png",
	"./Jump4.png": "./src/img/Jump-boy/Jump4.png",
	"./Jump5.png": "./src/img/Jump-boy/Jump5.png",
	"./Jump6.png": "./src/img/Jump-boy/Jump6.png",
	"./Jump7.png": "./src/img/Jump-boy/Jump7.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/Jump-boy sync \\.png$";

/***/ }),

/***/ "./src/img/Jump-boy/Jump1.png":
/*!************************************!*\
  !*** ./src/img/Jump-boy/Jump1.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f2180ac3a9de38f9f2ee03eda7714095.png");

/***/ }),

/***/ "./src/img/Jump-boy/Jump2.png":
/*!************************************!*\
  !*** ./src/img/Jump-boy/Jump2.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0962ce9d0e2a614b8f015743bc395cec.png");

/***/ }),

/***/ "./src/img/Jump-boy/Jump3.png":
/*!************************************!*\
  !*** ./src/img/Jump-boy/Jump3.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f449d69d53b8e7aa10adebcdfecb386f.png");

/***/ }),

/***/ "./src/img/Jump-boy/Jump4.png":
/*!************************************!*\
  !*** ./src/img/Jump-boy/Jump4.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "88c01267750eb90018053170c355a0d2.png");

/***/ }),

/***/ "./src/img/Jump-boy/Jump5.png":
/*!************************************!*\
  !*** ./src/img/Jump-boy/Jump5.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "72be284def86e007b306e936dbe9f056.png");

/***/ }),

/***/ "./src/img/Jump-boy/Jump6.png":
/*!************************************!*\
  !*** ./src/img/Jump-boy/Jump6.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9309ae5076fdadf9ff1eff25de23d439.png");

/***/ }),

/***/ "./src/img/Jump-boy/Jump7.png":
/*!************************************!*\
  !*** ./src/img/Jump-boy/Jump7.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8f49bb4f695e82d654f66a2fb8b163b0.png");

/***/ }),

/***/ "./src/img/Run-boy sync \\.png$":
/*!**************************************************!*\
  !*** ./src/img/Run-boy sync nonrecursive \.png$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Run1.png": "./src/img/Run-boy/Run1.png",
	"./Run2.png": "./src/img/Run-boy/Run2.png",
	"./Run3.png": "./src/img/Run-boy/Run3.png",
	"./Run4.png": "./src/img/Run-boy/Run4.png",
	"./Run5.png": "./src/img/Run-boy/Run5.png",
	"./Run6.png": "./src/img/Run-boy/Run6.png",
	"./Run7.png": "./src/img/Run-boy/Run7.png",
	"./Run8.png": "./src/img/Run-boy/Run8.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/Run-boy sync \\.png$";

/***/ }),

/***/ "./src/img/Run-boy/Run1.png":
/*!**********************************!*\
  !*** ./src/img/Run-boy/Run1.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "77f07955f4ed3df0c390c7cb4692be1a.png");

/***/ }),

/***/ "./src/img/Run-boy/Run2.png":
/*!**********************************!*\
  !*** ./src/img/Run-boy/Run2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5d25d93ed978d69c598883c9b7348388.png");

/***/ }),

/***/ "./src/img/Run-boy/Run3.png":
/*!**********************************!*\
  !*** ./src/img/Run-boy/Run3.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3df7402522a2eaadfdb731d27199660e.png");

/***/ }),

/***/ "./src/img/Run-boy/Run4.png":
/*!**********************************!*\
  !*** ./src/img/Run-boy/Run4.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3e78b34e36de7768c9e563d8aa36ef17.png");

/***/ }),

/***/ "./src/img/Run-boy/Run5.png":
/*!**********************************!*\
  !*** ./src/img/Run-boy/Run5.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "69daeb4c8ff4777a76f17cd8f8e4a751.png");

/***/ }),

/***/ "./src/img/Run-boy/Run6.png":
/*!**********************************!*\
  !*** ./src/img/Run-boy/Run6.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6e10300a35ee2119f7f1905372644d2a.png");

/***/ }),

/***/ "./src/img/Run-boy/Run7.png":
/*!**********************************!*\
  !*** ./src/img/Run-boy/Run7.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ccc367f87418a990f7f0abaa3507763d.png");

/***/ }),

/***/ "./src/img/Run-boy/Run8.png":
/*!**********************************!*\
  !*** ./src/img/Run-boy/Run8.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "580dc41bf27d2bc55e70c1cc4aca99ee.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14f197f9b6b592e485b8dea2e41730c3.png");

/***/ }),

/***/ "./src/img/banner.png":
/*!****************************!*\
  !*** ./src/img/banner.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f94f0606a0edc8d985eb58560c2cab0d.png");

/***/ }),

/***/ "./src/img/idle-girl sync \\.png$":
/*!****************************************************!*\
  !*** ./src/img/idle-girl sync nonrecursive \.png$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./idle-1.png": "./src/img/idle-girl/idle-1.png",
	"./idle-2.png": "./src/img/idle-girl/idle-2.png",
	"./idle-3.png": "./src/img/idle-girl/idle-3.png",
	"./idle-4.png": "./src/img/idle-girl/idle-4.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/idle-girl sync \\.png$";

/***/ }),

/***/ "./src/img/idle-girl/idle-1.png":
/*!**************************************!*\
  !*** ./src/img/idle-girl/idle-1.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "06e65887eed4356c5a8d9971296156b0.png");

/***/ }),

/***/ "./src/img/idle-girl/idle-2.png":
/*!**************************************!*\
  !*** ./src/img/idle-girl/idle-2.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "050371102f217c188188df90cea9c8f2.png");

/***/ }),

/***/ "./src/img/idle-girl/idle-3.png":
/*!**************************************!*\
  !*** ./src/img/idle-girl/idle-3.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e3a2461854f4fd3de37b1de0809ddc96.png");

/***/ }),

/***/ "./src/img/idle-girl/idle-4.png":
/*!**************************************!*\
  !*** ./src/img/idle-girl/idle-4.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "55e8596a5ed2a9dc8128ed1b5c81778a.png");

/***/ }),

/***/ "./src/img/jump-girl sync \\.png$":
/*!****************************************************!*\
  !*** ./src/img/jump-girl sync nonrecursive \.png$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./jump-1.png": "./src/img/jump-girl/jump-1.png",
	"./jump-2.png": "./src/img/jump-girl/jump-2.png",
	"./jump-3.png": "./src/img/jump-girl/jump-3.png",
	"./jump-4.png": "./src/img/jump-girl/jump-4.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/jump-girl sync \\.png$";

/***/ }),

/***/ "./src/img/jump-girl/jump-1.png":
/*!**************************************!*\
  !*** ./src/img/jump-girl/jump-1.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1550157718655ff6478b4ca81ac80b1d.png");

/***/ }),

/***/ "./src/img/jump-girl/jump-2.png":
/*!**************************************!*\
  !*** ./src/img/jump-girl/jump-2.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f65fa7bd05bcbc9e854d283e11171e6f.png");

/***/ }),

/***/ "./src/img/jump-girl/jump-3.png":
/*!**************************************!*\
  !*** ./src/img/jump-girl/jump-3.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "948a7e56b7226d2154327690e5061584.png");

/***/ }),

/***/ "./src/img/jump-girl/jump-4.png":
/*!**************************************!*\
  !*** ./src/img/jump-girl/jump-4.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "037defb85a9f46bf41b8f87f6cbc0ff2.png");

/***/ }),

/***/ "./src/img/miniPlatform.png":
/*!**********************************!*\
  !*** ./src/img/miniPlatform.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5f9d2e3e1386e9a0fbd5ab4f00fc2031.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0220c7305107846042a8a58580c7afd4.png");

/***/ }),

/***/ "./src/img/run-girl sync \\.png$":
/*!***************************************************!*\
  !*** ./src/img/run-girl sync nonrecursive \.png$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./run-1.png": "./src/img/run-girl/run-1.png",
	"./run-2.png": "./src/img/run-girl/run-2.png",
	"./run-3.png": "./src/img/run-girl/run-3.png",
	"./run-4.png": "./src/img/run-girl/run-4.png",
	"./run-5.png": "./src/img/run-girl/run-5.png",
	"./run-6.png": "./src/img/run-girl/run-6.png",
	"./run-7.png": "./src/img/run-girl/run-7.png",
	"./run-8.png": "./src/img/run-girl/run-8.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/run-girl sync \\.png$";

/***/ }),

/***/ "./src/img/run-girl/run-1.png":
/*!************************************!*\
  !*** ./src/img/run-girl/run-1.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e44d15a08336e58090c8a0683b2b2ea4.png");

/***/ }),

/***/ "./src/img/run-girl/run-2.png":
/*!************************************!*\
  !*** ./src/img/run-girl/run-2.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6b5e4f7a531e993efe550cdc505cb842.png");

/***/ }),

/***/ "./src/img/run-girl/run-3.png":
/*!************************************!*\
  !*** ./src/img/run-girl/run-3.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "77bf89174fe7b5482e187d507bc4f06d.png");

/***/ }),

/***/ "./src/img/run-girl/run-4.png":
/*!************************************!*\
  !*** ./src/img/run-girl/run-4.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9cd79634044fa9f1080ed4989a059848.png");

/***/ }),

/***/ "./src/img/run-girl/run-5.png":
/*!************************************!*\
  !*** ./src/img/run-girl/run-5.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d34beb82f3fd580c21f8d7907c5e29da.png");

/***/ }),

/***/ "./src/img/run-girl/run-6.png":
/*!************************************!*\
  !*** ./src/img/run-girl/run-6.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "30c628a9020cea7dd8d09048343b4d39.png");

/***/ }),

/***/ "./src/img/run-girl/run-7.png":
/*!************************************!*\
  !*** ./src/img/run-girl/run-7.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "19e6dcf2d988bd4951f040456eec35e3.png");

/***/ }),

/***/ "./src/img/run-girl/run-8.png":
/*!************************************!*\
  !*** ./src/img/run-girl/run-8.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ad625a52724bf72ef635cbe6520ba555.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_miniPlatform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/miniPlatform.png */ "./src/img/miniPlatform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_banner_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/banner.png */ "./src/img/banner.png");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels */ "./src/js/levels.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math */ "./src/js/math.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui */ "./src/js/ui.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//sprites e cenário







 //Tela

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var W = 1024;
var H = 576;
canvas.width = W;
canvas.height = H;
var gravity = 1.4;
var STEP = 1000 / 60;
var MAX_LIVES = 5;
var FONT = '"Jockey One", "Arial Narrow", sans-serif'; //função que cria imagens

function creatImage(src) {
  var image = new Image();
  image.src = src;
  return image;
} // carrega todas as imagens de uma pasta, em ordem alfabética


function loadFrames(ctx) {
  return ctx.keys().sort().map(function (key) {
    var mod = ctx(key);
    return creatImage(mod["default"] || mod);
  });
}

var SPRITES = {
  boy: {
    idle: loadFrames(__webpack_require__("./src/img/Idle-boy sync \\.png$")),
    run: loadFrames(__webpack_require__("./src/img/Run-boy sync \\.png$")),
    jump: loadFrames(__webpack_require__("./src/img/Jump-boy sync \\.png$"))
  },
  girl: {
    idle: loadFrames(__webpack_require__("./src/img/idle-girl sync \\.png$")),
    run: loadFrames(__webpack_require__("./src/img/run-girl sync \\.png$")),
    jump: loadFrames(__webpack_require__("./src/img/jump-girl sync \\.png$"))
  }
};
var platformImage = creatImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var miniPlatformImage = creatImage(_img_miniPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var backgroundImage = creatImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var bannerImage = creatImage(_img_banner_png__WEBPACK_IMPORTED_MODULE_3__["default"]); //estado do jogo

var keys = {
  left: false,
  right: false,
  jump: false
};
var jumpBuffer = 0;
var jumpReleased = false;
var game = {
  state: 'title',
  // title | select | playing | math | paused | celebrate | results | gameover
  levelIndex: 0,
  level: _levels__WEBPACK_IMPORTED_MODULE_4__["LEVELS"][0],
  character: 'boy',
  camera: 0,
  time: 0,
  lives: MAX_LIVES,
  contas: 0,
  errors: 0,
  falls: 0,
  byOp: {},
  platforms: [],
  flags: [],
  banners: [],
  near: null,
  checkpoint: {
    x: 100
  },
  particles: [],
  shake: 0,
  celebrateTimer: 0,
  tick: 0,
  player: null
};

function newPlayer() {
  return {
    x: 100,
    y: _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"] - 80,
    vx: 0,
    vy: 0,
    w: 80,
    h: 80,
    grounded: true,
    facing: 'right',
    airTicks: 0,
    invuln: 0
  };
} //monta a fase: plataformas, bandeiras de checkpoint e banners


function loadLevel(index) {
  var level = _levels__WEBPACK_IMPORTED_MODULE_4__["LEVELS"][index];
  game.levelIndex = index;
  game.level = level;
  game.camera = 0;
  game.time = 0;
  game.lives = MAX_LIVES;
  game.contas = 0;
  game.errors = 0;
  game.falls = 0;
  game.byOp = {};
  game.near = null;
  game.particles = [];
  game.shake = 0;
  game.checkpoint = {
    x: 100
  };
  game.player = newPlayer();
  game.platforms = [];
  game.flags = [];
  level.chunks.forEach(function (_ref, i) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        n = _ref2[1];

    var w = (n - 1) * _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_STEP"] + _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_TILE_W"];
    game.platforms.push({
      kind: 'ground',
      x: x,
      y: _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"],
      w: w,
      n: n
    });
    if (i > 0) game.flags.push({
      x: x + 60,
      active: false
    });
  });
  level.minis.forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3),
        x = _ref4[0],
        y = _ref4[1],
        n = _ref4[2];

    game.platforms.push({
      kind: 'mini',
      x: x,
      y: y,
      w: _levels__WEBPACK_IMPORTED_MODULE_4__["MINI_W"] + (n - 1) * _levels__WEBPACK_IMPORTED_MODULE_4__["MINI_STEP"],
      n: n
    });
  });
  game.banners = level.banners.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        x = _ref6[0],
        y = _ref6[1];

    return {
      x: x,
      y: y,
      solved: false
    };
  });
}

var clamp = function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
};

function updateCamera(snap) {
  var p = game.player;
  var cam = snap ? p.x - 300 : clamp(game.camera, p.x - 600, p.x - 100);
  game.camera = clamp(cam, 0, game.level.end - W);
}
/* ---------- partículas e efeitos ---------- */


function burst(x, y, n, colors) {
  var _ref7 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      _ref7$spread = _ref7.spread,
      spread = _ref7$spread === void 0 ? 4 : _ref7$spread,
      _ref7$up = _ref7.up,
      up = _ref7$up === void 0 ? 4 : _ref7$up,
      _ref7$life = _ref7.life,
      life = _ref7$life === void 0 ? 40 : _ref7$life,
      _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? 5 : _ref7$size;

  for (var i = 0; i < n; i++) {
    game.particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * spread * 2,
      vy: -Math.random() * up,
      life: life,
      max: life,
      size: size * (0.6 + Math.random() * 0.8),
      color: colors[i % colors.length],
      grav: 0.25
    });
  }
}

function dust(x, y) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  for (var i = 0; i < n; i++) {
    game.particles.push({
      x: x + (Math.random() - 0.5) * 20,
      y: y,
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 1.4,
      life: 24,
      max: 24,
      size: 3 + Math.random() * 3,
      color: '255,255,255',
      grav: 0,
      round: true,
      fade: 0.7
    });
  }
}

function spawnSparks() {
  var chunks = game.level.chunks;

  for (var i = 0; i < chunks.length - 1; i++) {
    var _chunks$i = _slicedToArray(chunks[i], 2),
        x = _chunks$i[0],
        n = _chunks$i[1];

    var gx0 = x + (n - 1) * _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_STEP"] + _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_TILE_W"];
    var gx1 = chunks[i + 1][0];
    if (gx1 < game.camera || gx0 > game.camera + W) continue;

    if (Math.random() < 0.25) {
      game.particles.push({
        x: gx0 + Math.random() * (gx1 - gx0),
        y: H - 4,
        vx: 0,
        vy: -(1.5 + Math.random() * 2.5),
        life: 50,
        max: 50,
        size: 4,
        color: 'ffff8a',
        grav: 0,
        spark: true
      });
    }
  }
}
/* ---------- lógica ---------- */


function resetInput() {
  keys.left = keys.right = keys.jump = false;
  jumpBuffer = 0;
}

function step() {
  game.tick++;
  spawnSparks();
  var p = game.player;
  var alive = game.state === 'playing' || game.state === 'celebrate';

  if (alive) {
    if (game.state === 'playing') game.time += 1 / 60;
    var dir = game.state === 'playing' ? (keys.right ? 1 : 0) - (keys.left ? 1 : 0) : 0;
    p.vx = dir * 8;
    if (dir) p.facing = dir > 0 ? 'right' : 'left';
    p.x = clamp(p.x + p.vx, 0, game.level.end - p.w);

    if (jumpBuffer > 0) {
      jumpBuffer--;

      if (p.grounded && game.state === 'playing') {
        p.vy = -24;
        p.grounded = false;
        jumpBuffer = 0;
        dust(p.x + p.w / 2, p.y + p.h, 5);
      }
    }

    if (jumpReleased) {
      if (p.vy < 0) p.vy = 0;
      jumpReleased = false;
    }

    var prevBottom = p.y + p.h;
    var wasGrounded = p.grounded;
    var impact = p.vy;
    p.y += p.vy;
    p.vy += gravity;
    p.grounded = false; //colisão: só pelo topo das plataformas

    var _iterator = _createForOfIteratorHelper(game.platforms),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pl = _step.value;

        if (prevBottom <= pl.y && p.y + p.h >= pl.y && p.x + p.w >= pl.x && p.x <= pl.x + pl.w) {
          p.y = pl.y - p.h;
          p.vy = 0;
          p.grounded = true;
          if (pl.kind === 'ground') activateFlag(pl);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (p.grounded && !wasGrounded && impact > 8) dust(p.x + p.w / 2, p.y + p.h, 6);
    if (p.grounded && p.vx !== 0 && game.tick % 6 === 0) dust(p.x + p.w / 2 - Math.sign(p.vx) * 14, p.y + p.h, 1);
    p.airTicks = p.grounded ? 0 : p.airTicks + 1;
    if (p.invuln > 0) p.invuln--;
    if (p.y > 470) fall();
    updateCamera(false);
    findNear();
  }

  if (game.state === 'celebrate' && --game.celebrateTimer <= 0) complete();
  if (game.shake > 0) game.shake--;
  game.particles.forEach(function (q) {
    q.x += q.vx;
    q.y += q.vy;
    q.vy += q.grav;
    q.life--;
  });
  game.particles = game.particles.filter(function (q) {
    return q.life > 0;
  });
}

function activateFlag(ground) {
  var flag = game.flags.find(function (f) {
    return f.x >= ground.x && f.x < ground.x + ground.w;
  });

  if (flag && !flag.active && game.player.x + game.player.w >= flag.x) {
    flag.active = true;
    game.checkpoint = flag;
    burst(flag.x, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"] - 50, 10, ['255,255,138', '56,214,196'], {
      spread: 3,
      up: 5
    });
    _ui__WEBPACK_IMPORTED_MODULE_7__["toast"]('Checkpoint!', 1200);
  }
}

function fall() {
  game.falls++;
  game.lives--;
  game.shake = 14;
  _ui__WEBPACK_IMPORTED_MODULE_7__["flash"]();
  _ui__WEBPACK_IMPORTED_MODULE_7__["resetHudCache"]();

  if (game.lives <= 0) {
    game.state = 'gameover';
    resetInput();
    _ui__WEBPACK_IMPORTED_MODULE_7__["showPause"]({
      title: 'Fim de jogo',
      text: 'Suas vidas acabaram. Tente de novo!',
      mainLabel: 'Tentar de novo',
      onMain: function onMain() {
        return startLevel(game.levelIndex);
      },
      onMenu: goSelect
    });
    return;
  }

  var p = game.player;
  p.x = game.checkpoint.x - (game.checkpoint.x === 100 ? 0 : 20);
  p.y = _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"] - p.h;
  p.vx = p.vy = 0;
  p.grounded = true;
  p.invuln = 90;
  updateCamera(true);
  _ui__WEBPACK_IMPORTED_MODULE_7__["toast"]('Ops! -1 vida. Voltou ao checkpoint.');
} // banner [E] mais próximo que ainda não foi resolvido


function findNear() {
  var p = game.player;
  var cx = p.x + p.w / 2;
  game.near = null;

  var _iterator2 = _createForOfIteratorHelper(game.banners),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var b = _step2.value;
      if (b.solved) continue;
      var bottom = b.y + _levels__WEBPACK_IMPORTED_MODULE_4__["BANNER_H"];

      if (Math.abs(cx - (b.x + _levels__WEBPACK_IMPORTED_MODULE_4__["BANNER_W"] / 2)) < 75 && Math.abs(p.y + p.h - bottom) < 40) {
        game.near = b;
        return;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function tryInteract() {
  if (game.state !== 'playing' || !game.near || !game.player.grounded) return;
  var banner = game.near;
  var level = game.level;
  var question = Object(_math__WEBPACK_IMPORTED_MODULE_5__["createQuestion"])(level.math);
  var stats = game.byOp[question.op] || (game.byOp[question.op] = {
    ok: 0,
    n: 0
  });
  resetInput();
  game.state = 'math';
  _ui__WEBPACK_IMPORTED_MODULE_7__["openMath"]({
    title: "Banner ".concat(game.contas + 1, " de ").concat(game.banners.length),
    question: question,
    onSubmit: function onSubmit(value) {
      stats.n++;

      if (value === question.result) {
        stats.ok++;
        return true;
      }

      game.errors++;
      return false;
    },
    onClose: function onClose(correct) {
      if (correct) {
        banner.solved = true;
        game.contas++;
        burst(banner.x + _levels__WEBPACK_IMPORTED_MODULE_4__["BANNER_W"] / 2, banner.y + 20, 28, ['255,255,138', '255,93,115', '56,214,196', '255,122,42'], {
          spread: 6,
          up: 8,
          life: 60,
          size: 7
        });

        if (game.contas === game.banners.length) {
          game.state = 'celebrate';
          game.celebrateTimer = 70;
          return;
        }
      }

      game.state = 'playing';
    }
  });
}

function complete() {
  var level = game.level;
  var stars = game.errors === 0 && game.time <= level.goal ? 3 : game.errors <= 2 ? 2 : 1;
  var bestInfo = Object(_storage__WEBPACK_IMPORTED_MODULE_6__["saveResult"])(level.id, {
    stars: stars,
    time: Math.round(game.time)
  });
  game.state = 'results';
  _ui__WEBPACK_IMPORTED_MODULE_7__["setHudVisible"](false);
  _ui__WEBPACK_IMPORTED_MODULE_7__["renderResults"]({
    level: level,
    levels: _levels__WEBPACK_IMPORTED_MODULE_4__["LEVELS"].length,
    stars: stars,
    time: game.time,
    goal: level.goal,
    correct: game.contas,
    total: game.banners.length,
    errors: game.errors,
    falls: game.falls,
    bestInfo: bestInfo,
    byOp: game.byOp,
    onNext: function onNext() {
      return startLevel(game.levelIndex + 1);
    },
    onRetry: function onRetry() {
      return startLevel(game.levelIndex);
    },
    onMenu: goSelect
  });
}
/* ---------- fluxo de telas ---------- */


function goTitle() {
  var profile = Object(_storage__WEBPACK_IMPORTED_MODULE_6__["getProfile"])();
  game.character = profile.character;
  _ui__WEBPACK_IMPORTED_MODULE_7__["setGroupName"](profile.group);
  loadLevel(0);
  game.state = 'title';
  _ui__WEBPACK_IMPORTED_MODULE_7__["setHudVisible"](false);
  _ui__WEBPACK_IMPORTED_MODULE_7__["showScreen"]('title');
  _ui__WEBPACK_IMPORTED_MODULE_7__["focusGroupName"]();
}

var selectedLevel = 1;

function goSelect() {
  loadLevel(0);
  game.state = 'select';
  _ui__WEBPACK_IMPORTED_MODULE_7__["setHudVisible"](false);
  var progress = Object(_storage__WEBPACK_IMPORTED_MODULE_6__["getProgress"])();
  var unlocked = _levels__WEBPACK_IMPORTED_MODULE_4__["LEVELS"].filter(function (l) {
    return l.id === 1 || progress[l.id - 1] && progress[l.id - 1].stars > 0;
  });
  if (!unlocked.some(function (l) {
    return l.id === selectedLevel;
  })) selectedLevel = unlocked[unlocked.length - 1].id;
  drawSelect();
}

function drawSelect() {
  _ui__WEBPACK_IMPORTED_MODULE_7__["renderSelect"]({
    levels: _levels__WEBPACK_IMPORTED_MODULE_4__["LEVELS"],
    progress: Object(_storage__WEBPACK_IMPORTED_MODULE_6__["getProgress"])(),
    selected: selectedLevel,
    character: game.character,
    group: Object(_storage__WEBPACK_IMPORTED_MODULE_6__["getProfile"])().group,
    onSelect: function onSelect(id) {
      selectedLevel = id;
      drawSelect();
    },
    onCharacter: function onCharacter(ch) {
      game.character = ch;
      Object(_storage__WEBPACK_IMPORTED_MODULE_6__["saveProfile"])(_objectSpread({}, Object(_storage__WEBPACK_IMPORTED_MODULE_6__["getProfile"])(), {
        character: ch
      }));
      drawSelect();
    },
    onPlay: function onPlay() {
      return startLevel(selectedLevel - 1);
    }
  });
  _ui__WEBPACK_IMPORTED_MODULE_7__["showScreen"]('select');
}

function startLevel(index) {
  loadLevel(index);
  selectedLevel = index + 1;
  resetInput();
  game.state = 'playing';
  _ui__WEBPACK_IMPORTED_MODULE_7__["resetHudCache"]();
  _ui__WEBPACK_IMPORTED_MODULE_7__["setHudVisible"](true);
  _ui__WEBPACK_IMPORTED_MODULE_7__["showScreen"](null);
}

function togglePause() {
  if (game.state === 'playing') {
    game.state = 'paused';
    resetInput();
    _ui__WEBPACK_IMPORTED_MODULE_7__["showPause"]({
      title: 'Pausado',
      text: 'O tempo está parado.',
      mainLabel: 'Continuar',
      onMain: togglePause,
      onMenu: goSelect
    });
  } else if (game.state === 'paused') {
    game.state = 'playing';
    _ui__WEBPACK_IMPORTED_MODULE_7__["showScreen"](null);
  }
}
/* ---------- desenho ---------- */


function roundRect(x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
} // trechos de vazio entre os chãos, em coordenadas da tela


function voidGaps() {
  var chunks = game.level.chunks;
  var gaps = [];

  for (var i = 0; i < chunks.length - 1; i++) {
    var _chunks$i2 = _slicedToArray(chunks[i], 2),
        x = _chunks$i2[0],
        n = _chunks$i2[1];

    var x0 = x + (n - 1) * _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_STEP"] + _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_TILE_W"] - game.camera;
    var x1 = chunks[i + 1][0] - game.camera;
    if (x1 > 0 && x0 < W) gaps.push([x0, x1]);
  }

  return gaps;
}

function drawNeon(gaps, alpha, topY) {
  gaps.forEach(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        x0 = _ref9[0],
        x1 = _ref9[1];

    c.save();
    c.beginPath();
    c.rect(x0, topY, x1 - x0, H - topY);
    c.clip();
    c.globalAlpha = alpha;
    var g = c.createLinearGradient(0, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"], 0, H);
    g.addColorStop(0, '#ff7a2a');
    g.addColorStop(0.55, '#d11a7a');
    g.addColorStop(1, '#5c0a45');
    c.fillStyle = g;
    c.fillRect(x0, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"], x1 - x0, H - _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"]);
    c.fillStyle = '#ffd58a';
    var wave = game.tick * 0.6 % 24;

    for (var x = x0 - 24 + wave; x < x1 + 24; x += 24) {
      c.beginPath();
      c.arc(x, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"] + 2 + Math.sin(x * 0.2 + game.tick * 0.1) * 2, 9, Math.PI, 0);
      c.fill();
    }

    c.restore();
  });
}

function drawGlow(gaps) {
  gaps.forEach(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
        x0 = _ref11[0],
        x1 = _ref11[1];

    var g = c.createLinearGradient(0, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"] - 90, 0, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"]);
    g.addColorStop(0, 'rgba(209,26,122,0)');
    g.addColorStop(1, 'rgba(209,26,122,0.45)');
    c.fillStyle = g;
    c.fillRect(x0, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"] - 90, x1 - x0, 90);
  });
}

function drawFlag(f) {
  var x = f.x - game.camera;
  if (x < -60 || x > W + 60) return;
  var top = _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"] - 62;
  c.save();

  if (f.active) {
    c.shadowColor = '#38d6c4';
    c.shadowBlur = 14;
  }

  c.fillStyle = f.active ? '#ffff8a' : '#bdbdd0';
  c.fillRect(x, top, 5, 62);
  c.shadowBlur = 0;
  c.fillStyle = f.active ? '#970000' : '#6a6a80';
  c.strokeStyle = f.active ? '#ffff8a' : '#bdbdd0';
  c.lineWidth = 1.5;
  var wag = Math.sin(game.tick * 0.1) * 3;
  c.beginPath();
  c.moveTo(x + 5, top);
  c.lineTo(x + 35, top + 11 + wag);
  c.lineTo(x + 5, top + 22);
  c.closePath();
  c.fill();
  c.stroke();
  c.restore();
}

function drawBanner(b) {
  var x = b.x - game.camera;
  if (x < -_levels__WEBPACK_IMPORTED_MODULE_4__["BANNER_W"] || x > W) return;
  var near = game.near === b;
  c.save();
  var y = b.y;

  if (near) {
    y -= 2 + Math.sin(game.tick * 0.12) * 2;
    c.shadowColor = '#38d6c4';
    c.shadowBlur = 18;
  }

  if (b.solved) c.filter = 'hue-rotate(115deg) saturate(1.1)';
  c.drawImage(bannerImage, x, y);
  c.restore();

  if (b.solved) {
    c.fillStyle = '#fff';
    c.strokeStyle = '#000';
    c.lineWidth = 3;
    c.font = "42px ".concat(FONT);
    c.textAlign = 'center';
    c.strokeText('✓', x + _levels__WEBPACK_IMPORTED_MODULE_4__["BANNER_W"] / 2, b.y + 42);
    c.fillText('✓', x + _levels__WEBPACK_IMPORTED_MODULE_4__["BANNER_W"] / 2, b.y + 42);
  }

  if (near && game.state === 'playing') {
    var label = 'Fazer a conta';
    c.font = "20px ".concat(FONT);
    var tw = c.measureText(label).width + 44;
    var px = x + _levels__WEBPACK_IMPORTED_MODULE_4__["BANNER_W"] / 2 - tw / 2;
    var py = b.y - 40 + Math.sin(game.tick * 0.12) * 3;
    c.fillStyle = '#ffff8a';
    c.strokeStyle = '#000';
    c.lineWidth = 2;
    roundRect(px, py, tw, 28, 14);
    c.fill();
    c.stroke();
    c.fillStyle = '#970000';
    roundRect(px + 6, py + 4, 22, 20, 5);
    c.fill();
    c.fillStyle = '#ffff8a';
    c.textAlign = 'center';
    c.fillText('E', px + 17, py + 20);
    c.fillStyle = '#000';
    c.textAlign = 'left';
    c.fillText(label, px + 34, py + 20);
  }
}

function drawPlayer() {
  var p = game.player;
  var set = SPRITES[game.character];
  var frames, frame;

  if (!p.grounded) {
    frames = set.jump;
    frame = Math.min(frames.length - 1, Math.floor(p.airTicks / 4));
  } else if (p.vx !== 0) {
    frames = set.run;
    frame = Math.floor(game.tick / 5) % frames.length;
  } else {
    frames = set.idle;
    frame = Math.floor(game.tick / 12) % frames.length;
  }

  var img = frames[frame];
  if (!img.complete || !img.naturalWidth) return;
  if (p.invuln > 0 && Math.floor(p.invuln / 5) % 2 === 0) return;
  var x = p.x - game.camera + (p.w - img.naturalWidth) / 2;
  var y = p.y + p.h - img.naturalHeight;
  c.save();

  if (p.facing === 'left') {
    c.translate(p.x - game.camera + p.w / 2, 0);
    c.scale(-1, 1);
    c.translate(-(p.x - game.camera + p.w / 2), 0);
  }

  c.drawImage(img, x, y);
  c.restore();
}

function drawParticles() {
  game.particles.forEach(function (q) {
    var a = Math.max(0, q.life / q.max) * (q.fade || 1);
    var color = q.color.includes(',') ? "rgba(".concat(q.color, ",").concat(a, ")") : "#".concat(q.color);
    c.globalAlpha = q.color.includes(',') ? 1 : a;
    c.fillStyle = color;
    var x = q.x - (q.spark ? game.camera : game.camera);

    if (q.round) {
      c.beginPath();
      c.arc(x, q.y, q.size, 0, Math.PI * 2);
      c.fill();
    } else {
      c.fillRect(x, q.y, q.size, q.size);
    }

    c.globalAlpha = 1;
  });
}

function render() {
  c.fillStyle = '#0a0a3a';
  c.fillRect(0, 0, W, H);
  c.save();
  if (game.shake > 0) c.translate((Math.random() - 0.5) * game.shake, (Math.random() - 0.5) * game.shake); //fundo com parallax

  var bgX = -game.camera * 0.4;

  if (backgroundImage.complete) {
    c.drawImage(backgroundImage, bgX, 0);
    if (bgX + backgroundImage.width < W) c.drawImage(backgroundImage, bgX + backgroundImage.width, 0);
  }

  var gaps = voidGaps();
  drawGlow(gaps);
  drawNeon(gaps, 1, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"]);
  game.platforms.forEach(function (pl) {
    var x0 = pl.x - game.camera;
    if (x0 > W || x0 + pl.w < 0) return;

    if (pl.kind === 'ground') {
      for (var i = 0; i < pl.n; i++) {
        c.drawImage(platformImage, x0 + i * _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_STEP"], pl.y);
      }
    } else {
      for (var _i2 = 0; _i2 < pl.n; _i2++) {
        c.drawImage(miniPlatformImage, x0 + _i2 * _levels__WEBPACK_IMPORTED_MODULE_4__["MINI_STEP"], pl.y);
      }
    }
  });
  game.flags.forEach(drawFlag);
  game.banners.forEach(drawBanner);
  drawPlayer(); //o jogador afunda no néon ao cair

  drawNeon(gaps, 0.6, _levels__WEBPACK_IMPORTED_MODULE_4__["GROUND_Y"] + 14);
  drawParticles();
  c.restore();

  if (game.state === 'playing' || game.state === 'celebrate' || game.state === 'math' || game.state === 'paused') {
    _ui__WEBPACK_IMPORTED_MODULE_7__["setHud"]({
      level: game.level.id,
      levels: _levels__WEBPACK_IMPORTED_MODULE_4__["LEVELS"].length,
      time: game.time,
      lives: game.lives,
      maxLives: MAX_LIVES,
      contas: game.contas,
      totalContas: game.banners.length
    });
  }
}
/* ---------- laço principal (passo fixo de 60 quadros por segundo) ---------- */


var last = performance.now();
var acc = 0;

function loop(now) {
  requestAnimationFrame(loop);
  acc += Math.min(now - last, 250);
  last = now;
  var steps = 0;

  while (acc >= STEP && steps < 5) {
    step();
    acc -= STEP;
    steps++;
  }

  if (steps === 5) acc = 0;
  render();
}
/* ---------- teclado ---------- */


addEventListener('keydown', function (e) {
  if (_ui__WEBPACK_IMPORTED_MODULE_7__["mathKeydown"](e)) return;
  if (e.target && e.target.tagName === 'INPUT') return;

  switch (e.code) {
    case 'KeyA':
    case 'ArrowLeft':
      keys.left = true;
      break;

    case 'KeyD':
    case 'ArrowRight':
      keys.right = true;
      break;

    case 'KeyW':
    case 'ArrowUp':
      if (!e.repeat) {
        keys.jump = true;
        jumpBuffer = 6;
      }

      break;

    case 'KeyE':
      if (!e.repeat) tryInteract();
      break;

    case 'KeyP':
    case 'Escape':
      if (!e.repeat) togglePause();
      break;
  }

  if (e.code.startsWith('Arrow')) e.preventDefault();
});
addEventListener('keyup', function (e) {
  switch (e.code) {
    case 'KeyA':
    case 'ArrowLeft':
      keys.left = false;
      break;

    case 'KeyD':
    case 'ArrowRight':
      keys.right = false;
      break;

    case 'KeyW':
    case 'ArrowUp':
      keys.jump = false;
      jumpReleased = true;
      break;
  }
});
addEventListener('blur', function () {
  resetInput();
  if (game.state === 'playing') togglePause();
});
/* ---------- ajuste de tamanho e início ---------- */

var gameEl = document.getElementById('game');

function fit() {
  gameEl.style.transform = "scale(".concat(Math.min(innerWidth / W, innerHeight / H), ")");
}

addEventListener('resize', fit);
fit();
_ui__WEBPACK_IMPORTED_MODULE_7__["buildPad"]();
_ui__WEBPACK_IMPORTED_MODULE_7__["setCharImages"]({
  boy: SPRITES.boy.idle[0].src,
  girl: SPRITES.girl.idle[0].src
});
_ui__WEBPACK_IMPORTED_MODULE_7__["bindTitle"]({
  onStart: function onStart(name) {
    Object(_storage__WEBPACK_IMPORTED_MODULE_6__["saveProfile"])({
      group: name || 'Equipe',
      character: game.character
    });
    goSelect();
  }
});
goTitle();
requestAnimationFrame(loop);

/***/ }),

/***/ "./src/js/levels.js":
/*!**************************!*\
  !*** ./src/js/levels.js ***!
  \**************************/
/*! exports provided: GROUND_Y, GROUND_STEP, GROUND_TILE_W, MINI_STEP, MINI_W, MINI_H, BANNER_W, BANNER_H, LEVELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUND_Y", function() { return GROUND_Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUND_STEP", function() { return GROUND_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUND_TILE_W", function() { return GROUND_TILE_W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINI_STEP", function() { return MINI_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINI_W", function() { return MINI_W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINI_H", function() { return MINI_H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANNER_W", function() { return BANNER_W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANNER_H", function() { return BANNER_H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVELS", function() { return LEVELS; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Definição das 4 fases. Todas reaproveitam o mapa original, cortado em tamanhos diferentes.
var GROUND_Y = 452;
var GROUND_STEP = 589; // largura da textura do chão (592) menos a sobreposição

var GROUND_TILE_W = 592;
var MINI_STEP = 48;
var MINI_W = 64;
var MINI_H = 16;
var BANNER_W = 90;
var BANNER_H = 60; // [x inicial, quantidade de blocos]

var GROUND = [[-1, 3], [2000, 2], [3800, 2], [5600, 2], [7700, 2], [10230, 2]]; // [x, y, quantidade de blocos]

var MINIS = [[500, 300, 4], [800, 400, 4], [1000, 300, 4], [1300, 200, 4], [2000, 100, 4], [2300, 160, 4], [2300, 400, 4], [2600, 300, 4], [3300, 350, 2], [3500, 300, 4], [4200, 300, 4], [4200, 100, 4], [5050, 400, 2], [5200, 300, 2], [5350, 200, 2], [5800, 350, 4], [5550, 100, 3], [5800, 200, 1], [6000, 200, 1], [6200, 200, 3], [6400, 200, 4], [6800, 350, 4], [7100, 200, 2], [7300, 200, 2], [7500, 200, 2], [7800, 350, 4], [8600, 400, 2], [8800, 300, 2], [9000, 200, 2], [8800, 100, 2], [8600, 80, 3], [9300, 200, 2], [9600, 200, 2], [9900, 200, 2], [10150, 200, 4]]; // [x, y] dos banners [E], sempre em cima de uma miniplataforma

var BANNERS = [[580, 240], [1060, 242], [1380, 144], [2024, 44], [2380, 102], [2680, 242], [3560, 242], [4280, 42], [5210, 242], [5580, 44], [5860, 292], [6480, 146], [6860, 292], [7120, 142], [7860, 292], [8640, 20], [8840, 242], [9020, 142], [10230, 144]];
var CONTAS_POR_FASE = 8;

var groundEnd = function groundEnd(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      n = _ref2[1];

  return x + (n - 1) * GROUND_STEP + GROUND_TILE_W;
}; // escolhe n itens bem espalhados de uma lista ordenada


function spread(list, n) {
  if (list.length <= n) return list;
  var out = [];

  for (var i = 0; i < n; i++) {
    out.push(list[Math.round(i * (list.length - 1) / (n - 1))]);
  }

  return out;
} // Tipos de conta: { ops, min, max } e regras específicas em math.js


var LEVELS = [{
  id: 1,
  name: 'Soma',
  chunks: 3,
  goal: 120,
  math: {
    ops: ['+'],
    max: 9
  }
}, {
  id: 2,
  name: 'Subtração',
  chunks: 4,
  goal: 150,
  math: {
    ops: ['-'],
    max: 18
  }
}, {
  id: 3,
  name: 'Mistas',
  chunks: 5,
  goal: 180,
  math: {
    ops: ['+', '-'],
    max: 20
  }
}, {
  id: 4,
  name: 'Desafio',
  chunks: 6,
  goal: 240,
  math: {
    ops: ['+', '-'],
    max: 50
  }
}].map(buildLevel);

function buildLevel(def) {
  var chunks = GROUND.slice(0, def.chunks);
  var end = groundEnd(chunks[chunks.length - 1]);
  var minis = MINIS.filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        x = _ref4[0];

    return x + MINI_W < end;
  });
  var banners = spread(BANNERS.filter(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 1),
        x = _ref6[0];

    return x + BANNER_W < end;
  }), CONTAS_POR_FASE);
  return _objectSpread({}, def, {
    end: end,
    chunks: chunks,
    minis: minis,
    banners: banners
  });
}

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/*! exports provided: createQuestion, hintFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuestion", function() { return createQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hintFor", function() { return hintFor; });
var rand = function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; // Gera uma conta de acordo com a fase: { text, result, op }


function createQuestion(_ref) {
  var ops = _ref.ops,
      max = _ref.max;
  var op = ops[rand(0, ops.length - 1)];
  var a, b;

  if (op === '+') {
    a = rand(1, max);
    b = rand(1, max);
  } else {
    a = rand(2, max);
    b = rand(1, Math.min(a, max));
  }

  var result = op === '+' ? a + b : a - b;
  return {
    a: a,
    b: b,
    op: op,
    result: result,
    text: "".concat(a, " ").concat(op === '-' ? '−' : '+', " ").concat(b)
  };
}
function hintFor(_ref2) {
  var a = _ref2.a,
      b = _ref2.b,
      op = _ref2.op;
  return "Dica: comece por ".concat(a, " e ").concat(op === '+' ? 'some' : 'tire', " ").concat(b, " aos poucos.");
}

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/*! exports provided: getProfile, saveProfile, getProgress, saveResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProfile", function() { return saveProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgress", function() { return getProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveResult", function() { return saveResult; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Progresso salvo no navegador (nome do grupo, personagem e resultado de cada fase)
var KEY = 'mclovers.game';

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch (e) {
    return {};
  }
}

function write(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch (e) {
    /* sem armazenamento: o jogo continua funcionando */
  }
}

function getProfile() {
  var data = read();
  return {
    group: data.group || '',
    character: data.character || 'boy'
  };
}
function saveProfile(_ref) {
  var group = _ref.group,
      character = _ref.character;
  write(_objectSpread({}, read(), {
    group: group,
    character: character
  }));
} // { [fase]: { stars, best } }

function getProgress() {
  var data = read();
  return data.groups && data.groups[data.group || ''] || {};
}
function saveResult(level, _ref2) {
  var stars = _ref2.stars,
      time = _ref2.time;
  var data = read();
  var group = data.group || '';
  var groups = data.groups || {};
  var progress = groups[group] || {};
  var old = progress[level] || {
    stars: 0,
    best: null
  };
  var isBest = old.best === null || time < old.best;
  progress[level] = {
    stars: Math.max(old.stars, stars),
    best: isBest ? time : old.best
  };
  groups[group] = progress;
  write(_objectSpread({}, data, {
    groups: groups
  }));
  return {
    isBest: isBest,
    previousBest: old.best
  };
}

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! exports provided: fmt, showScreen, setHudVisible, setHud, resetHudCache, toast, flash, bindTitle, setGroupName, focusGroupName, setCharImages, renderSelect, buildPad, isMathOpen, openMath, closeMath, mathKeydown, renderResults, showPause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fmt", function() { return fmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showScreen", function() { return showScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHudVisible", function() { return setHudVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHud", function() { return setHud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHudCache", function() { return resetHudCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flash", function() { return flash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindTitle", function() { return bindTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGroupName", function() { return setGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusGroupName", function() { return focusGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCharImages", function() { return setCharImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSelect", function() { return renderSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPad", function() { return buildPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMathOpen", function() { return isMathOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMath", function() { return openMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMath", function() { return closeMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathKeydown", function() { return mathKeydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderResults", function() { return renderResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPause", function() { return showPause; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/js/math.js");
// Camadas HTML por cima do canvas: painel, conta, resultados, menus


var $ = function $(id) {
  return document.getElementById(id);
};

var SCREENS = ['title', 'select', 'math', 'results', 'pause'];
var fmt = function fmt(s) {
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0');
};
function showScreen(name) {
  SCREENS.forEach(function (s) {
    $('screen-' + s).hidden = s !== name;
  });
  document.querySelectorAll('.confetti').forEach(function (c) {
    return c.remove();
  });
}
/* ---------- painel ---------- */

function setHudVisible(visible) {
  $('hud').hidden = !visible;
  $('ctrl').hidden = !visible;
}
var lastHud = '';
function setHud(_ref) {
  var level = _ref.level,
      levels = _ref.levels,
      time = _ref.time,
      lives = _ref.lives,
      maxLives = _ref.maxLives,
      contas = _ref.contas,
      totalContas = _ref.totalContas;
  var key = [level, Math.floor(time), lives, contas].join('|');
  if (key === lastHud) return;
  lastHud = key;
  $('hud-level').textContent = "".concat(level, "/").concat(levels);
  $('hud-time').textContent = fmt(time);
  $('hud-contas-label').textContent = "Contas ".concat(contas, "/").concat(totalContas);
  $('hud-pips').innerHTML = Array.from({
    length: totalContas
  }, function (_, i) {
    return "<span class=\"pip ".concat(i < contas ? 'on' : '', "\"></span>");
  }).join('');
  $('hud-hearts').innerHTML = Array.from({
    length: maxLives
  }, function (_, i) {
    return "<span class=\"heart ".concat(i < lives ? '' : 'off', "\"></span>");
  }).join('');
}
function resetHudCache() {
  lastHud = '';
}
var toastTimer;
function toast(text) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2200;
  var t = $('toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    return t.classList.remove('show');
  }, ms);
}
function flash() {
  var f = $('flash');
  f.classList.remove('go');
  void f.offsetWidth;
  f.classList.add('go');
}
/* ---------- tela inicial e seleção ---------- */

function bindTitle(_ref2) {
  var onStart = _ref2.onStart;

  var start = function start() {
    return onStart($('group-name').value.trim());
  };

  $('btn-start').onclick = start;

  $('group-name').onkeydown = function (e) {
    if (e.key === 'Enter') start();
  };
}
function setGroupName(name) {
  $('group-name').value = name;
}
function focusGroupName() {
  $('group-name').focus();
}
function setCharImages(_ref3) {
  var boy = _ref3.boy,
      girl = _ref3.girl;
  $('img-boy').src = boy;
  $('img-girl').src = girl;
}
function renderSelect(_ref4) {
  var levels = _ref4.levels,
      progress = _ref4.progress,
      selected = _ref4.selected,
      character = _ref4.character,
      group = _ref4.group,
      onSelect = _ref4.onSelect,
      onCharacter = _ref4.onCharacter,
      onPlay = _ref4.onPlay;
  $('select-title').textContent = group ? "".concat(group, ": escolha a fase") : 'Escolha a fase';

  var unlocked = function unlocked(n) {
    return n === 1 || progress[n - 1] && progress[n - 1].stars > 0;
  };

  $('lvls').innerHTML = levels.map(function (l) {
    var p = progress[l.id];
    var lock = !unlocked(l.id);
    var stars = lock ? '' : [0, 1, 2].map(function (i) {
      return "<span class=\"star ".concat(p && i < p.stars ? '' : 'off', "\"></span>");
    }).join('');
    var best = lock ? 'Bloqueada' : p && p.best !== null ? "Melhor ".concat(fmt(p.best)) : 'Nova';
    return "<button class=\"lvl ".concat(lock ? 'lock' : '', " ").concat(l.id === selected ? 'sel' : '', "\" data-level=\"").concat(l.id, "\" ").concat(lock ? 'disabled' : '', ">\n            <span class=\"n\">").concat(lock ? '🔒' : l.id, "</span><span>").concat(l.name, "</span><span class=\"mini\">").concat(stars, "</span><span class=\"best\">").concat(best, "</span></button>");
  }).join('');
  $('lvls').querySelectorAll('.lvl:not(.lock)').forEach(function (b) {
    b.onclick = function () {
      return onSelect(Number(b.dataset.level));
    };
  });
  $('who-boy').classList.toggle('sel', character === 'boy');
  $('who-girl').classList.toggle('sel', character === 'girl');

  $('who-boy').onclick = function () {
    return onCharacter('boy');
  };

  $('who-girl').onclick = function () {
    return onCharacter('girl');
  };

  $('btn-play').textContent = "Jogar fase ".concat(selected);
  $('btn-play').style.width = 'auto';
  $('btn-play').style.padding = '0 32px';
  $('btn-play').onclick = onPlay;
}
/* ---------- conta ---------- */

var mathState = {
  open: false,
  answer: '',
  tries: 0,
  question: null,
  submit: null,
  close: null,
  locked: false
};
function buildPad() {
  var pad = $('math-pad');
  var keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(function (n) {
    return "<button class=\"key\" data-k=\"".concat(n, "\">").concat(n, "</button>");
  });
  keys.push('<button class="key del" data-k="del">apagar</button>', '<button class="key ok" data-k="ok">OK</button>');
  pad.innerHTML = keys.join('');

  pad.onclick = function (e) {
    var k = e.target.closest('.key');
    if (k) pressKey(k.dataset.k);
  };
}

function renderAnswer() {
  var cls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var a = $('math-ans');
  a.className = 'ans ' + cls;
  a.textContent = mathState.answer || ' ';
}

function isMathOpen() {
  return mathState.open;
} // onSubmit(valor) devolve true se acertou; onClose(acertou) fecha o cartão

function openMath(_ref5) {
  var title = _ref5.title,
      question = _ref5.question,
      onSubmit = _ref5.onSubmit,
      onClose = _ref5.onClose;
  Object.assign(mathState, {
    open: true,
    answer: '',
    tries: 0,
    question: question,
    submit: onSubmit,
    close: onClose,
    locked: false
  });
  $('math-title').textContent = title;
  $('math-q').textContent = "".concat(question.text, " = ?");
  $('math-hint').textContent = 'Digite o resultado e aperte OK.';
  renderAnswer();
  showScreen('math');
}
function closeMath(correct) {
  if (!mathState.open) return;
  mathState.open = false;
  showScreen(null);
  if (mathState.close) mathState.close(correct);
}

function check() {
  if (!mathState.answer || mathState.locked) return;
  var ok = mathState.submit(Number(mathState.answer));

  if (ok) {
    mathState.locked = true;
    renderAnswer('good');
    $('math-hint').textContent = 'Muito bem! Banner liberado.';
    setTimeout(function () {
      return closeMath(true);
    }, 900);
  } else {
    mathState.tries++;
    renderAnswer('bad');
    $('math-hint').textContent = mathState.tries >= 2 ? Object(_math__WEBPACK_IMPORTED_MODULE_0__["hintFor"])(mathState.question) : 'Quase! Tente de novo.';
    mathState.answer = '';
    setTimeout(function () {
      if (!mathState.answer && !mathState.locked) renderAnswer();
    }, 600);
  }
}

function pressKey(k) {
  if (!mathState.open || mathState.locked) return;
  if (k === 'del') mathState.answer = mathState.answer.slice(0, -1);else if (k === 'ok') return check();else if (mathState.answer.length < 3) mathState.answer += k;
  renderAnswer();
} // teclado físico enquanto a conta está aberta; devolve true se tratou a tecla


function mathKeydown(e) {
  if (!mathState.open) return false;
  if (/^\d$/.test(e.key)) pressKey(e.key);else if (e.key === 'Backspace') pressKey('del');else if (e.key === 'Enter') pressKey('ok');else if (e.key === 'Escape') closeMath(false);else return false;
  e.preventDefault();
  return true;
}
/* ---------- resultados ---------- */

function renderResults(_ref6) {
  var level = _ref6.level,
      levels = _ref6.levels,
      stars = _ref6.stars,
      time = _ref6.time,
      goal = _ref6.goal,
      correct = _ref6.correct,
      total = _ref6.total,
      errors = _ref6.errors,
      falls = _ref6.falls,
      bestInfo = _ref6.bestInfo,
      byOp = _ref6.byOp,
      onNext = _ref6.onNext,
      onRetry = _ref6.onRetry,
      onMenu = _ref6.onMenu;
  $('res-title').textContent = "Fase ".concat(level.id, " completa!");
  $('res-stars').innerHTML = [0, 1, 2].map(function (i) {
    return "<span class=\"star ".concat(i < stars ? '' : 'off', "\"></span>");
  }).join('');
  var best = bestInfo.isBest ? '<div class="new"><span>Melhor tempo</span><b>novo!</b></div>' : "<div><span>Melhor tempo</span><b>".concat(fmt(bestInfo.previousBest), "</b></div>");
  $('res-rows').innerHTML = "<div><span>Tempo</span><b>".concat(fmt(time), "</b></div><div><span>Meta</span><b>").concat(fmt(goal), "</b></div>\n        <div><span>Acertos</span><b>").concat(correct, " de ").concat(total, "</b></div><div><span>Erros</span><b>").concat(errors, "</b></div>\n        <div><span>Quedas</span><b>").concat(falls, "</b></div>").concat(best);
  var names = {
    '+': 'Soma',
    '-': 'Subtração'
  };
  $('res-ops').innerHTML = Object.keys(byOp).map(function (op) {
    var _byOp$op = byOp[op],
        ok = _byOp$op.ok,
        n = _byOp$op.n;
    return "<span>".concat(names[op], "</span><div class=\"bar\"><i style=\"width:").concat(n ? Math.round(ok / n * 100) : 0, "%\"></i></div><span>").concat(ok, " de ").concat(n, "</span>");
  }).join('');
  var hasNext = level.id < levels;
  $('res-next').hidden = !hasNext;
  $('res-next').onclick = onNext;
  $('res-retry').onclick = onRetry;
  $('res-menu').onclick = onMenu;
  showScreen('results');
  if (stars === 3) confetti();
}

function confetti() {
  var colors = ['#FFFF8A', '#970000', '#38d6c4', '#ff7a2a'];
  var frag = document.createDocumentFragment();

  for (var i = 0; i < 24; i++) {
    var c = document.createElement('i');
    c.className = 'confetti';
    c.style.cssText = "left:".concat(i * 4.3 % 100, "%;background:").concat(colors[i % 4], ";animation-delay:").concat(i % 7 * 0.35, "s;animation-duration:").concat(2.4 + i % 5 * 0.4, "s");
    frag.appendChild(c);
  }

  $('screen-results').appendChild(frag);
}
/* ---------- pausa e fim de jogo ---------- */


function showPause(_ref7) {
  var title = _ref7.title,
      text = _ref7.text,
      mainLabel = _ref7.mainLabel,
      onMain = _ref7.onMain,
      onMenu = _ref7.onMenu;
  $('pause-title').textContent = title;
  $('pause-text').textContent = text;
  $('pause-main').textContent = mainLabel;
  $('pause-main').onclick = onMain;
  $('pause-menu').onclick = onMenu;
  showScreen('pause');
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map