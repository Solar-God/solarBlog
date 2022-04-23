<template>
	<view class="author">
		<image @click="handlePreView(wxUrl)" :src="wxUrl" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wxUrl: 'https://images.solargod.cn/photos/58f8c1a56542755eccc1503d9b706a7b.JPG',
				qqUrl: 'https://images.solargod.cn/photos/8b120bb6ce7f16ca9b8d796e065247b3.png'
			}
		},
		methods: {
			handlePreView(imgUrl) {
				wx.previewImage({
					urls: [imgUrl]
				})
			}
		}
	}
</script>

<style lang="scss">
	.author {
		width: 100%;
		height: 100vh;
		background-color: #F1F8FA;
		
		image {
			width: 700rpx;
			height: 900rpx;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
</style>
