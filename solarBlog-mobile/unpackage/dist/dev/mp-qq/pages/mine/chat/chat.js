(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/chat/chat"],{

/***/ 167:
/*!**********************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/main.js?{"page":"pages%2Fmine%2Fchat%2Fchat"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/chat/chat.vue */ 168));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 168:
/*!*************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/mine/chat/chat.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=53a657a8& */ 169);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 171);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=scss& */ 175);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/mine/chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 169:
/*!********************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/mine/chat/chat.vue?vue&type=template&id=53a657a8& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=53a657a8& */ 170);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_53a657a8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 170:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/mine/chat/chat.vue?vue&type=template&id=53a657a8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.chatRecordList, function(item, __i0__) {
    var $orig = _vm.__get_orig(item)

    var g0 =
      item.ipAddress !== _vm.ipAddress
        ? _vm.$dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss")
        : null
    var g1 = !(item.ipAddress !== _vm.ipAddress)
      ? _vm.$dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss")
      : null
    return {
      $orig: $orig,
      g0: g0,
      g1: g1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 171:
/*!**************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/mine/chat/chat.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 172);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 172:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/mine/chat/chat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















































































































var _emoji = _interopRequireDefault(__webpack_require__(/*! ../../../common/js/emoji.js */ 173));
var _gif = _interopRequireDefault(__webpack_require__(/*! ../../../common/js/gif.js */ 174));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { data: function data() {return { isLogin: false, scrollHeight: 0, scroll_top: 0, count: 1, viewId: null, // scrollView标识id
      chatRecordList: [], // 历史聊天记录
      quickList: ['老铁666', '厉害了我的天', '留个眼'], inputMessage: '', disabled: true, quickShow: false, emojiShow: false, chatShow: false, emoji_swiper: 0, emojiList: _emoji.default, gifList: _gif.default, faceType: "emoji", ipAddress: "112.66.104.107", ipSource: null, defualtAvatar: "https://images.solargod.cn/solarBlog/config/a2ea0aab3456fd6655785f860034ff45.png", WebsocketMessage: { type: null, data: null } };}, watch: { //监听inputMessage，当他有值时发送按钮才可以点击
    inputMessage: function inputMessage(newVal) {if (newVal.trim() != '') {this.disabled = false;} else {this.disabled = true;}}, chatRecordList: function chatRecordList(newVal) {var len = newVal.length - 1;this.viewId = 'item' + newVal[len].id;} }, onShow: function onShow() {this.isLogin = uni.getStorageSync('isLogin');}, onLoad: function onLoad() {this.connectSocketInit();}, onUnload: function onUnload() {console.log('关闭连接');uni.closeSocket();}, methods: { scrolltolower: function scrolltolower() {console.log('滑到底部');}, chatScroll: function chatScroll(event) {this.scrollHeight = event.detail.scrollHeight;}, switchEmoji: function switchEmoji(faceType) {console.log('faceType', faceType);this.faceType = faceType;}, switchGif: function switchGif(faceType) {console.log('faceType', faceType);this.faceType = faceType;}, selectEmoji: function selectEmoji(key) {console.log('key', key);this.inputMessage += key;}, selectGif: function selectGif(key) {console.log('key', key);this.inputMessage += key;}, isEmojiCharacter: function isEmojiCharacter(substring) {for (var i = 0; i < substring.length; i++) {var hs = substring.charCodeAt(i);if (0xd800 <= hs && hs <= 0xdbff) {if (substring.length > 1) {var ls = substring.charCodeAt(i + 1);var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;if (0x1d000 <= uc && uc <= 0x1f77f) {return true;}}} else if (substring.length > 1) {var ls = substring.charCodeAt(i + 1);if (ls == 0x20e3) {return true;}} else {if (0x2100 <= hs && hs <= 0x27ff) {return true;} else if (0x2B05 <= hs && hs <= 0x2b07) {return true;} else if (0x2934 <= hs && hs <= 0x2935) {return true;} else if (0x3297 <= hs && hs <= 0x3299) {return true;} else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b || hs == 0x2b50) {return true;}}}}, handleSend: function handleSend() {if (this.isLogin) {if (this.isEmojiCharacter(this.inputMessage)) {
          uni.showToast({
            title: '发送失败,内容不要包含键盘表情!',
            icon: 'none' });

        } else {
          // 合并emoji和gif对象
          var faceObject = {};
          Object.assign(faceObject, _emoji.default, _gif.default);
          //解析表情
          var reg = /\[.+?\]/g;
          this.inputMessage = this.inputMessage.replace(reg, function (str) {
            console.log('str', str);
            // 判断是否为.gif后缀
            var lastSpot = faceObject[str].lastIndexOf("."); // 查找最后一个.的索引
            // 获取后缀名(.gif)
            var suffix = faceObject[str].slice(lastSpot, faceObject[str].length);
            if (suffix === ".gif") {
              return (
                "<img src= '" +
                faceObject[str] +
                "' width='60'height='60' style='padding: 0 1px'/>");

            } else {
              console.log('else');
              return "<img src= '" +
              faceObject[str] +
              "' width='22'height='20' style='padding: 0 1px'/>";
            }
          });
          var socketMsg = {
            nickname: uni.getStorageSync('nickname') || this.ipAddress,
            avatar: uni.getStorageSync('avatar') || this.defualtAvatar,
            content: this.inputMessage,
            userId: uni.getStorageSync('userId') || null,
            type: 3,
            ipAddress: this.ipAddress,
            ipSource: this.ipSource };

          this.WebsocketMessage.type = 3;
          this.WebsocketMessage.data = socketMsg;
          uni.sendSocketMessage({
            data: JSON.stringify(this.WebsocketMessage),
            success: function success(res) {
              console.log('发送成功', res);
            },
            fail: function fail(err) {
              console.log('发送失败', err);
            } });

          this.inputMessage = '';
        }
      } else {
        uni.navigateTo({
          url: "/pages/mixLogin/index" });

      }
    },
    selectQuickMsg: function selectQuickMsg(quickMsg) {
      this.inputMessage = quickMsg;
    },
    setViewHidden: function setViewHidden() {
      this.quickShow = false;
      this.emojiShow = false;
    },
    setChatShow: function setChatShow(status) {
      this.chatShow = status;
      this.scroll_top = this.scrollHeight;
    },
    setToolsHidden: function setToolsHidden() {
      this.setViewHidden();
      this.setChatShow(false);
    },
    handleEmojiShow: function handleEmojiShow() {
      if (this.emojiShow) {
        this.emojiShow = false;
        this.setChatShow(false);
      } else {
        this.setViewHidden();
        this.emojiShow = true;
        this.setChatShow(true);
      }
    },
    handleQuickShow: function handleQuickShow() {
      if (this.quickShow) {
        this.quickShow = false;
        this.setChatShow(false);
      } else {
        this.setViewHidden();
        this.quickShow = true;
        this.setChatShow(true);
      }
    },
    connectSocketInit: function connectSocketInit() {
      var self = this;
      uni.connectSocket({
        // url: "ws://127.0.0.1:3300/websocket",
        url: "wss://websocket.solargod.cn",
        success: function success(data) {
          console.log('WebSocket连接成功', data);
        } });


      uni.onSocketOpen(function (res) {
        console.log('WebSocket连接已打开！');
        setInterval(function () {
          var beatMessage = {
            type: 6,
            data: "ping" };

          uni.sendSocketMessage({
            data: JSON.stringify(beatMessage),
            success: function success(res) {
              console.log('心跳重连成功', res);
            },
            fail: function fail(err) {
              console.log('重连失败!请重新启动!', err);
            } });

        }, 30 * 1000);
      });

      uni.onSocketMessage(function (res) {
        var data = JSON.parse(res.data);
        switch (data.type) {
          case 1:
            self.count = data.data;
            break;
          case 2:
            self.chatRecordList = data.data.chatRecordList;
            self.ipAddress = data.data.ipAddress;
            self.ipSource = data.data.ipSource;
            break;
          case 3:
            // 文字消息
            self.chatRecordList.push(data.data);
            break;}


      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 175:
/*!***********************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/mine/chat/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&lang=scss& */ 176);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 176:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/mine/chat/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[167,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9wYWdlcy9taW5lL2NoYXQvY2hhdC52dWU/ZTZiZiIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9wYWdlcy9taW5lL2NoYXQvY2hhdC52dWU/YTBkMyIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9wYWdlcy9taW5lL2NoYXQvY2hhdC52dWU/ZTFiNCIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9wYWdlcy9taW5lL2NoYXQvY2hhdC52dWU/ZTNkZSIsInVuaS1hcHA6Ly8vcGFnZXMvbWluZS9jaGF0L2NoYXQudnVlIiwid2VicGFjazovLy9EOi9BLVNvbGFy5paM5rqQ56CBL3VuaWFwcOWwj+eoi+W6jy9zb2xhckJsb2ctbW9iaWxlL3BhZ2VzL21pbmUvY2hhdC9jaGF0LnZ1ZT81ZTQyIiwid2VicGFjazovLy9EOi9BLVNvbGFy5paM5rqQ56CBL3VuaWFwcOWwj+eoi+W6jy9zb2xhckJsb2ctbW9iaWxlL3BhZ2VzL21pbmUvY2hhdC9jaGF0LnZ1ZT8xMjUyIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSwrRiw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxhQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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LE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0SkE7QUF1SkEscUJBdkpBLCtCQXVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUZBO0FBR0EsZUFIQSxtQkFHQSxJQUhBLEVBR0E7QUFDQTtBQUNBLFNBTEE7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBLDZDQURBO0FBRUEsbUJBRkEsbUJBRUEsR0FGQSxFQUVBO0FBQ0E7QUFDQSxhQUpBO0FBS0EsZ0JBTEEsZ0JBS0EsR0FMQSxFQUtBO0FBQ0E7QUFDQSxhQVBBOztBQVNBLFNBZEEsRUFjQSxTQWRBO0FBZUEsT0FqQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFaQTs7O0FBZUEsT0FqQkE7QUFrQkEsS0F0TUEsRUE1REEsRTs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUFzMEMsQ0FBZ0IsaXhDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBMTFDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvbWluZS9jaGF0L2NoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9taW5lL2NoYXQvY2hhdC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01M2E2NTdhOCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9taW5lL2NoYXQvY2hhdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTYtMCFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzYTY1N2E4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDAgPSBfdm0uX19tYXAoX3ZtLmNoYXRSZWNvcmRMaXN0LCBmdW5jdGlvbihpdGVtLCBfX2kwX18pIHtcbiAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgdmFyIGcwID1cbiAgICAgIGl0ZW0uaXBBZGRyZXNzICE9PSBfdm0uaXBBZGRyZXNzXG4gICAgICAgID8gX3ZtLiRkYXlqcyhpdGVtLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcbiAgICAgICAgOiBudWxsXG4gICAgdmFyIGcxID0gIShpdGVtLmlwQWRkcmVzcyAhPT0gX3ZtLmlwQWRkcmVzcylcbiAgICAgID8gX3ZtLiRkYXlqcyhpdGVtLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcbiAgICAgIDogbnVsbFxuICAgIHJldHVybiB7XG4gICAgICAkb3JpZzogJG9yaWcsXG4gICAgICBnMDogZzAsXG4gICAgICBnMTogZzFcbiAgICB9XG4gIH0pXG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMDogbDBcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY2hhdFwiPlxyXG5cdFx0PCEtLSDlsZXnpLrlnKjnur/kurrmlbAgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm9ubGluZS1ib3hcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJvbmxpbmUtbnVtYmVyXCI+XHJcblx0XHRcdFx05Zyo57q/5Lq65pWwOnt7Y291bnR9feS6ulxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOiBiuWkqeahhiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2hhdC1ib3hcIiA6Y2xhc3M9XCJjaGF0U2hvdz8ndG9vbHMnIDogJydcIiBAdGFwPVwic2V0VG9vbHNIaWRkZW5cIj5cclxuXHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15IGVuYWJsZS1iYWNrLXRvLXRvcCBjbGFzcz1cInNjcm9sbC12aWV3XCIgQHNjcm9sbD1cImNoYXRTY3JvbGxcIiA6c2Nyb2xsLXRvcD1cInNjcm9sbF90b3BcIlxyXG5cdFx0XHRcdDpzY3JvbGwtaW50by12aWV3PVwidmlld0lkXCIgQHNjcm9sbHRvbG93ZXI9XCJzY3JvbGx0b2xvd2VyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzYWdlLWNvbnRhaW5lclwiIHYtZm9yPVwiaXRlbSBpbiBjaGF0UmVjb3JkTGlzdFwiIDppZD1cIidpdGVtJytpdGVtLmlkXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOWFtuS7lueUqOaIt+a2iOaBryAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLmlwQWRkcmVzcyAhPT0gaXBBZGRyZXNzXCIgY2xhc3M9XCJ1c2VyTWVzc2FnZS1ib3hcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDnlKjmiLflpLTlg4/jgIHmmLXnp7DjgIHml6XmnJ8gLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmlja05hbWUtYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidXNlckF2YXRhclwiIDpzcmM9XCJpdGVtLmF2YXRhclwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJuaWNrTmFtZVwiPnt7aXRlbS5uaWNrbmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGF0ZVwiPnt7JGRheWpzKGl0ZW0uY3JlYXRlVGltZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOeUqOaIt+iBiuWkqeWGheWuuSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyQ29udGVudC1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0t5paH5a2X6KGo5oOF5raI5oGv5YaF5a65LS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0udHlwZSA9PT0gM1wiIGNsYXNzPVwidXNlckNvbnRlbnRcIiB2LWh0bWw9XCJpdGVtLmNvbnRlbnRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g6Ieq5bex5Y+R55qE5raI5oGvIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1lbHNlIGNsYXNzPVwibXlNZXNzYWdlLWJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOiHquW3seeahOWktOWDj+OAgeaYteensOOAgeaXpeacnyAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuaWNrTmFtZS1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRhdGVcIj57eyRkYXlqcyhpdGVtLmNyZWF0ZVRpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJuaWNrTmFtZVwiPnt7aXRlbS5uaWNrbmFtZX19PC90ZXh0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJteUF2YXRhclwiIDpzcmM9XCJpdGVtLmF2YXRhclwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDoh6rlt7HogYrlpKnlhoXlrrkgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXlDb250ZW50LWJveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS3mloflrZfooajmg4Xmtojmga/lhoXlrrktLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS50eXBlID09PSAzXCIgY2xhc3M9XCJteUNvbnRlbnRcIiB2LWh0bWw9XCJpdGVtLmNvbnRlbnRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOa4qemmqOaPkOekuiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGlwcy1ib3hcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXBzLXRpdGxlXCI+XHJcblx0XHRcdFx05rip6aao5o+Q56S6XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXBzLWNvbnRlbnRcIj5cclxuXHRcdFx0XHTor7fnpLzosoznlKjor63lj4vlpb3msp/pgJos5aaC5LiN5paH5piO6KGM5Li6LOWwhuWwgeemgei0puWPt+OAglxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOW6lemDqOWMuuWfnyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZm9vdGVyLWJveFwiPlxyXG5cdFx0XHQ8IS0tIOaTjeS9nOWMuuWfnyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb24tYm94XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIiBAdGFwPVwiaGFuZGxlUXVpY2tTaG93KClcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1yb3VuZGRvd25cIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImlucHV0TWVzc2FnZVwiIC8+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIiBAdGFwPVwiaGFuZGxlRW1vamlTaG93KClcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1lbW9qaVwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuXCIgc2l6ZT1cIm1pbmlcIiBAdGFwPVwiaGFuZGxlU2VuZCgpXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJkaXNhYmxlZD8nZGlzYWJsZWQnOicnXCI+5Y+R6YCBPC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOW/q+aNt+i+k+WFpSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJxdWlja0lucHV0LWJveFwiIDpjbGFzcz1cInF1aWNrU2hvdz8nc2hvdyc6JydcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInF1aWNrSW5wdXQtaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHF1aWNrTGlzdFwiIDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0XHRAdGFwPVwic2VsZWN0UXVpY2tNc2coaXRlbSlcIj5cclxuXHRcdFx0XHRcdHt7aXRlbX19XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6KGo5oOF5qCPIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImVtb2ppLWJveFwiIDpjbGFzcz1cImVtb2ppU2hvdz8nc2hvdyc6JydcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVtb2ppLXNjcm9sbC12aWV3LWJveFwiPlxyXG5cdFx0XHRcdFx0PHN3aXBlciBjbGFzcz1cImVtb2ppLXN3aXBlclwiIDpjdXJyZW50PVwiZW1vamlfc3dpcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxzd2lwZXItaXRlbSB2LWlmPVwiZmFjZVR5cGU9PSdlbW9qaSdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN3aXBlci1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsIGtleSkgb2YgZW1vamlMaXN0XCIgOmtleT1cImtleVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJlbW9qaVwiIDpzcmM9XCJ2YWx1ZVwiIG1vZGU9XCJ3aWR0aEZpeFwiIEB0YXA9XCJzZWxlY3RFbW9qaShrZXkpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gdi1pZj1cImZhY2VUeXBlPT0nZ2lmJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3dpcGVyLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSwga2V5KSBvZiBnaWZMaXN0XCIgOmtleT1cImtleVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJlbW9qaVwiIDpzcmM9XCJ2YWx1ZVwiIG1vZGU9XCJ3aWR0aEZpeFwiIEB0YXA9XCJzZWxlY3RHaWYoa2V5KVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0XHRcdDwvc3dpcGVyPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOmAieaLqeihqOaDheexu+Wei+agjyAtLT5cclxuXHRcdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJlbW9qaS10b29scy1zY3JvbGwtdmlld1wiIHNjcm9sbC14PlxyXG5cdFx0XHRcdFx0PHZpZXcgaWQ9XCJlbW9qaV90b29sMVwiIGNsYXNzPVwiZW1vamktdG9vbHMtaXRlbVwiIDpjbGFzcz1cImZhY2VUeXBlPT0nZW1vamknPydzZWxlY3QnOicnXCJcclxuXHRcdFx0XHRcdFx0QHRhcD1cInN3aXRjaEVtb2ppKCdlbW9qaScpXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1lbW9qaSBlbW9qaVwiIC8+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBpZD1cImVtb2ppX3Rvb2wyXCIgY2xhc3M9XCJlbW9qaS10b29scy1pdGVtXCIgOmNsYXNzPVwiZmFjZVR5cGU9PSdnaWYnPydzZWxlY3QnOicnXCJcclxuXHRcdFx0XHRcdFx0QHRhcD1cInN3aXRjaEdpZignZ2lmJylcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBpY29uLUdJRiBlbW9qaVwiIC8+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGVtb2ppTGlzdCBmcm9tICcuLi8uLi8uLi9jb21tb24vanMvZW1vamkuanMnXHJcblx0aW1wb3J0IGdpZkxpc3QgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2pzL2dpZi5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzTG9naW46IGZhbHNlLFxyXG5cdFx0XHRcdHNjcm9sbEhlaWdodDogMCxcclxuXHRcdFx0XHRzY3JvbGxfdG9wOiAwLFxyXG5cdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdHZpZXdJZDogbnVsbCwgLy8gc2Nyb2xsVmlld+agh+ivhmlkXHJcblx0XHRcdFx0Y2hhdFJlY29yZExpc3Q6IFtdLCAvLyDljoblj7LogYrlpKnorrDlvZVcclxuXHRcdFx0XHRxdWlja0xpc3Q6IFsn6ICB6ZOBNjY2JywgJ+WOieWus+S6huaIkeeahOWkqScsICfnlZnkuKrnnLwnXSxcclxuXHRcdFx0XHRpbnB1dE1lc3NhZ2U6ICcnLFxyXG5cdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxyXG5cdFx0XHRcdHF1aWNrU2hvdzogZmFsc2UsXHJcblx0XHRcdFx0ZW1vamlTaG93OiBmYWxzZSxcclxuXHRcdFx0XHRjaGF0U2hvdzogZmFsc2UsXHJcblx0XHRcdFx0ZW1vamlfc3dpcGVyOiAwLFxyXG5cdFx0XHRcdGVtb2ppTGlzdDogZW1vamlMaXN0LFxyXG5cdFx0XHRcdGdpZkxpc3Q6IGdpZkxpc3QsXHJcblx0XHRcdFx0ZmFjZVR5cGU6IFwiZW1vamlcIixcclxuXHRcdFx0XHRpcEFkZHJlc3M6IFwiMTEyLjY2LjEwNC4xMDdcIixcclxuXHRcdFx0XHRpcFNvdXJjZTogbnVsbCxcclxuXHRcdFx0XHRkZWZ1YWx0QXZhdGFyOiBcImh0dHBzOi8vaW1hZ2VzLnNvbGFyZ29kLmNuL3NvbGFyQmxvZy9jb25maWcvYTJlYTBhYWIzNDU2ZmQ2NjU1Nzg1Zjg2MDAzNGZmNDUucG5nXCIsXHJcblx0XHRcdFx0V2Vic29ja2V0TWVzc2FnZToge1xyXG5cdFx0XHRcdFx0dHlwZTogbnVsbCxcclxuXHRcdFx0XHRcdGRhdGE6IG51bGxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0Ly/nm5HlkKxpbnB1dE1lc3NhZ2XvvIzlvZPku5bmnInlgLzml7blj5HpgIHmjInpkq7miY3lj6/ku6Xngrnlh7tcclxuXHRcdFx0aW5wdXRNZXNzYWdlKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmIChuZXdWYWwudHJpbSgpICE9ICcnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRpc2FibGVkID0gZmFsc2VcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYXRSZWNvcmRMaXN0KG5ld1ZhbCkge1xyXG5cdFx0XHRcdGNvbnN0IGxlbiA9IG5ld1ZhbC5sZW5ndGggLSAxXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3SWQgPSAnaXRlbScgKyBuZXdWYWxbbGVuXS5pZFxyXG5cdFx0XHRcdH0sIDEwMClcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBBUFBcclxuXHRcdFx0XHR0aGlzLnZpZXdJZCA9ICdpdGVtJyArIG5ld1ZhbFtsZW5dLmlkXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHR0aGlzLmlzTG9naW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2lzTG9naW4nKVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5jb25uZWN0U29ja2V0SW5pdCgpXHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCflhbPpl63ov57mjqUnKVxyXG5cdFx0XHR1bmkuY2xvc2VTb2NrZXQoKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0c2Nyb2xsdG9sb3dlcigpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5ruR5Yiw5bqV6YOoJylcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhdFNjcm9sbChldmVudCkge1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsSGVpZ2h0ID0gZXZlbnQuZGV0YWlsLnNjcm9sbEhlaWdodDtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpdGNoRW1vamkoZmFjZVR5cGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZmFjZVR5cGUnLCBmYWNlVHlwZSlcclxuXHRcdFx0XHR0aGlzLmZhY2VUeXBlID0gZmFjZVR5cGVcclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpdGNoR2lmKGZhY2VUeXBlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhY2VUeXBlJywgZmFjZVR5cGUpXHJcblx0XHRcdFx0dGhpcy5mYWNlVHlwZSA9IGZhY2VUeXBlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdEVtb2ppKGtleSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdrZXknLCBrZXkpXHJcblx0XHRcdFx0dGhpcy5pbnB1dE1lc3NhZ2UgKz0ga2V5XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdEdpZihrZXkpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygna2V5Jywga2V5KVxyXG5cdFx0XHRcdHRoaXMuaW5wdXRNZXNzYWdlICs9IGtleVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc0Vtb2ppQ2hhcmFjdGVyKHN1YnN0cmluZykge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgaHMgPSBzdWJzdHJpbmcuY2hhckNvZGVBdChpKTtcclxuXHRcdFx0XHRcdGlmICgweGQ4MDAgPD0gaHMgJiYgaHMgPD0gMHhkYmZmKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzdWJzdHJpbmcubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBscyA9IHN1YnN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdWMgPSAoKGhzIC0gMHhkODAwKSAqIDB4NDAwKSArIChscyAtIDB4ZGMwMCkgKyAweDEwMDAwO1xyXG5cdFx0XHRcdFx0XHRcdGlmICgweDFkMDAwIDw9IHVjICYmIHVjIDw9IDB4MWY3N2YpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdWJzdHJpbmcubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbHMgPSBzdWJzdHJpbmcuY2hhckNvZGVBdChpICsgMSk7XHJcblx0XHRcdFx0XHRcdGlmIChscyA9PSAweDIwZTMpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKDB4MjEwMCA8PSBocyAmJiBocyA8PSAweDI3ZmYpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgweDJCMDUgPD0gaHMgJiYgaHMgPD0gMHgyYjA3KSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoMHgyOTM0IDw9IGhzICYmIGhzIDw9IDB4MjkzNSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKDB4MzI5NyA8PSBocyAmJiBocyA8PSAweDMyOTkpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChocyA9PSAweGE5IHx8IGhzID09IDB4YWUgfHwgaHMgPT0gMHgzMDNkIHx8IGhzID09IDB4MzAzMCB8fFxyXG5cdFx0XHRcdFx0XHRcdGhzID09IDB4MmI1NSB8fCBocyA9PSAweDJiMWMgfHwgaHMgPT0gMHgyYjFiIHx8XHJcblx0XHRcdFx0XHRcdFx0aHMgPT0gMHgyYjUwKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGhhbmRsZVNlbmQoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMb2dpbikge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaXNFbW9qaUNoYXJhY3Rlcih0aGlzLmlucHV0TWVzc2FnZSkpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflj5HpgIHlpLHotKUs5YaF5a655LiN6KaB5YyF5ZCr6ZSu55uY6KGo5oOFIScsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDlkIjlubZlbW9qaeWSjGdpZuWvueixoVxyXG5cdFx0XHRcdFx0XHRjb25zdCBmYWNlT2JqZWN0ID0ge31cclxuXHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihmYWNlT2JqZWN0LCBlbW9qaUxpc3QsIGdpZkxpc3QpXHJcblx0XHRcdFx0XHRcdC8v6Kej5p6Q6KGo5oOFXHJcblx0XHRcdFx0XHRcdHZhciByZWcgPSAvXFxbLis/XFxdL2c7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5wdXRNZXNzYWdlID0gdGhpcy5pbnB1dE1lc3NhZ2UucmVwbGFjZShyZWcsIGZ1bmN0aW9uKHN0cikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzdHInLCBzdHIpXHJcblx0XHRcdFx0XHRcdFx0Ly8g5Yik5pat5piv5ZCm5Li6LmdpZuWQjue8gFxyXG5cdFx0XHRcdFx0XHRcdGxldCBsYXN0U3BvdCA9IGZhY2VPYmplY3Rbc3RyXS5sYXN0SW5kZXhPZihcIi5cIikgLy8g5p+l5om+5pyA5ZCO5LiA5LiqLueahOe0ouW8lVxyXG5cdFx0XHRcdFx0XHRcdC8vIOiOt+WPluWQjue8gOWQjSguZ2lmKVxyXG5cdFx0XHRcdFx0XHRcdGxldCBzdWZmaXggPSBmYWNlT2JqZWN0W3N0cl0uc2xpY2UobGFzdFNwb3QsIGZhY2VPYmplY3Rbc3RyXS5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdFx0aWYgKHN1ZmZpeCA9PT0gXCIuZ2lmXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiPGltZyBzcmM9ICdcIiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZhY2VPYmplY3Rbc3RyXSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiJyB3aWR0aD0nNjAnaGVpZ2h0PSc2MCcgc3R5bGU9J3BhZGRpbmc6IDAgMXB4Jy8+XCJcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlbHNlJylcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXCI8aW1nIHNyYz0gJ1wiICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmFjZU9iamVjdFtzdHJdICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCInIHdpZHRoPScyMidoZWlnaHQ9JzIwJyBzdHlsZT0ncGFkZGluZzogMCAxcHgnLz5cIik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dmFyIHNvY2tldE1zZyA9IHtcclxuXHRcdFx0XHRcdFx0XHRuaWNrbmFtZTogdW5pLmdldFN0b3JhZ2VTeW5jKCduaWNrbmFtZScpIHx8IHRoaXMuaXBBZGRyZXNzLFxyXG5cdFx0XHRcdFx0XHRcdGF2YXRhcjogdW5pLmdldFN0b3JhZ2VTeW5jKCdhdmF0YXInKSB8fCB0aGlzLmRlZnVhbHRBdmF0YXIsXHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogdGhpcy5pbnB1dE1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dXNlcklkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJZCcpIHx8IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogMyxcclxuXHRcdFx0XHRcdFx0XHRpcEFkZHJlc3M6IHRoaXMuaXBBZGRyZXNzLFxyXG5cdFx0XHRcdFx0XHRcdGlwU291cmNlOiB0aGlzLmlwU291cmNlLFxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR0aGlzLldlYnNvY2tldE1lc3NhZ2UudHlwZSA9IDM7XHJcblx0XHRcdFx0XHRcdHRoaXMuV2Vic29ja2V0TWVzc2FnZS5kYXRhID0gc29ja2V0TXNnO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2VuZFNvY2tldE1lc3NhZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHRoaXMuV2Vic29ja2V0TWVzc2FnZSksXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflj5HpgIHmiJDlip8nLCByZXMpXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WPkemAgeWksei0pScsIGVycilcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoaXMuaW5wdXRNZXNzYWdlID0gJydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL21peExvZ2luL2luZGV4XCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxlY3RRdWlja01zZyhxdWlja01zZykge1xyXG5cdFx0XHRcdHRoaXMuaW5wdXRNZXNzYWdlID0gcXVpY2tNc2dcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0Vmlld0hpZGRlbigpIHtcclxuXHRcdFx0XHR0aGlzLnF1aWNrU2hvdyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZW1vamlTaG93ID0gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldENoYXRTaG93KHN0YXR1cykge1xyXG5cdFx0XHRcdHRoaXMuY2hhdFNob3cgPSBzdGF0dXM7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxfdG9wID0gdGhpcy5zY3JvbGxIZWlnaHQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFRvb2xzSGlkZGVuKCkge1xyXG5cdFx0XHRcdHRoaXMuc2V0Vmlld0hpZGRlbigpO1xyXG5cdFx0XHRcdHRoaXMuc2V0Q2hhdFNob3coZmFsc2UpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYW5kbGVFbW9qaVNob3coKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZW1vamlTaG93KSB7XHJcblx0XHRcdFx0XHR0aGlzLmVtb2ppU2hvdyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRDaGF0U2hvdyhmYWxzZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0Vmlld0hpZGRlbigpO1xyXG5cdFx0XHRcdFx0dGhpcy5lbW9qaVNob3cgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRDaGF0U2hvdyh0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGhhbmRsZVF1aWNrU2hvdygpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5xdWlja1Nob3cpIHtcclxuXHRcdFx0XHRcdHRoaXMucXVpY2tTaG93ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLnNldENoYXRTaG93KGZhbHNlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRWaWV3SGlkZGVuKCk7XHJcblx0XHRcdFx0XHR0aGlzLnF1aWNrU2hvdyA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLnNldENoYXRTaG93KHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y29ubmVjdFNvY2tldEluaXQoKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXNcclxuXHRcdFx0XHR1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHRcdFx0XHQvLyB1cmw6IFwid3M6Ly8xMjcuMC4wLjE6MzMwMC93ZWJzb2NrZXRcIixcclxuXHRcdFx0XHRcdHVybDogXCJ3c3M6Ly93ZWJzb2NrZXQuc29sYXJnb2QuY25cIixcclxuXHRcdFx0XHRcdHN1Y2Nlc3MoZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5oiQ5YqfJywgZGF0YSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR1bmkub25Tb2NrZXRPcGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeW3suaJk+W8gO+8gScpO1xyXG5cdFx0XHRcdFx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZhciBiZWF0TWVzc2FnZSA9IHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiA2LFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IFwicGluZ1wiXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdHVuaS5zZW5kU29ja2V0TWVzc2FnZSh7XHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoYmVhdE1lc3NhZ2UpLFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5b+D6Lez6YeN6L+e5oiQ5YqfJywgcmVzKVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfph43ov57lpLHotKUh6K+36YeN5paw5ZCv5YqoIScsIGVycilcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LCAzMCAqIDEwMDApXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHVuaS5vblNvY2tldE1lc3NhZ2UoZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuXHRcdFx0XHRcdHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNvdW50ID0gZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNoYXRSZWNvcmRMaXN0ID0gZGF0YS5kYXRhLmNoYXRSZWNvcmRMaXN0XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5pcEFkZHJlc3MgPSBkYXRhLmRhdGEuaXBBZGRyZXNzO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuaXBTb3VyY2UgPSBkYXRhLmRhdGEuaXBTb3VyY2U7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdFx0XHQvLyDmloflrZfmtojmga9cclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNoYXRSZWNvcmRMaXN0LnB1c2goZGF0YS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5jaGF0IHtcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0fVxyXG5cclxuXHQudGlwcy1ib3gge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdFx0bWFyZ2luOiAxMHJweCAwO1xyXG5cclxuXHRcdC50aXBzLXRpdGxlIHtcclxuXHRcdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHQudGlwcy1jb250ZW50IHtcclxuXHRcdFx0Y29sb3I6IGdyYXk7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5vbmxpbmUtYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA2MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nOiAxMHJweDtcclxuXHRcdHotaW5kZXg6IDk5OTk7XHJcblxyXG5cdFx0Lm9ubGluZS1udW1iZXIge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0Y29sb3I6ICNGMEFENEU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY2hhdC1ib3gge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDMyNy4yN3JweCk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHJcblx0XHQvKiAjaWZuZGVmIEg1ICovXHJcblx0XHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAyODBycHgpO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHR0cmFuc2l0aW9uOiBoZWlnaHQgLjE1cztcclxuXHJcblx0XHQuc2Nyb2xsLXZpZXcge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHJcblx0XHRcdC51c2VyTWVzc2FnZS1ib3gge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdG1hcmdpbjogMTBycHggMDtcclxuXHJcblx0XHRcdFx0Lm5pY2tOYW1lLWJveCB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0XHRcdFx0LnVzZXJBdmF0YXIge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5uaWNrTmFtZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMDdBRkY7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LmRhdGUge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC51c2VyQ29udGVudC1ib3gge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiA4MS44MXJweDtcclxuXHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDI1NC41NHJweDtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDYzLjYzcnB4O1xyXG5cclxuXHRcdFx0XHRcdC51c2VyQ29udGVudCB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMTIuNzJycHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4IDIwcHggMjBweCAyMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm15TWVzc2FnZS1ib3gge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdG1hcmdpbjogMTBycHg7XHJcblxyXG5cdFx0XHRcdC8vICY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdC8vIFx0bWFyZ2luLXRvcDogNTQuNTRycHg7XHJcblx0XHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0XHQubmlja05hbWUtYm94IHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cclxuXHRcdFx0XHRcdC5teUF2YXRhciB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lm5pY2tOYW1lIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzAwN0FGRjtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuZGF0ZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm15Q29udGVudC1ib3gge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0cGFkZGluZy1yaWdodDogODEuODFycHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDI1NC41NHJweDtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDYzLjYzcnB4O1xyXG5cclxuXHRcdFx0XHRcdC5teUNvbnRlbnQge1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMi43MnJweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMTJiN2Y1O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweCA1cHggMjBweCAyMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmNoYXQtYm94LnRvb2xzIHtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjU0LjU0cnB4KTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBINSAqL1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTAwcnB4KTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0dHJhbnNpdGlvbjogaGVpZ2h0IC4xNXM7XHJcblx0fVxyXG5cclxuXHQuZm9vdGVyLWJveCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pIC8gMik7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiA5OTk5OTk7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblxyXG5cdFx0LmFjdGlvbi1ib3gge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMHJweDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuXHRcdFx0LmFjdGlvbiB7XHJcblx0XHRcdFx0bWFyZ2luOiBhdXRvIDEwcnB4O1xyXG5cclxuXHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGV4dCB7XHJcblx0XHRcdFx0XHRjb2xvcjogZ3JheTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNDhycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuYnRuIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMUI0RkU7XHJcblx0XHRcdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0XHRcdHdpZHRoOiA5MHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNTBycHg7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogNTBycHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cnB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRcdC8qICNpZmRlZiBNUC1RUSAqL1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMC41cnB4IDA7XHJcblx0XHRcdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5idG4uZGlzYWJsZWQge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2FhZThmNTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pbnB1dCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI0Y4RjhGODtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA5MC45cnB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMjcuMjdycHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG8gMTBycHg7XHJcblx0XHRcdFx0bWluLXdpZHRoOiA2NSU7XHJcblx0XHRcdFx0bWluLWhlaWdodDogNjBycHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pbnB1dCsuYWN0aW9uIHtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQucXVpY2tJbnB1dC1ib3gsXHJcblx0XHQuZW1vamktYm94IHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRvdmVyZmxvdy15OiBhdXRvO1xyXG5cdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdHRyYW5zaXRpb246IGhlaWdodCAuMTVzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5xdWlja0lucHV0LWJveCB7XHJcblx0XHRcdC5xdWlja0lucHV0LWl0ZW0ge1xyXG5cdFx0XHRcdGhlaWdodDogODEuODFycHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDgxLjgxcnB4O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnF1aWNrSW5wdXQtaXRlbSsucXVpY2tJbnB1dC1pdGVtIHtcclxuXHRcdFx0XHRib3JkZXItdG9wOiAycnB4IHNvbGlkICNmM2YzZjM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuZW1vamktYm94IHtcclxuXHRcdFx0LmVtb2ppLXNjcm9sbC12aWV3LWJveCB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHQuZW1vamktc3dpcGVyIHtcclxuXHRcdFx0XHRcdGhlaWdodDogMjcyLjcycnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnN3aXBlci1pdGVtIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDkuMDlycHg7XHJcblxyXG5cdFx0XHRcdFx0LmVtb2ppIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAxNC41NHJweCAyOS42M3JweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDQ1LjQ1cnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ1LjQ1cnB4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g5Lqk6ZuGXHJcblx0XHQucXVpY2tJbnB1dC1ib3guc2hvdyxcclxuXHRcdC5lbW9qaS1ib3guc2hvdyB7XHJcblx0XHRcdGhlaWdodDogMzI3LjI3cnB4O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBoZWlnaHQgLjE1cztcclxuXHRcdH1cclxuXHJcblx0XHQuZW1vamktdG9vbHMtc2Nyb2xsLXZpZXcge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0LmVtb2ppLXRvb2xzLWl0ZW0ge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogMnJweDtcclxuXHRcdFx0XHRib3JkZXItcmlnaHQ6IDJycHggc29saWQgI0Y4RjhGODtcclxuXHJcblx0XHRcdFx0LmVtb2ppIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAzNi4zNnJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMzYuMzZycHggIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdG1hcmdpbjogNS40NXJweCAxOC4xOHJweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdHRvcDogMy42M3JweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5lbW9qaS10b29scy1pdGVtLnNlbGVjdCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2NmY2ZjZjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vY2hhdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vY2hhdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjUwMjg3NDg5MDA1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL0Jpbi9EZXNrdG9wL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==