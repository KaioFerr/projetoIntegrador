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

/***/ "./src/img/banner-base.png":
/*!*********************************!*\
  !*** ./src/img/banner-base.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3f0125ad9e9bd56705a5e93d79a10adf.png");

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

/***/ "./src/img/lock-closed.png":
/*!*********************************!*\
  !*** ./src/img/lock-closed.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfdf4e5cb76a999d597796443a01ad5a.png");

/***/ }),

/***/ "./src/img/lock-open.png":
/*!*******************************!*\
  !*** ./src/img/lock-open.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "64c672771f66a8619d2fd3aff4fba2f5.png");

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
/* harmony import */ var _img_banner_base_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/banner-base.png */ "./src/img/banner-base.png");
/* harmony import */ var _img_lock_closed_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/lock-closed.png */ "./src/img/lock-closed.png");
/* harmony import */ var _img_lock_open_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/lock-open.png */ "./src/img/lock-open.png");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./levels */ "./src/js/levels.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math */ "./src/js/math.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui */ "./src/js/ui.js");
/* harmony import */ var _sfx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sfx */ "./src/js/sfx.js");
/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./music */ "./src/js/music.js");
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
var MIN_CAM_Y = -280; // quanto a câmera pode subir

var FONT = '"Jockey One", "Arial Narrow", sans-serif'; // animação do cadeado ao hackear um painel (em passos de 1/60 s)

var UNLOCK_TICKS = 80;
var LOCK_OPEN_AT = 28; // o sprite tem 80px, mas os pés ocupam só o centro; a colisão usa essa faixa

var FEET_L = 28;
var FEET_R = 52;
var MINI_EDGE = 9; // borda transparente de cada lado da miniPlatform.png
//função que cria imagens

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
var bannerBaseImage = creatImage(_img_banner_base_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var lockClosedImage = creatImage(_img_lock_closed_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var lockOpenImage = creatImage(_img_lock_open_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var LOCK_X = 35; // posição do cadeado dentro da tela do painel

var LOCK_Y = 6; //estado do jogo

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
  level: _levels__WEBPACK_IMPORTED_MODULE_6__["LEVELS"][0],
  character: 'boy',
  camera: 0,
  camY: 0,
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
  nearFlag: null,
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
    y: _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"] - 80,
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
  var level = _levels__WEBPACK_IMPORTED_MODULE_6__["LEVELS"][index];
  game.levelIndex = index;
  game.level = level;
  game.camera = 0;
  game.camY = 0;
  game.time = 0;
  game.lives = MAX_LIVES;
  game.contas = 0;
  game.errors = 0;
  game.falls = 0;
  game.byOp = {};
  game.near = null;
  game.nearFlag = null;
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

    var w = (n - 1) * _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_STEP"] + _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_TILE_W"];
    game.platforms.push({
      kind: 'ground',
      x: x,
      y: _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"],
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
      w: _levels__WEBPACK_IMPORTED_MODULE_6__["MINI_W"] + (n - 1) * _levels__WEBPACK_IMPORTED_MODULE_6__["MINI_STEP"],
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
      solved: false,
      unlockT: -1
    };
  });
}

var clamp = function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
};

function updateCamera(snap) {
  var p = game.player;
  var cam = snap ? p.x - 300 : clamp(game.camera, p.x - 600, p.x - 100);
  game.camera = clamp(cam, 0, game.level.end - W); // vertical: quando o jogador sobe, a câmera acompanha para mostrar as plataformas e banners de cima

  var target = clamp(p.y + p.h / 2 - 330, MIN_CAM_Y, 0);
  game.camY = snap ? target : game.camY + (target - game.camY) * 0.1;
  if (Math.abs(target - game.camY) < 0.2) game.camY = target;
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

    var gx0 = x + (n - 1) * _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_STEP"] + _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_TILE_W"];
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
  if (game.state === 'playing' || game.state === 'celebrate') game.banners.forEach(function (b) {
    if (b.unlockT < 0 || b.unlockT >= UNLOCK_TICKS) return;
    b.unlockT++; // momento em que o cadeado abre

    if (b.unlockT === LOCK_OPEN_AT) {
      _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].unlock();
      burst(b.x + _levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_W"] / 2, b.y + 26, 28, ['255,255,138', '56,214,196', '120,255,170'], {
        spread: 6,
        up: 8,
        life: 60,
        size: 6
      });
      game.shake = 6;
    }
  });
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
        _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].jump();
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
    p.grounded = false; //colisão: só pelo topo das plataformas, e só se os pés estiverem sobre a parte visível

    var _iterator = _createForOfIteratorHelper(game.platforms),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pl = _step.value;
        var edge = pl.kind === 'mini' ? MINI_EDGE : 0;
        var onTop = p.x + FEET_R > pl.x + edge && p.x + FEET_L < pl.x + pl.w - edge;

        if (prevBottom <= pl.y && p.y + p.h >= pl.y && onTop) {
          p.y = pl.y - p.h;
          p.vy = 0;
          p.grounded = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (p.grounded && !wasGrounded && impact > 8) {
      dust(p.x + p.w / 2, p.y + p.h, 6);
      _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].land();
    }

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
} // contas da bandeira para trás que ainda faltam resolver
// (banners em cima da bandeira ou depois dela ficam para o próximo checkpoint)


function pendingBefore(flag) {
  return game.banners.filter(function (b) {
    return !b.solved && b.x + _levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_W"] <= flag.x;
  }).length;
}

function saveCheckpoint(flag) {
  var pending = pendingBefore(flag);

  if (pending > 0) {
    _ui__WEBPACK_IMPORTED_MODULE_9__["toast"]("Hackeie ".concat(pending === 1 ? 'o painel que falta' : "os ".concat(pending, " pain\xE9is que faltam"), " antes de salvar!"), 2200, 'lock');
    _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].denied();
    return;
  }

  flag.active = true;
  game.checkpoint = flag;
  burst(flag.x, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"] - 50, 10, ['255,255,138', '56,214,196'], {
    spread: 3,
    up: 5
  });
  _ui__WEBPACK_IMPORTED_MODULE_9__["toast"]('Checkpoint salvo!', 1200, 'flag');
  _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].checkpoint();
}

function fall() {
  game.falls++;
  game.lives--;
  game.shake = 14;
  _ui__WEBPACK_IMPORTED_MODULE_9__["flash"]();
  _ui__WEBPACK_IMPORTED_MODULE_9__["resetHudCache"]();

  if (game.lives <= 0) {
    game.state = 'gameover';
    _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].gameOver();
    resetInput();
    _ui__WEBPACK_IMPORTED_MODULE_9__["showPause"]({
      title: 'Fim de jogo',
      text: 'Suas vidas acabaram. Tente de novo!',
      mainLabel: 'Tentar de novo',
      mainIcon: 'retry',
      titleIcon: 'heart',
      onMain: function onMain() {
        return startLevel(game.levelIndex);
      },
      onMenu: goSelect
    });
    return;
  }

  var p = game.player;
  p.x = game.checkpoint.x - (game.checkpoint.x === 100 ? 0 : 20);
  p.y = _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"] - p.h;
  p.vx = p.vy = 0;
  p.grounded = true;
  p.invuln = 90;
  updateCamera(true);
  _ui__WEBPACK_IMPORTED_MODULE_9__["toast"]('Ops! -1 vida. Voltou ao checkpoint.', 2200, 'fall');
  _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].fall();
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
      var bottom = b.y + _levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_H"];

      if (Math.abs(cx - (b.x + _levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_W"] / 2)) < 75 && Math.abs(p.y + p.h - bottom) < 40) {
        game.near = b;
        break;
      }
    } // bandeira ainda não salva, com o jogador de pé no chão ao lado dela

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  game.nearFlag = null;
  if (game.near || !p.grounded || p.y + p.h !== _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"]) return;
  game.nearFlag = game.flags.find(function (f) {
    return !f.active && Math.abs(cx - f.x) < 60;
  }) || null;
}

function tryInteract() {
  if (game.state !== 'playing' || !game.player.grounded) return;

  if (!game.near) {
    if (game.nearFlag) saveCheckpoint(game.nearFlag);
    return;
  }

  var banner = game.near;
  var level = game.level;
  var question = Object(_math__WEBPACK_IMPORTED_MODULE_7__["createQuestion"])(level.math);
  var stats = game.byOp[question.op] || (game.byOp[question.op] = {
    ok: 0,
    n: 0
  });
  resetInput();
  game.state = 'math';
  _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].hackStart();
  _ui__WEBPACK_IMPORTED_MODULE_9__["openMath"]({
    title: "Hackeando painel ".concat(game.contas + 1, " de ").concat(game.banners.length),
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
        banner.unlockT = 0;
        _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].hacking();
        game.contas++;

        if (game.contas === game.banners.length) {
          // deixa o cadeado abrir antes da tela de resultados
          game.state = 'celebrate';
          game.celebrateTimer = UNLOCK_TICKS + 20;
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
  var bestInfo = Object(_storage__WEBPACK_IMPORTED_MODULE_8__["saveResult"])(level.id, {
    stars: stars,
    time: Math.round(game.time)
  });
  game.state = 'results';
  _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].levelComplete();
  _ui__WEBPACK_IMPORTED_MODULE_9__["setHudVisible"](false);
  _ui__WEBPACK_IMPORTED_MODULE_9__["renderResults"]({
    level: level,
    levels: _levels__WEBPACK_IMPORTED_MODULE_6__["LEVELS"].length,
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
  var profile = Object(_storage__WEBPACK_IMPORTED_MODULE_8__["getProfile"])();
  game.character = profile.character;
  _ui__WEBPACK_IMPORTED_MODULE_9__["setGroupName"](profile.group);
  loadLevel(0);
  game.state = 'title';
  _ui__WEBPACK_IMPORTED_MODULE_9__["setHudVisible"](false);
  _ui__WEBPACK_IMPORTED_MODULE_9__["showScreen"]('title');
  _ui__WEBPACK_IMPORTED_MODULE_9__["focusGroupName"]();
}

var selectedLevel = 1;

function goSelect() {
  loadLevel(0);
  game.state = 'select';
  _ui__WEBPACK_IMPORTED_MODULE_9__["setHudVisible"](false);
  var progress = Object(_storage__WEBPACK_IMPORTED_MODULE_8__["getProgress"])();
  var unlocked = _levels__WEBPACK_IMPORTED_MODULE_6__["LEVELS"].filter(function (l) {
    return l.id === 1 || progress[l.id - 1] && progress[l.id - 1].stars > 0;
  });
  if (!unlocked.some(function (l) {
    return l.id === selectedLevel;
  })) selectedLevel = unlocked[unlocked.length - 1].id;
  drawSelect();
}

function drawSelect() {
  _ui__WEBPACK_IMPORTED_MODULE_9__["renderSelect"]({
    levels: _levels__WEBPACK_IMPORTED_MODULE_6__["LEVELS"],
    progress: Object(_storage__WEBPACK_IMPORTED_MODULE_8__["getProgress"])(),
    selected: selectedLevel,
    character: game.character,
    group: Object(_storage__WEBPACK_IMPORTED_MODULE_8__["getProfile"])().group,
    onSelect: function onSelect(id) {
      selectedLevel = id;
      drawSelect();
    },
    onCharacter: function onCharacter(ch) {
      game.character = ch;
      Object(_storage__WEBPACK_IMPORTED_MODULE_8__["saveProfile"])(_objectSpread({}, Object(_storage__WEBPACK_IMPORTED_MODULE_8__["getProfile"])(), {
        character: ch
      }));
      drawSelect();
    },
    onPlay: function onPlay() {
      return startLevel(selectedLevel - 1);
    }
  });
  _ui__WEBPACK_IMPORTED_MODULE_9__["showScreen"]('select');
}

function startLevel(index) {
  loadLevel(index);
  selectedLevel = index + 1;
  resetInput();
  game.state = 'playing';
  _ui__WEBPACK_IMPORTED_MODULE_9__["resetHudCache"]();
  _ui__WEBPACK_IMPORTED_MODULE_9__["setHudVisible"](true);
  _ui__WEBPACK_IMPORTED_MODULE_9__["showScreen"](null);
  if (document.activeElement) document.activeElement.blur();
}

function toggleSound() {
  Object(_sfx__WEBPACK_IMPORTED_MODULE_10__["setMuted"])(!Object(_sfx__WEBPACK_IMPORTED_MODULE_10__["isMuted"])());
  _ui__WEBPACK_IMPORTED_MODULE_9__["setSoundIcon"](Object(_sfx__WEBPACK_IMPORTED_MODULE_10__["isMuted"])());
  if (!Object(_sfx__WEBPACK_IMPORTED_MODULE_10__["isMuted"])()) _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].click();
  return Object(_sfx__WEBPACK_IMPORTED_MODULE_10__["isMuted"])();
}

function togglePause() {
  if (game.state === 'playing') {
    game.state = 'paused';
    resetInput();
    _ui__WEBPACK_IMPORTED_MODULE_9__["showPause"]({
      title: 'Pausado',
      text: 'O tempo está parado.',
      mainLabel: 'Continuar',
      controls: true,
      onMain: togglePause,
      onMenu: goSelect
    });
  } else if (game.state === 'paused') {
    game.state = 'playing';
    _ui__WEBPACK_IMPORTED_MODULE_9__["showScreen"](null);
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

    var x0 = x + (n - 1) * _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_STEP"] + _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_TILE_W"] - game.camera;
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
    var g = c.createLinearGradient(0, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"], 0, H);
    g.addColorStop(0, '#ff7a2a');
    g.addColorStop(0.55, '#d11a7a');
    g.addColorStop(1, '#5c0a45');
    c.fillStyle = g;
    c.fillRect(x0, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"], x1 - x0, H - _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"]);
    c.fillStyle = '#ffd58a';
    var wave = game.tick * 0.6 % 24;

    for (var x = x0 - 24 + wave; x < x1 + 24; x += 24) {
      c.beginPath();
      c.arc(x, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"] + 2 + Math.sin(x * 0.2 + game.tick * 0.1) * 2, 9, Math.PI, 0);
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

    var g = c.createLinearGradient(0, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"] - 90, 0, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"]);
    g.addColorStop(0, 'rgba(209,26,122,0)');
    g.addColorStop(1, 'rgba(209,26,122,0.45)');
    c.fillStyle = g;
    c.fillRect(x0, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"] - 90, x1 - x0, 90);
  });
}

function drawFlag(f) {
  var x = f.x - game.camera;
  if (x < -60 || x > W + 60) return;
  var top = _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"] - 62;
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

  if (game.nearFlag === f && game.state === 'playing') {
    var pending = pendingBefore(f);
    if (pending > 0) drawPrompt(x + 3, top - 40, "Faltam ".concat(pending, " ").concat(pending === 1 ? 'painel' : 'painéis'), true);else drawPrompt(x + 3, top - 40, 'Salvar checkpoint');
  }
}

function drawBanner(b) {
  var x = b.x - game.camera;
  if (x < -_levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_W"] || x > W) return;
  var y = b.y;
  var near = game.near === b; // t: passo da animação de desbloqueio (-1 = ainda trancado)

  var t = b.solved ? b.unlockT < 0 ? UNLOCK_TICKS : b.unlockT : -1;
  var opened = t >= LOCK_OPEN_AT;
  var hacking = t >= 0 && !opened; // o painel fica parado; só o cadeado da tela se mexe

  c.save();
  if (opened) c.filter = 'hue-rotate(115deg) saturate(1.1)';
  c.drawImage(bannerBaseImage, x, y);
  c.beginPath();
  c.rect(x + 12, y + 4, 66, 40);
  c.clip();
  var lx = 0;
  var ly = 0;

  if (near && !b.solved) {
    ly = Math.round(Math.sin(game.tick * 0.12) * 2);
    c.shadowColor = '#ffff8a';
    c.shadowBlur = 10;
  }

  if (hacking) lx = Math.round(Math.sin(t * 2.2) * 2);
  c.drawImage(opened ? lockOpenImage : lockClosedImage, x + LOCK_X + lx, y + LOCK_Y + ly);
  c.restore(); // clarão na tela quando o cadeado abre

  var flash = opened ? 1 - (t - LOCK_OPEN_AT) / 10 : 0;

  if (flash > 0) {
    c.fillStyle = "rgba(255,255,255,".concat(flash * 0.8, ")");
    c.fillRect(x + 12, y + 3, 66, 42);
  }

  if (near && game.state === 'playing') drawPrompt(x + _levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_W"] / 2, y - 40, 'Hackear o painel');
} // depois que o cadeado da tela abre: anel de luz e "ACESSO LIBERADO"


function drawUnlock(b, x, t) {
  var cx = x + _levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_W"] / 2;
  var out = clamp((t - 55) / (UNLOCK_TICKS - 55), 0, 1);

  if (t >= LOCK_OPEN_AT) {
    // anel de luz quando abre
    var r = (t - LOCK_OPEN_AT) * 3;
    c.save();
    c.globalAlpha = Math.max(0, 1 - r / 70);
    c.strokeStyle = '#38d6c4';
    c.lineWidth = 4;
    c.beginPath();
    c.arc(cx, b.y + 28, r, 0, Math.PI * 2);
    c.stroke(); // texto de acesso liberado

    c.globalAlpha = 1 - out;
    c.font = "22px ".concat(FONT);
    c.textAlign = 'center';
    c.lineWidth = 4;
    c.strokeStyle = '#000';
    c.fillStyle = '#38d6c4';
    var ty = b.y - 14 - Math.min(10, (t - LOCK_OPEN_AT) * 0.6);
    c.strokeText('ACESSO LIBERADO', cx, ty);
    c.fillText('ACESSO LIBERADO', cx, ty);
    c.restore();
  }
} // balão "[E] texto" acima de um objeto; sem tecla quando a ação está bloqueada


function drawPrompt(cx, top, label) {
  var locked = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  c.font = "20px ".concat(FONT);
  var tw = c.measureText(label).width + (locked ? 20 : 44);
  var px = cx - tw / 2;
  var py = top + Math.sin(game.tick * 0.12) * 3;
  c.fillStyle = locked ? '#bdbdd0' : '#ffff8a';
  c.strokeStyle = '#000';
  c.lineWidth = 2;
  roundRect(px, py, tw, 28, 14);
  c.fill();
  c.stroke();

  if (!locked) {
    c.fillStyle = '#970000';
    roundRect(px + 6, py + 4, 22, 20, 5);
    c.fill();
    c.fillStyle = '#ffff8a';
    c.textAlign = 'center';
    c.fillText('E', px + 17, py + 20);
  }

  c.fillStyle = '#000';
  c.textAlign = 'left';
  c.fillText(label, px + (locked ? 10 : 34), py + 20);
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
  c.fillStyle = '#00003c'; // mesma cor do topo do fundo, para o céu continuar quando a câmera sobe

  c.fillRect(0, 0, W, H);
  c.save();
  if (game.shake > 0) c.translate((Math.random() - 0.5) * game.shake, (Math.random() - 0.5) * game.shake); //fundo com parallax

  var bgX = -game.camera * 0.4;
  var bgY = -game.camY * 0.5;

  if (backgroundImage.complete) {
    c.drawImage(backgroundImage, bgX, bgY);
    if (bgX + backgroundImage.width < W) c.drawImage(backgroundImage, bgX + backgroundImage.width, bgY);

    if (bgY > 0) {
      var fade = c.createLinearGradient(0, bgY, 0, bgY + 50);
      fade.addColorStop(0, '#00003c');
      fade.addColorStop(1, 'rgba(0,0,60,0)');
      c.fillStyle = fade;
      c.fillRect(0, bgY, W, 50);
    }
  } //mundo (acompanha a câmera vertical)


  c.translate(0, -game.camY);
  var gaps = voidGaps();
  drawGlow(gaps);
  drawNeon(gaps, 1, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"]);
  game.platforms.forEach(function (pl) {
    var x0 = pl.x - game.camera;
    if (x0 > W || x0 + pl.w < 0) return;

    if (pl.kind === 'ground') {
      for (var i = 0; i < pl.n; i++) {
        c.drawImage(platformImage, x0 + i * _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_STEP"], pl.y);
      }
    } else {
      for (var _i2 = 0; _i2 < pl.n; _i2++) {
        c.drawImage(miniPlatformImage, x0 + _i2 * _levels__WEBPACK_IMPORTED_MODULE_6__["MINI_STEP"], pl.y);
      }
    }
  });
  game.flags.forEach(drawFlag);
  game.banners.forEach(drawBanner);
  drawPlayer(); //efeitos de desbloqueio ficam na frente do jogador

  game.banners.forEach(function (b) {
    var x = b.x - game.camera;
    if (b.unlockT >= 0 && b.unlockT < UNLOCK_TICKS && x > -_levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_W"] * 2 && x < W + _levels__WEBPACK_IMPORTED_MODULE_6__["BANNER_W"]) drawUnlock(b, x, b.unlockT);
  }); //o jogador afunda no néon ao cair

  drawNeon(gaps, 0.6, _levels__WEBPACK_IMPORTED_MODULE_6__["GROUND_Y"] + 14);
  drawParticles();
  c.restore();
  _ui__WEBPACK_IMPORTED_MODULE_9__["setActionReady"](game.state === 'playing' && game.player.grounded && (!!game.near || !!game.nearFlag && pendingBefore(game.nearFlag) === 0));

  if (game.state === 'playing' || game.state === 'celebrate' || game.state === 'math' || game.state === 'paused') {
    _ui__WEBPACK_IMPORTED_MODULE_9__["setHud"]({
      level: game.level.id,
      levels: _levels__WEBPACK_IMPORTED_MODULE_6__["LEVELS"].length,
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
  syncMusic();
} // batida só durante a fase; na conta e nos menus fica só o ambiente, na pausa mais baixo


var musicMode = null;

function syncMusic() {
  var s = game.state;
  var m = s === 'playing' || s === 'celebrate' ? 'play' : s === 'paused' ? 'pause' : 'menu';
  if (m !== musicMode) Object(_music__WEBPACK_IMPORTED_MODULE_11__["setMusicMode"])(musicMode = m);
} // o navegador só toca som depois de um gesto: a música começa no primeiro toque ou tecla


var beginMusic = function beginMusic() {
  Object(_music__WEBPACK_IMPORTED_MODULE_11__["startMusic"])();
  removeEventListener('pointerdown', beginMusic, true);
  removeEventListener('keydown', beginMusic, true);
};

addEventListener('pointerdown', beginMusic, true);
addEventListener('keydown', beginMusic, true);
/* ---------- entrada: teclado e toque usam as mesmas ações ---------- */

function action(name, down) {
  switch (name) {
    case 'left':
      keys.left = down;
      break;

    case 'right':
      keys.right = down;
      break;

    case 'jump':
      if (down) {
        if (!keys.jump) jumpBuffer = 6;
        keys.jump = true;
      } else if (keys.jump) {
        keys.jump = false;
        jumpReleased = true;
      }

      break;

    case 'act':
      if (down) tryInteract();
      break;
  }
}

var KEY_ACTIONS = {
  KeyA: 'left',
  ArrowLeft: 'left',
  KeyD: 'right',
  ArrowRight: 'right',
  KeyW: 'jump',
  ArrowUp: 'jump',
  Space: 'jump',
  KeyE: 'act'
};
addEventListener('keydown', function (e) {
  if (_ui__WEBPACK_IMPORTED_MODULE_9__["mathKeydown"](e)) return;
  if (e.target && e.target.tagName === 'INPUT') return;

  if (e.code === 'KeyM' && !e.repeat) {
    toggleSound();
  } else if (e.code === 'KeyP' || e.code === 'Escape') {
    if (!e.repeat) togglePause();
  } else if (KEY_ACTIONS[e.code] && !e.repeat) {
    action(KEY_ACTIONS[e.code], true);
  }

  if (e.code.startsWith('Arrow') || e.code === 'Space' && game.state === 'playing') e.preventDefault();
});
addEventListener('keyup', function (e) {
  // sem isso o espaço também "clicaria" o último botão focado
  if (e.code === 'Space' && game.state === 'playing') e.preventDefault();
  var name = KEY_ACTIONS[e.code];
  if (name && name !== 'act') action(name, false);
});
addEventListener('blur', function () {
  resetInput();
  if (game.state === 'playing') togglePause();
});
/* ---------- ajuste de tamanho, celular e início ---------- */

var isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
document.body.classList.toggle('touch', isTouch);
var gameEl = document.getElementById('game');

function fit() {
  var vv = window.visualViewport;
  var vw = vv ? vv.width : innerWidth;
  var vh = vv ? vv.height : innerHeight;
  gameEl.style.transform = "scale(".concat(Math.min(vw / W, vh / H), ")"); // em pé o celular fica pequeno demais: pausa e pede para girar

  if (isTouch && vh > vw && game.state === 'playing') togglePause();
}

addEventListener('resize', fit);
if (window.visualViewport) window.visualViewport.addEventListener('resize', fit);
fit();
_ui__WEBPACK_IMPORTED_MODULE_9__["init"]();
_ui__WEBPACK_IMPORTED_MODULE_9__["buildPad"]();
_ui__WEBPACK_IMPORTED_MODULE_9__["bindTouch"](action);
_ui__WEBPACK_IMPORTED_MODULE_9__["bindPauseButton"](togglePause);
_ui__WEBPACK_IMPORTED_MODULE_9__["bindSoundButton"](toggleSound);
_ui__WEBPACK_IMPORTED_MODULE_9__["setSoundIcon"](Object(_sfx__WEBPACK_IMPORTED_MODULE_10__["isMuted"])()); // clique de interface em qualquer botão (menus, resultados, pausa)

document.addEventListener('click', function (e) {
  if (e.target.closest('button') && !e.target.closest('#math-pad, #touch, #btn-sound')) _sfx__WEBPACK_IMPORTED_MODULE_10__["sfx"].click();
});
_ui__WEBPACK_IMPORTED_MODULE_9__["bindFullscreen"]();
_ui__WEBPACK_IMPORTED_MODULE_9__["setCharImages"]({
  boy: SPRITES.boy.idle[0].src,
  girl: SPRITES.girl.idle[0].src
});
_ui__WEBPACK_IMPORTED_MODULE_9__["bindTitle"]({
  onStart: function onStart(name) {
    Object(_storage__WEBPACK_IMPORTED_MODULE_8__["saveProfile"])({
      group: name || 'Equipe',
      character: game.character
    });
    goSelect();
  }
});
goTitle();
requestAnimationFrame(loop);

/***/ }),

/***/ "./src/js/icons.js":
/*!*************************!*\
  !*** ./src/js/icons.js ***!
  \*************************/
/*! exports provided: icon, hydrateIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateIcons", function() { return hydrateIcons; });
// Ícones em SVG (traço arredondado, herdam a cor do texto). Uso: icon('clock') ou <span data-icon="clock">
var S = 'fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"';
var F = 'fill="currentColor" stroke="none"';
var PATHS = {
  clock: [S, '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'],
  heart: [F, '<path d="M12 20.8C5 15.6 3 12.2 3 8.9 3 6.3 5 4.5 7.4 4.5c1.8 0 3.2 1 4.6 2.8 1.4-1.8 2.8-2.8 4.6-2.8C19 4.5 21 6.3 21 8.9c0 3.3-2 6.7-9 11.9z"/>'],
  flag: [S, '<path d="M6 21V4"/><path d="M6 5h12l-3 4 3 4H6"/>'],
  calc: [S, '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8"/><circle cx="9" cy="13" r=".8" fill="currentColor"/><circle cx="15" cy="13" r=".8" fill="currentColor"/><circle cx="9" cy="17" r=".8" fill="currentColor"/><circle cx="15" cy="17" r=".8" fill="currentColor"/>'],
  check: [S, '<path d="M5 12.5l4.5 4.5L19 7.5"/>'],
  cross: [S, '<path d="M6 6l12 12M18 6L6 18"/>'],
  fall: [S, '<path d="M12 3v11"/><path d="M7.5 10L12 14.5 16.5 10"/><path d="M4 20h16"/>'],
  target: [S, '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>'],
  trophy: [S, '<path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5v2a3 3 0 0 0 3 3"/><path d="M16 6h3v2a3 3 0 0 1-3 3"/><path d="M12 13v4"/><path d="M8.5 20h7"/>'],
  star: [F, '<path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.4 6.6L12 17.2 6 20.6l1.4-6.6L2.5 9.4l6.6-.7z"/>'],
  play: [F, '<path d="M8 4.8l11.5 7.2L8 19.2z"/>'],
  retry: [S, '<path d="M20 11.5a8 8 0 1 0-2.4 5.9"/><path d="M20.5 4v7.5H13"/>'],
  home: [S, '<path d="M4 11.5L12 4l8 7.5"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>'],
  next: [S, '<path d="M5 12h13"/><path d="M13 6l6 6-6 6"/>'],
  pause: [F, '<rect x="6" y="4.5" width="4.2" height="15" rx="1.2"/><rect x="13.8" y="4.5" width="4.2" height="15" rx="1.2"/>'],
  plus: [S, '<path d="M12 5v14M5 12h14"/>'],
  minus: [S, '<path d="M5 12h14"/>'],
  plusminus: [S, '<path d="M8 3.5v9M3.5 8h9"/><path d="M13 19h8"/><path d="M19 5L6 19"/>'],
  lock: [S, '<rect x="5" y="11" width="14" height="9.5" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'],
  left: [S, '<path d="M15 5l-7 7 7 7"/>'],
  right: [S, '<path d="M9 5l7 7-7 7"/>'],
  up: [S, '<path d="M5 15l7-7 7 7"/>'],
  backspace: [S, '<path d="M21 5H9l-6 7 6 7h12z"/><path d="M12.5 9.5l5 5M17.5 9.5l-5 5"/>'],
  users: [S, '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2c2.7.2 4.5 2.3 4.5 5.3"/>'],
  fullscreen: [S, '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'],
  rotate: [S, '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>'],
  runner: [S, '<circle cx="14" cy="4.5" r="2"/><path d="M8 21l3.5-6 3 .5L16 21"/><path d="M11.5 15l-1-5 4.5-1 2 3.5 3 .5"/><path d="M10.5 10L7 11.5"/>'],
  sound: [S, '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/>'],
  mute: [S, '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>'],
  sparkle: [F, '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8z"/>']
};
function icon(name, size) {
  var p = PATHS[name];
  if (!p) return '';
  var dim = size ? " width=\"".concat(size, "\" height=\"").concat(size, "\"") : '';
  return "<svg class=\"ico\" viewBox=\"0 0 24 24\"".concat(dim, " ").concat(p[0], " aria-hidden=\"true\">").concat(p[1], "</svg>");
} // troca <span data-icon="nome"> pelo SVG correspondente

function hydrateIcons() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  root.querySelectorAll('[data-icon]').forEach(function (el) {
    el.innerHTML = icon(el.dataset.icon);
    el.removeAttribute('data-icon');
    el.classList.add('icon-slot');
  });
}

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

/***/ "./src/js/music.js":
/*!*************************!*\
  !*** ./src/js/music.js ***!
  \*************************/
/*! exports provided: startMusic, setMusicMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startMusic", function() { return startMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMusicMode", function() { return setMusicMode; });
/* harmony import */ var _sfx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sfx */ "./src/js/sfx.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Música de fundo gerada na hora (Web Audio), no clima synthwave / Blade Runner:
// pads largos com reverb, baixo pulsando, arpejo com eco e uma melodia de sinos esparsa.
// Nos menus toca só o ambiente; durante a fase entram a batida e o chimbal.

var BPM = 84;
var EIGHTH = 60 / BPM / 2;
var STEPS_PER_CHORD = 16; // 2 compassos de colcheias
// progressão em ré menor: Dm9 – B♭maj7 – Gm7 – A(sus4)

var CHORDS = [{
  pad: [50, 53, 57, 60, 64],
  bass: 38,
  arp: [62, 65, 69, 72]
}, {
  pad: [46, 50, 53, 57],
  bass: 34,
  arp: [58, 62, 65, 69]
}, {
  pad: [43, 50, 53, 58],
  bass: 31,
  arp: [55, 58, 62, 65]
}, {
  pad: [45, 52, 57, 62, 64],
  bass: 33,
  arp: [57, 62, 64, 69]
}]; // melodia: [passo dentro do acorde, nota] — poucas notas, bem espaçadas

var MELODY = [[[0, 69], [6, 72], [10, 69]], [[0, 70], [8, 65]], [[0, 67], [6, 70], [10, 74]], [[0, 73], [8, 69]]];
var ARP_ORDER = [0, 1, 2, 3, 2, 1, 0, 2];

var hz = function hz(n) {
  return 440 * Math.pow(2, (n - 69) / 12);
};

var bus = null; // { out, dry, wet, padFilter, delay }

var step = 0;
var nextTime = 0;
var timer = null;
var mode = 'menu'; // menu | play | pause

function build(ctx, master) {
  var out = ctx.createGain();
  out.gain.value = 0;
  out.connect(master); // reverb: resposta ao impulso feita de ruído que decai (≈3,5 s)

  var len = ctx.sampleRate * 3.5;
  var ir = ctx.createBuffer(2, len, ctx.sampleRate);

  for (var ch = 0; ch < 2; ch++) {
    var d = ir.getChannelData(ch);

    for (var i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
  }

  var reverb = ctx.createConvolver();
  reverb.buffer = ir;
  var wet = ctx.createGain();
  wet.gain.value = 0.55;
  reverb.connect(wet);
  wet.connect(out);
  var dry = ctx.createGain();
  dry.gain.value = 0.7;
  dry.connect(out); // filtro dos pads abrindo e fechando devagar

  var padFilter = ctx.createBiquadFilter();
  padFilter.type = 'lowpass';
  padFilter.frequency.value = 1100;
  padFilter.Q.value = 2;
  var lfo = ctx.createOscillator();
  var lfoGain = ctx.createGain();
  lfo.frequency.value = 0.07;
  lfoGain.gain.value = 600;
  lfo.connect(lfoGain);
  lfoGain.connect(padFilter.frequency);
  lfo.start();
  padFilter.connect(dry);
  padFilter.connect(reverb); // eco em colcheia pontuada para o arpejo e os sinos

  var delay = ctx.createDelay(2);
  delay.delayTime.value = EIGHTH * 1.5;
  var fb = ctx.createGain();
  fb.gain.value = 0.38;
  var delayTone = ctx.createBiquadFilter();
  delayTone.type = 'lowpass';
  delayTone.frequency.value = 2500;
  delay.connect(delayTone);
  delayTone.connect(fb);
  fb.connect(delay);
  delayTone.connect(reverb);
  delayTone.connect(dry);
  return {
    out: out,
    dry: dry,
    reverb: reverb,
    padFilter: padFilter,
    delay: delay
  };
}

function env(ctx, g, t, a, peak, hold, r) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + a);
  g.gain.setValueAtTime(peak, t + a + hold);
  g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + r);
}

function pad(ctx, notes, t, dur) {
  notes.forEach(function (n) {
    ;
    [-7, 7].forEach(function (detune) {
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = 'sawtooth';
      o.frequency.value = hz(n);
      o.detune.value = detune;
      env(ctx, g, t, 1.6, 0.035, dur - 1.6, 2.2);
      o.connect(g);
      g.connect(bus.padFilter);
      o.start(t);
      o.stop(t + dur + 2.4);
    });
  });
}

function bass(ctx, n, t) {
  var o = ctx.createOscillator();
  var f = ctx.createBiquadFilter();
  var g = ctx.createGain();
  o.type = 'sawtooth';
  o.frequency.value = hz(n);
  f.type = 'lowpass';
  f.frequency.setValueAtTime(700, t);
  f.frequency.exponentialRampToValueAtTime(160, t + EIGHTH * 0.9);
  env(ctx, g, t, 0.01, 0.22, 0.05, EIGHTH * 0.8);
  o.connect(f);
  f.connect(g);
  g.connect(bus.dry);
  o.start(t);
  o.stop(t + EIGHTH + 0.1);
}

function pluck(ctx, n, t, vol) {
  var o = ctx.createOscillator();
  var g = ctx.createGain();
  o.type = 'triangle';
  o.frequency.value = hz(n);
  env(ctx, g, t, 0.005, vol, 0, 0.35);
  o.connect(g);
  g.connect(bus.dry);
  g.connect(bus.delay);
  o.start(t);
  o.stop(t + 0.4);
} // sino: seno com um parcial inarmônico, decaimento longo


function bell(ctx, n, t) {
  ;
  [[1, 0.09], [2.76, 0.03]].forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        ratio = _ref2[0],
        vol = _ref2[1];

    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = hz(n) * ratio;
    env(ctx, g, t, 0.01, vol, 0, ratio === 1 ? 2.6 : 1);
    o.connect(g);
    g.connect(bus.reverb);
    g.connect(bus.delay);
    o.start(t);
    o.stop(t + 2.8);
  });
}

function kick(ctx, t) {
  var o = ctx.createOscillator();
  var g = ctx.createGain();
  o.frequency.setValueAtTime(110, t);
  o.frequency.exponentialRampToValueAtTime(40, t + 0.18);
  env(ctx, g, t, 0.003, 0.35, 0, 0.25);
  o.connect(g);
  g.connect(bus.dry);
  o.start(t);
  o.stop(t + 0.3);
}

function hat(ctx, t) {
  var len = Math.ceil(ctx.sampleRate * 0.05);
  var buf = ctx.createBuffer(1, len, ctx.sampleRate);
  var d = buf.getChannelData(0);

  for (var i = 0; i < len; i++) {
    d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  }

  var s = ctx.createBufferSource();
  var f = ctx.createBiquadFilter();
  var g = ctx.createGain();
  s.buffer = buf;
  f.type = 'highpass';
  f.frequency.value = 7000;
  g.gain.value = 0.05;
  s.connect(f);
  f.connect(g);
  g.connect(bus.dry);
  s.start(t);
}

function scheduleStep(ctx, t) {
  var ci = Math.floor(step / STEPS_PER_CHORD) % CHORDS.length;
  var s = step % STEPS_PER_CHORD;
  var chord = CHORDS[ci];
  var drums = mode === 'play';
  if (s === 0) pad(ctx, chord.pad, t, EIGHTH * STEPS_PER_CHORD);
  bass(ctx, chord.bass + (s % 2 ? 12 : 0), t);
  pluck(ctx, chord.arp[ARP_ORDER[s % ARP_ORDER.length]], t, s % 4 === 0 ? 0.07 : 0.045);
  MELODY[ci].forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        at = _ref4[0],
        n = _ref4[1];

    if (at === s) bell(ctx, n, t);
  });

  if (drums) {
    if (s % 4 === 0) kick(ctx, t);
    if (s % 2 === 1) hat(ctx, t);
  }

  step++;
}

function tick() {
  var a = Object(_sfx__WEBPACK_IMPORTED_MODULE_0__["getAudio"])();
  if (!a) return;
  var ctx = a.ctx;
  if (ctx.state !== 'running') return;
  if (nextTime < ctx.currentTime) nextTime = ctx.currentTime + 0.05;

  while (nextTime < ctx.currentTime + 0.25) {
    scheduleStep(ctx, nextTime);
    nextTime += EIGHTH;
  }
}

var LEVELS = {
  menu: 1.1,
  play: 0.9,
  pause: 0.4
}; // começa a música (chamar depois de um gesto da pessoa)

function startMusic() {
  var a = Object(_sfx__WEBPACK_IMPORTED_MODULE_0__["getAudio"])();
  if (!a) return;
  if (!bus) bus = build(a.ctx, a.master);

  if (!timer) {
    bus.out.gain.setTargetAtTime(LEVELS[mode], a.ctx.currentTime, 1.5);
    timer = setInterval(tick, 60);
    tick();
  }
} // menu: só ambiente; play: com batida; pause: mais baixo e sem batida

function setMusicMode(next) {
  mode = next;
  var a = Object(_sfx__WEBPACK_IMPORTED_MODULE_0__["getAudio"])();
  if (bus && a) bus.out.gain.setTargetAtTime(LEVELS[mode], a.ctx.currentTime, 0.4);
} // aba escondida ou app em segundo plano: para tudo para não gastar bateria

document.addEventListener('visibilitychange', function () {
  var a = Object(_sfx__WEBPACK_IMPORTED_MODULE_0__["getAudio"])(false);
  if (!a) return;
  if (document.hidden) a.ctx.suspend();else a.ctx.resume();
});

/***/ }),

/***/ "./src/js/sfx.js":
/*!***********************!*\
  !*** ./src/js/sfx.js ***!
  \***********************/
/*! exports provided: getAudio, isMuted, setMuted, sfx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudio", function() { return getAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMuted", function() { return isMuted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMuted", function() { return setMuted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sfx", function() { return sfx; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
// Efeitos sonoros sintetizados na hora (Web Audio), no estilo dos videogames 8-bit.
// Não usa arquivos de áudio. O navegador só libera o som depois do primeiro toque ou tecla.

var ctx = null;
var master = null;
var muted = !Object(_storage__WEBPACK_IMPORTED_MODULE_0__["getSound"])();

function audio() {
  if (!ctx) {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = muted ? 0 : 0.35;
    master.connect(ctx.destination);
  }

  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
} // libera o áudio no primeiro gesto da pessoa


var unlock = function unlock() {
  return audio();
};

addEventListener('pointerdown', unlock, {
  capture: true,
  passive: true
});
addEventListener('keydown', unlock, {
  capture: true
}); // contexto de áudio compartilhado com a música; create=false só devolve se já existir

function getAudio() {
  var create = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if (!ctx && !create) return null;
  if (create && !audio()) return null;
  return {
    ctx: ctx,
    master: master
  };
}
function isMuted() {
  return muted;
}
function setMuted(value) {
  muted = value;
  Object(_storage__WEBPACK_IMPORTED_MODULE_0__["saveSound"])(!muted);
  if (master) master.gain.setTargetAtTime(muted ? 0 : 0.35, ctx.currentTime, 0.02);
} // nota simples: frequência inicial, final (deslize), duração, forma de onda, volume e atraso

function tone(freq) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? freq : _ref$to,
      _ref$dur = _ref.dur,
      dur = _ref$dur === void 0 ? 0.1 : _ref$dur,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'square' : _ref$type,
      _ref$vol = _ref.vol,
      vol = _ref$vol === void 0 ? 0.5 : _ref$vol,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay;

  var ac = audio();
  if (!ac || muted) return;
  var t = ac.currentTime + delay;
  var osc = ac.createOscillator();
  var g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (to !== freq) osc.frequency.exponentialRampToValueAtTime(to, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g);
  g.connect(master);
  osc.start(t);
  osc.stop(t + dur + 0.02);
} // ruído curto (estalo, batida, chiado)


function noise() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$dur = _ref2.dur,
      dur = _ref2$dur === void 0 ? 0.08 : _ref2$dur,
      _ref2$vol = _ref2.vol,
      vol = _ref2$vol === void 0 ? 0.4 : _ref2$vol,
      _ref2$freq = _ref2.freq,
      freq = _ref2$freq === void 0 ? 1000 : _ref2$freq,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'bandpass' : _ref2$type,
      _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay;

  var ac = audio();
  if (!ac || muted) return;
  var t = ac.currentTime + delay;
  var len = Math.ceil(ac.sampleRate * dur);
  var buf = ac.createBuffer(1, len, ac.sampleRate);
  var data = buf.getChannelData(0);

  for (var i = 0; i < len; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  }

  var src = ac.createBufferSource();
  src.buffer = buf;
  var f = ac.createBiquadFilter();
  f.type = type;
  f.frequency.value = freq;
  var g = ac.createGain();
  g.gain.value = vol;
  src.connect(f);
  f.connect(g);
  g.connect(master);
  src.start(t);
}

var arp = function arp(notes) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$step = _ref3.step,
      step = _ref3$step === void 0 ? 0.07 : _ref3$step,
      _ref3$dur = _ref3.dur,
      dur = _ref3$dur === void 0 ? 0.12 : _ref3$dur,
      _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? 'square' : _ref3$type,
      _ref3$vol = _ref3.vol,
      vol = _ref3$vol === void 0 ? 0.35 : _ref3$vol,
      _ref3$delay = _ref3.delay,
      delay = _ref3$delay === void 0 ? 0 : _ref3$delay;

  return notes.forEach(function (n, i) {
    return tone(n, {
      dur: dur,
      type: type,
      vol: vol,
      delay: delay + i * step
    });
  });
};

var sfx = {
  jump: function jump() {
    return tone(280, {
      to: 620,
      dur: 0.14,
      vol: 0.25
    });
  },
  land: function land() {
    return noise({
      dur: 0.06,
      vol: 0.35,
      freq: 220,
      type: 'lowpass'
    });
  },
  click: function click() {
    return tone(660, {
      dur: 0.04,
      vol: 0.18
    });
  },
  key: function key() {
    return tone(990, {
      dur: 0.035,
      vol: 0.18,
      type: 'triangle'
    });
  },
  // abrir a conta: o computador do painel "conectando"
  hackStart: function hackStart() {
    return arp([440, 660, 880], {
      step: 0.05,
      dur: 0.06,
      vol: 0.22
    });
  },
  correct: function correct() {
    return arp([880, 1320], {
      step: 0.08,
      dur: 0.1,
      type: 'triangle',
      vol: 0.4
    });
  },
  wrong: function wrong() {
    tone(220, {
      to: 140,
      dur: 0.18,
      type: 'sawtooth',
      vol: 0.3
    });
    tone(220, {
      to: 120,
      dur: 0.22,
      type: 'sawtooth',
      vol: 0.3,
      delay: 0.2
    });
  },
  // cadeado tremendo: bipes rápidos de "processando"
  hacking: function hacking() {
    for (var i = 0; i < 7; i++) {
      tone(700 + Math.random() * 900, {
        dur: 0.04,
        vol: 0.15,
        delay: i * 0.06
      });
    }
  },
  // cadeado abre: estalo metálico + acorde subindo
  unlock: function unlock() {
    noise({
      dur: 0.05,
      vol: 0.5,
      freq: 3200,
      type: 'highpass'
    });
    tone(1400, {
      to: 900,
      dur: 0.06,
      type: 'square',
      vol: 0.2
    });
    arp([523, 659, 784, 1047], {
      step: 0.07,
      delay: 0.06,
      vol: 0.3
    });
  },
  checkpoint: function checkpoint() {
    return arp([392, 523, 659, 784], {
      step: 0.08,
      dur: 0.16,
      type: 'triangle',
      vol: 0.45
    });
  },
  denied: function denied() {
    tone(180, {
      dur: 0.1,
      vol: 0.28
    });
    tone(150, {
      dur: 0.16,
      vol: 0.28,
      delay: 0.12
    });
  },
  fall: function fall() {
    return tone(700, {
      to: 90,
      dur: 0.55,
      type: 'triangle',
      vol: 0.5
    });
  },
  gameOver: function gameOver() {
    return arp([392, 330, 262, 196], {
      step: 0.22,
      dur: 0.3,
      type: 'triangle',
      vol: 0.5
    });
  },
  levelComplete: function levelComplete() {
    arp([523, 659, 784, 1047], {
      step: 0.1,
      dur: 0.14,
      vol: 0.3
    });
    arp([784, 1047], {
      step: 0.16,
      dur: 0.4,
      vol: 0.3,
      delay: 0.45
    });
  }
};

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/*! exports provided: getProfile, saveProfile, getSound, saveSound, getProgress, saveResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProfile", function() { return saveProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSound", function() { return getSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSound", function() { return saveSound; });
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
} // som ligado (padrão) ou desligado

function getSound() {
  return read().sound !== false;
}
function saveSound(on) {
  write(_objectSpread({}, read(), {
    sound: on
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
/*! exports provided: fmt, init, showScreen, setHudVisible, setHud, resetHudCache, setActionReady, toast, flash, bindTouch, bindSoundButton, setSoundIcon, bindPauseButton, bindFullscreen, bindTitle, setGroupName, focusGroupName, setCharImages, renderSelect, buildPad, isMathOpen, openMath, closeMath, mathKeydown, renderResults, showPause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fmt", function() { return fmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showScreen", function() { return showScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHudVisible", function() { return setHudVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHud", function() { return setHud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHudCache", function() { return resetHudCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActionReady", function() { return setActionReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flash", function() { return flash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindTouch", function() { return bindTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSoundButton", function() { return bindSoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSoundIcon", function() { return setSoundIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindPauseButton", function() { return bindPauseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindFullscreen", function() { return bindFullscreen; });
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
/* harmony import */ var _sfx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sfx */ "./src/js/sfx.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/js/icons.js");
// Camadas HTML por cima do canvas: painel, conta, resultados, menus




var $ = function $(id) {
  return document.getElementById(id);
};

var SCREENS = ['title', 'select', 'math', 'results', 'pause'];
var OP_ICON = {
  '+': 'plus',
  '-': 'minus'
};
var fmt = function fmt(s) {
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0');
};
function init() {
  Object(_icons__WEBPACK_IMPORTED_MODULE_2__["hydrateIcons"])();
}
function showScreen(name) {
  SCREENS.forEach(function (s) {
    $('screen-' + s).hidden = s !== name;
  });
  document.body.classList.toggle('overlay-open', !!name);
  document.querySelectorAll('.confetti').forEach(function (c) {
    return c.remove();
  });
}
/* ---------- painel ---------- */

var ctrlTimer;
function setHudVisible(visible) {
  $('hud').hidden = !visible;
  document.body.classList.toggle('in-level', visible);
  $('ctrl').hidden = !visible || document.body.classList.contains('touch');

  if (visible) {
    // a dica de teclas some sozinha para não cobrir o cenário
    $('ctrl').classList.remove('fade');
    clearTimeout(ctrlTimer);
    ctrlTimer = setTimeout(function () {
      return $('ctrl').classList.add('fade');
    }, 7000);
  }

  if (!visible) setActionReady(false);
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
  $('hud-contas').textContent = "".concat(contas, "/").concat(totalContas);
  $('hud-pips').innerHTML = Array.from({
    length: totalContas
  }, function (_, i) {
    return "<span class=\"pip ".concat(i < contas ? 'on' : '', "\"></span>");
  }).join('');
  $('hud-hearts').innerHTML = Array.from({
    length: maxLives
  }, function (_, i) {
    return "<span class=\"icon-slot ".concat(i < lives ? '' : 'off', "\">").concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])('heart'), "</span>");
  }).join('');
}
function resetHudCache() {
  lastHud = '';
}
var actionReady = false;
function setActionReady(ready) {
  if (ready === actionReady) return;
  actionReady = ready;
  $('t-act').classList.toggle('ready', ready);
}
var toastTimer;
function toast(text) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2200;
  var iconName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flag';
  var t = $('toast');
  t.innerHTML = "<span class=\"icon-slot\">".concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])(iconName), "</span><span></span>");
  t.lastChild.textContent = text;
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
/* ---------- entrada por toque e tela cheia ---------- */
// ação: 'left' | 'right' | 'jump' | 'act' ; down(true) ao tocar e down(false) ao soltar

function bindTouch(handler) {
  var map = {
    't-left': 'left',
    't-right': 'right',
    't-jump': 'jump',
    't-act': 'act'
  };
  Object.keys(map).forEach(function (id) {
    var b = $(id);

    var release = function release(e) {
      b.classList.remove('on');
      handler(map[id], false);
    };

    b.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      b.setPointerCapture(e.pointerId);
      b.classList.add('on');
      handler(map[id], true);
    });
    b.addEventListener('pointerup', release);
    b.addEventListener('pointercancel', release);
    b.addEventListener('lostpointercapture', release);
    b.addEventListener('contextmenu', function (e) {
      return e.preventDefault();
    });
  });
} // botão de som no painel; onToggle() troca e devolve se ficou mudo

function bindSoundButton(onToggle) {
  $('btn-sound').addEventListener('click', function () {
    return setSoundIcon(onToggle());
  });
}
function setSoundIcon(muted) {
  var b = $('btn-sound');
  b.innerHTML = "<span class=\"icon-slot\">".concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])(muted ? 'mute' : 'sound'), "</span>");
  b.setAttribute('aria-label', muted ? 'Ligar o som' : 'Desligar o som');
}
function bindPauseButton(onPause) {
  $('btn-pause').addEventListener('click', onPause);
}
function bindFullscreen() {
  var el = document.documentElement;
  var can = !!(el.requestFullscreen && document.fullscreenEnabled) && document.body.classList.contains('touch');
  var userExited = false; // se a pessoa saiu da tela cheia pelo botão, não insiste

  var landscape = function landscape() {
    return matchMedia('(orientation: landscape)').matches;
  };

  var enter = function enter() {
    if (!can || document.fullscreenElement || userExited || !landscape()) return;
    el.requestFullscreen({
      navigationUI: 'hide'
    }).then(function () {
      return screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape')["catch"](function () {});
    })["catch"](function () {});
  };

  document.querySelectorAll('[data-fs]').forEach(function (b) {
    b.hidden = !can;

    b.onclick = function () {
      if (document.fullscreenElement) {
        userExited = true;
        document.exitFullscreen();
      } else {
        userExited = false;
        el.requestFullscreen()["catch"](function () {});
      }
    };
  });
  if (!can) return; // ao girar para a horizontal tenta entrar em tela cheia; o navegador pode exigir um toque,
  // então o primeiro toque na tela (em qualquer lugar) também entra

  matchMedia('(orientation: landscape)').addEventListener('change', function (e) {
    if (e.matches) enter();else userExited = false;
  });
  document.addEventListener('touchend', function (e) {
    if (!e.target.closest('[data-fs]')) enter();
  }, {
    capture: true,
    passive: true
  });
  document.addEventListener('pointerup', function (e) {
    if (e.pointerType !== 'mouse' && !e.target.closest('[data-fs]')) enter();
  }, {
    capture: true,
    passive: true
  });
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
  // no celular o teclado virtual só abre quando a pessoa toca no campo
  if (!document.body.classList.contains('touch')) $('group-name').focus();
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

  var kindIcon = function kindIcon(l) {
    return l.math.ops.length > 1 ? l.id === levels.length ? 'trophy' : 'plusminus' : OP_ICON[l.math.ops[0]];
  };

  $('lvls').innerHTML = levels.map(function (l) {
    var p = progress[l.id];
    var lock = !unlocked(l.id);
    var stars = lock ? '' : [0, 1, 2].map(function (i) {
      return "<span class=\"icon-slot ".concat(p && i < p.stars ? '' : 'off', "\">").concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])('star'), "</span>");
    }).join('');
    var best = lock ? 'Bloqueada' : p && p.best !== null ? "<span class=\"icon-slot\">".concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])('clock'), "</span>").concat(fmt(p.best)) : 'Nova';
    return "<button class=\"lvl ".concat(lock ? 'lock' : '', " ").concat(l.id === selected ? 'sel' : '', "\" data-level=\"").concat(l.id, "\" ").concat(lock ? 'disabled' : '', ">\n            <span class=\"n\">").concat(lock ? "<span class=\"icon-slot\">".concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])('lock'), "</span>") : l.id, "</span>\n            <span class=\"op\"><span class=\"icon-slot\">").concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])(kindIcon(l)), "</span>").concat(l.name, "</span>\n            <span class=\"mini\">").concat(stars, "</span><span class=\"best\">").concat(best, "</span></button>");
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

  $('btn-play-label').textContent = "Jogar fase ".concat(selected);
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
  keys.push("<button class=\"key del\" data-k=\"del\" aria-label=\"Apagar\">".concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])('backspace'), "</button>"), "<button class=\"key ok\" data-k=\"ok\">".concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])('check'), "OK</button>"));
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
  $('math-hint').textContent = 'Resolva a conta para quebrar a senha.';
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
    _sfx__WEBPACK_IMPORTED_MODULE_1__["sfx"].correct();
    renderAnswer('good');
    $('math-hint').textContent = 'Senha certa! Abrindo o painel...';
    setTimeout(function () {
      return closeMath(true);
    }, 900);
  } else {
    mathState.tries++;
    _sfx__WEBPACK_IMPORTED_MODULE_1__["sfx"].wrong();
    renderAnswer('bad');
    $('math-hint').textContent = mathState.tries >= 2 ? Object(_math__WEBPACK_IMPORTED_MODULE_0__["hintFor"])(mathState.question) : 'Senha errada! Tente de novo.';
    mathState.answer = '';
    setTimeout(function () {
      if (!mathState.answer && !mathState.locked) renderAnswer();
    }, 600);
  }
}

function pressKey(k) {
  if (!mathState.open || mathState.locked) return;
  if (k !== 'ok') _sfx__WEBPACK_IMPORTED_MODULE_1__["sfx"].key();
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

  var row = function row(ic, label, value) {
    var cls = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    return "<div class=\"".concat(cls, "\"><span class=\"icon-slot\">").concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])(ic), "</span><span>").concat(label, "</span><b>").concat(value, "</b></div>");
  };

  $('res-title').textContent = "Fase ".concat(level.id, " completa!");
  $('res-stars').innerHTML = [0, 1, 2].map(function (i) {
    return "<span class=\"icon-slot ".concat(i < stars ? '' : 'off', "\">").concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])('star'), "</span>");
  }).join('');
  var best = bestInfo.isBest ? row('trophy', 'Melhor tempo', 'novo!', 'new') : row('trophy', 'Melhor tempo', fmt(bestInfo.previousBest));
  $('res-rows').innerHTML = row('clock', 'Tempo', fmt(time)) + row('target', 'Meta', fmt(goal)) + row('check', 'Acertos', "".concat(correct, " de ").concat(total)) + row('cross', 'Erros', errors) + row('fall', 'Quedas', falls) + best;
  var names = {
    '+': 'Soma',
    '-': 'Subtração'
  };
  $('res-ops').innerHTML = Object.keys(byOp).map(function (op) {
    var _byOp$op = byOp[op],
        ok = _byOp$op.ok,
        n = _byOp$op.n;
    return "<span><span class=\"icon-slot\">".concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])(OP_ICON[op]), "</span>").concat(names[op], "</span><div class=\"bar\"><i style=\"width:").concat(n ? Math.round(ok / n * 100) : 0, "%\"></i></div><span>").concat(ok, " de ").concat(n, "</span>");
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
      _ref7$mainIcon = _ref7.mainIcon,
      mainIcon = _ref7$mainIcon === void 0 ? 'play' : _ref7$mainIcon,
      _ref7$titleIcon = _ref7.titleIcon,
      titleIcon = _ref7$titleIcon === void 0 ? 'pause' : _ref7$titleIcon,
      _ref7$controls = _ref7.controls,
      controls = _ref7$controls === void 0 ? false : _ref7$controls,
      onMain = _ref7.onMain,
      onMenu = _ref7.onMenu;
  $('pause-ctrls').hidden = !controls;
  $('pause-icon').innerHTML = "<span class=\"icon-slot\" style=\"font-size:52px\">".concat(Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])(titleIcon), "</span>");
  $('pause-title-text').textContent = title;
  $('pause-text').textContent = text;
  $('pause-main-label').textContent = mainLabel;
  $('pause-main').firstElementChild.innerHTML = Object(_icons__WEBPACK_IMPORTED_MODULE_2__["icon"])(mainIcon);
  $('pause-main').onclick = onMain;
  $('pause-menu').onclick = onMenu;
  showScreen('pause');
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map