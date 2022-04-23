<template>
	<view class="wxLogin">
		<view class="intro">
			<image src="../../static/login/image/Logo.png" mode=""></image>
			<view class="tips">
				欢迎使用微信一键登录
			</view>
		</view>
		<view class="login-box">
			<button class="login-btn" open-type="getUserInfo" type="primary" @tap="wxLogin()">
				<image src="../../static/login/image/wechat.png" mode=""></image>
				微信一键登录
			</button>
		</view>

		<view class="agreement-box">
			<u-modal title="用户协议" :show="isShow" @confirm="isShow = false" ref="uModal">
				<view class="slot-content">
					<p>用户获取授权后，保存用户的个人信息以及隐私！</p>
					<p>用户获取授权后，可以查看自己的用户信息！</p>
					<p>本程序展示的编程技术文章可供用户学习和参考！</p>
					<p>最终解释权归小程序作者个人所有！</p>
				</view>
			</u-modal>
			<text class="text1">登录即代表您已经同意</text>
			<text class="text2" @tap="showDeal()">用户协议</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
			}
		},
		onShow() {
			uni.showToast({
				title: '请先登录',
				icon: 'none'
			})
		},
		methods: {
			saveUserInfo(res) {
				uni.setStorageSync('avatar', res.data
					.avatar)
				uni.setStorageSync('nickname', res.data
					.nickname)
				uni.setStorageSync('userId', res.data
					.id)
				uni.setStorageSync('intro', res.data
					.intro)
				uni.setStorageSync('email', res.data
					.email)
				uni.setStorageSync('lastLoginTime', res
					.data.lastLoginTime)
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
			wxLogin() {
				const self = this
				// #ifdef APP-PLUS
				const params = {}
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						// 判断提供授权的设备
						console.log('auth', JSON.stringify(res.provider));
						// 获取openid，(accessToken)等用户信息(以后都用unionid当唯一标识)
						uni.login({
							provider: 'weixin',
							success: function(res) {
								params.accessToken = res.authResult.unionid
								params.openId = res.authResult.openid
								uni.getUserInfo({
									lang: 'zh_CN',
									desc: 'weixin',
									success(res) {
										params.nickname = res.userInfo.nickName
										params.avatar = res.userInfo.avatarUrl
										self.$http("/users/oauth/wx", "POST", params).then(
											res => {
												uni.setStorageSync('isLogin', true)
												self.saveUserInfo(res)
												// 获取博客信息
												self.$http("/admin").then(res => {
													console.log('/admin', res)
													self.saveBlogInfo(res)
													uni.navigateBack()
												})

											})
									}
								})
							}
						});
					}
				});
				// #endif
				// #ifdef H5 || MP-WEIXIN
				wx.getUserProfile({
					lang: 'zh_CN',
					desc: '注册或登录',
					success(res) {
						const wx_userInfo = JSON.parse(JSON.stringify(res))
						console.log('微信用户信息', wx_userInfo)
						uni.login({
							provider: 'weixin',
							success: function(res) {
								const params = {}
								params.code = res.code
								params.nickname = wx_userInfo.userInfo.nickName
								params.avatar = wx_userInfo.userInfo.avatarUrl
								self.$http("/users/oauth/wx", "POST", params).then(res => {
									uni.setStorageSync('isLogin', true)
									self.saveUserInfo(res)
									// 获取博客信息
									self.$http("/admin").then(res => {
										self.saveBlogInfo(res)
										uni.navigateBack()
									})

								})
							}
						});
					},
				})
				// #endif
			},
			showDeal() {
				this.isShow = true
			},
			onShareAppMessage() {
				return {
					from: "menu"
				}
			},
			onShareTimeline() {},
		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.wxLogin {
		width: 100%;
		height: 100vh;
		background-color: #F1F8FA;
	}

	.intro {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		font-size: 28rpx;
		color: #919293;

		image {
			width: 190rpx;
			height: 190rpx;
		}

		.tips {
			line-height: 72rpx;
			text-align: center;
		}
	}

	.login-box {
		height: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30rpx;
	}

	.login-btn {
		background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
		font-size: 32rpx;
		width: 80%;
		border-radius: 50rem !important;

		image {
			width: 36rpx;
			height: 30rpx;
			margin-right: 10rpx;
		}
	}

	.agreement-box {
		position: fixed;
		width: 100%;
		bottom: 50rpx;
		text-align: center;

		text {
			font-size: 24rpx;
		}

		.text2 {
			color: #F08D49;
		}
	}

	.slot-content {
		p {
			font-size: 24rpx;
			text-align: left;
		}
	}
</style>
