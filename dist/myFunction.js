/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myArr"] = factory();
	else
		root["myArr"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Array/my_arr_methods.js":
/*!*************************************!*\
  !*** ./src/Array/my_arr_methods.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\nfunction map(array,fn) {\r\n    const arr=[]\r\n    for(let index=0;index<array.length;index++){\r\n        const item=array[index]\r\n        const result=fn(item,index)\r\n        arr.push(result)\r\n    }\r\n    return arr\r\n}\r\nfunction reduce(array,fn,init) {\r\n    let result=init\r\n    for (let index=0;index<array.length;index++){\r\n        const item=array[index]\r\n        result=fn(result,item,index)\r\n    }\r\n    return result\r\n}\r\nfunction filter (array,fn) {\r\n    const arr=[]\r\n    for(let index=0;index<array.length;index++){\r\n        const item=array[index]\r\n        const result=fn(item,index)\r\n        result?arr.push(item):''\r\n    }\r\n    return arr\r\n}\r\nfunction find (array,fn) {\r\n    let result=''\r\n    for (let index=0;index<array.length;index++){\r\n        const item = array[index]\r\n        result=fn(item,index)\r\n        if(result){\r\n           return item\r\n        }\r\n    }\r\n    return undefined\r\n}\r\nfunction findIndex(fn) {\r\n    let result=''\r\n    for (let index=0;index<findIndex.length;index++){\r\n        const item = findIndex[index]\r\n        result=fn(item,index)\r\n        if(result){\r\n            return index\r\n        }\r\n    }\r\n    return -1\r\n}\r\nfunction every(fn) {\r\n  let result = true\r\n    for (let index=0;index<every.length;index++){\r\n        const item =every[index]\r\n        result=result&&fn(item,index)\r\n    }\r\n    return result\r\n}\r\nfunction some(fn) {\r\n    let result = false\r\n    for (let index=0;index<some.length;index++){\r\n        const item =some[index]\r\n        result=result||fn(item,index)\r\n    }\r\n    return result\r\n}\r\n\r\n\n\n//# sourceURL=webpack://myArr/./src/Array/my_arr_methods.js?");

/***/ }),

/***/ "./src/function/Debounce.js":
/*!**********************************!*\
  !*** ./src/function/Debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n//函数防抖\r\nfunction debounce(fn,delayTime) {\r\n\r\n    return function (event) {\r\n        if(fn.hasOwnProperty('timer')){\r\n            clearTimeout(fn.timer)\r\n        }\r\n        fn.timer=setTimeout(()=>{\r\n            fn.call(this,event)\r\n            delete fn.timer\r\n        },delayTime)\r\n    }\r\n}\n\n//# sourceURL=webpack://myArr/./src/function/Debounce.js?");

/***/ }),

/***/ "./src/function/Throttle.js":
/*!**********************************!*\
  !*** ./src/function/Throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n\r\nfunction throttle(fn,delayTime){\r\n    let pre=0;\r\n    //暴露给事件的是返回的函数不是fn，fn没有event参数\r\n    return function (event) {\r\n       const current=Date.now()\r\n       if(current-pre>delayTime){\r\n           fn.call(this,event)\r\n           pre=current\r\n       }\r\n   }\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/function/Throttle.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\nfunction apply (fn,obj,args) {\r\n    if(obj==null||obj==undefined){\r\n        obj=window\r\n    }\r\n    obj.fn=fn\r\n    let result=obj.fn(...args)\r\n    delete obj.fn\r\n    return result\r\n}\n\n//# sourceURL=webpack://myArr/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\nfunction bind(fn,obj,...args) {\r\n    return (...args2)=>{\r\n        if(obj==null||obj==undefined){\r\n            obj=window\r\n        }\r\n        obj.fn=fn\r\n        let result=obj.fn(...args,...args2)\r\n        delete obj.fn\r\n        return result\r\n    }\r\n}\n\n//# sourceURL=webpack://myArr/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\nfunction call(fn,obj,...args) {\r\n    //给对象添加一个方法，为原函数\r\n    if(obj==null||obj==undefined){\r\n        obj=window\r\n    }\r\n    obj.fn=fn\r\n    const result=obj.fn(...args)\r\n    delete obj.fn\r\n    return result\r\n}\r\n\r\n\n\n//# sourceURL=webpack://myArr/./src/function/call.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_0__.call),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_1__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_Throttle__WEBPACK_IMPORTED_MODULE_3__.throttle),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_Debounce__WEBPACK_IMPORTED_MODULE_4__.debounce),\n/* harmony export */   \"map\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.map),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.filter),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.reduce),\n/* harmony export */   \"find\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.some)\n/* harmony export */ });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_Throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/Throttle */ \"./src/function/Throttle.js\");\n/* harmony import */ var _function_Debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/Debounce */ \"./src/function/Debounce.js\");\n/* harmony import */ var _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array/my_arr_methods */ \"./src/Array/my_arr_methods.js\");\n/*\r\n库的入口，向外暴露工具函数\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://myArr/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});