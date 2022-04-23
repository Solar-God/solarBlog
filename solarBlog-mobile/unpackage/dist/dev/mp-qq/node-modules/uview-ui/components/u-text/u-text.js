(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/uview-ui/components/u-text/u-text"],{

/***/ 404:
/*!***************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/node_modules/uview-ui/components/u-text/u-text.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-text.vue?vue&type=template&id=15831087&scoped=true& */ 405);
/* harmony import */ var _u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-text.vue?vue&type=script&lang=js& */ 407);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_text_vue_vue_type_style_index_0_id_15831087_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-text.vue?vue&type=style&index=0&id=15831087&lang=scss&scoped=true& */ 412);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15831087",
  null,
  false,
  _u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-text/u-text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 405:
/*!**********************************************************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/node_modules/uview-ui/components/u-text/u-text.vue?vue&type=template&id=15831087&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-text.vue?vue&type=template&id=15831087&scoped=true& */ 406);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_template_id_15831087_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 406:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/node_modules/uview-ui/components/u-text/u-text.vue?vue&type=template&id=15831087&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 395))
    },
    uLink: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-link/u-link */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-link/u-link")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-link/u-link.vue */ 455))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 =
    _vm.show && _vm.mode === "price" ? _vm.__get_style([_vm.valueStyle]) : null
  var g0 = _vm.show && _vm.prefixIcon ? _vm.$u.addStyle(_vm.iconStyle) : null
  var s1 =
    _vm.show && !(_vm.mode === "link") && _vm.openType && _vm.isMp
      ? _vm.__get_style([_vm.valueStyle])
      : null
  var s2 =
    _vm.show && !(_vm.mode === "link") && !(_vm.openType && _vm.isMp)
      ? _vm.__get_style([_vm.valueStyle])
      : null
  var g1 = _vm.show && _vm.suffixIcon ? _vm.$u.addStyle(_vm.iconStyle) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        g0: g0,
        s1: s1,
        s2: s2,
        g1: g1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 407:
/*!****************************************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/node_modules/uview-ui/components/u-text/u-text.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-text.vue?vue&type=script&lang=js& */ 408);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 408:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/node_modules/uview-ui/components/u-text/u-text.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;







































































var _value = _interopRequireDefault(__webpack_require__(/*! ./value.js */ 409));
var _button = _interopRequireDefault(__webpack_require__(/*! ../../libs/mixin/button.js */ 410));
var _openType = _interopRequireDefault(__webpack_require__(/*! ../../libs/mixin/openType.js */ 411));
var _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 353));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
//
//
//
//
//
/**
 * Text 文本
 * @description 此组件集成了文本类在项目中的常用功能，包括状态，拨打电话，格式化日期，*替换，超链接...等功能。 您大可不必在使用特殊文本时自己定义，text组件几乎涵盖您能使用的大部分场景。
 * @tutorial https://www.uviewui.com/components/loading.html
 * @property {String} 					type		主题颜色
 * @property {Boolean} 					show		是否显示（默认 true ）
 * @property {String | Number}			text		显示的值
 * @property {String}					prefixIcon	前置图标
 * @property {String} 					suffixIcon	后置图标
 * @property {String} 					mode		文本处理的匹配模式 text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
 * @property {String} 					href		mode=link下，配置的链接
 * @property {String | Function} 		format		格式化规则
 * @property {Boolean} 					call		mode=phone时，点击文本是否拨打电话（默认 false ）
 * @property {String} 					openType	小程序的打开方式
 * @property {Boolean} 					bold		是否粗体，默认normal（默认 false ）
 * @property {Boolean} 					block		是否块状（默认 false ）
 * @property {String | Number} 			lines		文本显示的行数，如果设置，超出此行数，将会显示省略号
 * @property {String} 					color		文本颜色（默认 '#303133' ）
 * @property {String | Number} 			size		字体大小（默认 15 ）
 * @property {Object | String} 			iconStyle	图标的样式 （默认 {fontSize: '15px'} ）
 * @property {String} 					decoration	文字装饰，下划线，中划线等，可选值 none|underline|line-through（默认 'none' ）
 * @property {Object | String | Number}	margin		外边距，对象、字符串，数值形式均可（默认 0 ）
 * @property {String | Number} 			lineHeight	文本行高
 * @property {String} 					align		文本对齐方式，可选值left|center|right（默认 'left' ）
 * @property {String} 					wordWrap	文字换行，可选值break-word|normal|anywhere（默认 'normal' ）
 * @event {Function} click  点击触发事件
 * @example <u--text text="我用十年青春,赴你最后之约"></u--text>
 */var _default = { name: 'u--text', mixins: [uni.$u.mpMixin, uni.$u.mixin, _value.default, _button.default, _openType.default, _props.default], computed: { valueStyle: function valueStyle() {var style = { textDecoration: this.decoration, fontWeight: this.bold ? 'bold' : 'normal', wordWrap: this.wordWrap, fontSize: uni.$u.addUnit(this.size) };!this.type && (style.color = this.color);this.isNvue && this.lines && (style.lines = this.lines);this.lineHeight && (style.lineHeight = uni.$u.addUnit(this.lineHeight));!this.isNvue && this.block && (style.display = 'block');return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));}, isNvue: function isNvue() {var nvue = false;return nvue;}, isMp: function isMp() {var mp = false;mp = true;return mp;} }, data: function data() {return {};}, methods: { clickHandler: function clickHandler() {// 如果为手机号模式，拨打电话
      if (this.call && this.mode === 'phone' && uni.$u.test.mobile(this.text)) {uni.makePhoneCall({ phoneNumber: this.text });}this.$emit('click');} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 412:
/*!*************************************************************************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/node_modules/uview-ui/components/u-text/u-text.vue?vue&type=style&index=0&id=15831087&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_style_index_0_id_15831087_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-text.vue?vue&type=style&index=0&id=15831087&lang=scss&scoped=true& */ 413);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_style_index_0_id_15831087_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_style_index_0_id_15831087_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_style_index_0_id_15831087_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_style_index_0_id_15831087_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_text_vue_vue_type_style_index_0_id_15831087_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 413:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/node_modules/uview-ui/components/u-text/u-text.vue?vue&type=style&index=0&id=15831087&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9ub2RlX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRleHQvdS10ZXh0LnZ1ZT9iNzVkIiwid2VicGFjazovLy9EOi9BLVNvbGFy5paM5rqQ56CBL3VuaWFwcOWwj+eoi+W6jy9zb2xhckJsb2ctbW9iaWxlL25vZGVfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtdGV4dC91LXRleHQudnVlPzg5YzQiLCJ3ZWJwYWNrOi8vL0Q6L0EtU29sYXLmlozmupDnoIEvdW5pYXBw5bCP56iL5bqPL3NvbGFyQmxvZy1tb2JpbGUvbm9kZV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10ZXh0L3UtdGV4dC52dWU/ZGY4MSIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9ub2RlX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRleHQvdS10ZXh0LnZ1ZT82NzFjIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRleHQvdS10ZXh0LnZ1ZSIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9ub2RlX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRleHQvdS10ZXh0LnZ1ZT9mZTIxIiwid2VicGFjazovLy9EOi9BLVNvbGFy5paM5rqQ56CBL3VuaWFwcOWwj+eoi+W6jy9zb2xhckJsb2ctbW9iaWxlL25vZGVfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtdGV4dC91LXRleHQudnVlPzIzNDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErSDtBQUMvSDtBQUMwRDtBQUNMO0FBQ3NDOzs7QUFHM0Y7QUFDMEw7QUFDMUwsZ0JBQWdCLGlNQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxzR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxUkFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEscVJBRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQXlzQixDQUFnQixvdEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN3RTd0QjtBQUNBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQTRCQSxFQUNBLGVBREEsRUFHQSwwR0FIQSxFQVFBLFlBQ0EsVUFEQSx3QkFDQSxDQUNBLGNBQ0EsK0JBREEsRUFFQSx5Q0FGQSxFQUdBLHVCQUhBLEVBSUEsbUNBSkEsR0FNQSx5Q0FDQSx3REFDQSxvQkFDQSxrREFEQSxFQUVBLHdEQUNBLGtFQUNBLENBZEEsRUFlQSxNQWZBLG9CQWVBLENBQ0EsaUJBSUEsWUFDQSxDQXJCQSxFQXNCQSxJQXRCQSxrQkFzQkEsQ0FDQSxlQUVBLFVBRUEsVUFDQSxDQTVCQSxFQVJBLEVBc0NBLElBdENBLGtCQXNDQSxDQUNBLFVBQ0EsQ0F4Q0EsRUF5Q0EsV0FDQSxZQURBLDBCQUNBLENBQ0E7QUFDQSxnRkFDQSxvQkFDQSxzQkFEQSxJQUdBLENBQ0Esb0JBQ0EsQ0FUQSxFQXpDQSxFOzs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUFBO0FBQWcyQyxDQUFnQiwyeUNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FwM0M7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRleHQvdS10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91LXRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ODMxMDg3JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdS10ZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdS10ZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91LXRleHQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTU4MzEwODcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTU4MzEwODdcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10ZXh0L3UtdGV4dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTYtMCFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtdGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTU4MzEwODcmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICB1SWNvbjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIiAqLyBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvbi52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdUxpbms6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxpbmsvdS1saW5rXCIgKi8gXCJ1dmlldy11aS9jb21wb25lbnRzL3UtbGluay91LWxpbmsudnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBzMCA9XG4gICAgX3ZtLnNob3cgJiYgX3ZtLm1vZGUgPT09IFwicHJpY2VcIiA/IF92bS5fX2dldF9zdHlsZShbX3ZtLnZhbHVlU3R5bGVdKSA6IG51bGxcbiAgdmFyIGcwID0gX3ZtLnNob3cgJiYgX3ZtLnByZWZpeEljb24gPyBfdm0uJHUuYWRkU3R5bGUoX3ZtLmljb25TdHlsZSkgOiBudWxsXG4gIHZhciBzMSA9XG4gICAgX3ZtLnNob3cgJiYgIShfdm0ubW9kZSA9PT0gXCJsaW5rXCIpICYmIF92bS5vcGVuVHlwZSAmJiBfdm0uaXNNcFxuICAgICAgPyBfdm0uX19nZXRfc3R5bGUoW192bS52YWx1ZVN0eWxlXSlcbiAgICAgIDogbnVsbFxuICB2YXIgczIgPVxuICAgIF92bS5zaG93ICYmICEoX3ZtLm1vZGUgPT09IFwibGlua1wiKSAmJiAhKF92bS5vcGVuVHlwZSAmJiBfdm0uaXNNcClcbiAgICAgID8gX3ZtLl9fZ2V0X3N0eWxlKFtfdm0udmFsdWVTdHlsZV0pXG4gICAgICA6IG51bGxcbiAgdmFyIGcxID0gX3ZtLnNob3cgJiYgX3ZtLnN1ZmZpeEljb24gPyBfdm0uJHUuYWRkU3R5bGUoX3ZtLmljb25TdHlsZSkgOiBudWxsXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgczA6IHMwLFxuICAgICAgICBnMDogZzAsXG4gICAgICAgIHMxOiBzMSxcbiAgICAgICAgczI6IHMyLFxuICAgICAgICBnMTogZzFcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtdGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS10ZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cbiAgICA8dmlld1xuICAgICAgICBjbGFzcz1cInUtdGV4dFwiXG4gICAgICAgIDpjbGFzcz1cIltdXCJcbiAgICAgICAgdi1pZj1cInNob3dcIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICBtYXJnaW46IG1hcmdpbixcblx0XHRcdGp1c3RpZnlDb250ZW50OiBhbGlnbiA9PT0gJ2xlZnQnID8gJ2ZsZXgtc3RhcnQnIDogYWxpZ24gPT09ICdjZW50ZXInID8gJ2NlbnRlcicgOiAnZmxleC1lbmQnXG4gICAgICAgIH1cIlxuICAgICAgICBAdGFwPVwiY2xpY2tIYW5kbGVyXCJcbiAgICA+XG4gICAgICAgIDx0ZXh0XG4gICAgICAgICAgICA6Y2xhc3M9XCJbJ3UtdGV4dF9fcHJpY2UnLCB0eXBlICYmIGB1LXRleHRfX3ZhbHVlLS0ke3R5cGV9YF1cIlxuICAgICAgICAgICAgdi1pZj1cIm1vZGUgPT09ICdwcmljZSdcIlxuICAgICAgICAgICAgOnN0eWxlPVwiW3ZhbHVlU3R5bGVdXCJcbiAgICAgICAgICAgID7vv6U8L3RleHRcbiAgICAgICAgPlxuICAgICAgICA8dmlldyBjbGFzcz1cInUtdGV4dF9fcHJlZml4LWljb25cIiB2LWlmPVwicHJlZml4SWNvblwiPlxuICAgICAgICAgICAgPHUtaWNvblxuICAgICAgICAgICAgICAgIDpuYW1lPVwicHJlZml4SWNvblwiXG4gICAgICAgICAgICAgICAgOmN1c3RvbVN0eWxlPVwiJHUuYWRkU3R5bGUoaWNvblN0eWxlKVwiXG4gICAgICAgICAgICA+PC91LWljb24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHUtbGlua1xuICAgICAgICAgICAgdi1pZj1cIm1vZGUgPT09ICdsaW5rJ1wiXG4gICAgICAgICAgICA6dGV4dD1cInZhbHVlXCJcbiAgICAgICAgICAgIDpocmVmPVwiaHJlZlwiXG4gICAgICAgICAgICB1bmRlckxpbmVcbiAgICAgICAgPjwvdS1saW5rPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwib3BlblR5cGUgJiYgaXNNcFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwidS1yZXNldC1idXR0b24gdS10ZXh0X192YWx1ZVwiXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwiW3ZhbHVlU3R5bGVdXCJcbiAgICAgICAgICAgICAgICA6ZGF0YS1pbmRleD1cImluZGV4XCJcbiAgICAgICAgICAgICAgICA6b3BlblR5cGU9XCJvcGVuVHlwZVwiXG4gICAgICAgICAgICAgICAgQGdldHVzZXJpbmZvPVwib25HZXRVc2VySW5mb1wiXG4gICAgICAgICAgICAgICAgQGNvbnRhY3Q9XCJvbkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgIEBnZXRwaG9uZW51bWJlcj1cIm9uR2V0UGhvbmVOdW1iZXJcIlxuICAgICAgICAgICAgICAgIEBlcnJvcj1cIm9uRXJyb3JcIlxuICAgICAgICAgICAgICAgIEBsYXVuY2hhcHA9XCJvbkxhdW5jaEFwcFwiXG4gICAgICAgICAgICAgICAgQG9wZW5zZXR0aW5nPVwib25PcGVuU2V0dGluZ1wiXG4gICAgICAgICAgICAgICAgOmxhbmc9XCJsYW5nXCJcbiAgICAgICAgICAgICAgICA6c2Vzc2lvbi1mcm9tPVwic2Vzc2lvbkZyb21cIlxuICAgICAgICAgICAgICAgIDpzZW5kLW1lc3NhZ2UtdGl0bGU9XCJzZW5kTWVzc2FnZVRpdGxlXCJcbiAgICAgICAgICAgICAgICA6c2VuZC1tZXNzYWdlLXBhdGg9XCJzZW5kTWVzc2FnZVBhdGhcIlxuICAgICAgICAgICAgICAgIDpzZW5kLW1lc3NhZ2UtaW1nPVwic2VuZE1lc3NhZ2VJbWdcIlxuICAgICAgICAgICAgICAgIDpzaG93LW1lc3NhZ2UtY2FyZD1cInNob3dNZXNzYWdlQ2FyZFwiXG4gICAgICAgICAgICAgICAgOmFwcC1wYXJhbWV0ZXI9XCJhcHBQYXJhbWV0ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHZhbHVlIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRleHRcbiAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgY2xhc3M9XCJ1LXRleHRfX3ZhbHVlXCJcbiAgICAgICAgICAgIDpzdHlsZT1cIlt2YWx1ZVN0eWxlXVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICAgICAgICAgdHlwZSAmJiBgdS10ZXh0X192YWx1ZS0tJHt0eXBlfWAsXG4gICAgICAgICAgICAgICAgbGluZXMgJiYgYHUtbGluZS0ke2xpbmVzfWBcbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgPnt7IHZhbHVlIH19PC90ZXh0XG4gICAgICAgID5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ1LXRleHRfX3N1ZmZpeC1pY29uXCIgdi1pZj1cInN1ZmZpeEljb25cIj5cbiAgICAgICAgICAgIDx1LWljb25cbiAgICAgICAgICAgICAgICA6bmFtZT1cInN1ZmZpeEljb25cIlxuICAgICAgICAgICAgICAgIDpjdXN0b21TdHlsZT1cIiR1LmFkZFN0eWxlKGljb25TdHlsZSlcIlxuICAgICAgICAgICAgPjwvdS1pY29uPlxuICAgICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlLmpzJ1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi8uLi9saWJzL21peGluL2J1dHRvbi5qcydcbmltcG9ydCBvcGVuVHlwZSBmcm9tICcuLi8uLi9saWJzL21peGluL29wZW5UeXBlLmpzJ1xuaW1wb3J0IHByb3BzIGZyb20gJy4vcHJvcHMuanMnXG4vKipcbiAqIFRleHQg5paH5pysXG4gKiBAZGVzY3JpcHRpb24g5q2k57uE5Lu26ZuG5oiQ5LqG5paH5pys57G75Zyo6aG555uu5Lit55qE5bi455So5Yqf6IO977yM5YyF5ous54q25oCB77yM5ouo5omT55S16K+d77yM5qC85byP5YyW5pel5pyf77yMKuabv+aNou+8jOi2hemTvuaOpS4uLuetieWKn+iDveOAgiDmgqjlpKflj6/kuI3lv4XlnKjkvb/nlKjnibnmrormlofmnKzml7boh6rlt7HlrprkuYnvvIx0ZXh057uE5Lu25Yeg5LmO5ra155uW5oKo6IO95L2/55So55qE5aSn6YOo5YiG5Zy65pmv44CCXG4gKiBAdHV0b3JpYWwgaHR0cHM6Ly93d3cudXZpZXd1aS5jb20vY29tcG9uZW50cy9sb2FkaW5nLmh0bWxcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdFx0XHRcdFx0dHlwZVx0XHTkuLvpopjpopzoibJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gXHRcdFx0XHRcdHNob3dcdFx05piv5ZCm5pi+56S677yI6buY6K6kIHRydWUg77yJXG4gKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdFx0XHR0ZXh0XHRcdOaYvuekuueahOWAvFxuICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0XHRcdHByZWZpeEljb25cdOWJjee9ruWbvuagh1xuICogQHByb3BlcnR5IHtTdHJpbmd9IFx0XHRcdFx0XHRzdWZmaXhJY29uXHTlkI7nva7lm77moIdcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdFx0XHRcdFx0bW9kZVx0XHTmlofmnKzlpITnkIbnmoTljLnphY3mqKHlvI8gdGV4dC3mma7pgJrmlofmnKzvvIxwcmljZS3ku7fmoLzvvIxwaG9uZS3miYvmnLrlj7fvvIxuYW1lLeWnk+WQje+8jGRhdGUt5pel5pyf77yMbGluay3otoXpk77mjqVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdFx0XHRcdFx0aHJlZlx0XHRtb2RlPWxpbmvkuIvvvIzphY3nva7nmoTpk77mjqVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgRnVuY3Rpb259IFx0XHRmb3JtYXRcdFx05qC85byP5YyW6KeE5YiZXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFx0XHRcdFx0XHRjYWxsXHRcdG1vZGU9cGhvbmXml7bvvIzngrnlh7vmlofmnKzmmK/lkKbmi6jmiZPnlLXor53vvIjpu5jorqQgZmFsc2Ug77yJXG4gKiBAcHJvcGVydHkge1N0cmluZ30gXHRcdFx0XHRcdG9wZW5UeXBlXHTlsI/nqIvluo/nmoTmiZPlvIDmlrnlvI9cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gXHRcdFx0XHRcdGJvbGRcdFx05piv5ZCm57KX5L2T77yM6buY6K6kbm9ybWFs77yI6buY6K6kIGZhbHNlIO+8iVxuICogQHByb3BlcnR5IHtCb29sZWFufSBcdFx0XHRcdFx0YmxvY2tcdFx05piv5ZCm5Z2X54q277yI6buY6K6kIGZhbHNlIO+8iVxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9IFx0XHRcdGxpbmVzXHRcdOaWh+acrOaYvuekuueahOihjOaVsO+8jOWmguaenOiuvue9ru+8jOi2heWHuuatpOihjOaVsO+8jOWwhuS8muaYvuekuuecgeeVpeWPt1xuICogQHByb3BlcnR5IHtTdHJpbmd9IFx0XHRcdFx0XHRjb2xvclx0XHTmlofmnKzpopzoibLvvIjpu5jorqQgJyMzMDMxMzMnIO+8iVxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9IFx0XHRcdHNpemVcdFx05a2X5L2T5aSn5bCP77yI6buY6K6kIDE1IO+8iVxuICogQHByb3BlcnR5IHtPYmplY3QgfCBTdHJpbmd9IFx0XHRcdGljb25TdHlsZVx05Zu+5qCH55qE5qC35byPIO+8iOm7mOiupCB7Zm9udFNpemU6ICcxNXB4J30g77yJXG4gKiBAcHJvcGVydHkge1N0cmluZ30gXHRcdFx0XHRcdGRlY29yYXRpb25cdOaWh+Wtl+ijhemlsO+8jOS4i+WIkue6v++8jOS4reWIkue6v+etie+8jOWPr+mAieWAvCBub25lfHVuZGVybGluZXxsaW5lLXRocm91Z2jvvIjpu5jorqQgJ25vbmUnIO+8iVxuICogQHByb3BlcnR5IHtPYmplY3QgfCBTdHJpbmcgfCBOdW1iZXJ9XHRtYXJnaW5cdFx05aSW6L656Led77yM5a+56LGh44CB5a2X56ym5Liy77yM5pWw5YC85b2i5byP5Z2H5Y+v77yI6buY6K6kIDAg77yJXG4gKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn0gXHRcdFx0bGluZUhlaWdodFx05paH5pys6KGM6auYXG4gKiBAcHJvcGVydHkge1N0cmluZ30gXHRcdFx0XHRcdGFsaWduXHRcdOaWh+acrOWvuem9kOaWueW8j++8jOWPr+mAieWAvGxlZnR8Y2VudGVyfHJpZ2h077yI6buY6K6kICdsZWZ0JyDvvIlcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdFx0XHRcdFx0d29yZFdyYXBcdOaWh+Wtl+aNouihjO+8jOWPr+mAieWAvGJyZWFrLXdvcmR8bm9ybWFsfGFueXdoZXJl77yI6buY6K6kICdub3JtYWwnIO+8iVxuICogQGV2ZW50IHtGdW5jdGlvbn0gY2xpY2sgIOeCueWHu+inpuWPkeS6i+S7tlxuICogQGV4YW1wbGUgPHUtLXRleHQgdGV4dD1cIuaIkeeUqOWNgeW5tOmdkuaYpSzotbTkvaDmnIDlkI7kuYvnuqZcIj48L3UtLXRleHQ+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAndS0tdGV4dCcsXG4gICAgLy8gI2lmZGVmIE1QXG4gICAgbWl4aW5zOiBbdW5pLiR1Lm1wTWl4aW4sIHVuaS4kdS5taXhpbiwgdmFsdWUsIGJ1dHRvbiwgb3BlblR5cGUsIHByb3BzXSxcbiAgICAvLyAjZW5kaWZcbiAgICAvLyAjaWZuZGVmIE1QXG4gICAgbWl4aW5zOiBbdW5pLiR1Lm1wTWl4aW4sIHVuaS4kdS5taXhpbiwgdmFsdWUsIHByb3BzXSxcbiAgICAvLyAjZW5kaWZcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB2YWx1ZVN0eWxlKCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IHRoaXMuZGVjb3JhdGlvbixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiB0aGlzLmJvbGQgPyAnYm9sZCcgOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICB3b3JkV3JhcDogdGhpcy53b3JkV3JhcCxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogdW5pLiR1LmFkZFVuaXQodGhpcy5zaXplKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIXRoaXMudHlwZSAmJiAoc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yKVxuICAgICAgICAgICAgdGhpcy5pc052dWUgJiYgdGhpcy5saW5lcyAmJiAoc3R5bGUubGluZXMgPSB0aGlzLmxpbmVzKVxuICAgICAgICAgICAgdGhpcy5saW5lSGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgKHN0eWxlLmxpbmVIZWlnaHQgPSB1bmkuJHUuYWRkVW5pdCh0aGlzLmxpbmVIZWlnaHQpKVxuICAgICAgICAgICAgIXRoaXMuaXNOdnVlICYmIHRoaXMuYmxvY2sgJiYgKHN0eWxlLmRpc3BsYXkgPSAnYmxvY2snKVxuICAgICAgICAgICAgcmV0dXJuIHVuaS4kdS5kZWVwTWVyZ2Uoc3R5bGUsIHVuaS4kdS5hZGRTdHlsZSh0aGlzLmN1c3RvbVN0eWxlKSlcbiAgICAgICAgfSxcbiAgICAgICAgaXNOdnVlKCkge1xuICAgICAgICAgICAgbGV0IG52dWUgPSBmYWxzZVxuICAgICAgICAgICAgLy8gI2lmZGVmIEFQUC1OVlVFXG4gICAgICAgICAgICBudnVlID0gdHJ1ZVxuICAgICAgICAgICAgLy8gI2VuZGlmXG4gICAgICAgICAgICByZXR1cm4gbnZ1ZVxuICAgICAgICB9LFxuICAgICAgICBpc01wKCkge1xuICAgICAgICAgICAgbGV0IG1wID0gZmFsc2VcbiAgICAgICAgICAgIC8vICNpZmRlZiBNUFxuICAgICAgICAgICAgbXAgPSB0cnVlXG4gICAgICAgICAgICAvLyAjZW5kaWZcbiAgICAgICAgICAgIHJldHVybiBtcFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5Li65omL5py65Y+35qih5byP77yM5ouo5omT55S16K+dXG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsICYmIHRoaXMubW9kZSA9PT0gJ3Bob25lJyAmJiB1bmkuJHUudGVzdC5tb2JpbGUodGhpcy50ZXh0KSkge1xuICAgICAgICAgICAgICAgIHVuaS5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMudGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGltcG9ydCAnLi4vLi4vbGlicy9jc3MvY29tcG9uZW50cy5zY3NzJztcblxuLnUtdGV4dCB7XG4gICAgQGluY2x1ZGUgZmxleChyb3cpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxleDogMTtcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHR3aWR0aDogMTAwJTtcblx0LyogI2VuZGlmICovXG5cbiAgICAmX19wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICR1LWNvbnRlbnQtY29sb3I7XG4gICAgfVxuXG4gICAgJl9fdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIEBpbmNsdWRlIGZsZXg7XG4gICAgICAgIGNvbG9yOiAkdS1jb250ZW50LWNvbG9yO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC8vIGZsZXg6IDE7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICYtLXByaW1hcnkge1xuICAgICAgICAgICAgY29sb3I6ICR1LXByaW1hcnk7XG4gICAgICAgIH1cblxuICAgICAgICAmLS13YXJuaW5nIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdS13YXJuaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tc3VjY2VzcyB7XG4gICAgICAgICAgICBjb2xvcjogJHUtc3VjY2VzcztcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWluZm8ge1xuICAgICAgICAgICAgY29sb3I6ICR1LWluZm87XG4gICAgICAgIH1cblxuICAgICAgICAmLS1lcnJvciB7XG4gICAgICAgICAgICBjb2xvcjogJHUtZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1tYWluIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdS1tYWluLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tY29udGVudCB7XG4gICAgICAgICAgICBjb2xvcjogJHUtY29udGVudC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLXRpcHMge1xuICAgICAgICAgICAgY29sb3I6ICR1LXRpcHMtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1saWdodCB7XG4gICAgICAgICAgICBjb2xvcjogJHUtbGlnaHQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91LXRleHQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTU4MzEwODcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtdGV4dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNTgzMTA4NyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjUwMjg3NDg5NTEzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL0Jpbi9EZXNrdG9wL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-text/u-text-create-component',
    {
        'node-modules/uview-ui/components/u-text/u-text-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(404))
        })
    },
    [['node-modules/uview-ui/components/u-text/u-text-create-component']]
]);
