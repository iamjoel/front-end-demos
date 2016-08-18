/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************!*\
  !*** ./demos/just-test/loader.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./style.css */ 1);
	document.querySelector('#main').innerHTML = __webpack_require__(/*! ./demo.html */ 6);
	__webpack_require__(/*! ./index.js */ 7)

/***/ },
/* 1 */
/*!***********************************!*\
  !*** ./demos/just-test/style.css ***!
  \***********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/*!*********************************!*\
  !*** ./demos/just-test/npm.png ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "91a4d957172aef7e29562aa66e6009e2.png";

/***/ },
/* 5 */,
/* 6 */
/*!***********************************!*\
  !*** ./demos/just-test/demo.html ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>aaa</div><img src=\"" + __webpack_require__(/*! ./npm.png */ 4) + "\">";

/***/ },
/* 7 */
/*!**********************************!*\
  !*** ./demos/just-test/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	console.log('hahaha~');

/***/ }
/******/ ]);
//# sourceMappingURL=just-test.js.map