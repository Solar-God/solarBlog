<template>
	<view class="mine">
		<view class="bg-box">
			<!-- 			<image src="https://images.solargod.cn/solarBlog/photos/e087463ca2d9ec53b8e96b61ea274f03.png" class="bg-image"></image> -->
			<view class="bg-image"></view>
			<button type="default" size="mini" class="bg-btn" @tap="contractMe()">
				<image src="../../static/mine/svg/quickMark.svg"></image>
				<text>联系作者</text>
			</button>
		</view>
		<!-- info start -->
		<view class="info-box">
			<view class="userInfo-box">
				<view style="display: flex; align-items: center;">
					<view class="avatar-box">
						<image :src="isLogin ? user.avatar : 'https://images.solargod.cn/avatar.png'"></image>
						<view class="badge" v-if="isLogin">
							<image src="../../static/mine/image/level.png"></image>
							<view>{{ user.memberLevel }}</view>
						</view>
					</view>
					<view class="nickName-box">
						<view class="nickName" v-if="isLogin" @tap="toUserInfo()">
							<view class="nickName-text">{{ user.nickname }}</view>
							<view class="iconfont icon-arrow-right" style="line-height: 100%;"></view>
						</view>
						<view v-else style="font-size: 32rpx;font-weight: bold;" @tap="toLogin()">请点击授权登录</view>
						<view style="font-size: 24rpx;color: #919293;">
							当前贡献值{{ isLogin ? user.currentValue : 0 }}/{{ isLogin ? user.totalValue : 0 }}
						</view>
						<view style="width: 100%;">
							<progress percent="0" activeColor="#ADB838" height="8rpx" :percent="growthValue"
								border-radius="8rpx" />
						</view>
					</view>
					<view class="userInfo-btn" @tap="myVip()">
						<view>我的会员</view>
						<view class="iconfont icon-arrow-right" style="line-height: 100%;"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="blogInfo-box">
			<view class="blogInfo-grid">
				<view class="blogInfo-number">
					{{ isLogin ? blogInfo.articleCount : '***' }}
				</view>
				<view class="blogInfo-text">
					文章
				</view>
			</view>
			<view class="blogInfo-grid">
				<view class="blogInfo-number">
					{{ isLogin ? blogInfo.messageCount : '***' }}
				</view>
				<view class="blogInfo-text">
					留言量
				</view>
			</view>
			<view class="blogInfo-grid">
				<view class="blogInfo-number">
					{{ isLogin ? blogInfo.viewsCount : '***' }}
				</view>
				<view class="blogInfo-text">
					访问量
				</view>
			</view>
			<view class="blogInfo-grid">
				<view class="blogInfo-number">
					{{ isLogin ? blogInfo.userCount : '***' }}
				</view>
				<view class="blogInfo-text">
					用户量
				</view>
			</view>
		</view>
		<!-- info end -->
		<!-- banner start -->
		<!-- 		<image src="https://images.solargod.cn/solarBlog/photos/f9cc9d8b68f1405c302497b055e582fc.png" class="banner" mode="widthFix"></image> -->
		<!-- bennaer end -->
		<!-- service start -->
		<view class="service-box">
			<view class="service-header">
				我的服务
			</view>
			<view class="service-row">
				<view class="service-grid" @tap="toUserInfo()">
					<view class="image-box">
						<image src="/static/mine/svg/myProfile.svg"></image>
					</view>
					<view>个人中心</view>
				</view>
				<view class="service-grid" @tap="handleClearCache()">
					<view class="image-box">
						<image src="/static/mine/svg/cleanCache.svg"></image>
					</view>
					<view>清理缓存</view>
				</view>
				<view class="service-grid" @tap="toChat()">
					<view class="image-box">
						<image src="/static/mine/svg/advice.svg"></image>
					</view>
					<view>聊天室</view>
				</view>
				<view class="service-grid" @tap="more()">
					<view class="image-box">
						<image src="/static/mine/svg/more.svg"></image>
					</view>
					<view>更多</view>
				</view>
			</view>
		</view>
		<!-- service end -->
		<!--；logout start-->
		<view class="logout-box" v-if="isLogin">
			<button type="primary" class="logout-btn" @tap="logout">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				user: {
					avatar: "/static/avatar.png",
					memberLevel: 1,
					nickname: '罗小黑',
					currentValue: 10,
					totalValue: 100
				},
				blogInfo: {
					articleCount: 99,
					messageCount: 99,
					viewsCount: 99,
					userCount: 99
				}
			}
		},
		computed: {
			growthValue() {
				if (!this.isLogin) return 0
				const {
					currentValue,
					totalValue
				} = this.user
				return currentValue / (totalValue) * 100
			},
		},
		onShow() {
			this.isLogin = uni.getStorageSync('isLogin')
			this.getUserInfo()
			this.getBlogInfo()
		},
		methods: {
			async onPullDownRefresh() {
				if(this.isLogin) {
					// 获取博客信息
					await this.$http("/admin").then(res => {
						this.saveBlogInfo(res)
					})
				}
				await this.getBlogInfo()
				uni.stopPullDownRefresh()
			},
			getUserInfo() {
				this.user.avatar = uni.getStorageSync('avatar')
				this.user.nickname = uni.getStorageSync('nickname')
				this.user.memberLevel = parseInt(uni.getStorageSync('articleLikeSet').length / 10)
				this.user.currentValue = uni.getStorageSync('articleLikeSet').length
				this.user.totalValue = (this.user.memberLevel+1) * 10
			},
			getBlogInfo() {
				// 博客信息
				this.blogInfo.articleCount = uni.getStorageSync('articleCount')
				this.blogInfo.messageCount = uni.getStorageSync('messageCount')
				this.blogInfo.viewsCount = uni.getStorageSync('viewsCount')
				this.blogInfo.userCount = uni.getStorageSync('userCount')
			},
			saveBlogInfo(res) {
				uni.setStorageSync(
					'articleCount', res
					.data
					.articleCount)
				uni.setStorageSync(
					'messageCount', res
					.data
					.messageCount)
				uni.setStorageSync(
					'viewsCount', res
					.data
					.viewsCount)
				uni.setStorageSync(
					'userCount', res
					.data
					.userCount)
			},
			toLogin() {
				if(this.isLogin) {
					
				} else {
					uni.navigateTo({
						url:"/pages/mixLogin/index"
					})
				}
			},
			contractMe() {
				console.log('联系作者')
				uni.navigateTo({
					url: "/pages/mine/author/author"
				})
			},
			logout() {
				const self = this
				uni.showModal({
					title: '退出登录',
					content: '您确定要退出登录吗？',
					success: function(res) {
						if (res.confirm) {
							self.$http("/logout").then(res => {
								if(res.flag) {
									self.user.nickName = ""
									self.user.avatar = "/static/avatar.png"
									self.isLogin = false
									uni.clearStorage()
								} else {
									uni.showToast({
										title: res.message,
										icon: 'none'
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			toUserInfo() {
				if(this.isLogin) {
					uni.navigateTo({
						url: '/pages/mine/userInfo/userInfo'
					})
				} else {
					uni.navigateTo({
						url:"/pages/mixLogin/index"
					})
				}
			},
			myVip() {
				uni.navigateTo({
					url: '/pages/mine/chat/chat'
				})
			},
			toChat() {
				uni.navigateTo({
					url: '/pages/mine/chat/chat'
				})
			},
			more() {
				uni.showToast({
					title: '请期待更多精彩内容!',
					icon: 'none'
				})
			},
			// 预清除缓存
			handleClearCache() {
				let self = this
				uni.showModal({
					title: '清除缓存',
					content: '您确定要清除缓存吗？',
					success: function(res) {
						if (res.confirm) {
							uni.showToast({
								title: '清除成功!',
								icon: 'none'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			onShareAppMessage(){
				return {
					from:"menu"
				}
			},
			onShareTimeline(){},
		},
	}
</script>

<style lang="scss">
	.mine {
		width: 100%;
		height: 100vh;
		background-color: #F1F8FA;
	}

	.bg-box {
		position: relative;
	}

	.bg-image {
		width: 100%;
		height: 300rpx;
		background-image: linear-gradient(to top, #7DE2FC 0%, #00aaff 100%);
		animation: Gradient 3s ease infinite;
	}

	.bg-btn {
		position: absolute;
		top: 40rpx;
		right: 40rpx;
		color: #ADB838;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50rem;
		font-size: 24rpx;
		box-shadow: 0 0 30rpx rgba(66, 66, 66, 0.1);

		&::after {
			border: 0;
		}

		image {
			width: 30rpx;
			height: 30rpx;
			margin: auto 10rpx;
		}
	}

	.info-box {
		padding: 0 30rpx;
	}

	.userInfo-box {
		display: flex;
		-ms-flex-direction: column !important; // ie浏览器私有属性
		flex-direction: column !important;
		background-color: #ffffff;
		position: relative;
		border-radius: 12rpx;
		margin-bottom: 30rpx;
		margin-top: -115rpx;
		box-shadow: 0 30rpx 30rpx -30rpx rgba($color: #333, $alpha: 0.1);
	}

	.avatar-box {
		position: relative;
		margin-top: -35rpx;
		margin-left: 35rpx;
		margin-right: 35rpx;
		width: 160rpx;
		height: 160rpx;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		box-shadow: 0 0 30rpx rgba($color: #000000, $alpha: 0.2);

		image {
			width: 140rpx;
			height: 140rpx;
			border-radius: 100%;
		}

		.badge {
			position: absolute;
			right: -10rpx;
			bottom: -10rpx;
			background-color: #FFFFFF;
			border-radius: 50rem;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FAB714;
			font-size: 24rpx;
			padding: 8rpx 16rpx;
			box-shadow: 0 0 30rpx rgba($color: #000000, $alpha: 0.2);

			image {
				width: 30rpx;
				height: 30rpx;
			}
		}
	}

	.nickName-box {
		display: flex;
		-ms-flex-direction: column !important; // ie浏览器私有属性
		flex-direction: column !important;
		flex: 1 1 auto !important;
		overflow: hidden !important;
		margin-top: 20rpx;
	}

	.nickName {
		font-size: 32rpx;
		font-weight: bold;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.nickName-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.userInfo-btn {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-left: 35rpx;
		padding: 10rpx 0 10rpx 30rpx;
		border-radius: 50rem;
		-ms-flex-negative: 0 !important;
		flex-shrink: 0 !important;
		color: #FFFFFF;
		background-color: #FAB714;
		font-size: 24rpx;
	}

	.blogInfo-box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.blogInfo-grid {
		width: 25%;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.blogInfo-number {
			margin-bottom: 20rpx;
			font-size: 40rpx;
			color: #5A5B5C;
			font-weight: bold;
		}

		.blogInfo-text {
			font-size: 24rpx;
			color: #919293;
		}
	}

	.banner {
		width: 100%;
		border-radius: 8rpx;
		margin-bottom: 30rpx;
	}

	.service-box {
		width: 100%;
		background-color: #FFFFFF;
		padding: 32rpx 30rpx 10rpx;
		box-shadow: 0 30rpx 30rpx -30rpx rgba($color: #333, $alpha: 0.1);

		.service-header {
			font-size: 32rpx;
			color: #5A5B5C;
			font-weight: bold;
			margin-bottom: 20rpx;
		}

		.service-row {
			display: flex;
			flex-wrap: wrap;
			padding-bottom: -40rpx;
			color: #919293;
			font-size: 24rpx;

			.service-grid {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 40rpx;
				width: 25%;
				position: relative;

				.image-box {
					image {
						width: 80rpx;
						height: 80rpx;
						margin-bottom: 20rpx;
					}
				}
			}
		}
	}

	.logout-box {
		height: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30rpx;
	}

	.logout-btn {
		background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
		font-size: 32rpx;
		width: 80%;
		border-radius: 50rem !important;
	}
</style>
