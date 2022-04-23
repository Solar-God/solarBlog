<template>
	<view class="mixLogin">
		<view class="top">
			<image src="../../static/login/image/Logo.png" mode=""></image>
		</view>
		<view class="login-box">
			<view class="username">
				<input type="text" placeholder="请输入邮箱号" v-model="username" />
			</view>
			<view class="password">
				<input type="password" placeholder="请输入密码" v-model="password" />
			</view>
			<view class="login-btn-box">
				<button type="primary" class="login-btn" @tap="emailLogin()">登录</button>
			</view>
			<view class="fr-box">
				<view class="forget" @tap="toForget()">
					忘记密码?
				</view>
				<view class="register" @tap="toRegister()">
					注册账号
				</view>
			</view>
		</view>
		<view class="otherLogin-box">
			<view class="header">
				其他登录方式
			</view>
			<view class="loginIcon-box">
				<view class="loginIcon-item" @tap="wxLogin()">
					<image src="../../static/login/svg/wx.svg" mode=""></image>
				</view>
				<view class="loginIcon-item" @tap="weiboLogin()">
					<image src="../../static/login/svg/weibo.svg" mode=""></image>
				</view>
				<!-- #ifdef APP-PLUS -->
				<button class="loginIcon-item" plain="true" @tap="qqLogin()">
					<image src="../../static/login/svg/qq.svg" mode=""></image>
				</button>
				<!-- #endif -->
				<!-- #ifndef APP-PLUS -->
				<button class="loginIcon-item" plain="true" @getuserinfo="qqLogin()" open-type="getUserInfo">
					<image src="../../static/login/svg/qq.svg" mode=""></image>
				</button>
				<!-- #endif -->
			</view>
		</view>
		<view class="agreement-box">
			<u-modal title="用户协议" :show="isShowDeal" @confirm="isShowDeal = false" ref="uModal">
				<view class="slot-content">
					<p>用户登录后，存储用户头像和用户名;</p>
					<p>用户登录后可以查看文章、修改用户资料;</p>
					<p>本站承诺按照隐私指引的用途使用用户个人信息;</p>
					<p>本站承诺不会未经用户同意将其信息提供给第三方;</p>
					<p>信息的存储期限为1年;</p>
					<p>本站作者qq:180181332</p>
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
				username: '',
				password: '',
				isShowDeal: false
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
				uni.setStorageSync('articleLikeSet', res
					.data.articleLikeSet)
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
			validateLogin() {
				var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				if (this.username === '' || this.username === undefined) {
					uni.showToast({
						title: '请输入邮箱和密码',
						icon: 'none'
					})
					return false;
				}
				if (this.password === '' || this.password === undefined) {
					uni.showToast({
						title: '请输入邮箱和密码',
						icon: 'none'
					})
					return false;
				}
				if (!reg.test(this.username)) {
					uni.showToast({
						title: '邮箱格式不正确',
						icon: 'none'
					})
					return false;
				}
				return true;
			},
			emailLogin() {
				const self = this
				if (self.validateLogin()) {
					//发送登录请求
					let param = {}
					param.username = self.username
					param.password = self.password
					self.$http('/login', 'POST', self.$qs.stringify(param), 'application/x-www-form-urlencoded').then(
						res => {
							if (res.code === 20000) {
								uni.setStorageSync('isLogin', true)
								self.saveUserInfo(res)
								// 获取博客信息
								self.$http("/admin").then(res => {
									self.saveBlogInfo(res)
									uni.navigateBack()
								})
							} else {
								uni.showToast({
									title: res.message,
									icon: 'none'
								})
							}
						})
				}
			},
			showDeal() {
				this.isShowDeal = true
			},
			qqLogin() {
				console.log('qq')
				const self = this
				// #ifdef MP-WEIXIN
				uni.showToast({
					title: '微信小程序不支持qq登录，请使用其他登录方式',
					icon: 'none'
				})
				// #endif
				// #ifdef APP-PLUS
				uni.login({
					provider: 'qq',
					success(res) {
						const params = {}
						params.openId = res.authResult.openid
						params.accessToken = res.authResult.access_token
						params.platform = 'APP-PLUS'
						self.$http('/users/oauth/qq', 'POST', params).then(res => {
							if (res.code === 20000) {
								uni.setStorageSync('isLogin', true)
								self.saveUserInfo(res)
								// 获取博客信息
								self.$http("/admin").then(res => {
									self.saveBlogInfo(res)
									uni.navigateBack()
								})
							} else {
								uni.showToast({
									title: res.message,
									icon: 'none'
								})
							}
						})
					}
				})
				// #endif
				// #ifdef MP-QQ
				// 查看是否授权
				qq.getSetting({
					success(res) {
						if (res.authSetting['scope.userInfo']) {
							// 已经授权，可以直接调用 getUserInfo 获取头像昵称
							qq.getUserInfo({
								success(res) {
									const params = {}
									params.nickname = res.userInfo.nickName
									params.avatar = res.userInfo.avatarUrl
									params.platform = 'MP-QQ'
									qq.login({
										success(res) {
											params.code = res.code
											self.$http('/users/oauth/qq', 'POST', params).then(
												res => {
													if (res.code === 20000) {
														uni.setStorageSync('isLogin', true)
														self.saveUserInfo(res)
														// 获取博客信息
														self.$http("/admin").then(res => {
															self.saveBlogInfo(res)
															uni.navigateBack()
														})
													} else {
														uni.showToast({
															title: res.message,
															icon: 'none'
														})
													}
												})
										}
									})
								}
							})
						}
					}
				})
				// #endif
			},
			weiboLogin() {
				console.log('weibo')
				const self = this
				// #ifdef MP-WEIXIN || MP-QQ
				uni.showToast({
					title: '小程序不支持微博登录，请使用其他登录方式',
					icon: 'none'
				})
				// #endif
				// #ifdef APP-PLUS
				uni.login({
					provider: 'sinaweibo',
					success(res) {
						const params = {}
						params.uid = res.authResult.uid
						params.accessToken = res.authResult.access_token
						params.platform = "mobile"
						self.$http("/users/oauth/weibo", "POST", params).then(res => {
							if (res.code === 20000) {
								uni.setStorageSync('isLogin', true)
								self.saveUserInfo(res)
								// 获取博客信息
								self.$http("/admin").then(res => {
									self.saveBlogInfo(res)
									uni.navigateBack()
								})
							} else {
								uni.showToast({
									title: res.message,
									icon: 'none'
								})
							}
						})
					}
				})
				// #endif
			},
			wxLogin() {
				const self = this
				// #ifdef APP-PLUS || MP-QQ
				uni.showToast({
					title: 'App和qq小程序不支持微信登录，请使用其他登录方式',
					icon: 'none'
				})
				// #endif
				// #ifdef MP-WEIXIN
				wx.getUserProfile({
					lang: 'zh_CN',
					desc: '注册或登录',
					success(res) {
						const wx_userInfo = JSON.parse(JSON.stringify(res))
						uni.login({
							provider: 'weixin',
							success: function(res) {
								const params = {}
								params.code = res.code
								params.nickname = wx_userInfo.userInfo.nickName
								params.avatar = wx_userInfo.userInfo.avatarUrl
								self.$http("/users/oauth/wx", "POST", params).then(res => {
									if (res.code === 20000) {
										uni.setStorageSync('isLogin', true)
										self.saveUserInfo(res)
										// 获取博客信息
										self.$http("/admin").then(res => {
											self.saveBlogInfo(res)
											uni.navigateBack()
										})
									} else {
										uni.showToast({
											title: res.message,
											icon: 'none'
										})
									}
								})
							}
						});
					},
				})
				// #endif
			},
			toForget() {
				uni.navigateTo({
					url: '/pages/mixLogin/forget/forget'
				})
			},
			toRegister() {
				uni.navigateTo({
					url: '/pages/mixLogin/register/register'
				})
			},
			onShareAppMessage() {
				return {
					from: "menu"
				}
			},
			onShareTimeline() {}
		}
	}
</script>

<style lang="scss">
	.mixLogin {
		width: 100%;
		height: 100vh;
		background-color: #F1F8FA;
	}

	.top {
		width: 100%;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top image {
		width: 300rpx;
		height: 300rpx;
	}

	.login-box {
		width: 100%;
	}

	.username {
		width: 80%;
		margin: 20rpx auto;

		input {
			height: 80rpx;
			padding: 0 25rpx;
			line-height: 80rpx;
			font-size: 28rpx;
			background: #FFF;
			flex: 1;
			border-bottom: 1rpx solid #F4F4F4;
			border-radius: 50rpx;
		}
	}

	.password {
		width: 80%;
		margin: 20rpx auto;
		display: flex;
		justify-content: space-between;

		input {
			height: 80rpx;
			padding: 0 25rpx;
			line-height: 80rpx;
			font-size: 28rpx;
			background: #FFFFFF;
			flex: 4;
			border-bottom: 1rpx solid #F4F4F4;
			border-radius: 50rpx;
		}

		.clear {
			flex: 1;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #FFFFFF;
		}
	}

	.fr-box {
		width: 80%;
		margin: 20rpx auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.forget {
			display: flex;
			font-size: 24rpx;
			height: 30rpx;
			line-height: 30rpx;
			color: #333333;
			margin-top: 30rpx;
		}

		.register {
			display: flex;
			font-size: 24rpx;
			height: 30rpx;
			line-height: 30rpx;
			color: #007AFF;
			margin-top: 30rpx;
		}
	}

	.login-btn-box {
		height: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 80rpx;

		.login-btn {
			background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
			font-size: 32rpx;
			width: 80%;
			border-radius: 50rem !important;
		}
	}

	.agreement-box {
		position: fixed;
		width: 100%;
		bottom: 50rpx;
		text-align: center;
		z-index: 999;

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
