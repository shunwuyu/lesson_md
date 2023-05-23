/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/comColorButton/src/color-button.vue?vue&type=template&id=3279c760


const _hoisted_1 = { class: "color-button" }
const _hoisted_2 = ["disabled"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("span", _hoisted_1, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", {
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)([$props.type, $props.disabled?'disabled':'']),
      disabled: $props.disabled
    }, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default")
    ], 10, _hoisted_2)
  ]))
}
;// CONCATENATED MODULE: ./packages/comColorButton/src/color-button.vue?vue&type=template&id=3279c760

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/comColorButton/src/color-button.vue?vue&type=script&lang=js

  /* harmony default export */ var color_buttonvue_type_script_lang_js = ({
    name:'ComColorButton',
    props:{
        type:{
        type:String,
        default:'primary'
      },
        disabled:{
        type:Boolean,
        default:false
      },
    }, 
    data () {
      return {
  
      }
    }
  });
  
;// CONCATENATED MODULE: ./packages/comColorButton/src/color-button.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-37.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-37.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-37.use[2]!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-37.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/comColorButton/src/color-button.vue?vue&type=style&index=0&id=3279c760&lang=styl
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/comColorButton/src/color-button.vue?vue&type=style&index=0&id=3279c760&lang=styl

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./packages/comColorButton/src/color-button.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(color_buttonvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var color_button = (__exports__);
;// CONCATENATED MODULE: ./packages/comColorButton/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
color_button.install = function (Vue) {
  Vue.component(color_button.name, color_button)
}

// 默认导出组件
/* harmony default export */ var comColorButton = (color_button);

;// CONCATENATED MODULE: ./packages/index.js

// 存储组件列表
const components = [
  comColorButton
] 
/* 
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue) {
  // 判断是否安装
  if(install.installed){return}
  // 遍历所有组件
  components.map(item => {
    Vue.component(item.name,item)
  })
}
// 判断是否引入文件
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
  install,
  ComColorButton: comColorButton
});


;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vcolorpicker.common.js.map