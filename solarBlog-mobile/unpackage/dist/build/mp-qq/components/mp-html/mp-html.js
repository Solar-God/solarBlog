(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mp-html/mp-html"],{"211c":function(e,t,n){"use strict";n.r(t);var o=n("323f"),i=n("ad14");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("be51");var a,l=n("f0c5"),c=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=c.exports},"323f":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"3e46":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n("5ffa")),i=f(n("fdb3")),r=f(n("57c1")),a=f(n("41af")),l=f(n("3d20")),c=f(n("d74e")),s=f(n("2e7c")),u=f(n("f26e"));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(){n.e("components/mp-html/node/node").then(function(){return resolve(n("7218"))}.bind(null,n)).catch(n.oe)},h=[i.default,r.default,a.default,l.default,c.default,s.default,u.default],p={name:"mp-html",data:function(){return{nodes:[]}},props:{ImgCache:Boolean,markdown:Boolean,containerStyle:{type:String,default:""},content:{type:String,default:""},copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},components:{node:d},watch:{content:function(e){this.setContent(e)}},created:function(){this.plugins=[];for(var e=h.length;e--;)this.plugins.push(new h[e](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(e,t,n){e&&t&&n&&(this._in={page:e,selector:t,scrollTop:n})},navigateTo:function(t,n){var o=this;return t=this._ids[decodeURI(t)]||t,new Promise((function(i,r){if(o.useAnchor){n=n||parseInt(o.useAnchor)||0;var a=" ";a=">>>";var l=e.createSelectorQuery().in(o._in?o._in.page:o).select((o._in?o._in.selector:"._root")+(t?"".concat(a,"#").concat(t):"")).boundingClientRect();o._in?l.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect():l.selectViewport().scrollOffset(),l.exec((function(t){if(t[0]){var a=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+n;o._in?o._in.page[o._in.scrollTop]=a:e.pageScrollTo({scrollTop:a,duration:300}),i()}else r(Error("Label not found"))}))}else r(Error("Anchor is disabled"))}))},getText:function(e){var t="";return function e(n){for(var o=0;o<n.length;o++){var i=n[o];if("text"===i.type)t+=i.text.replace(/&amp;/g,"&");else if("br"===i.name)t+="\n";else{var r="p"===i.name||"div"===i.name||"tr"===i.name||"li"===i.name||"h"===i.name[0]&&i.name[1]>"0"&&i.name[1]<"7";r&&t&&"\n"!==t[t.length-1]&&(t+="\n"),i.children&&e(i.children),r&&"\n"!==t[t.length-1]?t+="\n":"td"!==i.name&&"th"!==i.name||(t+="\t")}}}(e||this.nodes),t},getRect:function(){var t=this;return new Promise((function(n,o){e.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(e){return e[0]?n(e[0]):o(Error("Root label not found"))}))}))},pauseMedia:function(){for(var e=(this._videos||[]).length;e--;)this._videos[e].pause()},setContent:function(e,t){var n=this;t&&this.imgList||(this.imgList=[]);var i,r=new o.default(this).parse(e);this.$set(this,"nodes",t?(this.nodes||[]).concat(r):r),this._videos=[],this.$nextTick((function(){n._hook("onLoad"),n.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){n.getRect().then((function(e){e.height===i&&(n.$emit("ready",e),clearInterval(n._timer)),i=e.height})).catch((function(){}))}),350)},_hook:function(e){for(var t=h.length;t--;)this.plugins[t][e]&&this.plugins[t][e]()}}};t.default=p}).call(this,n("a821")["default"])},ad14:function(e,t,n){"use strict";n.r(t);var o=n("3e46"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},be51:function(e,t,n){"use strict";var o=n("ea44"),i=n.n(o);i.a},ea44:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mp-html/mp-html-create-component',
    {
        'components/mp-html/mp-html-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('a821')['createComponent'](__webpack_require__("211c"))
        })
    },
    [['components/mp-html/mp-html-create-component']]
]);
