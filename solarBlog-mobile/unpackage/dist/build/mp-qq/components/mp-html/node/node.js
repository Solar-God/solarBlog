(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mp-html/node/node"],{"528f":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(){e.e("components/mp-html/audio/audio").then(function(){return resolve(e("6b98"))}.bind(null,e)).catch(e.oe)},r=function(){Promise.resolve().then(function(){return resolve(e("7218"))}.bind(null,e)).catch(e.oe)},o={name:"node",options:{},data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{myAudio:n,node:r},mounted:function(){var t=this;this.$nextTick((function(){for(t.root=t.$parent;"mp-html"!==t.root.$options.name;t.root=t.root.$parent);}))},beforeDestroy:function(){},methods:{play:function(i){if(this.root.pauseVideo){for(var e=!1,n=i.target.id,r=this.root._videos.length;r--;)this.root._videos[r].id===n?e=!0:this.root._videos[r].pause();if(!e){var o=t.createVideoContext(n,this);o.id=n,this.root._videos.push(o)}}},imgTap:function(i){var e=this.childs[i.currentTarget.dataset.i];e.a?this.linkTap(e.a):e.attrs.ignore||(this.root.$emit("imgtap",e.attrs),this.root.previewImg&&t.previewImage({current:parseInt(e.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var i=t.currentTarget.dataset.i;this.childs[i].w?(this.opts[1]&&!this.ctrl[i]||-1===this.ctrl[i])&&this.$set(this.ctrl,i,1):this.$set(this.ctrl,i,t.detail.width)},linkTap:function(i){var e=i.currentTarget?this.childs[i.currentTarget.dataset.i]:{},n=e.attrs||i,r=n.href;this.root.$emit("linktap",Object.assign({innerText:this.root.getText(e.children||[])},n)),r&&("#"===r[0]?this.root.navigateTo(r.substring(1)).catch((function(){})):r.split("?")[0].includes("://")?this.root.copyLink&&t.setClipboardData({data:r,success:function(){return t.showToast({title:"链接已复制"})}}):t.navigateTo({url:r,fail:function(){t.switchTab({url:r,fail:function(){}})}}))},mediaError:function(t){var i=t.currentTarget.dataset.i,e=this.childs[i];if("video"===e.name||"audio"===e.name){var n=(this.ctrl[i]||0)+1;if(n>e.src.length&&(n=0),n<e.src.length)return void this.$set(this.ctrl,i,n)}else"img"===e.name&&this.opts[2]&&this.$set(this.ctrl,i,-1);this.root&&this.root.$emit("error",{source:e.name,attrs:e.attrs,errMsg:t.detail.errMsg})}}};i.default=o}).call(this,e("a821")["default"])},"64ec":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement;t._self._c},o=[]},7218:function(t,i,e){"use strict";e.r(i);var n=e("64ec"),r=e("e3bf");for(var o in r)"default"!==o&&function(t){e.d(i,t,(function(){return r[t]}))}(o);e("e805");var s,a=e("f0c5"),c=e("7543"),u=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);"function"===typeof c["a"]&&Object(c["a"])(u),i["default"]=u.exports},7543:function(t,i,e){"use strict";var n=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};i["a"]=n},a6ac:function(t,i,e){},e3bf:function(t,i,e){"use strict";e.r(i);var n=e("528f"),r=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=r.a},e805:function(t,i,e){"use strict";var n=e("a6ac"),r=e.n(n);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mp-html/node/node-create-component',
    {
        'components/mp-html/node/node-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('a821')['createComponent'](__webpack_require__("7218"))
        })
    },
    [['components/mp-html/node/node-create-component']]
]);
