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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/normalize.css */ \"./src/style/normalize.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/tools */ \"./src/tools/tools.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar util = {\n  formAusnCB: function formAusnCB() {\n    if (formAusn.type.value === 'income') {\n      resultTaxTotal.textContent = (0,_tools_tools__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(formAusn.income.value * 0.08);\n      formAusn.expenses.value = 0;\n    }\n    if (formAusn.type.value === 'expenses') {\n      calcLabelExpenses.style.display = 'block';\n      resultTaxTotal.textContent = (0,_tools_tools__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)((formAusn.income.value - formAusn.expenses.value) * 0.2);\n    }\n  },\n  hidden: function hidden(elem) {\n    elem.style.display = 'none';\n  },\n  show: function show(elem) {\n    elem.style.display = 'block';\n  },\n  formSelfEmp: function formSelfEmp() {\n    var percents = {\n      'individual': 0.04,\n      'legal': 0.06\n    };\n    var setDisplay = _formSelfEmp.addCompensation.checked ? 'block' : 'none';\n    calcComp.style.display = setDisplay;\n    resBlockComp.forEach(function (elem) {\n      return elem.style.display = setDisplay;\n    });\n    var result = Object.entries(percents).map(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n        k = _ref2[0],\n        v = _ref2[1];\n      var res = 0;\n      if (_formSelfEmp[k] === 'individual') {\n        res = _formSelfEmp[k].value * percents[k] || 0;\n      } else {\n        res = _formSelfEmp[k].value * percents[k] || 0;\n      }\n      return [k, res];\n    });\n    _formSelfEmp.compensation.value = _formSelfEmp.compensation.value > 10000 ? 10000 : _formSelfEmp.compensation.value;\n    var map = new Map(result);\n    var tax = map.get('individual') + map.get('legal');\n    var benefit = _formSelfEmp.compensation.value;\n    var resBenefit = _formSelfEmp.individual.value * 0.01 + _formSelfEmp.legal.value * 0.02;\n    var finalBenefit = benefit - resBenefit > 0 ? benefit - resBenefit : 0;\n    var finalTax = tax - (benefit - finalBenefit);\n    resTaxSelfEmp.textContent = (0,_tools_tools__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(tax);\n    resultTaxCompensation.textContent = (0,_tools_tools__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(benefit - finalBenefit);\n    resultTaxRestCompensation.textContent = (0,_tools_tools__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(finalBenefit);\n    resultTaxResult.textContent = (0,_tools_tools__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(finalTax);\n  }\n};\nvar fn2 = util.formAusnCB,\n  hidden = util.hidden,\n  show = util.show,\n  fn3 = util.formSelfEmp;\nvar navigationLinks = document.querySelectorAll('.navigation__link');\nvar calcElems = document.querySelectorAll('.calc');\nvar _loop = function _loop(i) {\n  navigationLinks[i].addEventListener('click', function () {\n    for (var j = 0; j < calcElems.length; j++) {\n      if (navigationLinks[i].dataset.tax === calcElems[j].dataset.tax) {\n        calcElems[j].classList.add('calc_active');\n        navigationLinks[j].classList.add('navigation__link_active');\n      } else {\n        calcElems[j].classList.remove('calc_active');\n        navigationLinks[j].classList.remove('navigation__link_active');\n      }\n    }\n  });\n};\nfor (var i = 0; i < navigationLinks.length; i++) {\n  _loop(i);\n}\n\n// АУСН\nvar ausn = document.querySelector('.ausn'),\n  formAusn = ausn.querySelector('.calc__form'),\n  resultTaxTotal = ausn.querySelector('.result__tax_total'),\n  calcLabelExpenses = ausn.querySelector('.calc__label_expenses');\n\n// Скрываем блок с расходами\nhidden(calcLabelExpenses);\nformAusn.addEventListener('input', fn2);\n\n// Самозанятые\nvar selfEmp = document.querySelector('.self-employment'),\n  _formSelfEmp = selfEmp.querySelector('.calc__form'),\n  resTaxSelfEmp = selfEmp.querySelector('.result__tax_total'),\n  calcComp = selfEmp.querySelector('.calc__label_compensation'),\n  resBlockComp = selfEmp.querySelectorAll('.result__block_compensation'),\n  resultTaxCompensation = selfEmp.querySelector('.result__tax_compensation'),\n  resultTaxRestCompensation = selfEmp.querySelector('.result__tax_rest-compensation'),\n  resultTaxResult = selfEmp.querySelector('.result__tax_result');\nhidden(calcComp); // Скрываем\n\n_formSelfEmp.addEventListener('input', fn3);\n\n// ОСНО\nvar osno = document.querySelector('.osno'),\n  formOsno = osno.querySelector('.calc_form'),\n  radio = osno.querySelectorAll('.calc__radio'),\n  ieBlock = osno.querySelectorAll('.result__block_ie'),\n  oooBlock = osno.querySelector('.result__block_ooo');\nvar clear = function clear() {\n  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {\n    arr[_key] = arguments[_key];\n  }\n  arr.forEach(function (elem) {\n    return elem instanceof NodeList ? elem.forEach(function (e) {\n      return show(e);\n    }) : show(elem);\n  });\n};\nradio.forEach(function (rad) {\n  rad.addEventListener('change', function () {\n    clear(ieBlock, oooBlock);\n    rad.nextElementSibling.textContent === 'ИП' ? hidden(oooBlock) : ieBlock.forEach(function (ie) {\n      return hidden(ie);\n    });\n  });\n});\n\n//# sourceURL=webpack://calcnal/./src/app.js?");

/***/ }),

/***/ "./src/tools/tools.js":
/*!****************************!*\
  !*** ./src/tools/tools.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatCurrency\": () => (/* binding */ formatCurrency)\n/* harmony export */ });\nvar formatCurrency = function formatCurrency(n) {\n  var cur = new Intl.NumberFormat('ru-RU', {\n    style: 'currency',\n    currency: 'RUB',\n    maximumFractionDigits: 2\n  });\n  return cur.format(n);\n};\n\n\n//# sourceURL=webpack://calcnal/./src/tools/tools.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/normalize.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/normalize.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calcnal/./src/style/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/inter-v12-latin_cyrillic-regular.woff2 */ \"./src/fonts/inter-v12-latin_cyrillic-regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/inter-v12-latin_cyrillic-regular.woff */ \"./src/fonts/inter-v12-latin_cyrillic-regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/inter-v12-latin_cyrillic-500.woff2 */ \"./src/fonts/inter-v12-latin_cyrillic-500.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/inter-v12-latin_cyrillic-500.woff */ \"./src/fonts/inter-v12-latin_cyrillic-500.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/inter-v12-latin_cyrillic-700.woff2 */ \"./src/fonts/inter-v12-latin_cyrillic-700.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/inter-v12-latin_cyrillic-700.woff */ \"./src/fonts/inter-v12-latin_cyrillic-700.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/inter-v12-latin_cyrillic-600.woff2 */ \"./src/fonts/inter-v12-latin_cyrillic-600.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/inter-v12-latin_cyrillic-600.woff */ \"./src/fonts/inter-v12-latin_cyrillic-600.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* inter-regular - latin_cyrillic */\\r\\n@font-face {\\r\\n  font-family: 'Inter';\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  src: local(''),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\r\\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\r\\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\r\\n}\\r\\n\\r\\n/* inter-500 - latin_cyrillic */\\r\\n@font-face {\\r\\n  font-family: 'Inter';\\r\\n  font-style: normal;\\r\\n  font-weight: 500;\\r\\n  src: local(''),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff2'),\\r\\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff');\\r\\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\r\\n}\\r\\n\\r\\n/* inter-700 - latin_cyrillic */\\r\\n@font-face {\\r\\n  font-family: 'Inter';\\r\\n  font-style: normal;\\r\\n  font-weight: 700;\\r\\n  src: local(''),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('woff2'),\\r\\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format('woff');\\r\\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\r\\n}\\r\\n\\r\\n/* inter-600 - latin_cyrillic */\\r\\n@font-face {\\r\\n  font-family: 'Inter';\\r\\n  font-style: normal;\\r\\n  font-weight: 600;\\r\\n  src: local(''),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format('woff2'),\\r\\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format('woff');\\r\\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  position: relative;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: inherit;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  min-width: 320px;\\r\\n  min-height: 100vh;\\r\\n  font-family: Inter, sans-serif;\\r\\n  background: radial-gradient(138.89% 303.35% at 140% 66.21%, #1F1E33 0%, #2A224F 87.18%);\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n\\r\\nimg,\\r\\nsvg {\\r\\n  max-width: 100%;\\r\\n  max-height: 100%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\np,\\r\\nfigure,\\r\\nfieldset {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\niframe {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\ninput::-webkit-inner-spin-button {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n\\r\\n.visually-hidden {\\r\\n  position: fixed;\\r\\n  transform: scale(0);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  max-width: 1240px;\\r\\n  padding: 0 30px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.navigation__list {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 30px;\\r\\n  font-weight: 600;\\r\\n  font-size: 20px;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.navigation__link_active {\\r\\n  color: #B6B0D3;\\r\\n  pointer-events: none;\\r\\n\\r\\n}\\r\\n\\r\\n.navigation__link:hover {\\r\\n  color: #8C87A8;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.calc {\\r\\n  padding: 100px 0;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.calc_active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.calc__title {\\r\\n  font-weight: 700;\\r\\n  font-size: 88px;\\r\\n  line-height: 100%;\\r\\n  text-align: center;\\r\\n  margin-bottom: 24px;\\r\\n}\\r\\n\\r\\n.calc__description {\\r\\n  font-size: 18px;\\r\\n  text-align: center;\\r\\n  color: #B6B0D3;\\r\\n  margin: 0 auto 68px;\\r\\n  max-width: 600px;\\r\\n}\\r\\n\\r\\n.calc__wrapper {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n  margin-bottom: 46px;\\r\\n}\\r\\n\\r\\n.calc__form-wrapper {\\r\\n  flex-grow: 1;\\r\\n  max-width: 775px;\\r\\n  background-color: #fff;\\r\\n  color: #3F3E5E;\\r\\n  border: 1px solid #DDDCE0;\\r\\n  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);\\r\\n  border-radius: 16px;\\r\\n  padding: 32px 24px;\\r\\n\\r\\n}\\r\\n\\r\\n.calc__form {\\r\\n  border: 1px solid #DDDCE0;\\r\\n  border-radius: 12px;\\r\\n  padding: 24px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 24px;\\r\\n}\\r\\n\\r\\n.calc__label {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  font-size: 14px;\\r\\n  line-height: 182%;\\r\\n}\\r\\n\\r\\n.calc__label_checkbox {\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n\\r\\n.calc__input {\\r\\n  border: 1px solid #DDDCE0;\\r\\n  border-radius: 8px;\\r\\n  width: 100%;\\r\\n  height: 44px;\\r\\n  padding: 0 15px;\\r\\n}\\r\\n\\r\\n.calc__input:placeholder {\\r\\n  color: rgba(63, 62, 94, 0.4);\\r\\n}\\r\\n\\r\\n.calc__label_checkbox {\\r\\n  position: relative;\\r\\n  display: block;\\r\\n  padding-left: 30px;\\r\\n  line-height: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.calc__checkbox {\\r\\n  position: absolute;\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n  appearance: none;\\r\\n  margin-left: -30px;\\r\\n}\\r\\n\\r\\n.calc__checkbox:before {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  display: block;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  background-color: #ffffff;\\r\\n  box-shadow: 0px 0px 4px rgba(96, 85, 158, 0.35);\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n.calc__checkbox::after {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  top: 6px;\\r\\n  left: 5px;\\r\\n  width: 10px;\\r\\n  height: 5px;\\r\\n  border: 2px solid black;\\r\\n  border-top: none;\\r\\n  border-right: none;\\r\\n  opacity: 0;\\r\\n  transform: rotate(-45deg);\\r\\n}\\r\\n\\r\\n.calc__checkbox:focus-visible {\\r\\n  outline: none\\r\\n}\\r\\n\\r\\n.calc__checkbox:checked:after {\\r\\n  opacity: 1\\r\\n}\\r\\n\\r\\n.calc__checkbox:focus:before {\\r\\n  box-shadow: 0px 1px 4px rgba(68, 89, 109, 0.45);\\r\\n}\\r\\n\\r\\n.calc__checkbox:hover:not(:disabled):before {\\r\\n  box-shadow: 0px 1px 8px rgba(96, 85, 158, 0.55);\\r\\n}\\r\\n\\r\\n.calc__checkbox:disabled:before {\\r\\n  background-color: #cccccc;\\r\\n}\\r\\n\\r\\n.calc__radio-wrapper {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 30px;\\r\\n}\\r\\n.calc__label_radio {\\r\\n  position: relative;\\r\\n  display: block;\\r\\n  padding-left: 30px;\\r\\n  line-height: 20px;\\r\\n  cursor: pointer;\\r\\n  \\r\\n}\\r\\n\\r\\n.calc__radio {\\r\\n  position: absolute;\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n  appearance: none;\\r\\n  margin-left: -30px;\\r\\n}\\r\\n\\r\\n.calc__radio:before {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  display: block;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  background-color: #ffffff;\\r\\n  box-shadow: 0px 0px 4px rgba(96, 85, 158, 0.35);\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.calc__radio::after {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  top: 6px;\\r\\n  left: 5px;\\r\\n  width: 10px;\\r\\n  height: 5px;\\r\\n  border: 2px solid black;\\r\\n  border-top: none;\\r\\n  border-right: none;\\r\\n  opacity: 0;\\r\\n  transform: rotate(-45deg);\\r\\n}\\r\\n\\r\\n.calc__radio:focus-visible {\\r\\n  outline: none\\r\\n}\\r\\n\\r\\n.calc__radio:checked:after {\\r\\n  opacity: 1\\r\\n}\\r\\n\\r\\n.calc__radio:focus:before {\\r\\n  box-shadow: 0px 1px 4px rgba(68, 89, 109, 0.45);\\r\\n}\\r\\n\\r\\n.calc__radio:hover:not(:disabled):before {\\r\\n  box-shadow: 0px 1px 8px rgba(96, 85, 158, 0.55);\\r\\n}\\r\\n\\r\\n.calc__radio:disabled:before {\\r\\n  background-color: #cccccc;\\r\\n}\\r\\n\\r\\n/*  */\\r\\n.calc__result {\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n.result {\\r\\n  max-width: 390px;\\r\\n  background: radial-gradient(118.06% 101.32% at 74.23% -1.32%, #322F58 0%, rgba(24, 21, 43, 0) 100%);\\r\\n  border: 1px solid #3F3E5E;\\r\\n  border-radius: 16px;\\r\\n  padding: 32px 24px;\\r\\n}\\r\\n\\r\\n.result__title {\\r\\n  font-weight: 600;\\r\\n  font-size: 24px;\\r\\n  margin-bottom: 12px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.result__block {\\r\\n  background: rgba(32, 28, 55, 0.4);\\r\\n  border-radius: 8px;\\r\\n  padding: 24px;\\r\\n  text-align: center;\\r\\n  margin-bottom: 18px;\\r\\n}\\r\\n\\r\\n.result__block:last-child {\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.result__caption {\\r\\n  font-weight: 600;\\r\\n  font-size: 14px;\\r\\n  line-height: 182%;\\r\\n  color: #8C87A8;\\r\\n  margin-bottom: 12px;\\r\\n}\\r\\n\\r\\n.result__tax {\\r\\n  font-weight: 600;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.calc__reset {\\r\\n  width: 100%;\\r\\n  background: #2F2B52;\\r\\n  border: 1px solid #3F3E5E;\\r\\n  border-radius: 16px;\\r\\n  padding: 24px;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.calc__btn-reset {\\r\\n  background: #201D38;\\r\\n  border-radius: 1000px;\\r\\n  padding: 19px 24px;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  max-width: 342px;\\r\\n  height: 62px;\\r\\n  color: #FFFFFF;\\r\\n}\\r\\n\\r\\n.calc__btn-reset:hover {\\r\\n  background: #3F3E5E;\\r\\n}\\r\\n\\r\\n.calc__btn-reset:active {\\r\\n  background: #2A224F;\\r\\n}\\r\\n\\r\\n\\r\\n@media (max-width: 968px) {\\r\\n  .navigation__list {\\r\\n    font-size: 16px;\\r\\n  }\\r\\n\\r\\n  .calc {\\r\\n    padding: 80px 0;\\r\\n  }\\r\\n\\r\\n  .calc__title {\\r\\n    font-size: 56px;\\r\\n  }\\r\\n\\r\\n  .calc__form-wrapper,\\r\\n  .result {\\r\\n    padding: 24px 16px;\\r\\n  }\\r\\n\\r\\n  .calc__description {\\r\\n    font-size: 16px;\\r\\n  \\r\\n  }\\r\\n\\r\\n  .calc__form,\\r\\n  .result__block {\\r\\n    padding: 18px;\\r\\n  }\\r\\n\\r\\n  .calc__reset {\\r\\n    padding: 18px;\\r\\n  }\\r\\n\\r\\n  .calc__btn-reset {\\r\\n    padding: 16px 24px;\\r\\n    width: 100%;\\r\\n    max-width: 280px;\\r\\n  }\\r\\n\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .container {\\r\\n    padding: 0 15px;\\r\\n  }\\r\\n\\r\\n  .navigation__list {\\r\\n    max-width: 320px;\\r\\n    margin: 0 auto;\\r\\n    font-size: 16px;\\r\\n  }\\r\\n\\r\\n  .calc {\\r\\n    padding: 60px 0;\\r\\n  }\\r\\n\\r\\n  .calc__title {\\r\\n    font-size: 34px;\\r\\n  }\\r\\n\\r\\n  .calc__description {\\r\\n    font-size: 14px;\\r\\n    margin-bottom: 36px;\\r\\n  }\\r\\n\\r\\n  .calc__wrapper {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .calc__result {\\r\\n    align-self: center;\\r\\n    width: 100%;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calcnal/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calcnal/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://calcnal/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calcnal/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/normalize.css":
/*!*********************************!*\
  !*** ./src/style/normalize.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/normalize.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calcnal/./src/style/normalize.css?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calcnal/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calcnal/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calcnal/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calcnal/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calcnal/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calcnal/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calcnal/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-500.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-500.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4753236838a93bb49962.woff\";\n\n//# sourceURL=webpack://calcnal/./src/fonts/inter-v12-latin_cyrillic-500.woff?");

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-500.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-500.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9f11a4b1948aac797ac.woff2\";\n\n//# sourceURL=webpack://calcnal/./src/fonts/inter-v12-latin_cyrillic-500.woff2?");

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-600.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-600.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e2aa84562f3db1b1af8.woff\";\n\n//# sourceURL=webpack://calcnal/./src/fonts/inter-v12-latin_cyrillic-600.woff?");

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-600.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-600.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b2f33f663cc523817a1.woff2\";\n\n//# sourceURL=webpack://calcnal/./src/fonts/inter-v12-latin_cyrillic-600.woff2?");

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-700.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-700.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fde0b548bdfd88ac57cf.woff\";\n\n//# sourceURL=webpack://calcnal/./src/fonts/inter-v12-latin_cyrillic-700.woff?");

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-700.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-700.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5db734060b489f6a3891.woff2\";\n\n//# sourceURL=webpack://calcnal/./src/fonts/inter-v12-latin_cyrillic-700.woff2?");

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-regular.woff":
/*!*********************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-regular.woff ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91db28991e6c1fc53e06.woff\";\n\n//# sourceURL=webpack://calcnal/./src/fonts/inter-v12-latin_cyrillic-regular.woff?");

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-regular.woff2":
/*!**********************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-regular.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0a21561d96f6b662763.woff2\";\n\n//# sourceURL=webpack://calcnal/./src/fonts/inter-v12-latin_cyrillic-regular.woff2?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;