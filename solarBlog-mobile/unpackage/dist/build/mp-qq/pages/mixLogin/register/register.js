(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mixLogin/register/register"],{"0b3e":function(e,t,n){"use strict";(function(e){n("9fd6");a(n("66fd"));var t=a(n("4c83"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("a821")["createPage"])},"4c83":function(e,t,n){"use strict";n.r(t);var a=n("bb50"),i=n("ba4c");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("ae2c");var r,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=u.exports},"788b":function(e,t,n){},ae2c:function(e,t,n){"use strict";var a=n("788b"),i=n.n(a);i.a},ba4c:function(e,t,n){"use strict";n.r(t);var a=n("bfcd"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},bb50:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement;e._self._c},o=[]},bfcd:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{username:"",password:"",emailCode:"",getCodeText:"获取验证码",getCodeisWaiting:!1}},methods:{validateEmail:function(){var t=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return""===this.username||void 0===this.username?(e.showToast({title:"请输入邮箱",icon:"none"}),!1):!!t.test(this.username)||(e.showToast({title:"邮箱格式不正确",icon:"none"}),!1)},validatePwd:function(){return 6!==this.emailCode.length?(e.showToast({title:"请输入6位验证码!",icon:"none"}),!1):!(this.password.length<6)||(e.showToast({title:"密码不能小于6位!",icon:"none"}),!1)},getCode:function(){var t=this;e.hideKeyboard(),t.validateEmail()&&t.$http("/users/code","GET",{username:t.username}).then((function(n){n.flag?(t.getCodeText="发送中...",t.getCodeisWaiting=!0,setTimeout((function(){e.showToast({title:"验证码已发送",icon:"none"}),t.setTimer()}),1e3)):e.showToast({title:n.message,icon:"none"})}))},setTimer:function(){var e=179,t=this;t.getCodeText="重新获取(180)",t.Timer=setInterval((function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--}),1e3)},handleComfirm:function(){var t=this;if(t.validateEmail()&&t.validatePwd()){var n={username:t.username,password:t.password,code:t.emailCode};t.$http("/register","POST",n).then((function(t){t.flag?(e.showToast({title:"账号注册成功!",icon:"none"}),setTimeout((function(){e.navigateBack()}),300)):e.showToast({title:t.message,icon:"none"})}))}}}};t.default=n}).call(this,n("a821")["default"])}},[["0b3e","common/runtime","common/vendor"]]]);