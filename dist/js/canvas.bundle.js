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

/***/ "./src/img/spriteJumpLeft.png":
/*!************************************!*\
  !*** ./src/img/spriteJumpLeft.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "41c86b43a90d4fe47eb7ebd2247a5086.png");

/***/ }),

/***/ "./src/img/spriteJumpRight.png":
/*!*************************************!*\
  !*** ./src/img/spriteJumpRight.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec4a265a07c8bfcda90860583beca5cf.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6d151f9eb7cb3836bfa0b24cc034bd9b.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31aa06863946ff535196218666ddb8e3.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d9b9a811cf391bb8ae3899e9aacaf5f3.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "30fae9fa901990190a2889cb348cc6f0.png");

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
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteJumpRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteJumpRight.png */ "./src/img/spriteJumpRight.png");
/* harmony import */ var _img_spriteJumpLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/spriteJumpLeft.png */ "./src/img/spriteJumpLeft.png");
/* harmony import */ var _img_banner_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/banner.png */ "./src/img/banner.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//sprites









 //Tela

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.4; //class de Objetos

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.points = 0;
    this.callCalculator;
    this.speedX = 8;
    this.speedY = -24;
    this.position = {
      x: 100,
      y: 324
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 80;
    this.height = 80;
    this.image = creatImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.frame = 0;
    this.sprite = {
      stand: {
        right: creatImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        left: creatImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 80,
        range: 99
      },
      run: {
        right: creatImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: creatImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 80,
        range: 79
      },
      jump: {
        right: creatImage(_img_spriteJumpRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: creatImage(_img_spriteJumpLeft_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        cropWidth: 80,
        range: 34
      }
    };
    this.currentSprite = this.sprite.stand.right;
    this.currentCropWidth = 80;
    this.jump;
    this.doubleJump;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frame, 0, 80, 80, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frame++;

      if (this.frame > this.sprite.stand.range && (this.currentSprite === this.sprite.stand.right || this.currentSprite === this.sprite.stand.left)) {
        this.frame = 0;
      } else if (this.frame > this.sprite.run.range && (this.currentSprite === this.sprite.run.right || this.currentSprite === this.sprite.run.left)) {
        this.frame = 0;
      } else if (this.frame > this.sprite.jump.range && (this.currentSprite === this.sprite.jump.right || this.currentSprite === this.sprite.jump.left)) {
        this.frame = 0;
      }

      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }

      if (this.callCalculator == true && keys.select.pressed == true) {
        calculator();
      }

      if (player.points == 8) {
        console.log("You win");
        showElapsedTime();
        player.points = 9;
      }

      this.jump = false;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}(); //função que cria imagens


function creatImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} //criando imagens


var platformImage = creatImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var miniPlatformImage = creatImage(_img_miniPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var backgroundImage = creatImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var bannerImage = creatImage(_img_banner_png__WEBPACK_IMPORTED_MODULE_9__["default"]); //criando player

var player = new Player(); //criando plataformas

var numPlatforms = 3;
var numMiniPlatforms = 4;
var numBanner = 1;
var initialX = -1;
var platforms = [];
var miniPlatforms = [];
var bannerList = [];

function createPlatforms(listObject, x, numObject) {
  for (var i = 0; i < numObject; i++) {
    listObject.push(new Platform({
      x: x + i * (platformImage.width - 3),
      y: 452,
      image: platformImage
    }));
  }
}

function createMiniPlatforms(listObject, x, y, numObject) {
  for (var i = 0; i < numObject; i++) {
    listObject.push(new GenericObject({
      x: x + i * (miniPlatformImage.width - 16),
      y: y,
      image: miniPlatformImage
    }));
  }
}

function createBanners(listObject, x, y) {
  for (var i = 0; i < 1; i++) {
    listObject.push(new GenericObject({
      x: x,
      y: y,
      image: bannerImage
    }));
  }
} //plataformas


createPlatforms(platforms, -1, 3);
createPlatforms(platforms, 2000, 2);
createPlatforms(platforms, 3800, 2);
createPlatforms(platforms, 5600, 2);
createPlatforms(platforms, 7700, 2);
createPlatforms(platforms, 10230, 2); //mini plataformas

createMiniPlatforms(miniPlatforms, 500, 300, 4);
createMiniPlatforms(miniPlatforms, 800, 400, 4);
createMiniPlatforms(miniPlatforms, 1000, 300, 4);
createMiniPlatforms(miniPlatforms, 1300, 200, 4);
createMiniPlatforms(miniPlatforms, 2000, 100, 4);
createMiniPlatforms(miniPlatforms, 2300, 160, 4);
createMiniPlatforms(miniPlatforms, 2300, 400, 4);
createMiniPlatforms(miniPlatforms, 2600, 300, 4);
createMiniPlatforms(miniPlatforms, 3500, 300, 4);
createMiniPlatforms(miniPlatforms, 4200, 300, 4);
createMiniPlatforms(miniPlatforms, 4200, 100, 4);
createMiniPlatforms(miniPlatforms, 5050, 400, 2);
createMiniPlatforms(miniPlatforms, 5200, 300, 2);
createMiniPlatforms(miniPlatforms, 5350, 200, 2);
createMiniPlatforms(miniPlatforms, 5350, 200, 2);
createMiniPlatforms(miniPlatforms, 5550, 100, 3);
createMiniPlatforms(miniPlatforms, 5800, 200, 1);
createMiniPlatforms(miniPlatforms, 6000, 200, 1);
createMiniPlatforms(miniPlatforms, 6200, 200, 1);
createMiniPlatforms(miniPlatforms, 6650, 200, 4);
createMiniPlatforms(miniPlatforms, 7100, 200, 2);
createMiniPlatforms(miniPlatforms, 7300, 200, 2);
createMiniPlatforms(miniPlatforms, 7500, 200, 2);
createMiniPlatforms(miniPlatforms, 8600, 400, 2);
createMiniPlatforms(miniPlatforms, 8800, 300, 2);
createMiniPlatforms(miniPlatforms, 9000, 200, 2);
createMiniPlatforms(miniPlatforms, 8800, 100, 2);
createMiniPlatforms(miniPlatforms, 8600, 80, 3);
createMiniPlatforms(miniPlatforms, 9300, 200, 2);
createMiniPlatforms(miniPlatforms, 9600, 200, 2);
createMiniPlatforms(miniPlatforms, 9900, 200, 2);
createMiniPlatforms(miniPlatforms, 10150, 200, 4); //banners

createBanners(bannerList, 580, 240);
createBanners(bannerList, 1380, 144);
createBanners(bannerList, 2024, 44);
createBanners(bannerList, 4280, 42);
createBanners(bannerList, 5580, 44);
createBanners(bannerList, 6730, 146);
createBanners(bannerList, 8640, 20);
createBanners(bannerList, 10230, 144); //criando o objeto

var genericObject = [new GenericObject({
  x: 0,
  y: 0,
  image: backgroundImage
})];
var scrollOffSet = 0;
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  jump: {
    pressed: false
  },
  select: {
    pressed: false
  }
};
var lifePoint = 5; //função que recomeça o jogo

function init() {
  lifePoint -= 1;
  platformImage = creatImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  miniPlatformImage = creatImage(_img_miniPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  backgroundImage = creatImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  bannerImage = creatImage(_img_banner_png__WEBPACK_IMPORTED_MODULE_9__["default"]); //criando player

  player = new Player(); //criando plataformas

  var numPlatforms = 3;
  var numMiniPlatforms = 4;
  var numBanner = 1;
  initialX = -1;
  platforms = [];
  miniPlatforms = [];
  bannerList = [];

  function createPlatforms(listObject, x, numObject) {
    for (var i = 0; i < numObject; i++) {
      listObject.push(new Platform({
        x: x + i * (platformImage.width - 3),
        y: 452,
        image: platformImage
      }));
    }
  }

  function createMiniPlatforms(listObject, x, y, numObject) {
    for (var i = 0; i < numObject; i++) {
      listObject.push(new GenericObject({
        x: x + i * (miniPlatformImage.width - 16),
        y: y,
        image: miniPlatformImage
      }));
    }
  }

  function createBanners(listObject, x, y) {
    for (var i = 0; i < 1; i++) {
      listObject.push(new GenericObject({
        x: x,
        y: y,
        image: bannerImage
      }));
    }
  } //plataformas


  createPlatforms(platforms, -1, 3);
  createPlatforms(platforms, 2000, 2);
  createPlatforms(platforms, 3800, 2);
  createPlatforms(platforms, 5600, 2);
  createPlatforms(platforms, 7700, 2);
  createPlatforms(platforms, 10230, 2); //mini plataformas

  createMiniPlatforms(miniPlatforms, 500, 300, 4);
  createMiniPlatforms(miniPlatforms, 800, 400, 4);
  createMiniPlatforms(miniPlatforms, 1000, 300, 4);
  createMiniPlatforms(miniPlatforms, 1300, 200, 4);
  createMiniPlatforms(miniPlatforms, 2000, 100, 4);
  createMiniPlatforms(miniPlatforms, 2300, 160, 4);
  createMiniPlatforms(miniPlatforms, 2300, 400, 4);
  createMiniPlatforms(miniPlatforms, 2600, 300, 4);
  createMiniPlatforms(miniPlatforms, 3500, 300, 4);
  createMiniPlatforms(miniPlatforms, 4200, 300, 4);
  createMiniPlatforms(miniPlatforms, 4200, 100, 4);
  createMiniPlatforms(miniPlatforms, 5050, 400, 2);
  createMiniPlatforms(miniPlatforms, 5200, 300, 2);
  createMiniPlatforms(miniPlatforms, 5350, 200, 2);
  createMiniPlatforms(miniPlatforms, 5350, 200, 2);
  createMiniPlatforms(miniPlatforms, 5550, 100, 3);
  createMiniPlatforms(miniPlatforms, 5800, 200, 1);
  createMiniPlatforms(miniPlatforms, 6000, 200, 1);
  createMiniPlatforms(miniPlatforms, 6200, 200, 1);
  createMiniPlatforms(miniPlatforms, 6650, 200, 4);
  createMiniPlatforms(miniPlatforms, 7100, 200, 2);
  createMiniPlatforms(miniPlatforms, 7300, 200, 2);
  createMiniPlatforms(miniPlatforms, 7500, 200, 2);
  createMiniPlatforms(miniPlatforms, 8600, 400, 2);
  createMiniPlatforms(miniPlatforms, 8800, 300, 2);
  createMiniPlatforms(miniPlatforms, 9000, 200, 2);
  createMiniPlatforms(miniPlatforms, 8800, 100, 2);
  createMiniPlatforms(miniPlatforms, 8600, 80, 3);
  createMiniPlatforms(miniPlatforms, 9300, 200, 2);
  createMiniPlatforms(miniPlatforms, 9600, 200, 2);
  createMiniPlatforms(miniPlatforms, 9900, 200, 2);
  createMiniPlatforms(miniPlatforms, 10150, 200, 4); //banners

  createBanners(bannerList, 580, 240);
  createBanners(bannerList, 1380, 144);
  createBanners(bannerList, 2024, 15);
  createBanners(bannerList, 4280, 42);
  createBanners(bannerList, 5580, 44);
  createBanners(bannerList, 6730, 146);
  createBanners(bannerList, 8640, 20);
  createBanners(bannerList, 10230, 144); //criando o objeto

  genericObject = [new GenericObject({
    x: 0,
    y: 0,
    image: backgroundImage
  })];
  scrollOffSet = 0;
}

startTimer(); //animação

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  bannerList.forEach(function (bannerObject) {
    bannerObject.draw();
  });
  miniPlatforms.forEach(function (mPlatform) {
    mPlatform.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (player.position.y + player.height <= 0) {
    player.velocity.y = 0;
    player.position.y = 0;
  }

  if (keys.right.pressed && player.position.x < 600) {
    player.velocity.x = player.speedX;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffSet == 0 && player.position.x > 0) {
    player.velocity.x = -player.speedX;
  } else if (keys.right.pressed && player.position.x < 600 || keys.right.pressed && scrollOffSet == 10200 && player.position.x < 10200) {
    player.velocity.x = 0;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffSet += player.speedX;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speedX;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x -= player.speedX * 0.40;
      });
      miniPlatforms.forEach(function (mPlatform) {
        mPlatform.position.x -= player.speedX;
      });
      bannerList.forEach(function (bannerObject) {
        bannerObject.position.x -= player.speedX;
      });
    } else if (keys.left.pressed && scrollOffSet > 0) {
      scrollOffSet -= player.speedX;
      platforms.forEach(function (platform) {
        platform.position.x += player.speedX;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x += player.speedX * 0.40;
      });
      miniPlatforms.forEach(function (miniPlatform) {
        miniPlatform.position.x += player.speedX;
      });
      bannerList.forEach(function (bannerObject) {
        bannerObject.position.x += player.speedX;
      });
    }
  } //verificar colisão


  platforms.forEach(function (platform) {
    var inFloor = player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width;

    if (inFloor) {
      player.velocity.y = 0;
      player.callCalculator = false;
      player.jump = true;
    }
  });
  miniPlatforms.forEach(function (miniPlatform) {
    if (player.position.y + player.height <= miniPlatform.position.y && player.position.y + player.height + player.velocity.y >= miniPlatform.position.y && player.position.x + player.width >= miniPlatform.position.x && player.position.x <= miniPlatform.position.x + miniPlatform.width) {
      player.velocity.y = 0;
      player.callCalculator = true;
      player.jump = true;
    }
  }); //movimentos das sprites

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprite.run.right) {
    player.frame = 1;
    player.currentSprite = player.sprite.run.right;
    player.range = player.sprite.run.range;
    player.currentSprite = player.sprite.run.right;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprite.run.left) {
    player.currentSprite = player.sprite.run.left;
    player.currentCropWidth = player.sprite.run.cropWidth;
    player.range = player.sprite.run.range;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprite.stand.right) {
    player.currentSprite = player.sprite.stand.right;
    player.currentCropWidth = player.sprite.stand.cropWidth;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprite.stand.left) {
    player.currentSprite = player.sprite.stand.left;
    player.currentCropWidth = player.sprite.stand.cropWidth;
    player.range = player.sprite.stand.range;
  }

  if (scrollOffSet == 500 && keys.right.pressed) {
    console.log("Condição atendida. scrollOffSet:", scrollOffSet);
    keys.right.pressed = false;
    console.log("Chamando principal()");
    calculator();
  } //condição perdeu


  if (player.position.y > canvas.height) {
    init();
    console.log(lifePoint);

    if (lifePoint == 0) {
      player.speedX = 0;
    }
  }
}

animate(); //verificar tecla

addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      if (player.jump == true) {
        player.velocity.y += player.speedY;
        player.doubleJump = true;
      } else if (player.doubleJump == true) {
        console.log("sim");
        player.velocity.y += player.speedY;
        player.doubleJump = false;
      }

      console.log('up');
      break;

    case 69:
      keys.select.pressed = true;
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      lastKey = 'left';
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      lastKey = 'right';
      break;

    case 87:
      console.log('up');
      player.velocity.y = 0;
      break;

    case 69:
      keys.select.pressed = false;
      break;
  }
});
var res = 0;
var fator1 = [];
var fator2 = [];
var operador = [];
var operacao = [];

function createOperation() {
  randomNumber();

  if (operador == "+") {
    res = parseInt(fator1) + parseInt(fator2);
  } else {
    var teste = fator1 - fator2;

    if (teste < 0) {
      var apoio = fator1;
      fator1 = fator2;
      fator2 = apoio;
    }

    res = parseInt(fator1) - parseInt(fator2);
  }

  operacao = fator1 + operador + fator2;
}

function randomNumber() {
  var numbers1 = "0123";
  var numbers2 = "123456789";
  var operator = "+-";
  var i = 0;
  var randomNumber1 = Math.floor(Math.random() * numbers1.length);
  fator1 += numbers1.substring(randomNumber1, randomNumber1 + 1);
  randomNumber1 = Math.floor(Math.random() * numbers2.length);
  fator1 += numbers2.substring(randomNumber1, randomNumber1 + 1);
  var randomNumberO = Math.floor(Math.random() * operator.length);
  operador += operator.substring(randomNumberO, randomNumberO + 1);
  var randomNumber2 = Math.floor(Math.random() * numbers1.length);
  fator2 += numbers1.substring(randomNumber2, randomNumber2 + 1);
  randomNumber2 = Math.floor(Math.random() * numbers2.length);
  fator2 += numbers2.substring(randomNumber2, randomNumber2 + 1);
  console.log(fator1, fator2, operador);
}

function alertFunction() {
  var resposta = prompt("Digite o resultado da opera\xE7\xE3o: ".concat(operacao));

  if (resposta == res) {
    fator1 = [];
    fator2 = [];
    operador = [];
    operacao = [];
    player.callCalculator = false;
    keys.select.pressed = false;
    player.points++;
    console.log(player.points);
    return 0;
  } else {
    alertFunction();
  }
}

function calculator() {
  createOperation();
  alertFunction();
}

var startTime; // Variável para armazenar o tempo de início do jogo
// Função para iniciar o tempo

function startTimer() {
  startTime = Date.now(); // Armazena o tempo atual
} // Função para calcular e mostrar o tempo decorrido no console


function showElapsedTime() {
  var elapsedTime = Date.now() - startTime; // Calcula o tempo decorrido

  var seconds = Math.floor(elapsedTime / 1000); // Converte milissegundos para segundos

  console.log("Tempo decorrido: ".concat(seconds, " segundos"));
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map