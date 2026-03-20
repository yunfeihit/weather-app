/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js"
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst apiKey = 'XYDPNER7DTTCSZRQ8VZXBG3H4'\nconst defaultLocation = 'tianjin';\n\nasync function getWeatherDataOfLocation(location) {\n    try {\n        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`);\n        console.log('the response is:', response);\n        const data = await response.json();\n        //console\n        console.log('the Raw data is fetched:', data);\n        return {\n            location: data.resolvedAddress,\n            time: data.days[0].datetime,\n            temperature: data.days[0].temp,\n            description: data.days[0].conditions,\n            feelsLike: data.currentConditions.feelslike,\n            humidity: data.days[0].humidity,\n            wind: data.days[0].windspeed\n        };\n    } catch(err) {\n        console.log(err);\n        return null;\n    }\n}\n\nfunction renderAPIResult(APIResultObject) {\n    const theRenderElementsObject = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getRenderElements)();\n\n    if (APIResultObject) {\n        theRenderElementsObject.location.textContent = APIResultObject.location;\n        theRenderElementsObject.time.textContent = APIResultObject.time;\n        theRenderElementsObject.temperature.textContent = APIResultObject.temperature;\n        theRenderElementsObject.description.textContent = APIResultObject.description;\n        theRenderElementsObject.feelsLike.textContent = APIResultObject.feelsLike;\n        theRenderElementsObject.humidity.textContent = APIResultObject.humidity;\n        theRenderElementsObject.wind.textContent = APIResultObject.wind;\n    \n        console.log('the API data is rendered!');\n    } else {\n        for (const [key, value] of Object.entries(theRenderElementsObject)) {\n            value.textContent = 'NA';\n        }\n    }\n}\n\nasync function handleFormSubmit(event) {\n    //stop default behavior, make 'click' and 'press enter' both work to submit form\n    event.preventDefault()\n    //show weather API result on the container\n    const theLocation = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getLocationInputValue)();\n    const theWeatherData = await getWeatherDataOfLocation(theLocation);\n    //log\n    console.log('The weather data is successfully fetched:', theWeatherData);\n    //render API result\n    renderAPIResult(theWeatherData);\n}\n\n\nasync function loadPage() {\n    const theDefaultData = await getWeatherDataOfLocation(defaultLocation);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderMainPage)(handleFormSubmit);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRjs7QUFFakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEhBQTRILFNBQVMsT0FBTyxPQUFPO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLHVEQUFpQjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSxvREFBYztBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlci5qcz82MjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlck1haW5QYWdlLCBnZXRMb2NhdGlvbklucHV0VmFsdWUsIGdldFJlbmRlckVsZW1lbnRzIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNvbnN0IGFwaUtleSA9ICdYWURQTkVSN0RUVENTWlJROFZaWEJHM0g0J1xuY29uc3QgZGVmYXVsdExvY2F0aW9uID0gJ3RpYW5qaW4nO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YU9mTG9jYXRpb24obG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT9rZXk9JHthcGlLZXl9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgcmVzcG9uc2UgaXM6JywgcmVzcG9uc2UpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAvL2NvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZSBSYXcgZGF0YSBpcyBmZXRjaGVkOicsIGRhdGEpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9jYXRpb246IGRhdGEucmVzb2x2ZWRBZGRyZXNzLFxuICAgICAgICAgICAgdGltZTogZGF0YS5kYXlzWzBdLmRhdGV0aW1lLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IGRhdGEuZGF5c1swXS50ZW1wLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGF5c1swXS5jb25kaXRpb25zLFxuICAgICAgICAgICAgZmVlbHNMaWtlOiBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmZlZWxzbGlrZSxcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLmRheXNbMF0uaHVtaWRpdHksXG4gICAgICAgICAgICB3aW5kOiBkYXRhLmRheXNbMF0ud2luZHNwZWVkXG4gICAgICAgIH07XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJBUElSZXN1bHQoQVBJUmVzdWx0T2JqZWN0KSB7XG4gICAgY29uc3QgdGhlUmVuZGVyRWxlbWVudHNPYmplY3QgPSBnZXRSZW5kZXJFbGVtZW50cygpO1xuXG4gICAgaWYgKEFQSVJlc3VsdE9iamVjdCkge1xuICAgICAgICB0aGVSZW5kZXJFbGVtZW50c09iamVjdC5sb2NhdGlvbi50ZXh0Q29udGVudCA9IEFQSVJlc3VsdE9iamVjdC5sb2NhdGlvbjtcbiAgICAgICAgdGhlUmVuZGVyRWxlbWVudHNPYmplY3QudGltZS50ZXh0Q29udGVudCA9IEFQSVJlc3VsdE9iamVjdC50aW1lO1xuICAgICAgICB0aGVSZW5kZXJFbGVtZW50c09iamVjdC50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IEFQSVJlc3VsdE9iamVjdC50ZW1wZXJhdHVyZTtcbiAgICAgICAgdGhlUmVuZGVyRWxlbWVudHNPYmplY3QuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBBUElSZXN1bHRPYmplY3QuZGVzY3JpcHRpb247XG4gICAgICAgIHRoZVJlbmRlckVsZW1lbnRzT2JqZWN0LmZlZWxzTGlrZS50ZXh0Q29udGVudCA9IEFQSVJlc3VsdE9iamVjdC5mZWVsc0xpa2U7XG4gICAgICAgIHRoZVJlbmRlckVsZW1lbnRzT2JqZWN0Lmh1bWlkaXR5LnRleHRDb250ZW50ID0gQVBJUmVzdWx0T2JqZWN0Lmh1bWlkaXR5O1xuICAgICAgICB0aGVSZW5kZXJFbGVtZW50c09iamVjdC53aW5kLnRleHRDb250ZW50ID0gQVBJUmVzdWx0T2JqZWN0LndpbmQ7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgQVBJIGRhdGEgaXMgcmVuZGVyZWQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhlUmVuZGVyRWxlbWVudHNPYmplY3QpKSB7XG4gICAgICAgICAgICB2YWx1ZS50ZXh0Q29udGVudCA9ICdOQSc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICAvL3N0b3AgZGVmYXVsdCBiZWhhdmlvciwgbWFrZSAnY2xpY2snIGFuZCAncHJlc3MgZW50ZXInIGJvdGggd29yayB0byBzdWJtaXQgZm9ybVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAvL3Nob3cgd2VhdGhlciBBUEkgcmVzdWx0IG9uIHRoZSBjb250YWluZXJcbiAgICBjb25zdCB0aGVMb2NhdGlvbiA9IGdldExvY2F0aW9uSW5wdXRWYWx1ZSgpO1xuICAgIGNvbnN0IHRoZVdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGFPZkxvY2F0aW9uKHRoZUxvY2F0aW9uKTtcbiAgICAvL2xvZ1xuICAgIGNvbnNvbGUubG9nKCdUaGUgd2VhdGhlciBkYXRhIGlzIHN1Y2Nlc3NmdWxseSBmZXRjaGVkOicsIHRoZVdlYXRoZXJEYXRhKTtcbiAgICAvL3JlbmRlciBBUEkgcmVzdWx0XG4gICAgcmVuZGVyQVBJUmVzdWx0KHRoZVdlYXRoZXJEYXRhKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCB0aGVEZWZhdWx0RGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhT2ZMb2NhdGlvbihkZWZhdWx0TG9jYXRpb24pO1xuICAgIHJlbmRlck1haW5QYWdlKGhhbmRsZUZvcm1TdWJtaXQpO1xufVxuXG5cbmV4cG9ydCB7bG9hZFBhZ2V9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controller.js\n\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocationInputValue: () => (/* binding */ getLocationInputValue),\n/* harmony export */   getRenderElements: () => (/* binding */ getRenderElements),\n/* harmony export */   renderMainPage: () => (/* binding */ renderMainPage)\n/* harmony export */ });\n\nfunction bindFormSubmit(handler) {\n    const submitForm = document.querySelector('#location-submit-form');\n    submitForm.addEventListener('submit', handler)\n}\n\nfunction renderMainPage(handler) {\n    bindFormSubmit(handler);    \n}\n\nfunction getLocationInputValue() {\n    const locationInput = document.querySelector('#location-input'); \n    const theLocation = locationInput.value;\n    return theLocation;\n}\n\n//directlly get the textcontent of them\nfunction getRenderElements() {\n    return {\n        location: document.querySelector('#location-result'),\n        time: document.querySelector('#time-result'),\n        temperature: document.querySelector('#temperature-result'),\n        description: document.querySelector('#description-result'),\n        feelsLike: document.querySelector('#feelsLike-result'),\n        humidity: document.querySelector('#humidity-result'),\n        wind: document.querySelector('#wind-result')\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gYmluZEZvcm1TdWJtaXQoaGFuZGxlcikge1xuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24tc3VibWl0LWZvcm0nKTtcbiAgICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZXIpXG59XG5cbmZ1bmN0aW9uIHJlbmRlck1haW5QYWdlKGhhbmRsZXIpIHtcbiAgICBiaW5kRm9ybVN1Ym1pdChoYW5kbGVyKTsgICAgXG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uSW5wdXRWYWx1ZSgpIHtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uLWlucHV0Jyk7IFxuICAgIGNvbnN0IHRoZUxvY2F0aW9uID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICByZXR1cm4gdGhlTG9jYXRpb247XG59XG5cbi8vZGlyZWN0bGx5IGdldCB0aGUgdGV4dGNvbnRlbnQgb2YgdGhlbVxuZnVuY3Rpb24gZ2V0UmVuZGVyRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYXRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1yZXN1bHQnKSxcbiAgICAgICAgdGltZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWUtcmVzdWx0JyksXG4gICAgICAgIHRlbXBlcmF0dXJlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUtcmVzdWx0JyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24tcmVzdWx0JyksXG4gICAgICAgIGZlZWxzTGlrZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzTGlrZS1yZXN1bHQnKSxcbiAgICAgICAgaHVtaWRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eS1yZXN1bHQnKSxcbiAgICAgICAgd2luZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtcmVzdWx0JylcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVuZGVyTWFpblBhZ2UsIGdldExvY2F0aW9uSW5wdXRWYWx1ZSwgZ2V0UmVuZGVyRWxlbWVudHN9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dom.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\ntry {\n    (0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n} catch(err) {\n    console.error('Error on loading page:', err)\n}\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUM7O0FBRXpDO0FBQ0EsSUFBSSx3REFBUTtBQUNaLEVBQUU7QUFDRjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bG9hZFBhZ2V9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcblxudHJ5IHtcbiAgICBsb2FkUGFnZSgpO1xufSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvbiBsb2FkaW5nIHBhZ2U6JywgZXJyKVxufVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;