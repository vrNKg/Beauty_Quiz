/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles/style.css":
/*!************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles/style.css ***!
  \************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n    margin: 0 auto;\\r\\n}\\r\\n.container {\\r\\n    display: block;\\r\\n    margin: 0;\\r\\n    max-width: 1440px;\\r\\n    padding: 3rem;\\r\\n}\\r\\n.header {\\r\\n    margin-bottom: 30px;\\r\\n}\\r\\n.header__title {\\r\\n    font: bold 40px 'Inter', sans-serif;\\r\\n    margin: 0;\\r\\n}\\r\\n.header__subtitle {\\r\\n    font: 20px 'Inter', sans-serif;\\r\\n    width: 60%;\\r\\n    margin: 20px 0 0;\\r\\n}\\r\\n@media (min-width: 782px) and (max-width: 991px) {\\r\\n    .header__subtitle {\\r\\n        width: 80%;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 480px) and (max-width: 781px) {\\r\\n    .container {\\r\\n        padding: 2rem;\\r\\n    }\\r\\n    .header {\\r\\n        margin-bottom: 20px;\\r\\n    }\\r\\n    .header__title {\\r\\n        font-size: 35px;\\r\\n    }\\r\\n    .header__subtitle {\\r\\n        width: 90%;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 320px) and (max-width: 479px) {\\r\\n    .container {\\r\\n        padding: 1.5rem;\\r\\n    }\\r\\n    .header {\\r\\n        margin-bottom: 20px;\\r\\n    }\\r\\n    .header__title {\\r\\n        font-size: 25px;\\r\\n    }\\r\\n    .header__subtitle {\\r\\n        font-size: 18px;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n.skin-test__wrapper {\\r\\n    position: relative;\\r\\n    background-color: #DDF3FF;\\r\\n    padding: 35px 0 0 35px;\\r\\n    border-radius: 10px;\\r\\n    width: 60%;\\r\\n    height: 432px;\\r\\n}\\r\\n@media (min-width: 992px) and (max-width: 1200px) {\\r\\n    .skin-test__wrapper {\\r\\n        width: 70%;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 782px) and (max-width: 991px) {\\r\\n    .skin-test__wrapper {\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 480px) and (max-width: 782px) {\\r\\n    .skin-test__wrapper {\\r\\n        padding: 25px 0 25px 25px;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 320px) and (max-width: 479px) {\\r\\n    .skin-test__wrapper {\\r\\n        padding: 20px ;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n.skin-test__progress-wrapper {\\r\\n    margin-bottom: 25px;\\r\\n}\\r\\n@media (min-width: 480px) and (max-width: 782px) {\\r\\n    .skin-test__progress-wrapper {\\r\\n        margin-bottom: 20px;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 320px) and (max-width: 479px) {\\r\\n    .skin-test__progress-wrapper {\\r\\n        margin-bottom: 15px;\\r\\n    }\\r\\n}\\r\\n.skin-test__progress {\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n}\\r\\n.skin-test__progress_dot {\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    background-color: #89D1F8;\\r\\n    border-radius: 25px;\\r\\n}\\r\\n.skin-test__progress_dot.active {\\r\\n    background-color: #00A5FF;\\r\\n}\\r\\n.skin-test__progress_digit {\\r\\n    font: 15px 'Inter', sans-serif;\\r\\n    color: #9A9A9A;\\r\\n    margin-top: 15px;\\r\\n}\\r\\nfieldset {\\r\\n    border: none;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n.skin-test__question {\\r\\n    font: bold 20px 'Inter', sans-serif;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\nlabel {\\r\\n    display: block;\\r\\n\\tcursor: pointer;\\r\\n    font: 15px 'Inter', sans-serif;\\r\\n    padding-bottom: 15px;\\r\\n}\\r\\nlabel:hover:before {\\r\\n\\tfilter: brightness(120%);\\r\\n}\\r\\ninput[type=radio] {\\r\\n    position: relative;\\r\\n    top: 2px;\\r\\n    width: 15px;\\r\\n    height: 15px;\\r\\n    margin: 0 10px 0 0;\\r\\n}\\r\\n.button-wrapper {\\r\\n    position: absolute;\\r\\n    bottom: 60px;\\r\\n}\\r\\n.submit-button,\\r\\n.previous-button {\\r\\n    cursor: pointer;\\r\\n    background-color: #00A5FF;\\r\\n    border: none;\\r\\n    border-radius: 10px;\\r\\n    padding: 10px 15px;\\r\\n    font: bold 15px 'Inter', sans-serif;\\r\\n    color: #FFFF;\\r\\n}\\r\\n.previous-button {\\r\\n    background-color: #FFFF;\\r\\n    color: #000;\\r\\n    margin-right: 10px;\\r\\n}\\r\\n.products-catalog {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    gap: 30px;\\r\\n}\\r\\n@media (max-width: 800px) {\\r\\n    .products-catalog {\\r\\n        justify-content: space-evenly;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 480px) and (max-width: 782px) {\\r\\n    .products-catalog {\\r\\n        justify-content: space-evenly;\\r\\n    }\\r\\n}\\r\\n.product-card {\\r\\n    position: relative;\\r\\n    width: 240px;\\r\\n}\\r\\n.product-card__image {\\r\\n    -o-object-fit: scale-down;\\r\\n       object-fit: scale-down;\\r\\n    width: 240px;\\r\\n    height: 240px;\\r\\n    background-color: #FFFF;\\r\\n    border: 1px solid #E9E9E9;\\r\\n    border-radius: 6.75px;\\r\\n}\\r\\n.product-card__favorite {\\r\\n    position: absolute;\\r\\n    top: 19px;\\r\\n    right: 17px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.product-card__favorite:hover {\\r\\n   filter:brightness(50%);\\r\\n}\\r\\n.product-card__product-title {\\r\\n    font: 18px 'Inter', sans-serif;\\r\\n    line-height: 130%;\\r\\n    display: -webkit-box;\\r\\n    -webkit-line-clamp: 2;\\r\\n    -webkit-box-orient: vertical;\\r\\n    text-overflow: ellipsis;\\r\\n    overflow: hidden;\\r\\n}\\r\\n.product-card__price-container{\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n    align-items: center;\\r\\n}\\r\\n.product-card__old-price {\\r\\n    font: bold 20px 'Inter', sans-serif;\\r\\n    text-decoration: line-through;\\r\\n\\ttext-decoration-color: #B8B8B8;\\r\\n    color: #B8B8B8;\\r\\n    line-height: 137%;\\r\\n    margin: 0;\\r\\n}\\r\\n.product-card__current-price {\\r\\n    font: bold 27px 'Inter', sans-serif;\\r\\n    line-height: 137%;\\r\\n    margin: 0;\\r\\n}\\r\\n.product-card__current-price>span {\\r\\n    font-size: 20px;\\r\\n}\\r\\n.page-slider {\\r\\n    font: 20px 'Inter', sans-serif;\\r\\n    letter-spacing: 5px;\\r\\n    color: #B8B8B8;\\r\\n    margin: 0;\\r\\n    padding-top: 50px;\\r\\n}\\r\\n.page-one {\\r\\n    color: #00A5FF;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/style.css?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _quiz_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.main */ \"./quiz.main.js\");\n\r\n\r\n\r\n(0,_quiz_main__WEBPACK_IMPORTED_MODULE_1__.showQuestion)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./quiz.main.js":
/*!**********************!*\
  !*** ./quiz.main.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: function() { return /* binding */ main; },\n/* harmony export */   showQuestion: function() { return /* binding */ showQuestion; },\n/* harmony export */   skinTest: function() { return /* binding */ skinTest; }\n/* harmony export */ });\n/* harmony import */ var _quiz_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.module */ \"./quiz.module.js\");\n/* harmony import */ var _result_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.main */ \"./result.main.js\");\n\r\n\r\n\r\nconst NEXT = 'Дальше';\r\nconst PREVIOUS = 'Назад';\r\nconst SHOW_RESULT = 'Узнать результат';\r\n\r\nlet currentPage = 1;\r\nlet questionIndex = 0;\r\nlet answerStorage = new Map();\r\n\r\n\r\nconst main = document.querySelector('.main');\r\n// SECTION SKIN_TEST\r\nlet skinTest = document.createElement('section');\r\nskinTest.className = 'skin-test';\r\nmain.appendChild(skinTest);\r\n// SKIN_TEST__WRAPPER\r\nlet skinTestWrapper = document.createElement('div');\r\nskinTestWrapper.className = 'skin-test__wrapper';\r\nskinTest.appendChild(skinTestWrapper);\r\n// PROGRESS WRAPPER\r\nlet progressWrapper = document.createElement('div');\r\nprogressWrapper.className = 'skin-test__progress-wrapper';\r\nskinTestWrapper.appendChild(progressWrapper);\r\n// DOTS\r\nlet progress = document.createElement('div');\r\nprogress.className = 'skin-test__progress';\r\nprogressWrapper.appendChild(progress);\r\nfor (let i=1; i<4; i++) {\r\n    let dot = document.createElement('div');\r\n    dot.className = 'skin-test__progress_dot';\r\n    dot.dataset.progress = `${i}`;\r\n    if (i == currentPage) {\r\n        dot.classList.toggle('active');\r\n    };\r\n    progress.append(dot);\r\n};\r\n// PAGES\r\nlet pageCounter = document.createElement('div');\r\npageCounter.className = 'skin-test__progress_digit';\r\npageCounter.innerHTML = `Вопрос ${currentPage} из 3`;\r\nprogressWrapper.appendChild(pageCounter);\r\n// FORM\r\nlet form = document.createElement('form');\r\nskinTestWrapper.appendChild(form);\r\n// FIELDSET\r\nlet fieldset = document.createElement('fieldset');\r\nfieldset.className = 'skin-test__field';\r\nform.appendChild(fieldset);\r\n// LEGEND\r\nlet legend = document.createElement('legend');\r\nlegend.className = 'skin-test__question';\r\n// SECTION SKIN_TEST\r\nlet testResult = document.createElement('section');\r\ntestResult.className = 'test-result';\r\n\r\n\r\nfunction clearQuestion() {\r\n    fieldset.innerHTML = '';\r\n    legend.innerHTML = '';\r\n};\r\n\r\nfunction onPageChange() {\r\n    pageCounter.innerHTML = `Вопрос ${currentPage} из 3`;\r\n    let dots = document.querySelectorAll('.skin-test__progress_dot');\r\n    dots.forEach((activeDot) => {\r\n        if (activeDot.dataset.progress == currentPage) {\r\n            activeDot.classList.toggle('active');\r\n        } else {\r\n            activeDot.classList.remove('active');\r\n        };\r\n    });\r\n};\r\n\r\nfunction createAnswers() {\r\n    _quiz_module__WEBPACK_IMPORTED_MODULE_0__.quiz[questionIndex].answers.forEach((answer) => {\r\n        let lable = document.createElement('label');\r\n        let input = document.createElement('input');\r\n        input.type = 'radio';\r\n        input.name = 'answer';\r\n        input.value = answer;\r\n        lable.append(input, answer);\r\n        if (answer === answerStorage.get(questionIndex)) {\r\n            input.checked = true;\r\n        };\r\n        fieldset.appendChild(lable);\r\n    });\r\n};\r\n\r\nfunction createButtons() {\r\n    let buttonWrapper = document.createElement('div')\r\n    buttonWrapper.className = 'button-wrapper'\r\n    fieldset.appendChild(buttonWrapper);\r\n\r\n    _quiz_module__WEBPACK_IMPORTED_MODULE_0__.quiz[questionIndex].button.forEach((buttonText) => {\r\n        let button = document.createElement('button');\r\n        button.append(buttonText);\r\n        if (buttonText === 'Назад') {\r\n            button.className = 'previous-button';\r\n        } else {\r\n            button.className = 'submit-button';\r\n        };\r\n        buttonWrapper.appendChild(button);\r\n        button.onclick = getOnClickAction(buttonText);\r\n    });\r\n};\r\n\r\nfunction showQuestion() {\r\n    fieldset.appendChild(legend);\r\n    legend.append(_quiz_module__WEBPACK_IMPORTED_MODULE_0__.quiz[questionIndex].question);\r\n    createAnswers();\r\n    createButtons();\r\n};\r\n\r\nfunction onNextQuestion(e) {\r\n    e.preventDefault();\r\n    const checkAnswer = fieldset.querySelector('input[type=\"radio\"]:checked');\r\n    if (checkAnswer) {\r\n        answerStorage.set(questionIndex, checkAnswer.value);\r\n        questionIndex++;\r\n        clearQuestion();\r\n        showQuestion();\r\n        currentPage++;\r\n        onPageChange();\r\n    } else {\r\n        alert('Выберите ответ');\r\n    };\r\n};\r\n\r\nfunction onPreviousQuestion(e) {\r\n    e.preventDefault();\r\n    answerStorage.delete(questionIndex);\r\n    questionIndex--;\r\n    clearQuestion();\r\n    showQuestion();\r\n    currentPage--;\r\n    onPageChange();\r\n};\r\nfunction getOnClickAction(buttonText) {\r\n    if (buttonText === NEXT) {\r\n        return onNextQuestion\r\n    } else if (buttonText === PREVIOUS) {\r\n        return onPreviousQuestion\r\n    } else if (buttonText === SHOW_RESULT) {\r\n        return _result_main__WEBPACK_IMPORTED_MODULE_1__.onShowResult\r\n    } else {\r\n        alert('Что-то пошло не так')\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./quiz.main.js?");

/***/ }),

/***/ "./quiz.module.js":
/*!************************!*\
  !*** ./quiz.module.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   quiz: function() { return /* binding */ quiz; }\n/* harmony export */ });\nconst quiz = [\r\n    {\r\n        question:'Сколько вам лет?',\r\n        answers: [\r\n            'Нужны средства для ребенка до 10 лет',\r\n            'Мне меньше 25 лет',\r\n            'От 25 до 35 лет',\r\n            'От 35 до 45 лет',\r\n            'Мне больше 45 лет',\r\n        ],\r\n        button: ['Дальше'],\r\n    },\r\n    {\r\n        question:'Какой у вас тип кожи?',\r\n        answers: [\r\n            'Сухая',\r\n            'Нормальная',\r\n            'Комбинированная',\r\n            'Жирная',\r\n        ],\r\n        button: ['Назад', 'Дальше'],\r\n    },\r\n    {\r\n        question:'Беспокоят ли воспаления на лице?',\r\n        answers: [\r\n            'Да',\r\n            'Нет',\r\n            'Иногда',\r\n        ],\r\n        button: ['Назад', 'Узнать результат'],\r\n    },\r\n];\n\n//# sourceURL=webpack:///./quiz.module.js?");

/***/ }),

/***/ "./result.main.js":
/*!************************!*\
  !*** ./result.main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onShowResult: function() { return /* binding */ onShowResult; }\n/* harmony export */ });\n/* harmony import */ var _quiz_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.main */ \"./quiz.main.js\");\n\r\n// SECTION SKIN_TEST_Result\r\nlet testResult = document.createElement('section');\r\ntestResult.className = 'test-result';\r\nlet pageSlider = document.createElement('p');\r\npageSlider.className = 'page-slider';\r\npageSlider.innerHTML = '1 2 3 ... 13';\r\n\r\nfunction onShowResult(e) {\r\n  e.preventDefault()\r\n  _quiz_main__WEBPACK_IMPORTED_MODULE_0__.skinTest.style.display = 'none';\r\n  _quiz_main__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(testResult);\r\n  let headerTitle = document.querySelector('.header__title');\r\n  headerTitle.innerHTML = 'Результат';\r\n  let headerSubtitle = document.querySelector('.header__subtitle');\r\n  headerSubtitle.innerHTML = 'Мы подобрали для вас наиболее подходящие средства';\r\n};\r\nasync function getResult() {\r\n  try {\r\n      const src = await fetch(\r\n          '../src/assets/json/products.json',\r\n          {\r\n              method: 'GET',\r\n          },\r\n      );\r\n      const products = await src.json();\r\n      return products;\r\n      } catch (error) {\r\n          console.log(error);\r\n      };\r\n};\r\n\r\ngetResult().then(products => {\r\n  const catalog = document.createElement('div');\r\n  catalog.className = 'products-catalog';\r\n  products.forEach(product => {\r\n      const card = document.createElement('div');\r\n      card.className = 'product-card';\r\n      const picture = document.createElement('img');\r\n      picture.style.width = '240px';\r\n      picture.style.height = '240px';\r\n      picture.src = product.image;\r\n      picture.className = 'product-card__image';\r\n      const favorite = document.createElement('img');\r\n      favorite.style.width = '28px';\r\n      favorite.style.height = '25px';\r\n      favorite.src = '../src/assets/images/favorite.svg';\r\n      favorite.className = 'product-card__favorite';\r\n      const info = document.createElement('div');\r\n      info.className = 'product-card__info';\r\n      const productTitle = document.createElement('p');\r\n      productTitle.innerHTML = product.title;\r\n      productTitle.className = 'product-card__product-title';\r\n      const priceContainer = document.createElement('div');\r\n      priceContainer.className = 'product-card__price-container';\r\n      const oldProductPrice = document.createElement('p');\r\n      oldProductPrice.innerHTML =  Number.parseFloat(product.oldPrice).toFixed(2);\r\n      oldProductPrice.className = 'product-card__old-price';\r\n      if (oldProductPrice.innerHTML === 'NaN') {\r\n          oldProductPrice.style.display = 'none';\r\n      }\r\n      const currentProductPrice = document.createElement('p');\r\n      currentProductPrice.innerHTML = `${product.price} <span>руб.</span>`;\r\n      currentProductPrice.className = 'product-card__current-price';\r\n      \r\n      priceContainer.append(...[oldProductPrice, currentProductPrice]);\r\n      info.append(...[productTitle, priceContainer]);\r\n      card.append(...[picture, favorite, info]);\r\n      catalog.append(card);\r\n      testResult.append(catalog, pageSlider);\r\n\r\n  });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./result.main.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;