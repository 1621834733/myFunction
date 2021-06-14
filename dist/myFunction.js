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

/***/ "./src/Array/chunk.js":
/*!****************************!*\
  !*** ./src/Array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n//一维数组返回二维数组，长度自定义\r\nfunction chunk(array,length=1) {\r\n    let arr=[];\r\n    let arrSmall=[];\r\n    length=Math.floor(length)\r\n    length<1?length=1:length\r\n    length>array.length?length=array.length:length\r\n    array.forEach((item)=>{\r\n        if(arrSmall.length===0){\r\n            arr.push(arrSmall)\r\n        }\r\n        arrSmall.push(item)\r\n        if(arrSmall.length===length){\r\n               arrSmall=[]\r\n        }\r\n    })\r\n    return arr\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/Array/chunk.js?");

/***/ }),

/***/ "./src/Array/different.js":
/*!********************************!*\
  !*** ./src/Array/different.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"different\": () => (/* binding */ different),\n/* harmony export */   \"differences\": () => (/* binding */ differences)\n/* harmony export */ });\n// 返回两个数组里不同的部分\r\nfunction different(array1,array2) {\r\n    if(array1.length===0){\r\n        return array2\r\n    }\r\n    if(array2.length===0){\r\n        return array1\r\n    }\r\n    let arr=[]\r\n    function  add(arr1,arr2) {\r\n        let arr=[]\r\n        let has = false\r\n        for (let i = 0; i <arr1.length ; i++) {\r\n            has = false\r\n            for (let j = 0; j <arr2.length ; j++) {\r\n                if(arr2[j]===arr1[i]){\r\n                    has = true\r\n                    break\r\n                }\r\n            }\r\n            if(!has){\r\n                arr.push(arr1[i])\r\n            }\r\n        }\r\n        return arr\r\n    }\r\n    let arr1=add(array1,array2)\r\n    let arr2=add(array2,array1)\r\n    let arr3=arr.concat(arr1,arr2)\r\n    return arr3\r\n}\r\n\r\n//返回第一个数组与其他数组不同的地方\r\nfunction differences(...array) {\r\n    let arr=[...array]\r\n    let result=arr[0].filter((item)=>{\r\n        let has =false\r\n        for(let i=1;i<arr.length;i++){\r\n          if(arr[i].indexOf(item)!==-1){\r\n              has = true\r\n              break\r\n          }\r\n        }\r\n        if(!has){\r\n            return true\r\n        }else {\r\n            return false\r\n        }\r\n    })\r\n    return result\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/Array/different.js?");

/***/ }),

/***/ "./src/Array/drop.js":
/*!***************************!*\
  !*** ./src/Array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n//去掉数组左边或右边指定长度的数\r\nfunction drop(array,length=1) {\r\n    let arr=[]\r\n    length>array.length?length=array.length:length\r\n    arr=array.filter((item,index)=>{\r\n        if(index<length){\r\n            return false\r\n        }else {\r\n            return true\r\n        }\r\n    })\r\n    return arr\r\n}\r\n\r\nfunction dropRight(array,length=1) {\r\n    let arr=[]\r\n    length>array.length?length=array.length:length\r\n    arr=array.filter((item,index)=>{\r\n        if(index<array.length-length){\r\n            return true\r\n        }else {\r\n            return false\r\n        }\r\n    })\r\n    return arr\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/Array/drop.js?");

/***/ }),

/***/ "./src/Array/flattern.js":
/*!*******************************!*\
  !*** ./src/Array/flattern.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flattern1\": () => (/* binding */ flattern1),\n/* harmony export */   \"flattern2\": () => (/* binding */ flattern2),\n/* harmony export */   \"flattern3\": () => (/* binding */ flattern3)\n/* harmony export */ });\nfunction flattern1(array) {\r\n    //三点运算符，只有一维数组会被三点运算符拆开，其他都会递归\r\n    let arr=[]\r\n    array.forEach((item)=>{\r\n        if(Array.isArray(item)){\r\n            arr.push(...flattern1(item))\r\n        }else {\r\n            arr.push(item)\r\n        }\r\n    })\r\n    return arr;\r\n}\r\nfunction flattern2(array) {\r\n//reduce+concat方法，concat会将一维数组拆开，利用这个特性和递归就能实现扁平化\r\n    return array.reduce((adder,item)=>{\r\n     return adder.concat(Array.isArray(item)?flattern2(item):item)\r\n    },[])\r\n}\r\nfunction flattern3(array) {\r\n//转为字符串再转为数字\r\n    return array.toString().split(',').map((item)=>{\r\n                    return Number(item)\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/Array/flattern.js?");

/***/ }),

/***/ "./src/Array/merge.js":
/*!****************************!*\
  !*** ./src/Array/merge.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"merge\": () => (/* binding */ merge)\n/* harmony export */ });\n//合并数组，不同数组之间相同的数去掉\r\nfunction merge(...arrays) {\r\n        let arr = [...arrays]\r\n        let result = [...arr[0]]\r\n        if (arr.length === 0) {\r\n            return result\r\n        }\r\n        for (let i = 1; i < arr.length; i++) {\r\n            arr[i].forEach((item) => {\r\n                if (result.indexOf(item) === -1) {\r\n                    result.push(item)\r\n                }\r\n            })\r\n        }\r\n        return result\r\n    }\r\n\n\n//# sourceURL=webpack://myArr/./src/Array/merge.js?");

/***/ }),

/***/ "./src/Array/my_arr_methods.js":
/*!*************************************!*\
  !*** ./src/Array/my_arr_methods.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some),\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3),\n/* harmony export */   \"unique4\": () => (/* binding */ unique4),\n/* harmony export */   \"concat\": () => (/* binding */ concat),\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\nfunction map(array, fn) {\r\n    const arr = []\r\n    for (let index = 0; index < array.length; index++) {\r\n        const item = array[index]\r\n        const result = fn(item, index)\r\n        arr.push(result)\r\n    }\r\n    return arr\r\n}\r\nfunction reduce(array,fn,init) {\r\n    let result=init\r\n    for (let index=0;index<array.length;index++){\r\n        const item=array[index]\r\n        result=fn(result,item,index)\r\n    }\r\n    return result\r\n}\r\nfunction filter (array,fn) {\r\n    const arr=[]\r\n    for(let index=0;index<array.length;index++){\r\n        const item=array[index]\r\n        const result=fn(item,index)\r\n        result?arr.push(item):''\r\n    }\r\n    return arr\r\n}\r\nfunction find (array,fn) {\r\n    let result=''\r\n    for (let index=0;index<array.length;index++){\r\n        const item = array[index]\r\n        result=fn(item,index)\r\n        if(result){\r\n           return item\r\n        }\r\n    }\r\n    return undefined\r\n}\r\nfunction findIndex(fn) {\r\n    let result=''\r\n    for (let index=0;index<findIndex.length;index++){\r\n        const item = findIndex[index]\r\n        result=fn(item,index)\r\n        if(result){\r\n            return index\r\n        }\r\n    }\r\n    return -1\r\n}\r\nfunction every(fn) {\r\n  let result = true\r\n    for (let index=0;index<every.length;index++){\r\n        const item =every[index]\r\n        result=result&&fn(item,index)\r\n    }\r\n    return result\r\n}\r\nfunction some(fn) {\r\n    let result = false\r\n    for (let index=0;index<some.length;index++){\r\n        const item =some[index]\r\n        result=result||fn(item,index)\r\n    }\r\n    return result\r\n}\r\nfunction unique1(array) {\r\n    //实现简单，缺点:效率低，需要两个循环遍历\r\n    let arr=[];\r\n    array.forEach((item)=>{\r\n        if(arr.indexOf(item)===-1){\r\n            arr.push(item)\r\n        }\r\n    })\r\n    return arr;\r\n}\r\nfunction unique2(array) {\r\n    //效率高，缺点:内存占用更高\r\n   let arr=[]\r\n    let obj={}\r\n    array.forEach((item)=>{\r\n        if(!obj.hasOwnProperty(item)){\r\n            arr.push(item)\r\n            obj[item]=true\r\n        }\r\n    })\r\n    return arr\r\n}\r\nfunction unique3(array) {\r\n    //简洁\r\n    //new Set返回一个Set对象，通过三点运算符可以取出每一项\r\n   return [...new Set(array)]\r\n}\r\nfunction unique4(array) {\r\n//不调用js方法\r\n    let arr=[]\r\n    arr[0]=array[0]\r\n    let has =false\r\n    for(let i=0;i<array.length;i++){\r\n        for(let j=0;j<arr.length;j++){\r\n            if(array[i]==arr[j]){\r\n                has=true\r\n                break\r\n            }\r\n        }\r\n        if(!has){\r\n            arr[arr.length]=array[i]\r\n        }\r\n        has=false\r\n    }\r\n    return arr\r\n}\r\nfunction concat(array,...args){\r\n    let arr=[...array]\r\n    args.forEach((item)=>{\r\n        if(Array.isArray(item)){\r\n            arr.push(...item)\r\n        }else {\r\n            arr.push(item)\r\n        }\r\n    })\r\n    return arr\r\n}\r\nfunction slice(array,begin=0,end=array.length) {\r\n    const arr=[]\r\n    if(array.length===0){\r\n        return arr\r\n    }\r\n    begin<0?begin=0:begin\r\n    end>array.length?end=array.length:end\r\n    for(let index=begin;index<end;index++){\r\n        arr.push(array[index])\r\n    }\r\n    return arr\r\n}\r\n\r\n\n\n//# sourceURL=webpack://myArr/./src/Array/my_arr_methods.js?");

/***/ }),

/***/ "./src/Array/pull.js":
/*!***************************!*\
  !*** ./src/Array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull)\n/* harmony export */ });\n//删除与给定数值相同的数组元素，返回被删除的元素\r\nfunction pull(array,...value){\r\n    let result=[]\r\n    for(let i=0;i<array.length;i++){\r\n       if(value.indexOf(array[i])!==-1){\r\n           result.push(array[i])\r\n           array.splice(i,1)\r\n           i--\r\n       }\r\n    }\r\n   return result\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/Array/pull.js?");

/***/ }),

/***/ "./src/Data and Algorithm/Queue.js":
/*!*****************************************!*\
  !*** ./src/Data and Algorithm/Queue.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Queue\": () => (/* binding */ Queue),\n/* harmony export */   \"priorityQueue\": () => (/* binding */ priorityQueue)\n/* harmony export */ });\n//自定义队列\r\n/*\r\n入队列：enqueue()\r\n出队列：outqueue()\r\n查看队列头：front()\r\n查看队列长度:size()\r\n查看队列是否为空：isEmpty()\r\n*/\r\nfunction Queue(){\r\n    //用于保存数据的数组\r\n    const arr = []\r\n    //不要用原型来定义方法，因为会导致不同实例共用数据\r\n    this.enQueue = function (element) {\r\n        arr.push(element)\r\n    }\r\n    //出栈pop\r\n    this.outQueue = function () {\r\n        return arr.shift()\r\n    }\r\n    //查看栈顶\r\n    this.front = function () {\r\n        return arr[0]\r\n    }\r\n    //栈的大小\r\n    this.size = function () {\r\n        return arr.length\r\n    }\r\n    //栈是否为空\r\n    this.isEmpty = function () {\r\n        return arr.length === 0\r\n    }\r\n}\r\n//自定义优先级队列\r\nfunction priorityQueue() {\r\n    //用于保存数据的数组\r\n    const arr = []\r\n    function QueueElement(data,priority) {\r\n        this.data=data\r\n        this.priority=priority\r\n    }\r\n    //不要用原型来定义方法，因为会导致不同实例共用数据\r\n    this.enQueue = function (data,priority) {\r\n        if(priority<0||priority>100){\r\n            throw new Error('优先级值必须在0至100之间')\r\n        }\r\n        const element=new QueueElement(data,priority)\r\n        if(arr.length===0){\r\n            arr.push(element)\r\n        }else {\r\n            //将当前element插入合适位置\r\n            for(let i=0;i<arr.length;i++){\r\n                if(arr[i].priority>priority||arr[i].priority===priority){\r\n                    arr.splice(i,0,element)\r\n                    return\r\n                }\r\n            }\r\n            arr.push(element)\r\n        }\r\n    }\r\n    //出栈pop\r\n    this.outQueue = function () {\r\n        return arr.shift()\r\n    }\r\n    //查看栈顶\r\n    this.front = function () {\r\n        return arr[0]\r\n    }\r\n    //栈的大小\r\n    this.size = function () {\r\n        return arr.length\r\n    }\r\n    //栈是否为空\r\n    this.isEmpty = function () {\r\n        return arr.length === 0\r\n    }\r\n}\n\n//# sourceURL=webpack://myArr/./src/Data_and_Algorithm/Queue.js?");

/***/ }),

/***/ "./src/Data and Algorithm/stack.js":
/*!*****************************************!*\
  !*** ./src/Data and Algorithm/stack.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//自定义栈，使用数组封装\r\nfunction Stack() {\r\n    //用于保存数据的数组\r\n    const arr=[]\r\n    //压栈push\r\n    // Stack.prototype.push=function (element) {\r\n    //         arr.push(element)\r\n    // }\r\n    //不要用原型来定义方法，因为会导致不同实例共用数据\r\n        this.push=function (element) {\r\n                 arr.push(element)\r\n         }\r\n    //出栈pop\r\n    this.pop=function () {\r\n            return arr.pop()\r\n    }\r\n    //查看栈顶\r\n    this.peek=function () {\r\n          return arr[arr.length-1]\r\n    }\r\n    //栈的大小\r\n    this.size=function () {\r\n        return arr.length\r\n    }\r\n    //栈是否为空\r\n    this.isEmpty=function () {\r\n        return arr.length===0\r\n    }\r\n}\r\n// function dec2bin(dec) {\r\n//     const stack=new Stack()\r\n//     while(dec>0){\r\n//     let result=dec % 2\r\n//     stack.push(result)\r\n//     dec=Math.floor(dec/2)\r\n//     }\r\n//     let result1=''\r\n//     while (!stack.isEmpty()){\r\n//         result1+=stack.pop()\r\n//     }\r\n//     return result1\r\n// }\r\n//\r\n// console.log(dec2bin(16));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);\r\n\n\n//# sourceURL=webpack://myArr/./src/Data_and_Algorithm/stack.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_0__.call),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_1__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_Throttle__WEBPACK_IMPORTED_MODULE_3__.throttle),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_Debounce__WEBPACK_IMPORTED_MODULE_4__.debounce),\n/* harmony export */   \"map\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.map),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.filter),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.reduce),\n/* harmony export */   \"find\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.some),\n/* harmony export */   \"unique1\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.unique1),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.unique3),\n/* harmony export */   \"unique4\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.unique4),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.concat),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__.slice),\n/* harmony export */   \"flattern1\": () => (/* reexport safe */ _Array_flattern__WEBPACK_IMPORTED_MODULE_6__.flattern1),\n/* harmony export */   \"flattern2\": () => (/* reexport safe */ _Array_flattern__WEBPACK_IMPORTED_MODULE_6__.flattern2),\n/* harmony export */   \"flattern3\": () => (/* reexport safe */ _Array_flattern__WEBPACK_IMPORTED_MODULE_6__.flattern3),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _Array_chunk__WEBPACK_IMPORTED_MODULE_7__.chunk),\n/* harmony export */   \"different\": () => (/* reexport safe */ _Array_different__WEBPACK_IMPORTED_MODULE_8__.different),\n/* harmony export */   \"differences\": () => (/* reexport safe */ _Array_different__WEBPACK_IMPORTED_MODULE_8__.differences),\n/* harmony export */   \"merge\": () => (/* reexport safe */ _Array_merge__WEBPACK_IMPORTED_MODULE_9__.merge),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _Array_pull__WEBPACK_IMPORTED_MODULE_10__.pull),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _Array_drop__WEBPACK_IMPORTED_MODULE_11__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _Array_drop__WEBPACK_IMPORTED_MODULE_11__.dropRight),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _object_new__WEBPACK_IMPORTED_MODULE_12__.newInstance),\n/* harmony export */   \"myInstacne\": () => (/* reexport safe */ _object_new__WEBPACK_IMPORTED_MODULE_12__.myInstacne),\n/* harmony export */   \"mergeObj\": () => (/* reexport safe */ _object_mergeObj__WEBPACK_IMPORTED_MODULE_13__.mergeObj),\n/* harmony export */   \"copyShallow\": () => (/* reexport safe */ _object_copy__WEBPACK_IMPORTED_MODULE_14__.copyShallow),\n/* harmony export */   \"copyDeep\": () => (/* reexport safe */ _object_copy__WEBPACK_IMPORTED_MODULE_14__.copyDeep),\n/* harmony export */   \"copyDeep1\": () => (/* reexport safe */ _object_copy__WEBPACK_IMPORTED_MODULE_14__.copyDeep1),\n/* harmony export */   \"copyDeep2\": () => (/* reexport safe */ _object_copy__WEBPACK_IMPORTED_MODULE_14__.copyDeep2),\n/* harmony export */   \"reverseStr\": () => (/* reexport safe */ _string_reverse__WEBPACK_IMPORTED_MODULE_15__.reverseStr),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _string_reverse__WEBPACK_IMPORTED_MODULE_15__.truncate),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string_reverse__WEBPACK_IMPORTED_MODULE_15__.palindrome),\n/* harmony export */   \"stack\": () => (/* reexport safe */ _Data_and_Algorithm_stack__WEBPACK_IMPORTED_MODULE_16__.default),\n/* harmony export */   \"Queue\": () => (/* reexport safe */ _Data_and_Algorithm_Queue__WEBPACK_IMPORTED_MODULE_17__.Queue),\n/* harmony export */   \"priorityQueue\": () => (/* reexport safe */ _Data_and_Algorithm_Queue__WEBPACK_IMPORTED_MODULE_17__.priorityQueue),\n/* harmony export */   \"babbleUp\": () => (/* reexport safe */ _sort_baseSort_babbleUp__WEBPACK_IMPORTED_MODULE_18__.babbleUp),\n/* harmony export */   \"insert\": () => (/* reexport safe */ _sort_baseSort_insert__WEBPACK_IMPORTED_MODULE_19__.insert),\n/* harmony export */   \"Shell\": () => (/* reexport safe */ _sort_baseSort_shell__WEBPACK_IMPORTED_MODULE_20__.Shell)\n/* harmony export */ });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_Throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/Throttle */ \"./src/function/Throttle.js\");\n/* harmony import */ var _function_Debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/Debounce */ \"./src/function/Debounce.js\");\n/* harmony import */ var _Array_my_arr_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array/my_arr_methods */ \"./src/Array/my_arr_methods.js\");\n/* harmony import */ var _Array_flattern__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Array/flattern */ \"./src/Array/flattern.js\");\n/* harmony import */ var _Array_chunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Array/chunk */ \"./src/Array/chunk.js\");\n/* harmony import */ var _Array_different__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Array/different */ \"./src/Array/different.js\");\n/* harmony import */ var _Array_merge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Array/merge */ \"./src/Array/merge.js\");\n/* harmony import */ var _Array_pull__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Array/pull */ \"./src/Array/pull.js\");\n/* harmony import */ var _Array_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Array/drop */ \"./src/Array/drop.js\");\n/* harmony import */ var _object_new__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./object/new */ \"./src/object/new.js\");\n/* harmony import */ var _object_mergeObj__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object/mergeObj */ \"./src/object/mergeObj.js\");\n/* harmony import */ var _object_copy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./object/copy */ \"./src/object/copy.js\");\n/* harmony import */ var _string_reverse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./string/reverse */ \"./src/string/reverse.js\");\n/* harmony import */ var _Data_and_Algorithm_stack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Data and Algorithm/stack */ \"./src/Data and Algorithm/stack.js\");\n/* harmony import */ var _Data_and_Algorithm_Queue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Data and Algorithm/Queue */ \"./src/Data and Algorithm/Queue.js\");\n/* harmony import */ var _sort_baseSort_babbleUp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sort/baseSort/babbleUp */ \"./src/sort/baseSort/babbleUp.js\");\n/* harmony import */ var _sort_baseSort_insert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sort/baseSort/insert */ \"./src/sort/baseSort/insert.js\");\n/* harmony import */ var _sort_baseSort_shell__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sort/baseSort/shell */ \"./src/sort/baseSort/shell.js\");\n/*\r\n库的入口，向外暴露工具函数\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://myArr/./src/main.js?");

/***/ }),

/***/ "./src/object/copy.js":
/*!****************************!*\
  !*** ./src/object/copy.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"copyShallow\": () => (/* binding */ copyShallow),\n/* harmony export */   \"copyDeep\": () => (/* binding */ copyDeep),\n/* harmony export */   \"copyDeep1\": () => (/* binding */ copyDeep1),\n/* harmony export */   \"copyDeep2\": () => (/* binding */ copyDeep2)\n/* harmony export */ });\nfunction copyShallow(obj) {\r\n   if(obj instanceof Array){\r\n       // return [...obj]\r\n       return obj.slice()\r\n   }else if(obj!==null&&typeof obj==='object'){\r\n       return {...obj}\r\n   }else {\r\n       return obj\r\n   }\r\n}\r\n// function copyDeep(obj){\r\n//     //Json不能存储函数，会丢失\r\n//    return  JSON.parse(JSON.stringify(obj))\r\n// }\r\n function copyDeep(obj){\r\n    //无法解决循环引用的问题\r\n    if(obj instanceof Array||obj !==null&&typeof obj==='object'){\r\n        const copyObj=obj instanceof Array?[]:{}\r\n        for(const key in obj){\r\n            if(obj.hasOwnProperty(key)){\r\n                copyObj[key]=copyDeep(obj[key])\r\n            }\r\n        }\r\n        return copyObj\r\n    }else {\r\n        return obj\r\n    }\r\n}\r\n function copyDeep1(obj,map=new Map()) {\r\n    if(obj instanceof Array||obj !==null&&typeof obj === 'object'){\r\n        let copyObj=map.get(obj)\r\n        if(copyObj){\r\n            return copyObj\r\n        }\r\n        copyObj=obj instanceof Array?[]:{}\r\n        map.set(obj,copyObj)\r\n        for (const key in obj) {\r\n            if(obj.hasOwnProperty(key)){\r\n               copyObj[key]=copyDeep1(obj[key])\r\n            }\r\n        }\r\n        return copyObj\r\n    }else {\r\n        return obj\r\n    }\r\n\r\n}\r\nfunction copyDeep2(obj,map=new Map()){\r\n    //优化数组遍历\r\n    //由于数组遍历时forEach效率明显高于for in，因此要优化\r\n    if(obj instanceof Array||obj !==null&&typeof obj==='object'){\r\n        let copyObj=map.get(obj)\r\n        if(copyObj){\r\n            return copyObj\r\n        }\r\n        if(obj instanceof Array){\r\n            let copyObj=[]\r\n            obj.forEach((item,index)=>{\r\n                if(obj.hasOwnProperty(index)){\r\n                    copyObj[index]=copyDeep2(item)\r\n                }\r\n\r\n            })\r\n            map.set(obj,copyObj)\r\n            return copyObj\r\n        }else {\r\n            let copyObj={}\r\n            for (const key in obj) {\r\n                if(obj.hasOwnProperty(key)){\r\n                    copyObj[key]=copyDeep2(obj[key])\r\n                }\r\n\r\n            }\r\n            map.set(obj,copyObj)\r\n            return copyObj\r\n        }\r\n    }else {\r\n        return obj\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://myArr/./src/object/copy.js?");

/***/ }),

/***/ "./src/object/mergeObj.js":
/*!********************************!*\
  !*** ./src/object/mergeObj.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObj\": () => (/* binding */ mergeObj)\n/* harmony export */ });\n//合并数组\r\nfunction mergeObj(...obj) {\r\n   let result={}\r\n   obj.forEach((item)=>{\r\n       Object.keys(item).forEach((key)=>{\r\n           const value=item[key]\r\n           let arr=[]\r\n           if(Object.keys(result).indexOf(key)!==-1){\r\n               arr.push(result[key])\r\n               arr.push(value)\r\n               result[key]=arr\r\n           }else {\r\n               result[key]=value\r\n           }\r\n\r\n       })\r\n   })\r\n   return result\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/object/mergeObj.js?");

/***/ }),

/***/ "./src/object/new.js":
/*!***************************!*\
  !*** ./src/object/new.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance),\n/* harmony export */   \"myInstacne\": () => (/* binding */ myInstacne)\n/* harmony export */ });\n\r\n//自定义方法创建对象\r\nfunction newInstance(Fn,...args) {\r\n        let obj={};\r\n        const result=Fn.call(obj,...args)\r\n        if(result instanceof Object){\r\n            return result\r\n        }else {\r\n            // obj.__proto__={}\r\n            // obj.constructor=Fn\r\n            //这种方法有个隐藏的bug就是每个实例的隐式原型都不一样（地址不同）\r\n            obj.__proto__=Fn.prototype\r\n            return obj\r\n        }\r\n\r\n}\r\n\r\nfunction myInstacne(obj,type) {\r\n    let objProto=obj.__proto__\r\n    while(objProto!==null){\r\n        if(objProto===type.prototype){\r\n            return true\r\n        }\r\n        objProto=objProto.__proto__\r\n    }\r\n    return false\r\n}\r\n\r\n\n\n//# sourceURL=webpack://myArr/./src/object/new.js?");

/***/ }),

/***/ "./src/sort/baseSort/babbleUp.js":
/*!***************************************!*\
  !*** ./src/sort/baseSort/babbleUp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"babbleUp\": () => (/* binding */ babbleUp)\n/* harmony export */ });\nfunction babbleUp(obj) {\r\n    //冒泡排序\r\n    let temp=0\r\n    for (let i = 0; i < obj.length; i++) {\r\n        for (let j = 0; j < obj.length -i-1 ; j++) {\r\n            if(obj[j]<obj[j+1]){\r\n                temp=obj[j]\r\n                obj[j]=obj[j+1]\r\n                obj[j+1]=temp\r\n            }\r\n        }\r\n    }\r\n    return obj\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/sort/baseSort/babbleUp.js?");

/***/ }),

/***/ "./src/sort/baseSort/insert.js":
/*!*************************************!*\
  !*** ./src/sort/baseSort/insert.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insert\": () => (/* binding */ insert)\n/* harmony export */ });\n//插入排序\r\n//左边为有序区，右边为无序区\r\nfunction insert(obj) {\r\n    for (let i = 1; i < obj.length; i++) {\r\n        let start=obj[i]\r\n        let j\r\n        for (j = i-1; j >=0 ; j--) {\r\n            if(obj[j]>start){\r\n                obj[j+1]=obj[j]\r\n            }else {\r\n                break\r\n            }\r\n            }\r\n        obj[j+1]=start\r\n        }\r\n    return obj\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/sort/baseSort/insert.js?");

/***/ }),

/***/ "./src/sort/baseSort/shell.js":
/*!************************************!*\
  !*** ./src/sort/baseSort/shell.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Shell\": () => (/* binding */ Shell)\n/* harmony export */ });\n//希尔排序（插入排序的改进，加快排序速度）\r\n/*\r\n1.计算出一个增量数组  length/2向下取整\r\n2.该增量数组递减\r\n3.最后一个增量为1\r\n4.以当前增量对数组进行分组，分成多个小数组，对每个销售组进行插入排序，每个小数组进行交替进行\r\n*/\r\nfunction Shell(obj) {\r\n    const length=obj.length\r\n    let distance=length\r\n    while (distance>1){\r\n        distance=Math.floor(distance/2)\r\n        for (let i = distance; i < length; i++) {\r\n            const start=obj[i]\r\n            let j\r\n            for (j = i-distance; j>=0; j=j-distance) {\r\n                if(obj[j]>start){\r\n                    obj[j+distance]=obj[j]\r\n                }else {\r\n                    break\r\n                    //break后i不会自增自减\r\n                }\r\n            }\r\n            obj[j+distance]=start\r\n        }\r\n    }\r\n    return obj\r\n}\n\n//# sourceURL=webpack://myArr/./src/sort/baseSort/shell.js?");

/***/ }),

/***/ "./src/string/reverse.js":
/*!*******************************!*\
  !*** ./src/string/reverse.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseStr\": () => (/* binding */ reverseStr),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome),\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\nfunction reverseStr(str) {\r\n   return str.split('').reverse().join('')\r\n}\r\nfunction palindrome(str) {\r\n    //判断是否是回文，返回值为布尔值\r\n    let result=false\r\n    if(str===str.split('').reverse().join('')){\r\n        result = true\r\n    }\r\n    return result\r\n}\r\nfunction truncate(str,num){\r\n    //截取一部分字符串，以...结束\r\n    if(str.length>num){\r\n        return str.substring(0,num)+'...'\r\n    }else {\r\n        return str\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://myArr/./src/string/reverse.js?");

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