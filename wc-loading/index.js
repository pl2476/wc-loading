module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".wc-loading__lock{height:100%;width:100%;background:hsla(0,0%,100%,0);position:fixed;top:0;left:0;bottom:0;right:0;z-index:1001}.wc-loading__center{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  "data-v-a9b920ae",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*
	在实际使用中有时 就是不想要标题, 如果按照以前的方式, 那么
	需要传入: title: ' ', 这样不舒服
	所以增加一个判断: 只要用户配置存在某个字段且不等于 undefined, 那么就使用
	用户提供的字段值
*/
var isExists = function isExists(val) {
	if (typeof val !== 'undefined') {
		return true;
	}
	return false;
};

/* harmony default export */ __webpack_exports__["default"] = (function (src, target) {
	for (var key in target) {
		src[key] = isExists(target[key]) ? target[key] : src[key];
	}
});

/***/ })

/******/ });

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var preventPageScroll = function preventPageScroll(e) {
	return e.preventDefault();
};

/* harmony default export */ __webpack_exports__["default"] = ({
	prevent: function prevent() {
		document.addEventListener('touchmove', preventPageScroll, false);
	},
	recover: function recover() {
		document.removeEventListener('touchmove', preventPageScroll, false);
	}
});

/***/ })

/******/ });

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wc_utils_merge__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wc_utils_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wc_utils_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wc_utils_prevent_page_scroll__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wc_utils_prevent_page_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_wc_utils_prevent_page_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wc_loading_effects_Loading_Juhua_Zhifubao__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wc_loading_effects_Loading_Juhua_Zhifubao___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wc_loading_effects_Loading_Juhua_Zhifubao__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_base_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_base_css__);







var globalConfig = {};
var instance = void 0;

var forbiddenScroll = function forbiddenScroll(e) {
    return e.preventDefault();
};

var loading = {
    // 显示 loading 
    // 如果 start 传递了 component 那么就使用它.
    start: function start(component) {
        var LoadingConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(component || globalConfig.component || __WEBPACK_IMPORTED_MODULE_3__wc_loading_effects_Loading_Juhua_Zhifubao___default.a);
        var initInstance = function initInstance() {
            instance = new LoadingConstructor({
                el: document.createElement('div')
            });
            // 创建母公司
            var parent = document.createElement('div');
            parent.appendChild(instance.$el);

            // add center class
            instance.$el.classList.add('wc-loading__center');

            instance.$el = parent;
            document.body.appendChild(instance.$el);
        };
        initInstance();
        // 防止自定义的字段没有设置默认值
        // instance.show = true;

        // 显示元素
        // 减少使用者的约束, 直接通过控制属性, 而不是要求用户添加 show 字段.
        instance.$el.style.display = 'block';

        // 设置 mask 的 rgba
        if (globalConfig.rgba) {
            instance.$el.style.backgroundColor = globalConfig.rgba;
        }

        // 为根元素添加 lock class
        instance.$el.classList.add('wc-loading__lock');

        // 阻止滚动
        __WEBPACK_IMPORTED_MODULE_2_wc_utils_prevent_page_scroll___default.a.prevent();
    },

    // 隐藏 loading
    stop: function stop() {
        // instance.show = false;
        instance.$el.style.display = 'none';
        // 恢复原状
        __WEBPACK_IMPORTED_MODULE_2_wc_utils_prevent_page_scroll___default.a.recover();
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        globalConfig = options;
        Vue.prototype.$loading = loading;
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".container[data-v-a9b920ae]{width:80px;height:80px;-webkit-border-radius:13px;border-radius:13px;background-color:rgba(0,0,0,.7)}.base[data-v-a9b920ae],.top[data-v-a9b920ae]{height:30%}.spinner[data-v-a9b920ae]{height:42%;width:42%;position:relative;margin:0 auto}.spinner div[data-v-a9b920ae]{width:12%;height:26%;background-color:#fff;position:absolute;left:44.5%;top:37%;opacity:0;-webkit-border-radius:30%;-webkit-animation:fade 1s linear infinite}.spinner div.bar1[data-v-a9b920ae]{-webkit-transform:rotate(0deg) translateY(-142%);-webkit-animation-delay:0s}.spinner div.bar2[data-v-a9b920ae]{-webkit-transform:rotate(30deg) translateY(-142%);-webkit-animation-delay:-.9167s}.spinner div.bar3[data-v-a9b920ae]{-webkit-transform:rotate(60deg) translateY(-142%);-webkit-animation-delay:-.833s}.spinner div.bar4[data-v-a9b920ae]{-webkit-transform:rotate(90deg) translateY(-142%);-webkit-animation-delay:-.75s}.spinner div.bar5[data-v-a9b920ae]{-webkit-transform:rotate(120deg) translateY(-142%);-webkit-animation-delay:-.667s}.spinner div.bar6[data-v-a9b920ae]{-webkit-transform:rotate(150deg) translateY(-142%);-webkit-animation-delay:-.5833s}.spinner div.bar7[data-v-a9b920ae]{-webkit-transform:rotate(180deg) translateY(-142%);-webkit-animation-delay:-.5s}.spinner div.bar8[data-v-a9b920ae]{-webkit-transform:rotate(210deg) translateY(-142%);-webkit-animation-delay:-.41667s}.spinner div.bar9[data-v-a9b920ae]{-webkit-transform:rotate(240deg) translateY(-142%);-webkit-animation-delay:-.333s}.spinner div.bar10[data-v-a9b920ae]{-webkit-transform:rotate(270deg) translateY(-142%);-webkit-animation-delay:-.25s}.spinner div.bar11[data-v-a9b920ae]{-webkit-transform:rotate(300deg) translateY(-142%);-webkit-animation-delay:-.1667s}.spinner div.bar12[data-v-a9b920ae]{-webkit-transform:rotate(330deg) translateY(-142%);-webkit-animation-delay:-.0833s}@-webkit-keyframes fade{0%{opacity:1}to{opacity:.25}}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "top"
  }), _vm._v(" "), _c('div', {
    staticClass: "spinner"
  }, [_c('div', {
    staticClass: "bar1"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar2"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar3"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar4"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar5"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar6"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar7"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar8"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar9"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar10"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar11"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar12"
  })]), _vm._v(" "), _c('div', {
    staticClass: "base"
  })])
}]}

/***/ })
/******/ ]);