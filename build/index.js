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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/api/controllers/home.controller.ts":
/*!************************************************!*\
  !*** ./src/api/controllers/home.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.homeController = void 0;\nfunction homeController(req, res) {\n    res.json({\n        \"name\": \"apiweather\",\n        \"version\": \"0.0.1\",\n        \"description\": \"index.js\",\n        \"license\": \"MIT\",\n    });\n}\nexports.homeController = homeController;\n\n\n//# sourceURL=webpack:///./src/api/controllers/home.controller.ts?");

/***/ }),

/***/ "./src/api/controllers/location.controller.ts":
/*!****************************************************!*\
  !*** ./src/api/controllers/location.controller.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.locationController = void 0;\nvar location_service_1 = __webpack_require__(/*! ../services/location.service */ \"./src/api/services/location.service.ts\");\nfunction locationController(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var location;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, location_service_1.getLocationIp(req)];\n                case 1:\n                    location = _a.sent();\n                    res.json(location);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.locationController = locationController;\n\n\n//# sourceURL=webpack:///./src/api/controllers/location.controller.ts?");

/***/ }),

/***/ "./src/api/controllers/weather.controller.ts":
/*!***************************************************!*\
  !*** ./src/api/controllers/weather.controller.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.getForecast = exports.weatherController = void 0;\nvar weahter_service_1 = __webpack_require__(/*! ../services/weahter.service */ \"./src/api/services/weahter.service.ts\");\nvar location_service_1 = __webpack_require__(/*! ../services/location.service */ \"./src/api/services/location.service.ts\");\nexports.weatherController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cityName, city, _a, main, name, weather;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                if (!req.params.city) return [3 /*break*/, 1];\n                cityName = req.params.city;\n                return [3 /*break*/, 3];\n            case 1: return [4 /*yield*/, location_service_1.getLocationIp(req)];\n            case 2:\n                city = (_b.sent()).city;\n                cityName = city;\n                _b.label = 3;\n            case 3: return [4 /*yield*/, weahter_service_1.getWeahterCurrentCity(cityName)];\n            case 4:\n                _a = _b.sent(), main = _a.main, name = _a.name, weather = _a.weather;\n                res.json({ city: name, temperature: main, weather: weather });\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.getForecast = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cityName, city_1, _a, city, list;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                if (!req.params.city) return [3 /*break*/, 1];\n                cityName = req.params.city;\n                return [3 /*break*/, 3];\n            case 1: return [4 /*yield*/, location_service_1.getLocationIp(req)];\n            case 2:\n                city_1 = (_b.sent()).city;\n                cityName = city_1;\n                _b.label = 3;\n            case 3: return [4 /*yield*/, weahter_service_1.getWeahterForecastCity(cityName)];\n            case 4:\n                _a = _b.sent(), city = _a.city, list = _a.list;\n                res.json({ city: city, list: list });\n                return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/api/controllers/weather.controller.ts?");

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes/ */ \"./src/api/routes/index.ts\");\nvar api = express();\napi.use('/', routes_1.homeRouter);\napi.use('/location', routes_1.locationRouter);\napi.use('/current', routes_1.currentRouter);\napi.use('/forecast', routes_1.forecastRouter);\nexports[\"default\"] = api;\n\n\n//# sourceURL=webpack:///./src/api/index.ts?");

/***/ }),

/***/ "./src/api/routes/current.router.ts":
/*!******************************************!*\
  !*** ./src/api/routes/current.router.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.currentRouter = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar weather_controller_1 = __webpack_require__(/*! ../controllers/weather.controller */ \"./src/api/controllers/weather.controller.ts\");\nexports.currentRouter = express_1.Router();\nexports.currentRouter.get('/:city?', weather_controller_1.weatherController);\n\n\n//# sourceURL=webpack:///./src/api/routes/current.router.ts?");

/***/ }),

/***/ "./src/api/routes/forecast.router.ts":
/*!*******************************************!*\
  !*** ./src/api/routes/forecast.router.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.forecastRouter = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar weather_controller_1 = __webpack_require__(/*! ../controllers/weather.controller */ \"./src/api/controllers/weather.controller.ts\");\nexports.forecastRouter = express_1.Router();\nexports.forecastRouter.get('/:city?', weather_controller_1.getForecast);\n\n\n//# sourceURL=webpack:///./src/api/routes/forecast.router.ts?");

/***/ }),

/***/ "./src/api/routes/home.router.ts":
/*!***************************************!*\
  !*** ./src/api/routes/home.router.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.homeRouter = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar home_controller_1 = __webpack_require__(/*! ../controllers/home.controller */ \"./src/api/controllers/home.controller.ts\");\nexports.homeRouter = express_1.Router();\nexports.homeRouter.get('/', home_controller_1.homeController);\n\n\n//# sourceURL=webpack:///./src/api/routes/home.router.ts?");

/***/ }),

/***/ "./src/api/routes/index.ts":
/*!*********************************!*\
  !*** ./src/api/routes/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\n};\nexports.__esModule = true;\n__exportStar(__webpack_require__(/*! ./location.router */ \"./src/api/routes/location.router.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./home.router */ \"./src/api/routes/home.router.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./current.router */ \"./src/api/routes/current.router.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./forecast.router */ \"./src/api/routes/forecast.router.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/api/routes/index.ts?");

/***/ }),

/***/ "./src/api/routes/location.router.ts":
/*!*******************************************!*\
  !*** ./src/api/routes/location.router.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.locationRouter = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar location_controller_1 = __webpack_require__(/*! ../controllers/location.controller */ \"./src/api/controllers/location.controller.ts\");\nexports.locationRouter = express_1.Router();\nexports.locationRouter.get('/', location_controller_1.locationController);\n\n\n//# sourceURL=webpack:///./src/api/routes/location.router.ts?");

/***/ }),

/***/ "./src/api/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/api/services/location.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.getLocationIp = void 0;\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\nvar url = process.env.IP_API_URL;\nvar fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nexports.getLocationIp = function (req) { return __awaiter(void 0, void 0, void 0, function () {\n    var ip, ipUser, data, result;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                ip = req.connection.remoteAddress;\n                ipUser = ip === '::1' ? '54.215.236.228' : ip;\n                return [4 /*yield*/, fetch(url + \"/\" + ipUser)];\n            case 1:\n                data = _a.sent();\n                return [4 /*yield*/, data.json()];\n            case 2:\n                result = _a.sent();\n                return [2 /*return*/, result];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/api/services/location.service.ts?");

/***/ }),

/***/ "./src/api/services/weahter.service.ts":
/*!*********************************************!*\
  !*** ./src/api/services/weahter.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.getWeahterForecastCity = exports.getWeahterCurrentCity = void 0;\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\nvar _a = process.env, IP_API_URL = _a.IP_API_URL, API_WEATHER_URL = _a.API_WEATHER_URL, API_WEATHER_KEY = _a.API_WEATHER_KEY;\nvar fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar url = API_WEATHER_URL;\nexports.getWeahterCurrentCity = function (city) { return __awaiter(void 0, void 0, void 0, function () {\n    var data, result;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, fetch(url + \"/weather?q=\" + city + \"&units=metric&appid=\" + API_WEATHER_KEY)];\n            case 1:\n                data = _a.sent();\n                return [4 /*yield*/, data.json()];\n            case 2:\n                result = _a.sent();\n                return [2 /*return*/, result];\n        }\n    });\n}); };\nexports.getWeahterForecastCity = function (city) { return __awaiter(void 0, void 0, void 0, function () {\n    var data, result;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, fetch(url + \"/forecast?q=\" + city + \"&units=metric&appid=\" + API_WEATHER_KEY)];\n            case 1:\n                data = _a.sent();\n                return [4 /*yield*/, data.json()];\n            case 2:\n                result = _a.sent();\n                return [2 /*return*/, result];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/api/services/weahter.service.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/api/index.ts\");\nvar app = express();\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(function (req, res, next) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');\n    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');\n    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');\n    next();\n});\napp.use('/api/v1', api_1[\"default\"]);\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3001 : _a;\nif (__webpack_require__.c[__webpack_require__.s] === module) {\n    app.listen(PORT, function () {\n        console.log('server started at http://localhost:' + PORT);\n    });\n}\nexports[\"default\"] = app;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ })

/******/ });