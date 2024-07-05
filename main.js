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

/***/ "./functions/handleAbout.js":
/*!**********************************!*\
  !*** ./functions/handleAbout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAbout: () => (/* binding */ handleAbout)\n/* harmony export */ });\n\nfunction handleAbout() {\n    const content = document.querySelector('.content')\n\n\n    const h1 = document.createElement('h1')\n\n    \n\n\n    const paraOne = document.createElement('p')\n    const paraOne1 = document.createElement('p')\n    const paraOne2 = document.createElement('p')\n\n    h1.textContent = 'About'\n    paraOne.textContent = 'At Lotus Café, we’re more than just a restaurant—we’re a family. Our journey began with a passion for sharing the rich and vibrant flavors of Vietnamese cuisine with our community.'\n    paraOne1.textContent = 'Our family-owned café is rooted in the traditions of Vietnam, where each meal is an opportunity to gather, celebrate, and create memories. Every dish we serve is crafted with love and dedication, using recipes that have been passed down through generations.'\n    paraOne2.textContent = 'Thank you for visiting our site. We can’t wait to welcome you to our café and share the magic of Vietnamese cuisine with you. We hope to see you soon!'\n\n    content.appendChild(h1)\n    content.appendChild(paraOne)\n    content.appendChild(paraOne1)\n    content.appendChild(paraOne2)\n}\n\n\n\n//# sourceURL=webpack://resypage/./functions/handleAbout.js?");

/***/ }),

/***/ "./functions/handleHome.js":
/*!*********************************!*\
  !*** ./functions/handleHome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleHome: () => (/* binding */ handleHome)\n/* harmony export */ });\nfunction handleHome() {\n    const content = document.querySelector('.content');\n\n    const h1 = document.createElement(\"h1\")\n    const p = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const button = document.createElement('button')\n\n    h1.textContent = 'Good Eats Only'\n     p.textContent = 'A place to eat, A place that feels like home.'\n     p2.textContent = 'Located at 8077 Georgia Avenue, Silver Spring, Maryland 20910'\n     button.textContent = 'Call Now'\n     \n\n    \n\n\n\n    content.appendChild(h1);\n    content.appendChild(p);\n    content.appendChild(p2);\n    content.appendChild(button);\n\n}\n\n\n\n//# sourceURL=webpack://resypage/./functions/handleHome.js?");

/***/ }),

/***/ "./functions/handleMenu.js":
/*!*********************************!*\
  !*** ./functions/handleMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleMenu: () => (/* binding */ handleMenu)\n/* harmony export */ });\n\nfunction handleMenu() {\n    const content = document.querySelector('.content')\n\n\n    const h1 = document.createElement('h1')\n    const h2 = document.createElement('h2')\n\n    \n\n    const paraOne = document.createElement('p')\n    const paraOne1 = document.createElement('p')\n    const paraOne2 = document.createElement('p')\n    const paraTwo = document.createElement('p')\n    const paraTwo1 = document.createElement('p')\n    const paraTwo2 = document.createElement('p')\n\n\n    h1.textContent = 'Appetizers'\n    h2.textContent = 'Entrees'\n    paraOne.textContent = 'A1. Summer Rolls 4.95'\n    paraOne1.textContent = 'A2. Tofu Summer Rolls 4.95' \n    paraOne2.textContent = 'A3. Spring Rolls 4.95'\n    paraTwo.textContent = 'B1. Grilled Meat Vermicelli 12.99'\n    paraTwo1.textContent = 'B2. Combination Vermicelli 13.99' \n    paraTwo2.textContent = 'B3. Shrimp Vermicelli 13.99'\n\n   content.appendChild(h1)\n   content.appendChild(paraOne)\n   content.appendChild(paraOne1)\n   content.appendChild(paraOne2)\n   content.appendChild(h2)\n   content.appendChild(paraTwo)\n   content.appendChild(paraTwo1)\n   content.appendChild(paraTwo2)\n}\n\n//# sourceURL=webpack://resypage/./functions/handleMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_handleHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/handleHome */ \"./functions/handleHome.js\");\n/* harmony import */ var _functions_handleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/handleMenu */ \"./functions/handleMenu.js\");\n/* harmony import */ var _functions_handleAbout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/handleAbout */ \"./functions/handleAbout.js\");\nconsole.log('test');\n\n\n\n\n\n\nconst menuButton = document.querySelector('.menu')\nconst aboutButton = document.querySelector('.about')\nconst homeButton = document.querySelector('.home')\n\nfunction clearDiv(){\n    const content = document.querySelector('.content')\n    content.innerHTML = ''\n}\n\nfunction init() {\n    // Query for the buttons\n    const menuButton = document.querySelector('.menu');\n    const aboutButton = document.querySelector('.about');\n    const homeButton = document.querySelector('.home');\n    const content = document.querySelector('.content')\n\n\n    if (menuButton) {\n        menuButton.addEventListener('click', clearDiv);\n        menuButton.addEventListener('click', _functions_handleMenu__WEBPACK_IMPORTED_MODULE_1__.handleMenu);\n    } else {\n        console.error(\"Button with class 'menu' not found.\");\n    }\n\n    if (homeButton) {\n        homeButton.addEventListener('click', clearDiv);\n        homeButton.addEventListener('click', _functions_handleHome__WEBPACK_IMPORTED_MODULE_0__.handleHome);\n    } else {\n        console.error(\"Button with class 'home' not found.\");\n    }\n\n    if (aboutButton) {\n        aboutButton.addEventListener('click', clearDiv);\n        aboutButton.addEventListener('click', _functions_handleAbout__WEBPACK_IMPORTED_MODULE_2__.handleAbout);\n    } else {\n        console.error(\"Button with class 'about' not found.\");\n    }\n}\n\n// function init(){\n// menuButton.addEventListener('click',handleMenu)\n// homeButton.addEventListener('click',handleHome)\n// }\n\ninit();\n(0,_functions_handleHome__WEBPACK_IMPORTED_MODULE_0__.handleHome)();\n\n\n//# sourceURL=webpack://resypage/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;