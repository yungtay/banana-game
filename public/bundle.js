/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Banana.ts":
/*!***********************!*\
  !*** ./src/Banana.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Banana)\n/* harmony export */ });\n/* harmony import */ var _Fruits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fruits */ \"./src/Fruits.ts\");\n\nconst banana = '../public/sprites/banana.png';\nclass Banana extends _Fruits__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, canvas) {\n        super(context, canvas, banana);\n    }\n    effectInCollision() {\n        console.log('banana');\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Banana.ts?");

/***/ }),

/***/ "./src/Drawable.ts":
/*!*************************!*\
  !*** ./src/Drawable.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drawable)\n/* harmony export */ });\nclass Drawable {\n    constructor(context, canvas, imageSrc) {\n        this.canvas = canvas;\n        this.context = context;\n        this.x = Math.floor(Math.random() * canvas.width);\n        this.y = -67;\n        this.image = new Image();\n        this.src = imageSrc;\n    }\n    move() {\n        const speed = 5;\n        this.y += speed;\n    }\n    draw() {\n        this.image.src = this.src;\n        this.context.drawImage(this.image, this.x, this.y, 61, 67);\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Drawable.ts?");

/***/ }),

/***/ "./src/Fruits.ts":
/*!***********************!*\
  !*** ./src/Fruits.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fruits)\n/* harmony export */ });\n/* harmony import */ var _Drawable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawable */ \"./src/Drawable.ts\");\n\nclass Fruits extends _Drawable__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, canvas, imageSrc) {\n        super(context, canvas, imageSrc);\n    }\n    updateState(game) {\n        this.move();\n        this.outOfBonds(game);\n        if (game.player.checkCollision(this)) {\n            this.effectInCollision();\n            game.delete(this);\n        }\n    }\n    outOfBonds(game) {\n        if (this.y > this.canvas.height) {\n            game.delete(this);\n        }\n    }\n    effectInCollision() { }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Fruits.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n/* harmony import */ var _Banana__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banana */ \"./src/Banana.ts\");\n/* harmony import */ var _Orange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Orange */ \"./src/Orange.ts\");\n/* harmony import */ var _RedApple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RedApple */ \"./src/RedApple.ts\");\n/* harmony import */ var _Strawberry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strawberry */ \"./src/Strawberry.ts\");\n/* harmony import */ var _Watermelon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Watermelon */ \"./src/Watermelon.ts\");\n\n\n\n\n\n\nclass Game {\n    constructor(screenDimensions, canvas) {\n        this.canvas = canvas;\n        this.canvas.width = screenDimensions.width;\n        this.canvas.height = screenDimensions.height;\n        this.context = this.canvas.getContext('2d');\n    }\n    start() {\n        this.reset();\n        this.startIntervals();\n    }\n    startIntervals() {\n        this.stopIntervals();\n        const { setInterval } = window;\n        this.intervalsIds = [\n            setInterval(() => this.gameLoop(), 1000 / 60),\n            setInterval(() => this.spawnFruits(), 1000)\n        ];\n    }\n    render() {\n        this.clearScreen();\n        this.player.draw();\n        this.drawables.forEach((drawable) => drawable.draw());\n    }\n    updateState() {\n        this.drawables.forEach((drawable) => drawable.updateState(this));\n    }\n    gameLoop() {\n        this.render();\n        this.updateState();\n    }\n    move(event) {\n        this.player.move(event);\n    }\n    spawnFruits() {\n        this.drawables.push(this.chooseFruit());\n    }\n    delete(drawable) {\n        this.drawables = this.drawables.filter((d) => d !== drawable);\n    }\n    end() {\n        alert(\"Pegou\");\n    }\n    stopIntervals() {\n        var _a;\n        (_a = this.intervalsIds) === null || _a === void 0 ? void 0 : _a.forEach(clearInterval);\n    }\n    clearScreen() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n    reset() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.default(this.context, this.canvas);\n        this.player.draw();\n        this.drawables = [];\n        this.fruits = [_Banana__WEBPACK_IMPORTED_MODULE_1__.default, _Orange__WEBPACK_IMPORTED_MODULE_2__.default, _RedApple__WEBPACK_IMPORTED_MODULE_3__.default, _Strawberry__WEBPACK_IMPORTED_MODULE_4__.default, _Watermelon__WEBPACK_IMPORTED_MODULE_5__.default];\n    }\n    chooseFruit() {\n        var rand = Math.floor(Math.random() * this.fruits.length);\n        return new this.fruits[rand](this.context, this.canvas);\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Game.ts?");

/***/ }),

/***/ "./src/Orange.ts":
/*!***********************!*\
  !*** ./src/Orange.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Orange)\n/* harmony export */ });\n/* harmony import */ var _Fruits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fruits */ \"./src/Fruits.ts\");\n\nconst orange = '../public/sprites/orange.png';\nclass Orange extends _Fruits__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, canvas) {\n        super(context, canvas, orange);\n    }\n    effectInCollision() {\n        console.log('orange');\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Orange.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nconst alien = '../public/sprites/alien.png';\nclass Player {\n    constructor(context, canvas) {\n        this.canvas = canvas;\n        this.context = context;\n        this.x = canvas.width / 2;\n        this.y = canvas.height / 2;\n        this.image = new Image();\n    }\n    draw() {\n        this.image.src = alien;\n        this.context.drawImage(this.image, this.x, this.y, 64, 97);\n    }\n    move(event) {\n        const step = 50;\n        if (event.key === \"ArrowRight\") {\n            if (this.x + 64 + step < this.canvas.width) {\n                this.x += step;\n            }\n            else {\n                this.x = this.canvas.width - 64;\n            }\n        }\n        if (event.key === \"ArrowLeft\") {\n            if (this.x - step > 0) {\n                this.x -= step;\n            }\n            else {\n                this.x = 0;\n            }\n        }\n    }\n    checkCollision(fruit) {\n        const collision = fruit.y < this.y + 97 / 2 &&\n            fruit.y > this.y - 97 / 2 &&\n            fruit.x < this.x + 64 / 2 &&\n            fruit.x > this.x - 64 / 2;\n        return collision;\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Player.ts?");

/***/ }),

/***/ "./src/RedApple.ts":
/*!*************************!*\
  !*** ./src/RedApple.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RedApple)\n/* harmony export */ });\n/* harmony import */ var _Fruits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fruits */ \"./src/Fruits.ts\");\n\nconst redApple = '../public/sprites/red-apple.png';\nclass RedApple extends _Fruits__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, canvas) {\n        super(context, canvas, redApple);\n    }\n    effectInCollision() {\n        console.log('RedApple');\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/RedApple.ts?");

/***/ }),

/***/ "./src/Strawberry.ts":
/*!***************************!*\
  !*** ./src/Strawberry.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Strawberry)\n/* harmony export */ });\n/* harmony import */ var _Fruits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fruits */ \"./src/Fruits.ts\");\n\nconst strawberry = '../public/sprites/strawberry.png';\nclass Strawberry extends _Fruits__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, canvas) {\n        super(context, canvas, strawberry);\n    }\n    effectInCollision() {\n        console.log('Strawberry');\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Strawberry.ts?");

/***/ }),

/***/ "./src/Watermelon.ts":
/*!***************************!*\
  !*** ./src/Watermelon.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Watermelon)\n/* harmony export */ });\n/* harmony import */ var _Fruits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fruits */ \"./src/Fruits.ts\");\n\nconst watermelon = '../public/sprites/watermelon.png';\nclass Watermelon extends _Fruits__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, canvas) {\n        super(context, canvas, watermelon);\n    }\n    effectInCollision() {\n        console.log('Watermelon');\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Watermelon.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst screenDimensions = { width: window.innerWidth, height: window.innerHeight };\nconst canvas = document.querySelector('#canvas');\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__.default(screenDimensions, canvas);\ngame.start();\n(['keydown', 'keyup']).forEach((state) => {\n    canvas.addEventListener(state, (event) => {\n        game.move(event);\n    });\n});\n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;