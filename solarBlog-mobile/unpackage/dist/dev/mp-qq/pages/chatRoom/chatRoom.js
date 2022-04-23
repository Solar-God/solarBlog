(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chatRoom/chatRoom"],{

/***/ 217:
/*!***********************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/main.js?{"page":"pages%2FchatRoom%2FchatRoom"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _chatRoom = _interopRequireDefault(__webpack_require__(/*! ./pages/chatRoom/chatRoom.vue */ 218));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chatRoom.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 218:
/*!****************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/chatRoom/chatRoom.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatRoom.vue?vue&type=template&id=35e753e6& */ 219);
/* harmony import */ var _chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatRoom.vue?vue&type=script&lang=js& */ 221);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chatRoom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatRoom.vue?vue&type=style&index=0&lang=scss& */ 223);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chatRoom/chatRoom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 219:
/*!***********************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/chatRoom/chatRoom.vue?vue&type=template&id=35e753e6& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatRoom.vue?vue&type=template&id=35e753e6& */ 220);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_template_id_35e753e6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 220:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/chatRoom/chatRoom.vue?vue&type=template&id=35e753e6& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

    var g0 = _vm.$dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss")
    return {
      $orig: $orig,
      g0: g0
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

/***/ 221:
/*!*****************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/chatRoom/chatRoom.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatRoom.vue?vue&type=script&lang=js& */ 222);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 222:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/chatRoom/chatRoom.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  data: function data() {
    return {
      isLogin: false,
      count: 1,
      viewHeight: null,
      footerHeight: 0,
      keyBoardHeight: 0,
      height: null,
      viewId: null, // scrollView标识id
      chatRecordList: [], // 历史聊天记录
      message: null,
      disable: true, // 禁用发送按钮
      ipAddress: "112.66.104.107",
      ipSource: null,
      defualtAvatar: "https://images.solargod.cn/solarBlog/config/a2ea0aab3456fd6655785f860034ff45.png",
      WebsocketMessage: {
        type: null,
        data: null } };


  },
  //获取屏幕可视区域高度（除去导航栏）
  onReady: function onReady() {
    var self = this;
    uni.getSystemInfo({
      success: function success(res) {
        self.viewHeight = res.windowHeight - res.statusBarHeight - 55;
      } });

  },

  watch: {
    //监听message，当他有值时发送按钮才可以点击
    message: function message(newVal) {
      if (newVal.trim() != '') {
        this.disable = false;
      } else {
        this.disable = true;
      }
    },
    chatRecordList: function chatRecordList(newVal) {
      var len = newVal.length - 1;
      this.viewId = 'item' + newVal[len].id;
      // console.log('this.viewId', this.viewId)
    } },

  mounted: function mounted() {var _this = this;
    //这里获取footer元素的高度，根据不同平台用的方式不同，对于uniapp的dom定位方法应该是通用的。特别注意，如果页面没有渲染出元素，可用this.$nextTick
    this.$nextTick(function () {
      // uniapp
      var footer = uni.createSelectorQuery().in(_this);
      footer.select('.footer').boundingClientRect(function (data) {
        _this.footerHeight = data.height;
        _this.height = _this.viewHeight - _this.footerHeight;
        // console.log('this.footerHeight', this.footerHeight)
        // console.log('this.heightFoot', this.height)
      }).exec();
      // H5
      // this.footerHeight = this.$refs.footer.$el.offsetHeight
      // this.height = this.viewHeight - this.footerHeight
    });
  },
  onLoad: function onLoad() {
    this.connectSocketInit();
    // this.listenKeyboard()
  },
  onShow: function onShow() {
    this.isLogin = uni.getStorageSync('isLogin');
  },
  onUnload: function onUnload() {
    this.destoryListenKeyboard();
  },
  methods: {
    scroll: function scroll() {
      console.log('滑到底部');
    },
    listenKeyboard: function listenKeyboard() {var _this2 = this;
      //监听键盘的高度变化，让sroll-view的高度随之变化
      uni.onKeyboardHeightChange(function (res) {
        var keyBoardHeight = res.height;
        // console.log('keyBoardHeight', keyBoardHeight)
        if (_this2.keyBoardHeight == 0 && keyBoardHeight > 0) {
          _this2.keyBoardHeight = keyBoardHeight;
        }
        if (keyBoardHeight > 0) {
          _this2.height = _this2.height - _this2.keyBoardHeight;
        } else {
          _this2.height = _this2.height + _this2.keyBoardHeight;
        }
        // console.log('this.heightKey', this.height)
      });
    },
    destoryListenKeyboard: function destoryListenKeyboard() {
      uni.offKeyboardHeightChange(function (res) {
        console.log("closeKeyboardHeightChange...");
      });
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
              uni.showToast({
                title: '重连失败!请重新启动!',
                icon: 'none' });

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
    },
    isEmojiCharacter: function isEmojiCharacter(substring) {
      for (var i = 0; i < substring.length; i++) {
        var hs = substring.charCodeAt(i);
        if (0xd800 <= hs && hs <= 0xdbff) {
          if (substring.length > 1) {
            var ls = substring.charCodeAt(i + 1);
            var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
            if (0x1d000 <= uc && uc <= 0x1f77f) {
              return true;
            }
          }
        } else if (substring.length > 1) {
          var ls = substring.charCodeAt(i + 1);
          if (ls == 0x20e3) {
            return true;
          }
        } else {
          if (0x2100 <= hs && hs <= 0x27ff) {
            return true;
          } else if (0x2B05 <= hs && hs <= 0x2b07) {
            return true;
          } else if (0x2934 <= hs && hs <= 0x2935) {
            return true;
          } else if (0x3297 <= hs && hs <= 0x3299) {
            return true;
          } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 ||
          hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b ||
          hs == 0x2b50) {
            return true;
          }
        }
      }
    },
    handleSend: function handleSend() {
      if (this.isLogin) {
        console.log('发送消息', this.message);
        if (this.isEmojiCharacter(this.message)) {
          uni.showToast({
            title: '发送失败,内容不要包含表情!',
            icon: 'none' });

        } else {
          var socketMsg = {
            nickname: uni.getStorageSync('nickname') || this.ipAddress,
            avatar: uni.getStorageSync('avatar') || this.defualtAvatar,
            content: this.message,
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

          this.message = '';
        }
      } else {
        uni.navigateTo({
          url: "../mixLogin/mixLogin" });

      }
    },
    onShareAppMessage: function onShareAppMessage() {
      return {
        from: "menu" };

    },
    onShareTimeline: function onShareTimeline() {} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 223:
/*!**************************************************************************************************************!*\
  !*** D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/chatRoom/chatRoom.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatRoom.vue?vue&type=style&index=0&lang=scss& */ 224);
/* harmony import */ var _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Bin_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatRoom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 224:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/A-Solar斌源码/uniapp小程序/solarBlog-mobile/pages/chatRoom/chatRoom.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[217,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9wYWdlcy9jaGF0Um9vbS9jaGF0Um9vbS52dWU/MjAzMSIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9wYWdlcy9jaGF0Um9vbS9jaGF0Um9vbS52dWU/ZDRlNyIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9wYWdlcy9jaGF0Um9vbS9jaGF0Um9vbS52dWU/ZGUzMCIsIndlYnBhY2s6Ly8vRDovQS1Tb2xhcuaWjOa6kOeggS91bmlhcHDlsI/nqIvluo8vc29sYXJCbG9nLW1vYmlsZS9wYWdlcy9jaGF0Um9vbS9jaGF0Um9vbS52dWU/ODI3NSIsInVuaS1hcHA6Ly8vcGFnZXMvY2hhdFJvb20vY2hhdFJvb20udnVlIiwid2VicGFjazovLy9EOi9BLVNvbGFy5paM5rqQ56CBL3VuaWFwcOWwj+eoi+W6jy9zb2xhckJsb2ctbW9iaWxlL3BhZ2VzL2NoYXRSb29tL2NoYXRSb29tLnZ1ZT81ODIyIiwid2VicGFjazovLy9EOi9BLVNvbGFy5paM5rqQ56CBL3VuaWFwcOWwj+eoi+W6jy9zb2xhckJsb2ctbW9iaWxlL3BhZ2VzL2NoYXRSb29tL2NoYXRSb29tLnZ1ZT85MmE2Il0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSxzRyw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxpQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUNjOzs7QUFHckU7QUFDMEw7QUFDMUwsZ0JBQWdCLGlNQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUEyc0IsQ0FBZ0Isc3RCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dDL3RCO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxjQUZBO0FBR0Esc0JBSEE7QUFJQSxxQkFKQTtBQUtBLHVCQUxBO0FBTUEsa0JBTkE7QUFPQSxrQkFQQSxFQU9BO0FBQ0Esd0JBUkEsRUFRQTtBQUNBLG1CQVRBO0FBVUEsbUJBVkEsRUFVQTtBQUNBLGlDQVhBO0FBWUEsb0JBWkE7QUFhQSx1R0FiQTtBQWNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQSxFQWRBOzs7QUFtQkEsR0FyQkE7QUFzQkE7QUFDQSxTQXZCQSxxQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7O0FBS0EsR0E5QkE7O0FBZ0NBO0FBQ0E7QUFDQSxXQUZBLG1CQUVBLE1BRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLGtCQVRBLDBCQVNBLE1BVEEsRUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBYkEsRUFoQ0E7O0FBK0NBLFNBL0NBLHFCQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsRUFLQSxJQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLEdBOURBO0FBK0RBLFFBL0RBLG9CQStEQTtBQUNBO0FBQ0E7QUFDQSxHQWxFQTtBQW1FQSxRQW5FQSxvQkFtRUE7QUFDQTtBQUNBLEdBckVBO0FBc0VBLFVBdEVBLHNCQXNFQTtBQUNBO0FBQ0EsR0F4RUE7QUF5RUE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsa0JBSkEsNEJBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVpBO0FBYUEsS0FuQkE7QUFvQkEseUJBcEJBLG1DQW9CQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0F4QkE7QUF5QkEscUJBekJBLCtCQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUZBO0FBR0EsZUFIQSxtQkFHQSxJQUhBLEVBR0E7QUFDQTtBQUNBLFNBTEE7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBLDZDQURBO0FBRUEsbUJBRkEsbUJBRUEsR0FGQSxFQUVBO0FBQ0E7QUFDQSxhQUpBO0FBS0EsZ0JBTEEsZ0JBS0EsR0FMQSxFQUtBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLDRCQUZBOztBQUlBLGFBVkE7O0FBWUEsU0FqQkEsRUFpQkEsU0FqQkE7QUFrQkEsT0FwQkE7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFaQTs7O0FBZUEsT0FqQkE7QUFrQkEsS0EzRUE7QUE0RUEsb0JBNUVBLDRCQTRFQSxTQTVFQSxFQTRFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FSQSxNQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0Esc0JBREEsSUFDQSxZQURBLElBQ0EsWUFEQTtBQUVBLHNCQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUdBO0FBNkdBLGNBN0dBLHdCQTZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBREE7QUFFQSx3QkFGQTs7QUFJQSxTQUxBLE1BS0E7QUFDQTtBQUNBLHNFQURBO0FBRUEsc0VBRkE7QUFHQSxpQ0FIQTtBQUlBLHdEQUpBO0FBS0EsbUJBTEE7QUFNQSxxQ0FOQTtBQU9BLG1DQVBBOztBQVNBO0FBQ0E7QUFDQTtBQUNBLHVEQURBO0FBRUEsbUJBRkEsbUJBRUEsR0FGQSxFQUVBO0FBQ0E7QUFDQSxhQUpBO0FBS0EsZ0JBTEEsZ0JBS0EsR0FMQSxFQUtBO0FBQ0E7QUFDQSxhQVBBOztBQVNBO0FBQ0E7QUFDQSxPQTlCQSxNQThCQTtBQUNBO0FBQ0EscUNBREE7O0FBR0E7QUFDQSxLQWpKQTtBQWtKQSxxQkFsSkEsK0JBa0pBO0FBQ0E7QUFDQSxvQkFEQTs7QUFHQSxLQXRKQTtBQXVKQSxtQkF2SkEsNkJBdUpBLEVBdkpBLEVBekVBLEU7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBMDBDLENBQWdCLHF4Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTkxQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2NoYXRSb29tL2NoYXRSb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvY2hhdFJvb20vY2hhdFJvb20udnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2hhdFJvb20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1ZTc1M2U2JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hhdFJvb20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGF0Um9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2hhdFJvb20udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NoYXRSb29tL2NoYXRSb29tLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNi0wIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vY2hhdFJvb20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1ZTc1M2U2JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDAgPSBfdm0uX19tYXAoX3ZtLmNoYXRSZWNvcmRMaXN0LCBmdW5jdGlvbihpdGVtLCBfX2kwX18pIHtcbiAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgdmFyIGcwID0gX3ZtLiRkYXlqcyhpdGVtLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcbiAgICByZXR1cm4ge1xuICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgZzA6IGcwXG4gICAgfVxuICB9KVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDA6IGwwXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9jaGF0Um9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vY2hhdFJvb20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY2hhdFJvb21cIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwibm90aWNlLWJveFwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cIm5vdGljZVwiPuW9k+WJjeaciXt7Y291bnR9feS6uuWcqOe6vyE8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQtYm94XCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyA6c3R5bGU9XCJ7aGVpZ2h0OiB2aWV3SGVpZ2h0KydweCd9XCIgc2Nyb2xsLXkgOnNjcm9sbC1pbnRvLXZpZXc9XCJ2aWV3SWRcIiBAc2Nyb2xsdG9sb3dlcj1cInNjcm9sbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlck1lc3NhZ2UtYm94XCIgdi1mb3I9XCJpdGVtIGluIGNoYXRSZWNvcmRMaXN0XCIgOmtleT1cIml0ZW0uaWRcIiA6aWQ9XCInaXRlbScraXRlbS5pZFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgOmNsYXNzPVwiaXRlbS5pcEFkZHJlc3MgPT09IGlwQWRkcmVzcyA/ICdteUhlYWRlci1ib3gnIDogJ3VzZXJIZWFkZXItYm94J1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOmNsYXNzPVwiaXRlbS5pcEFkZHJlc3MgPT09IGlwQWRkcmVzcyA/ICdteUF2YXRhcicgOiAndXNlckF2YXRhcidcIiA6c3JjPVwiaXRlbS5hdmF0YXJcIj5cclxuXHRcdFx0XHRcdFx0PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuaWNrTmFtZS1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm5pY2tOYW1lXCI+e3tpdGVtLm5pY2tuYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkYXRlXCI+e3skZGF5anMoaXRlbS5jcmVhdGVUaW1lKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJpdGVtLmlwQWRkcmVzcyA9PT0gaXBBZGRyZXNzID8gJ215Q29udGVudC1ib3gnIDogJ3VzZXJDb250ZW50LWJveCdcIj5cclxuXHRcdFx0XHRcdFx0PCEtLeaWh+Wtl+ihqOaDhea2iOaBr+WGheWuuS0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS50eXBlID09PSAzXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcnB4O1wiIHYtaHRtbD1cIml0ZW0uY29udGVudFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLemfs+mikea2iOaBry0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS50eXBlID09PSA1XCI+XHJcblx0XHRcdFx0XHRcdFx0PGF1ZGlvIDpzcmM9XCJpdGVtLmNvbnRlbnRcIj48L2F1ZGlvPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvdGhcIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmb290ZXJcIiByZWY9XCJmb290ZXJcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LXdyYXBcIj5cclxuXHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJjb250ZW50XCIgdi1tb2RlbD1cIm1lc3NhZ2VcIiBtYXhsZW5ndGg9XCItMVwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJidG4td3JhcFwiPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG5cIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlXCIgOmNsYXNzPVwieydkaXNhYmxlZCc6IGRpc2FibGV9XCIgQGNsaWNrPVwiaGFuZGxlU2VuZCgpXCI+5Y+R6YCBPC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNMb2dpbjogZmFsc2UsXHJcblx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0dmlld0hlaWdodDogbnVsbCxcclxuXHRcdFx0XHRmb290ZXJIZWlnaHQ6IDAsXHJcblx0XHRcdFx0a2V5Qm9hcmRIZWlnaHQ6IDAsXHJcblx0XHRcdFx0aGVpZ2h0OiBudWxsLFxyXG5cdFx0XHRcdHZpZXdJZDogbnVsbCwgLy8gc2Nyb2xsVmlld+agh+ivhmlkXHJcblx0XHRcdFx0Y2hhdFJlY29yZExpc3Q6IFtdLCAvLyDljoblj7LogYrlpKnorrDlvZVcclxuXHRcdFx0XHRtZXNzYWdlOiBudWxsLFxyXG5cdFx0XHRcdGRpc2FibGU6IHRydWUsIC8vIOemgeeUqOWPkemAgeaMiemSrlxyXG5cdFx0XHRcdGlwQWRkcmVzczogXCIxMTIuNjYuMTA0LjEwN1wiLFxyXG5cdFx0XHRcdGlwU291cmNlOiBudWxsLFxyXG5cdFx0XHRcdGRlZnVhbHRBdmF0YXI6IFwiaHR0cHM6Ly9pbWFnZXMuc29sYXJnb2QuY24vc29sYXJCbG9nL2NvbmZpZy9hMmVhMGFhYjM0NTZmZDY2NTU3ODVmODYwMDM0ZmY0NS5wbmdcIixcclxuXHRcdFx0XHRXZWJzb2NrZXRNZXNzYWdlOiB7XHJcblx0XHRcdFx0XHR0eXBlOiBudWxsLFxyXG5cdFx0XHRcdFx0ZGF0YTogbnVsbFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL+iOt+WPluWxj+W5leWPr+inhuWMuuWfn+mrmOW6pu+8iOmZpOWOu+WvvOiIquagj++8iVxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXNcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHNlbGYudmlld0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQgLSByZXMuc3RhdHVzQmFySGVpZ2h0IC0gNTVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdC8v55uR5ZCsbWVzc2FnZe+8jOW9k+S7luacieWAvOaXtuWPkemAgeaMiemSruaJjeWPr+S7peeCueWHu1xyXG5cdFx0XHRtZXNzYWdlKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmIChuZXdWYWwudHJpbSgpICE9ICcnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRpc2FibGUgPSBmYWxzZVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmRpc2FibGUgPSB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGF0UmVjb3JkTGlzdChuZXdWYWwpIHtcclxuXHRcdFx0XHRjb25zdCBsZW4gPSBuZXdWYWwubGVuZ3RoIC0gMVxyXG5cdFx0XHRcdHRoaXMudmlld0lkID0gJ2l0ZW0nICsgbmV3VmFsW2xlbl0uaWRcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygndGhpcy52aWV3SWQnLCB0aGlzLnZpZXdJZClcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdC8v6L+Z6YeM6I635Y+WZm9vdGVy5YWD57Sg55qE6auY5bqm77yM5qC55o2u5LiN5ZCM5bmz5Y+w55So55qE5pa55byP5LiN5ZCM77yM5a+55LqOdW5pYXBw55qEZG9t5a6a5L2N5pa55rOV5bqU6K+l5piv6YCa55So55qE44CC54m55Yir5rOo5oSP77yM5aaC5p6c6aG16Z2i5rKh5pyJ5riy5p+T5Ye65YWD57Sg77yM5Y+v55SodGhpcy4kbmV4dFRpY2tcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdC8vIHVuaWFwcFxyXG5cdFx0XHRcdGNvbnN0IGZvb3RlciA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdFx0Zm9vdGVyLnNlbGVjdCgnLmZvb3RlcicpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9vdGVySGVpZ2h0ID0gZGF0YS5oZWlnaHRcclxuXHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy52aWV3SGVpZ2h0IC0gdGhpcy5mb290ZXJIZWlnaHRcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvb3RlckhlaWdodCcsIHRoaXMuZm9vdGVySGVpZ2h0KVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoaXMuaGVpZ2h0Rm9vdCcsIHRoaXMuaGVpZ2h0KVxyXG5cdFx0XHRcdH0pLmV4ZWMoKTtcclxuXHRcdFx0XHQvLyBINVxyXG5cdFx0XHRcdC8vIHRoaXMuZm9vdGVySGVpZ2h0ID0gdGhpcy4kcmVmcy5mb290ZXIuJGVsLm9mZnNldEhlaWdodFxyXG5cdFx0XHRcdC8vIHRoaXMuaGVpZ2h0ID0gdGhpcy52aWV3SGVpZ2h0IC0gdGhpcy5mb290ZXJIZWlnaHRcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuY29ubmVjdFNvY2tldEluaXQoKVxyXG5cdFx0XHQvLyB0aGlzLmxpc3RlbktleWJvYXJkKClcclxuXHRcdH0sXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdHRoaXMuaXNMb2dpbiA9IHVuaS5nZXRTdG9yYWdlU3luYygnaXNMb2dpbicpXHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdHRoaXMuZGVzdG9yeUxpc3RlbktleWJvYXJkKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNjcm9sbCgpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5ruR5Yiw5bqV6YOoJylcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlzdGVuS2V5Ym9hcmQoKSB7XHJcblx0XHRcdFx0Ly/nm5HlkKzplK7nm5jnmoTpq5jluqblj5jljJbvvIzorqlzcm9sbC12aWV355qE6auY5bqm6ZqP5LmL5Y+Y5YyWXHJcblx0XHRcdFx0dW5pLm9uS2V5Ym9hcmRIZWlnaHRDaGFuZ2UocmVzID0+IHtcclxuXHRcdFx0XHRcdGxldCBrZXlCb2FyZEhlaWdodCA9IHJlcy5oZWlnaHRcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdrZXlCb2FyZEhlaWdodCcsIGtleUJvYXJkSGVpZ2h0KVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMua2V5Qm9hcmRIZWlnaHQgPT0gMCAmJiBrZXlCb2FyZEhlaWdodCA+IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5rZXlCb2FyZEhlaWdodCA9IGtleUJvYXJkSGVpZ2h0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoa2V5Qm9hcmRIZWlnaHQgPiAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgLSB0aGlzLmtleUJvYXJkSGVpZ2h0XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgdGhpcy5rZXlCb2FyZEhlaWdodFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoaXMuaGVpZ2h0S2V5JywgdGhpcy5oZWlnaHQpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVzdG9yeUxpc3RlbktleWJvYXJkKCkge1xyXG5cdFx0XHRcdHVuaS5vZmZLZXlib2FyZEhlaWdodENoYW5nZSgocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImNsb3NlS2V5Ym9hcmRIZWlnaHRDaGFuZ2UuLi5cIilcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb25uZWN0U29ja2V0SW5pdCgpIHtcclxuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpc1xyXG5cdFx0XHRcdHVuaS5jb25uZWN0U29ja2V0KHtcclxuXHRcdFx0XHRcdC8vIHVybDogXCJ3czovLzEyNy4wLjAuMTozMzAwL3dlYnNvY2tldFwiLFxyXG5cdFx0XHRcdFx0dXJsOiBcIndzczovL3dlYnNvY2tldC5zb2xhcmdvZC5jblwiLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhkYXRhKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdXZWJTb2NrZXTov57mjqXmiJDlip8nLCBkYXRhKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHVuaS5vblNvY2tldE9wZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5bey5omT5byA77yBJyk7XHJcblx0XHRcdFx0XHRzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGJlYXRNZXNzYWdlID0ge1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IDYsXHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogXCJwaW5nXCJcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0dW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShiZWF0TWVzc2FnZSksXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflv4Pot7Pph43ov57miJDlip8nLCByZXMpXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6YeN6L+e5aSx6LSlIeivt+mHjeaWsOWQr+WKqCEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LCAzMCAqIDEwMDApXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHVuaS5vblNvY2tldE1lc3NhZ2UoZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuXHRcdFx0XHRcdHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNvdW50ID0gZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNoYXRSZWNvcmRMaXN0ID0gZGF0YS5kYXRhLmNoYXRSZWNvcmRMaXN0XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5pcEFkZHJlc3MgPSBkYXRhLmRhdGEuaXBBZGRyZXNzO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuaXBTb3VyY2UgPSBkYXRhLmRhdGEuaXBTb3VyY2U7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdFx0XHQvLyDmloflrZfmtojmga9cclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNoYXRSZWNvcmRMaXN0LnB1c2goZGF0YS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGlzRW1vamlDaGFyYWN0ZXIoc3Vic3RyaW5nKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBocyA9IHN1YnN0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0XHRcdFx0aWYgKDB4ZDgwMCA8PSBocyAmJiBocyA8PSAweGRiZmYpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHN1YnN0cmluZy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGxzID0gc3Vic3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciB1YyA9ICgoaHMgLSAweGQ4MDApICogMHg0MDApICsgKGxzIC0gMHhkYzAwKSArIDB4MTAwMDA7XHJcblx0XHRcdFx0XHRcdFx0aWYgKDB4MWQwMDAgPD0gdWMgJiYgdWMgPD0gMHgxZjc3Zikge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN1YnN0cmluZy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRcdHZhciBscyA9IHN1YnN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcclxuXHRcdFx0XHRcdFx0aWYgKGxzID09IDB4MjBlMykge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAoMHgyMTAwIDw9IGhzICYmIGhzIDw9IDB4MjdmZikge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKDB4MkIwNSA8PSBocyAmJiBocyA8PSAweDJiMDcpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgweDI5MzQgPD0gaHMgJiYgaHMgPD0gMHgyOTM1KSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoMHgzMjk3IDw9IGhzICYmIGhzIDw9IDB4MzI5OSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGhzID09IDB4YTkgfHwgaHMgPT0gMHhhZSB8fCBocyA9PSAweDMwM2QgfHwgaHMgPT0gMHgzMDMwIHx8XHJcblx0XHRcdFx0XHRcdFx0aHMgPT0gMHgyYjU1IHx8IGhzID09IDB4MmIxYyB8fCBocyA9PSAweDJiMWIgfHxcclxuXHRcdFx0XHRcdFx0XHRocyA9PSAweDJiNTApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0IFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYW5kbGVTZW5kKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzTG9naW4pIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflj5HpgIHmtojmga8nLCB0aGlzLm1lc3NhZ2UpXHJcblx0XHRcdFx0XHRpZih0aGlzLmlzRW1vamlDaGFyYWN0ZXIodGhpcy5tZXNzYWdlKSkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WPkemAgeWksei0pSzlhoXlrrnkuI3opoHljIXlkKvooajmg4UhJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBzb2NrZXRNc2cgPSB7XHJcblx0XHRcdFx0XHRcdFx0bmlja25hbWU6IHVuaS5nZXRTdG9yYWdlU3luYygnbmlja25hbWUnKSB8fCB0aGlzLmlwQWRkcmVzcyxcclxuXHRcdFx0XHRcdFx0XHRhdmF0YXI6IHVuaS5nZXRTdG9yYWdlU3luYygnYXZhdGFyJykgfHwgdGhpcy5kZWZ1YWx0QXZhdGFyLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHRoaXMubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR1c2VySWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklkJykgfHwgbnVsbCxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAzLFxyXG5cdFx0XHRcdFx0XHRcdGlwQWRkcmVzczogdGhpcy5pcEFkZHJlc3MsXHJcblx0XHRcdFx0XHRcdFx0aXBTb3VyY2U6IHRoaXMuaXBTb3VyY2UsXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdHRoaXMuV2Vic29ja2V0TWVzc2FnZS50eXBlID0gMztcclxuXHRcdFx0XHRcdFx0dGhpcy5XZWJzb2NrZXRNZXNzYWdlLmRhdGEgPSBzb2NrZXRNc2c7XHJcblx0XHRcdFx0XHRcdHVuaS5zZW5kU29ja2V0TWVzc2FnZSh7XHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkodGhpcy5XZWJzb2NrZXRNZXNzYWdlKSxcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WPkemAgeaIkOWKnycsIHJlcylcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Y+R6YCB5aSx6LSlJywgZXJyKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5tZXNzYWdlID0gJydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6IFwiLi4vbWl4TG9naW4vbWl4TG9naW5cIlxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uU2hhcmVBcHBNZXNzYWdlKCl7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdGZyb206XCJtZW51XCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uU2hhcmVUaW1lbGluZSgpe30sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5jaGF0Um9vbSB7XHJcblx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHR9XHJcblx0XHJcblx0Lm5vdGljZS1ib3gge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHRcclxuXHQubm90aWNlIHtcclxuXHRcdGNvbG9yOiAjRjA4RDQ5O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQudXNlck1lc3NhZ2UtYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHRcclxuXHQubXlNZXNzYWdlLWJveCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0XHJcblx0LnVzZXJIZWFkZXItYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHRcclxuXHQubXlIZWFkZXItYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblx0fVxyXG5cdFxyXG5cdC51c2VyQXZhdGFyIHtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblx0XHJcblx0Lm15QXZhdGFyIHtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uaWNrTmFtZSB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdGNvbG9yOiAjMDA3QUZGO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdFxyXG5cdC5kYXRlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQudXNlckNvbnRlbnQtYm94IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4IDIwcHggMjBweCAyMHB4O1xyXG5cdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0Y29sb3I6IGJsYWNrO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDkwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQubXlDb250ZW50LWJveCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDVweCAyMHB4IDIwcHg7XHJcblx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0YmFja2dyb3VuZDogIzEyYjdmNTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA5MHJweDtcclxuXHR9XHJcblx0XHJcblx0LmJvdGgge1xyXG5cdFx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG5cdFxyXG5cdC5hdWRpby1ib3gge1xyXG5cdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0aGVpZ2h0OiA1MHJweDtcclxuXHR9XHJcblx0XHJcblx0LmF1ZGlvIHtcclxuXHRcdHdpZHRoOiA1MHJweDtcclxuXHRcdGhlaWdodDogNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNTBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5mb290ZXIge1xyXG5cdFx0bWFyZ2luLXRvcDogMzlycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogNzVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFREY0O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHBvc2l0aW9uOiBzdGlja3k7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQuZm9vdGVyIC5jb250ZW50LXdyYXAge1xyXG5cdFx0d2lkdGg6IDc4dnc7XHJcblx0XHRtYXJnaW4tbGVmdDogMnZ3O1xyXG5cdH1cclxuXHRcclxuXHQuZm9vdGVyIC5jb250ZW50IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdG1hcmdpbjogMTRycHggMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzMHJweDtcclxuXHRcdHBhZGRpbmc6IDZycHg7XHJcblx0XHRjYXJldC1jb2xvcjogIzAxQjRGRTtcclxuXHRcdGhlaWdodDogNjVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5mb290ZXIgLmJ0bi13cmFwIHtcclxuXHRcdHdpZHRoOiAxOHZ3O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAydnc7XHJcblx0fVxyXG5cdFxyXG5cdC5mb290ZXIgLmJ0biB7XHJcblx0XHR3aWR0aDogMTYlO1xyXG5cdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMiU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDFCNEZFO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3JkZXI6IDA7XHJcblx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0Ym90dG9tOiAzLjJ2aDtcclxuXHR9XHJcblx0XHJcblx0LmZvb3RlciAuYnRuLXdyYXAgLmRpc2FibGVkIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNhYWU4ZjU7XHJcblx0fVxyXG5cdFxyXG5cdC9kZWVwLyAudW5pLXRleHRhcmVhLXdyYXBwZXIge1xyXG5cdFx0bWluLWhlaWdodDogNzBycHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9jaGF0Um9vbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFDOlxcXFxVc2Vyc1xcXFxCaW5cXFxcRGVza3RvcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhQzpcXFxcVXNlcnNcXFxcQmluXFxcXERlc2t0b3BcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUM6XFxcXFVzZXJzXFxcXEJpblxcXFxEZXNrdG9wXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vY2hhdFJvb20udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1MDI4NzQ4ODQxN1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9CaW4vRGVza3RvcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=