<template>
	<view class="userInfo">
		<view class="avatar-box">
			<image lazyLoad :src="avatar" @tap="chooseImage" class="avatar-img"></image>
			<text @tap="chooseImage" class="avatar-text">修改头像</text>
		</view>
		<view class="userInfo-tips">
		    <text>基本信息</text>
		    <text>建议绑定邮箱以便及时收到回复</text>
		</view>
		<view class="userInfo-box">
			<view class="info-item active">
			    昵称
			    <input v-model="userForm.nickname" maxlength="10" placeholder="请输入昵称" type="text"/>
			</view>
			<view class="info-item active">
			    简介
			    <input v-model="userForm.intro" maxlength="19" placeholder="请输入简介" type="text"/>
			</view>
			<view class="info-item" @tap="toEmailModel()">
			    邮箱
			    <input v-model="userForm.email" maxlength="19" placeholder="请绑定邮箱" type="text" disabled/>
			</view>
			<view class="info-item active">
			    登录时间
			    <input v-model="userForm.lastLoginTime" maxlength="19" placeholder="最后登录时间" type="text" disabled/>
			</view>
		</view>
		<view class="userInfo-save">
			<button type="primary" class="save-btn" @tap="updateUserInfo()">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: uni.getStorageSync('avatar') || null,
				userForm: {
					nickname: uni.getStorageSync('nickname') || null,
					intro: uni.getStorageSync('intro') || null,
					email: uni.getStorageSync('email') || null,
					lastLoginTime: this.$dayjs(uni.getStorageSync('lastLoginTime')).format('YYYY-MM-DD HH:mm:ss') || null
				}
			}
		},
		onShow() {
			this.userForm.email = uni.getStorageSync('email')
		},
		methods: {
			updateUserInfo() {
				this.$http("/users/info", "PUT", this.userForm).then(res => {
					if (res.code === 20000) {
						this.saveUserInfoStorage(this.userForm)
						uni.showToast({
							title: '更新成功',
							icon: 'success'
						})
						setTimeout(() => {
							uni.navigateBack()
						},300)
					} else {
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
				})
			},
			saveUserInfoStorage(params) {
				uni.setStorageSync('nickname', params.nickname)
				uni.setStorageSync('intro', params.intro)
				uni.setStorageSync('email', params.email)
				uni.setStorageSync('lastLoginTime', params.lastLoginTime)
			},
			chooseImage() {
				uni.showToast({
					title: '请绑定邮箱！',
					icon: 'none'
				})
			},
			toEmailModel() {
				uni.navigateTo({
					url: "/pages/mine/emailModel/emailModel"
				})
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	.avatar-box{
		width: 100%;
		height: 244rpx;
		background: #fff;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		
		image{
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
			margin-top: 20rpx;
		}
		
		text{
			color: #04befe;
			font-size: 24rpx;
			width: 100%;
			height: 40rpx;
			text-align: center;
		}
	}
	
	.userInfo-tips{
		width: 100%;
		height: 76rpx;
		line-height: 76rpx;
		font-size: 24rpx;
		color: #9c9c9c;
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.userInfo-box {
		position: relative;
		
		.info-item {
			height: 100rpx;
			border-bottom: 2rpx solid #f3f4f5;
			background: #fff url('https://images.solargod.cn/photos/c343860072b8e7bcc7105b5693fbadef.png') no-repeat 686rpx;
			background-size: 36rpx 36rpx;
			line-height: 98rpx;
			font-size: 28rpx;
			display: flex;
			padding: 0 72rpx 0 36rpx;
			box-sizing: border-box;
			justify-content: space-between;
			
			input {
				height: 100rpx;
				line-height: 100rpx;
				border: none;
				width: 80%;
				padding: 0;
				text-align: right;
			}
		}
	}
	
	.userInfo-box,.info-item {
		width: 100%;
		overflow: hidden;
	}
	
	.info-item.active {
	    background: #fff;
	}
	
	.userInfo-save {
		height: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30rpx;

		.save-btn {
			background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
			font-size: 32rpx;
			width: 80%;
			border-radius: 50rem !important;
		}
	}
</style>
