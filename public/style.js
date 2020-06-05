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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/style.css");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./public/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./public/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*\\nTheme Name: Javascript Code Sandbox\\nDescription: Styles for index.html\\nAuthor: Jonathan Lau\\n*/\\n\\n* {\\n  box-sizing: border-box;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Helvetica,\\n    Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\";\\n}\\n\\nbody {\\n  font-size: 1em;\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: #fff;\\n  letter-spacing: -0.1px;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n}\\n\\nheader {\\n  margin: 0 auto 20px auto;\\n}\\n\\nh1 {\\n  font-size: 1.35em;\\n  margin: 30px auto;\\n}\\n\\nh5 {\\n  font-size: 1.15em;\\n}\\n\\ni._3vf4p5EZYcHby2P9gYZ0U- {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nselect {\\n  display: unset;\\n}\\nselect._3caFgOT3uAOu78Fz5-Mzqt {\\n  cursor: pointer;\\n  display: none;\\n  font-size: 1em;\\n  background-color: rgba(255, 255, 255, 0.9);\\n  width: 100%;\\n  padding: 5px;\\n  border: 1px solid #f2f2f2;\\n}\\ntextarea {\\n  resize: none;\\n}\\ntable {\\n  font-size: 14px;\\n  width: 100vw;\\n  text-align: justify;\\n  display: inline-block;\\n}\\n\\ntable:after {\\n  content: \\\"\\\";\\n  display: inline-block;\\n  width: 100%;\\n}\\n\\ntd {\\n  border: 1px solid rgba(0, 0, 0, 0.12);\\n  padding: 15px;\\n}\\nth {\\n  padding: 15px;\\n}\\n\\nmain {\\n  height: 100vh;\\n  height: 100%;\\n}\\n\\n._1q_bM0Zdpjpnq2kh_w_NW {\\n  z-index: -1;\\n  margin-bottom: 0;\\n}\\n\\n._1q_bM0Zdpjpnq2kh_w_NW .rY93Mr5A5hWJbn1UkL4UX {\\n  margin: 0;\\n}\\n._33ETqiv_IzAtzkZCiF0v59 {\\n  display: inline;\\n  position: relative;\\n  padding: 20px;\\n  z-index: 99;\\n  border: 1px solid transparent;\\n}\\n\\n._21V7RUVGBUunKZdu_eo3PM {\\n  position: relative;\\n}\\n\\n._3DaskS5RNJZJDxP4qqIQCq {\\n  margin: auto;\\n  padding: 20px;\\n  width: 55%;\\n}\\n\\n.zlRAMghzGnuhHCJ9-PRL4 {\\n  box-shadow: rgba(0, 0, 0, 0.03) 0px 1px 1px 0px,\\n    rgba(0, 0, 0, 0.03) 0px 1.5px 0.5px -1px,\\n    rgba(0, 0, 0, 0.2) 0px 1px 2.5px 0px;\\n}\\n#_2jIu8TGzoJWYeB5r-3C1na {\\n  position: absolute;\\n  float: right;\\n  right: 0;\\n  top: 0;\\n}\\n#WOGqtkes1EEUW94HxWXfT {\\n  font-weight: bold;\\n}\\n\\n#WOGqtkes1EEUW94HxWXfT:before {\\n  content: \\\"[\\\";\\n}\\n#WOGqtkes1EEUW94HxWXfT:after {\\n  content: \\\"]\\\";\\n}\\n#svqGYOGvHggoEp_4D-Lk3 {\\n  color: #263238;\\n  width: 50vw;\\n  height: 100vh;\\n  font-weight: 200;\\n}\\n\\n#_2y3EPQDz2Va8sOGfkAQM_a {\\n  background-color: #0d47a1;\\n  color: #263238;\\n  height: 100vh;\\n}\\n\\n._2HlJ1mUu-NkovehZ88AW-W {\\n  display: block;\\n  clear: both;\\n  height: fit-content;\\n  min-height: 200px;\\n  overflow-y: auto;\\n  max-height: 300px;\\n  border: 1px solid grey;\\n}\\n\\n#_2yNbUUCpA40bvCtoYqHSTY {\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n  text-align: justify;\\n  height: 100%;\\n  margin: 0 auto;\\n  width: 100%;\\n  color: #263238;\\n}\\n\\n#_2RKJZ3u1bl2zPHWML5A8Go {\\n  padding: 20px 0;\\n}\\n\\n#_303QUlnT1CnH-hX2vvpW40 {\\n  height: 250px;\\n}\\n\\n._1SA4TdK1h6OEMcw7zUmlQr {\\n  overflow-y: auto;\\n  max-height: 500px;\\n  margin: 0;\\n  border-color: transparent;\\n}\\n._2_CTHuc8vvXU2LXNU0LVUE {\\n  margin: auto;\\n}\\n._3dK5pR4fkaqqXxm7fZWz1l {\\n  cursor: pointer;\\n  font-weight: 200;\\n  font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Segoe UI\\\", Arial, sans-serif;\\n  color: #263238;\\n  padding: 5px 10px;\\n  margin: 0 auto;\\n}\\n\\n._3dK5pR4fkaqqXxm7fZWz1l:hover {\\n  background-color: #f5f5f5;\\n}\\n\\n.mFhw80RmIzbszuzc7ib0w {\\n  width: 100%;\\n  font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Segoe UI\\\", Arial, sans-serif;\\n  font-size: 14px;\\n  color: #263238;\\n  text-align: left;\\n}\\n\\n._2fxrS2soijx0L9e99rPGIS {\\n  color: #373b41;\\n  /* display: inline; */\\n  -moz-border-radius: 6px;\\n  border-radius: 6px;\\n}\\n\\n._2fxrS2soijx0L9e99rPGIS input {\\n  font-size: 1.15em;\\n  width: 100%;\\n  height: 10px;\\n  float: left;\\n  border: 0;\\n  border-radius: 3px 0 0 3px;\\n}\\n\\n._21WAiB7SCwt5Jq0xJhQDPS {\\n  display: none;\\n  margin-top: 40px;\\n  width: 100%;\\n}\\n\\n#_1zr1Ktk2kJkSppwjsvOBrw {\\n  text-align: left;\\n  padding: 5px;\\n  /* width: 400px; */\\n  height: 30px;\\n  border-radius: 3px;\\n  box-shadow: none;\\n}\\n\\n#_1zr1Ktk2kJkSppwjsvOBrw._2D2DZWtxAcAZyJLtP5zoar {\\n  box-shadow: 0 1px 0 0 #000;\\n}\\n#_1zr1Ktk2kJkSppwjsvOBrw._3jEw1sS4aewat0_tcy7d3v {\\n  box-shadow: 0 1px 0 0 #000;\\n}\\n\\n#_1zr1Ktk2kJkSppwjsvOBrw:focus {\\n  outline: none;\\n}\\n#_1zr1Ktk2kJkSppwjsvOBrw:active {\\n  outline: none;\\n}\\n\\n._2SRrtlAQ1r5ra0yK21zEAG {\\n  /* display: none; */\\n  width: 100%;\\n  margin: auto;\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"right\": \"_3vf4p5EZYcHby2P9gYZ0U-\",\n\t\"browser-default\": \"_3caFgOT3uAOu78Fz5-Mzqt\",\n\t\"row\": \"_1q_bM0Zdpjpnq2kh_w_NW\",\n\t\"view-main\": \"rY93Mr5A5hWJbn1UkL4UX\",\n\t\"wrapper\": \"_33ETqiv_IzAtzkZCiF0v59\",\n\t\"container\": \"_21V7RUVGBUunKZdu_eo3PM\",\n\t\"divider\": \"_3DaskS5RNJZJDxP4qqIQCq\",\n\t\"card-panel\": \"zlRAMghzGnuhHCJ9-PRL4\",\n\t\"reset-btn\": \"_2jIu8TGzoJWYeB5r-3C1na\",\n\t\"field-header\": \"WOGqtkes1EEUW94HxWXfT\",\n\t\"view\": \"svqGYOGvHggoEp_4D-Lk3\",\n\t\"view-content-container\": \"_2y3EPQDz2Va8sOGfkAQM_a\",\n\t\"code-div\": \"_2HlJ1mUu-NkovehZ88AW-W\",\n\t\"view-content\": \"_2yNbUUCpA40bvCtoYqHSTY\",\n\t\"view-content-header\": \"_2RKJZ3u1bl2zPHWML5A8Go\",\n\t\"entry-textarea\": \"_303QUlnT1CnH-hX2vvpW40\",\n\t\"collection\": \"_1SA4TdK1h6OEMcw7zUmlQr\",\n\t\"radio-input\": \"_2_CTHuc8vvXU2LXNU0LVUE\",\n\t\"collection-item\": \"_3dK5pR4fkaqqXxm7fZWz1l\",\n\t\"collection-item-wrap\": \"mFhw80RmIzbszuzc7ib0w\",\n\t\"search-form\": \"_2fxrS2soijx0L9e99rPGIS\",\n\t\"search-form-secondary\": \"_21WAiB7SCwt5Jq0xJhQDPS\",\n\t\"search-input\": \"_1zr1Ktk2kJkSppwjsvOBrw\",\n\t\"valid\": \"_2D2DZWtxAcAZyJLtP5zoar\",\n\t\"invalid\": \"_3jEw1sS4aewat0_tcy7d3v\",\n\t\"progress\": \"_2SRrtlAQ1r5ra0yK21zEAG\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./public/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./public/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/style.css?");

/***/ })

/******/ });