(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/userInfo/userInfo"],{"0816":function(e,n,t){"use strict";(function(e){t("9fd6");a(t("66fd"));var n=a(t("260e"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"230e":function(e,n,t){},"260e":function(e,n,t){"use strict";t.r(n);var a=t("c66f"),o=t("a287");for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("ce2b");var r,c=t("f0c5"),u=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=u.exports},"2acc":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{avatar:e.getStorageSync("avatar")||null,userForm:{nickname:e.getStorageSync("nickname")||null,intro:e.getStorageSync("intro")||null,email:e.getStorageSync("email")||null,lastLoginTime:this.$dayjs(e.getStorageSync("lastLoginTime")).format("YYYY-MM-DD HH:mm:ss")||null}}},onShow:function(){this.userForm.email=e.getStorageSync("email")},methods:{updateUserInfo:function(){var n=this;this.$http("/users/info","PUT",this.userForm).then((function(t){2e4===t.code?(n.saveUserInfoStorage(n.userForm),e.showToast({title:"更新成功",icon:"success"}),setTimeout((function(){e.navigateBack()}),300)):e.showToast({title:t.message,icon:"none"})}))},saveUserInfoStorage:function(n){e.setStorageSync("nickname",n.nickname),e.setStorageSync("intro",n.intro),e.setStorageSync("email",n.email),e.setStorageSync("lastLoginTime",n.lastLoginTime)},chooseImage:function(){e.showToast({title:"请绑定邮箱！",icon:"none"})},toEmailModel:function(){e.navigateTo({url:"/pages/mine/emailModel/emailModel"})}}};n.default=t}).call(this,t("543d")["default"])},a287:function(e,n,t){"use strict";t.r(n);var a=t("2acc"),o=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=o.a},c66f:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var o=function(){var e=this,n=e.$createElement;e._self._c},i=[]},ce2b:function(e,n,t){"use strict";var a=t("230e"),o=t.n(a);o.a}},[["0816","common/runtime","common/vendor"]]]);