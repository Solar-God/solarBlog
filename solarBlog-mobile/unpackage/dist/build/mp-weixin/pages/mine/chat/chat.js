(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/chat/chat"],{"364e":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(i("29e3")),n=o(i("4b94"));function o(e){return e&&e.__esModule?e:{default:e}}var c={data:function(){return{isLogin:!1,scrollHeight:0,scroll_top:0,count:1,viewId:null,chatRecordList:[],quickList:["老铁666","厉害了我的天","留个眼"],inputMessage:"",disabled:!0,quickShow:!1,emojiShow:!1,chatShow:!1,emoji_swiper:0,emojiList:s.default,gifList:n.default,faceType:"emoji",ipAddress:"112.66.104.107",ipSource:null,defualtAvatar:"https://images.solargod.cn/solarBlog/config/a2ea0aab3456fd6655785f860034ff45.png",WebsocketMessage:{type:null,data:null}}},watch:{inputMessage:function(e){""!=e.trim()?this.disabled=!1:this.disabled=!0},chatRecordList:function(e){var t=e.length-1;this.viewId="item"+e[t].id}},onShow:function(){this.isLogin=e.getStorageSync("isLogin")},onLoad:function(){this.connectSocketInit()},onUnload:function(){console.log("关闭连接"),e.closeSocket()},methods:{scrolltolower:function(){console.log("滑到底部")},chatScroll:function(e){this.scrollHeight=e.detail.scrollHeight},switchEmoji:function(e){console.log("faceType",e),this.faceType=e},switchGif:function(e){console.log("faceType",e),this.faceType=e},selectEmoji:function(e){console.log("key",e),this.inputMessage+=e},selectGif:function(e){console.log("key",e),this.inputMessage+=e},isEmojiCharacter:function(e){for(var t=0;t<e.length;t++){var i=e.charCodeAt(t);if(55296<=i&&i<=56319){if(e.length>1){var s=e.charCodeAt(t+1),n=1024*(i-55296)+(s-56320)+65536;if(118784<=n&&n<=128895)return!0}}else if(e.length>1){s=e.charCodeAt(t+1);if(8419==s)return!0}else{if(8448<=i&&i<=10239)return!0;if(11013<=i&&i<=11015)return!0;if(10548<=i&&i<=10549)return!0;if(12951<=i&&i<=12953)return!0;if(169==i||174==i||12349==i||12336==i||11093==i||11036==i||11035==i||11088==i)return!0}}},handleSend:function(){if(this.isLogin)if(this.isEmojiCharacter(this.inputMessage))e.showToast({title:"发送失败,内容不要包含键盘表情!",icon:"none"});else{var t={};Object.assign(t,s.default,n.default);var i=/\[.+?\]/g;this.inputMessage=this.inputMessage.replace(i,(function(e){console.log("str",e);var i=t[e].lastIndexOf("."),s=t[e].slice(i,t[e].length);return".gif"===s?"<img src= '"+t[e]+"' width='60'height='60' style='padding: 0 1px'/>":(console.log("else"),"<img src= '"+t[e]+"' width='22'height='20' style='padding: 0 1px'/>")}));var o={nickname:e.getStorageSync("nickname")||this.ipAddress,avatar:e.getStorageSync("avatar")||this.defualtAvatar,content:this.inputMessage,userId:e.getStorageSync("userId")||null,type:3,ipAddress:this.ipAddress,ipSource:this.ipSource};this.WebsocketMessage.type=3,this.WebsocketMessage.data=o,e.sendSocketMessage({data:JSON.stringify(this.WebsocketMessage),success:function(e){console.log("发送成功",e)},fail:function(e){console.log("发送失败",e)}}),this.inputMessage=""}else e.navigateTo({url:"/pages/mixLogin/index"})},selectQuickMsg:function(e){this.inputMessage=e},setViewHidden:function(){this.quickShow=!1,this.emojiShow=!1},setChatShow:function(e){this.chatShow=e,this.scroll_top=this.scrollHeight},setToolsHidden:function(){this.setViewHidden(),this.setChatShow(!1)},handleEmojiShow:function(){this.emojiShow?(this.emojiShow=!1,this.setChatShow(!1)):(this.setViewHidden(),this.emojiShow=!0,this.setChatShow(!0))},handleQuickShow:function(){this.quickShow?(this.quickShow=!1,this.setChatShow(!1)):(this.setViewHidden(),this.quickShow=!0,this.setChatShow(!0))},connectSocketInit:function(){var t=this;e.connectSocket({url:"wss://websocket.solargod.cn",success:function(e){console.log("WebSocket连接成功",e)}}),e.onSocketOpen((function(t){console.log("WebSocket连接已打开！"),setInterval((function(){var t={type:6,data:"ping"};e.sendSocketMessage({data:JSON.stringify(t),success:function(e){console.log("心跳重连成功",e)},fail:function(e){console.log("重连失败!请重新启动!",e)}})}),3e4)})),e.onSocketMessage((function(e){var i=JSON.parse(e.data);switch(i.type){case 1:t.count=i.data;break;case 2:t.chatRecordList=i.data.chatRecordList,t.ipAddress=i.data.ipAddress,t.ipSource=i.data.ipSource;break;case 3:t.chatRecordList.push(i.data);break}}))}}};t.default=c}).call(this,i("543d")["default"])},"412a":function(e,t,i){"use strict";var s;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return s}));var n=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.chatRecordList,(function(t,i){var s=e.__get_orig(t),n=t.ipAddress!==e.ipAddress?e.$dayjs(t.createTime).format("YYYY-MM-DD HH:mm:ss"):null,o=t.ipAddress===e.ipAddress?e.$dayjs(t.createTime).format("YYYY-MM-DD HH:mm:ss"):null;return{$orig:s,g0:n,g1:o}})));e.$mp.data=Object.assign({},{$root:{l0:i}})},o=[]},"6d7f":function(e,t,i){"use strict";var s=i("f424"),n=i.n(s);n.a},cc33:function(e,t,i){"use strict";(function(e){i("9fd6");s(i("66fd"));var t=s(i("d65f"));function s(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},d584:function(e,t,i){"use strict";i.r(t);var s=i("364e"),n=i.n(s);for(var o in s)"default"!==o&&function(e){i.d(t,e,(function(){return s[e]}))}(o);t["default"]=n.a},d65f:function(e,t,i){"use strict";i.r(t);var s=i("412a"),n=i("d584");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("6d7f");var c,a=i("f0c5"),r=Object(a["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],c);t["default"]=r.exports},f424:function(e,t,i){}},[["cc33","common/runtime","common/vendor"]]]);