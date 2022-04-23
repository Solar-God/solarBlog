<template>
	<view class="register">
		<view class="header-box">
			<view class="title">
				请使用邮箱注册账号
			</view>
		</view>
		<view class="form-box">
			<view class="username-box">
				<input type="text" placeholder="请输入邮箱号" v-model="username" />
			</view>
			<view class="email-box">
				<input type="text" placeholder="请输入验证码" v-model="emailCode" />
				<button class="sendCode-box" @click.stop="getCode()" :disabled="getCodeisWaiting">
					{{getCodeText}}
				</button>
			</view>
			<view class="password-box">
				<input type="text" placeholder="请输入密码" v-model="password" />
			</view>
			<view class="comfirm-btn-box">
				<button type="primary" class="comfirm-btn" @tap="handleComfirm()">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				emailCode: '',
				getCodeText: '获取验证码',
				getCodeisWaiting: false
			}
		},
		methods: {
			validateEmail() {
				var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				if (this.username === '' || this.username === undefined) {
					uni.showToast({
						title: '请输入邮箱',
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
			validatePwd() {
				if (this.emailCode.length !== 6) {
					uni.showToast({
						title: '请输入6位验证码!',
						icon: 'none'
					})
					return false;
				}
				if (this.password.length < 6) {
					uni.showToast({
						title: '密码不能小于6位!',
						icon: 'none'
					})
					return false;
				}
				return true;
			},
			getCode() {
				const self = this;
				uni.hideKeyboard()
				if (self.validateEmail()) {
					self.$http("/users/code", "GET", {
						username: self.username
					}).then(res => {
						if (res.flag) {
							self.getCodeText = "发送中..."
							self.getCodeisWaiting = true;
							//用定时器计时
							setTimeout(() => {
								uni.showToast({
									title: '验证码已发送',
									icon: "none"
								});
								self.setTimer();
							}, 1000)
						} else {
							uni.showToast({
								title: res.message,
								icon: "none"
							});
						}
					})

				}
			},
			setTimer() {
				let holdTime = 179
				const self = this
				self.getCodeText = "重新获取(180)"
				self.Timer = setInterval(() => {
					if (holdTime <= 0) {
						self.getCodeisWaiting = false;
						self.getCodeText = "获取验证码"
						clearInterval(self.Timer);
						return;
					}
					self.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;
				}, 1000)
			},
			handleComfirm() {
				const self = this
				if (self.validateEmail() && self.validatePwd()) {
					const params = {
						username: self.username,
						password: self.password,
						code: self.emailCode
					}
					self.$http('/register','POST',params).then(res => {
						if(res.flag) {
							uni.showToast({
								title: "账号注册成功!",
								icon: "none"
							});
							setTimeout(() => {
								uni.navigateBack()
							},300)
						} else {
							uni.showToast({
								title: res.message,
								icon: "none"
							});
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.form-box {
		width: 100%;
	}

	.header-box {
		width: 100%;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: $uni-font-size-lg;
		font-weight: bold;
	}

	.username-box {
		width: 80%;
		margin: 30rpx auto;

		input {
			height: 80rpx;
			line-height: 80rpx;
			font-size: 28rpx;
			border-bottom: 1rpx solid #F4F4F4;
			background-color: #FFFFFF;
			padding: 0 25rpx;
		}
	}

	.email-box {
		width: 80%;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;

		input {
			height: 80rpx;
			line-height: 80rpx;
			font-size: 28rpx;
			border-bottom: 1rpx solid #F4F4F4;
			background-color: #FFFFFF;
			padding: 0 25rpx;
			flex: 5;
		}

		.sendCode-box {
			color: #01B4FE;
			font-size: 20rpx;
			flex: 2;
			background-color: #FFFFFF;
			height: 80rpx;
			line-height: 80rpx;
			margin-left: 15rpx;
		}
	}

	.password-box {
		width: 80%;
		margin: 30rpx auto;

		input {
			height: 80rpx;
			line-height: 80rpx;
			font-size: 28rpx;
			border-bottom: 1rpx solid #F4F4F4;
			background-color: #FFFFFF;
			padding: 0 25rpx;
		}
	}

	.comfirm-btn-box {
		height: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 80rpx;

		.comfirm-btn {
			background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
			font-size: 32rpx;
			width: 80%;
			border-radius: 50rem !important;
		}
	}
</style>
