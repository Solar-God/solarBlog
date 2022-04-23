<template>
	<view class="chat">
		<!-- 展示在线人数 -->
		<view class="online-box">
			<view class="online-number">
				在线人数:{{count}}人
			</view>
		</view>
		<!-- 聊天框 -->
		<view class="chat-box" :class="chatShow?'tools' : ''" @tap="setToolsHidden">
			<scroll-view scroll-y enable-back-to-top class="scroll-view" @scroll="chatScroll" :scroll-top="scroll_top"
				:scroll-into-view="viewId" @scrolltolower="scrolltolower">
				<view class="message-container" v-for="item in chatRecordList" :id="'item'+item.id">
					<!-- 其他用户消息 -->
					<view v-if="item.ipAddress !== ipAddress" class="userMessage-box">
						<!-- 用户头像、昵称、日期 -->
						<view class="nickName-box">
							<image class="userAvatar" :src="item.avatar">
							</image>
							<text class="nickName">{{item.nickname}}</text>
							<text class="date">{{$dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss')}}</text>
						</view>
						<!-- 用户聊天内容 -->
						<view class="userContent-box">
							<!--文字表情消息内容-->
							<view v-if="item.type === 3" class="userContent" v-html="item.content"></view>
						</view>
					</view>
					<!-- 自己发的消息 -->
					<view v-else class="myMessage-box">
						<!-- 自己的头像、昵称、日期 -->
						<view class="nickName-box">
							<text class="date">{{$dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss')}}</text>
							<text class="nickName">{{item.nickname}}</text>

							<image class="myAvatar" :src="item.avatar">
							</image>
						</view>
						<!-- 自己聊天内容 -->
						<view class="myContent-box">
							<!--文字表情消息内容-->
							<view v-if="item.type === 3" class="myContent" v-html="item.content"></view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 温馨提示 -->
		<view class="tips-box">
			<view class="tips-title">
				温馨提示
			</view>
			<view class="tips-content">
				请礼貌用语友好沟通,如不文明行为,将封禁账号。
			</view>
		</view>
		<!-- 底部区域 -->
		<view class="footer-box">
			<!-- 操作区域 -->
			<view class="action-box">
				<view class="action" @tap="handleQuickShow()">
					<text class="iconfont icon-rounddown" />
				</view>
				<input class="input" type="text" v-model="inputMessage" />
				<view class="action" @tap="handleEmojiShow()">
					<text class="iconfont icon-emoji" />
				</view>
				<view class="action">
					<button class="btn" size="mini" @tap="handleSend()" :disabled="disabled"
						:class="disabled?'disabled':''">发送</button>
				</view>
			</view>

			<!-- 快捷输入 -->
			<view class="quickInput-box" :class="quickShow?'show':''">
				<view class="quickInput-item" v-for="(item,index) in quickList" :key="index"
					@tap="selectQuickMsg(item)">
					{{item}}
				</view>
			</view>
			<!-- 表情栏 -->
			<view class="emoji-box" :class="emojiShow?'show':''">
				<view class="emoji-scroll-view-box">
					<swiper class="emoji-swiper" :current="emoji_swiper">
						<swiper-item v-if="faceType=='emoji'">
							<view class="swiper-item">
								<block v-for="(value, key) of emojiList" :key="key">
									<image class="emoji" :src="value" mode="widthFix" @tap="selectEmoji(key)"></image>
								</block>
							</view>
						</swiper-item>
						<swiper-item v-if="faceType=='gif'">
							<view class="swiper-item">
								<block v-for="(value, key) of gifList" :key="key">
									<image class="emoji" :src="value" mode="widthFix" @tap="selectGif(key)"></image>
								</block>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<!-- 选择表情类型栏 -->
				<scroll-view class="emoji-tools-scroll-view" scroll-x>
					<view id="emoji_tool1" class="emoji-tools-item" :class="faceType=='emoji'?'select':''"
						@tap="switchEmoji('emoji')">
						<text class="iconfont icon-emoji emoji" />
					</view>
					<view id="emoji_tool2" class="emoji-tools-item" :class="faceType=='gif'?'select':''"
						@tap="switchGif('gif')">
						<text class="iconfont icon-GIF emoji" />
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import emojiList from '../../../common/js/emoji.js'
	import gifList from '../../../common/js/gif.js'
	export default {
		data() {
			return {
				isLogin: false,
				scrollHeight: 0,
				scroll_top: 0,
				count: 1,
				viewId: null, // scrollView标识id
				chatRecordList: [], // 历史聊天记录
				quickList: ['老铁666', '厉害了我的天', '留个眼'],
				inputMessage: '',
				disabled: true,
				quickShow: false,
				emojiShow: false,
				chatShow: false,
				emoji_swiper: 0,
				emojiList: emojiList,
				gifList: gifList,
				faceType: "emoji",
				ipAddress: "112.66.104.107",
				ipSource: null,
				defualtAvatar: "https://images.solargod.cn/solarBlog/config/a2ea0aab3456fd6655785f860034ff45.png",
				WebsocketMessage: {
					type: null,
					data: null
				},
			}
		},
		watch: {
			//监听inputMessage，当他有值时发送按钮才可以点击
			inputMessage(newVal) {
				if (newVal.trim() != '') {
					this.disabled = false
				} else {
					this.disabled = true
				}
			},
			chatRecordList(newVal) {
				const len = newVal.length - 1
				// #ifdef APP
				setTimeout(() => {
					this.viewId = 'item' + newVal[len].id
				}, 100)
				// #endif

				// #ifndef APP
				this.viewId = 'item' + newVal[len].id
				// #endif
			},
		},
		onShow() {
			this.isLogin = uni.getStorageSync('isLogin')
		},
		onLoad() {
			this.connectSocketInit()
		},
		onUnload() {
			console.log('关闭连接')
			uni.closeSocket()
		},
		methods: {
			scrolltolower() {
				console.log('滑到底部')
			},
			chatScroll(event) {
				this.scrollHeight = event.detail.scrollHeight;
			},
			switchEmoji(faceType) {
				console.log('faceType', faceType)
				this.faceType = faceType
			},
			switchGif(faceType) {
				console.log('faceType', faceType)
				this.faceType = faceType
			},
			selectEmoji(key) {
				console.log('key', key)
				this.inputMessage += key
			},
			selectGif(key) {
				console.log('key', key)
				this.inputMessage += key
			},
			isEmojiCharacter(substring) {
				for (var i = 0; i < substring.length; i++) {
					var hs = substring.charCodeAt(i);
					if (0xd800 <= hs && hs <= 0xdbff) {
						if (substring.length > 1) {
							var ls = substring.charCodeAt(i + 1);
							var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
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
			handleSend() {
				if (this.isLogin) {
					if (this.isEmojiCharacter(this.inputMessage)) {
						uni.showToast({
							title: '发送失败,内容不要包含键盘表情!',
							icon: 'none'
						})
					} else {
						// 合并emoji和gif对象
						const faceObject = {}
						Object.assign(faceObject, emojiList, gifList)
						//解析表情
						var reg = /\[.+?\]/g;
						this.inputMessage = this.inputMessage.replace(reg, function(str) {
							console.log('str', str)
							// 判断是否为.gif后缀
							let lastSpot = faceObject[str].lastIndexOf(".") // 查找最后一个.的索引
							// 获取后缀名(.gif)
							let suffix = faceObject[str].slice(lastSpot, faceObject[str].length)
							if (suffix === ".gif") {
								return (
									"<img src= '" +
									faceObject[str] +
									"' width='60'height='60' style='padding: 0 1px'/>"
								);
							} else {
								console.log('else')
								return ("<img src= '" +
									faceObject[str] +
									"' width='22'height='20' style='padding: 0 1px'/>");
							}
						});
						var socketMsg = {
							nickname: uni.getStorageSync('nickname') || this.ipAddress,
							avatar: uni.getStorageSync('avatar') || this.defualtAvatar,
							content: this.inputMessage,
							userId: uni.getStorageSync('userId') || null,
							type: 3,
							ipAddress: this.ipAddress,
							ipSource: this.ipSource,
						};
						this.WebsocketMessage.type = 3;
						this.WebsocketMessage.data = socketMsg;
						uni.sendSocketMessage({
							data: JSON.stringify(this.WebsocketMessage),
							success(res) {
								console.log('发送成功', res)
							},
							fail(err) {
								console.log('发送失败', err)
							}
						})
						this.inputMessage = ''
					}
				} else {
					uni.navigateTo({
						url: "/pages/mixLogin/index"
					})
				}
			},
			selectQuickMsg(quickMsg) {
				this.inputMessage = quickMsg
			},
			setViewHidden() {
				this.quickShow = false;
				this.emojiShow = false;
			},
			setChatShow(status) {
				this.chatShow = status;
				this.scroll_top = this.scrollHeight;
			},
			setToolsHidden() {
				this.setViewHidden();
				this.setChatShow(false);
			},
			handleEmojiShow() {
				if (this.emojiShow) {
					this.emojiShow = false;
					this.setChatShow(false);
				} else {
					this.setViewHidden();
					this.emojiShow = true;
					this.setChatShow(true);
				}
			},
			handleQuickShow() {
				if (this.quickShow) {
					this.quickShow = false;
					this.setChatShow(false);
				} else {
					this.setViewHidden();
					this.quickShow = true;
					this.setChatShow(true);
				}
			},
			connectSocketInit() {
				const self = this
				uni.connectSocket({
					// url: "ws://127.0.0.1:3300/websocket",
					url: "wss://websocket.solargod.cn",
					success(data) {
						console.log('WebSocket连接成功', data)
					}
				})

				uni.onSocketOpen(function(res) {
					console.log('WebSocket连接已打开！');
					setInterval(function() {
						var beatMessage = {
							type: 6,
							data: "ping"
						};
						uni.sendSocketMessage({
							data: JSON.stringify(beatMessage),
							success(res) {
								console.log('心跳重连成功', res)
							},
							fail(err) {
								console.log('重连失败!请重新启动!', err)
							}
						})
					}, 30 * 1000)
				});

				uni.onSocketMessage(function(res) {
					const data = JSON.parse(res.data)
					switch (data.type) {
						case 1:
							self.count = data.data
							break;
						case 2:
							self.chatRecordList = data.data.chatRecordList
							self.ipAddress = data.data.ipAddress;
							self.ipSource = data.data.ipSource;
							break;
						case 3:
							// 文字消息
							self.chatRecordList.push(data.data);
							break;
					}

				});
			},
		}
	}
</script>

<style lang="scss">
	.chat {
		height: 100vh;
	}

	.tips-box {
		background-color: #FFFFFF;
		height: 100rpx;
		z-index: 999;
		margin: 10rpx 0;

		.tips-title {
			color: #000000;
			font-size: 32rpx;
			text-align: center;
		}

		.tips-content {
			color: gray;
			font-size: 24rpx;
			text-align: center;
		}
	}

	.online-box {
		width: 100%;
		height: 60rpx;
		background-color: #FFFFFF;
		position: relative;
		padding: 10rpx;
		z-index: 9999;

		.online-number {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #F0AD4E;
		}
	}

	.chat-box {
		position: relative;
		width: 100%;
		/* #ifdef H5 */
		height: calc(100vh - 327.27rpx);
		/* #endif */

		/* #ifndef H5 */
		height: calc(100vh - 280rpx);
		/* #endif */
		transition: height .15s;

		.scroll-view {
			position: relative;
			height: 100%;

			.userMessage-box {
				position: relative;
				display: grid;
				margin: 10rpx 0;

				.nickName-box {
					position: relative;

					.userAvatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						margin-left: 10rpx;
						vertical-align: middle;
					}

					.nickName {
						font-size: 20rpx;
						height: 80rpx;
						line-height: 80rpx;
						color: #007AFF;
						margin-left: 10rpx;
						font-weight: bold;
					}

					.date {
						font-size: 20rpx;
						height: 80rpx;
						line-height: 80rpx;
						margin-left: 10rpx;
					}
				}

				.userContent-box {
					position: relative;
					padding-left: 81.81rpx;
					padding-right: 254.54rpx;
					min-height: 63.63rpx;

					.userContent {
						position: relative;
						padding: 12.72rpx;
						font-size: 32rpx;
						width: fit-content;
						top: 0;
						background: #FFFFFF;
						color: #000000;
						border-radius: 5px 20px 20px 20px;
					}
				}
			}

			.myMessage-box {
				position: relative;
				display: grid;
				margin: 10rpx;

				// &:first-child {
				// 	margin-top: 54.54rpx;
				// }

				.nickName-box {
					position: absolute;
					right: 0;
					top: 0;

					.myAvatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						margin-left: 10rpx;
						vertical-align: middle;
					}

					.nickName {
						font-size: 20rpx;
						height: 80rpx;
						line-height: 80rpx;
						color: #007AFF;
						margin-left: 10rpx;
						font-weight: bold;
					}

					.date {
						font-size: 20rpx;
						height: 80rpx;
						line-height: 80rpx;
						margin-left: 10rpx;
					}
				}

				.myContent-box {
					position: relative;
					padding-right: 81.81rpx;
					padding-left: 254.54rpx;
					min-height: 63.63rpx;

					.myContent {
						float: right;
						margin-top: 80rpx;
						padding: 12.72rpx;
						font-size: 32rpx;
						width: fit-content;
						background: #12b7f5;
						color: #FFFFFF;
						border-radius: 20px 5px 20px 20px;
					}
				}
			}
		}
	}

	.chat-box.tools {
		/* #ifdef H5 */
		height: calc(100vh - 654.54rpx);
		/* #endif */
		/* #ifndef H5 */
		height: calc(100vh - 500rpx);
		/* #endif */
		transition: height .15s;
	}

	.footer-box {
		background-color: #FFFFFF;
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
		position: fixed;
		z-index: 999999;
		width: 100%;
		bottom: 0;
		left: 0;

		.action-box {
			display: flex;
			position: relative;
			align-items: center;
			min-height: 100rpx;
			justify-content: space-between;

			.action {
				margin: auto 10rpx;

				&:first-child {
					margin-left: 20rpx;
				}

				&:last-child {
					margin-right: 20rpx;
				}

				text {
					color: gray;
					font-size: 48rpx;
				}

				.btn {
					background-color: #01B4FE;
					color: #FFFFFF;
					width: 90rpx;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 18rpx;
					border: 0;
					outline: none;
					/* #ifdef MP-QQ */
					padding: 0.5rpx 0;
					/* #endif */
				}

				.btn.disabled {
					background-color: #aae8f5;
				}
			}

			.input {
				background: #F8F8F8;
				border-radius: 90.9rpx;
				padding: 0 27.27rpx;
				font-size: 32rpx;
				margin: auto 10rpx;
				min-width: 65%;
				min-height: 60rpx;
			}

			.input+.action {
				margin-right: 0;
				margin-left: 0;
			}
		}

		.quickInput-box,
		.emoji-box {
			position: relative;
			overflow-y: auto;
			height: 0;
			transition: height .15s;
		}

		.quickInput-box {
			.quickInput-item {
				height: 81.81rpx;
				line-height: 81.81rpx;
				text-align: center;
			}

			.quickInput-item+.quickInput-item {
				border-top: 2rpx solid #f3f3f3;
			}
		}

		.emoji-box {
			.emoji-scroll-view-box {
				position: relative;

				.emoji-swiper {
					height: 272.72rpx;
				}

				.swiper-item {
					background-color: inherit;
					padding: 0 9.09rpx;

					.emoji {
						margin: 14.54rpx 29.63rpx;
						width: 45.45rpx;
						height: 45.45rpx !important;
					}
				}
			}
		}

		// 交集
		.quickInput-box.show,
		.emoji-box.show {
			height: 327.27rpx;
			transition: height .15s;
		}

		.emoji-tools-scroll-view {
			position: relative;
			width: 100%;

			.emoji-tools-item {
				display: inline-block;
				padding-top: 2rpx;
				border-right: 2rpx solid #F8F8F8;

				.emoji {
					width: 36.36rpx;
					height: 36.36rpx !important;
					margin: 5.45rpx 18.18rpx;
					position: relative;
					top: 3.63rpx;
				}
			}

			.emoji-tools-item.select {
				background: #cfcfcf;
			}
		}
	}
</style>
