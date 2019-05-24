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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LinkedList.js":
/*!***************************!*\
  !*** ./src/LinkedList.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LinkedList; });\n/* harmony import */ var _LinkedListNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedListNode */ \"./src/LinkedListNode.js\");\n\n\nclass LinkedList {\n  constructor(comparatorFunction) {\n    this.head = null;\n    this.tail = null;\n  }\n\n  append(value) {\n    const newNode = new _LinkedListNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n    if (!this.head) {\n      this.head = newNode;\n      this.tail = newNode;\n      return this;\n    }\n    this.tail.next = newNode;\n    this.tail = newNode;\n    return this;\n  }\n\n  toArray() {\n    const nodes = [];\n\n    let currentNode = this.head;\n    while (currentNode) {\n      nodes.push(currentNode);\n      currentNode = currentNode.next;\n    }\n\n    return nodes;\n  }\n}\n\n//# sourceURL=webpack:///./src/LinkedList.js?");

/***/ }),

/***/ "./src/LinkedListNode.js":
/*!*******************************!*\
  !*** ./src/LinkedListNode.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LinkedListNode; });\nclass LinkedListNode {\n  constructor(value, next = null) {\n    this.value = value;\n    this.next = next;\n  }\n  toString(callback) {\n    return callback ? callback(this.value) : `${this.value}`\n  }\n}\n\n//# sourceURL=webpack:///./src/LinkedListNode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList */ \"./src/LinkedList.js\");\n\n\n// import LinkedList from './LinkedList';\nconst swapPairs = (head) => {\n  if (head === null) {\n    return null;\n  }\n\n  let next = head.next,\n    result = next? next : head,\n    prevTail,\n    curHead,\n    nextHead;\n  \n  curHead = head;\n   \n  while(next) {\n    nextHead = next.next;\n    if (prevTail) {\n      prevTail.next = next;\n    }\n    next.next = curHead;\n    curHead.next = nextHead;\n    prevTail = curHead;\n    curHead = nextHead;\n    next = curHead && curHead.next;\n  }\n  return result;\n}\n\nconst list = new _LinkedList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlist\n  .append(1)\n  .append(2)\n  .append(3)\n  .append(4)\n\nlet node = swapPairs(list.head);\n// console.log(node.value);\n// console.log(node);\nwhile(node) {\n  console.log(node.value);\n  node = node.next;\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });