(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-link/u-link"],{"1b79":function(t,n,e){"use strict";e.r(n);var i=e("891b"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},"20d8":function(t,n,e){"use strict";var i=e("4034"),u=e.n(i);u.a},4034:function(t,n,e){},"66af":function(t,n,e){"use strict";e.r(n);var i=e("be11"),u=e("1b79");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("20d8");var a,r=e("f0c5"),c=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"050d9a99",null,!1,i["a"],a);n["default"]=c.exports},"891b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("fea7"));function u(t){return t&&t.__esModule?t:{default:t}}var o={name:"u-link",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],computed:{linkStyle:function(){var n={color:this.color,fontSize:t.$u.addUnit(this.fontSize),lineHeight:t.$u.addUnit(t.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return n}},methods:{openLink:function(){var n=this;t.setClipboardData({data:this.href,success:function(){t.hideToast(),n.$nextTick((function(){t.$u.toast(n.mpTips)}))}}),this.$emit("click")}}};n.default=o}).call(this,e("543d")["default"])},be11:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.linkStyle,t.$u.addStyle(t.customStyle)]));t.$mp.data=Object.assign({},{$root:{s0:e}})},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-link/u-link-create-component',
    {
        'node-modules/uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("66af"))
        })
    },
    [['node-modules/uview-ui/components/u-link/u-link-create-component']]
]);