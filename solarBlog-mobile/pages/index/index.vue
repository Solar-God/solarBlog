<template>
	<view class="home">
		<view class="tabs-box">
			<u-tabs :list="tabList" @click="changeTab" :current="current">
			</u-tabs>
		</view>
		<view style="margin: 30rpx;" v-if="current === 0">
			<u-swiper :list="swiperList" previousMargin="30" nextMargin="30" circular :autoplay="true" radius="5"
				bgColor="#ffffff"></u-swiper>
		</view>
		<u-notice-bar :text="notice" bgColor="#FFFFFF" v-if="current === 0"></u-notice-bar>
		<articleList :articleList="articleList" :isLogin="isLogin" v-if="current === 0"></articleList>
		<view class="news-box" v-if="current !== 0">
			<image @tap="handlePreView(newsUrl)" :src="newsUrl"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				tabList: [{
					name: '推荐',
				}, {
					name: '知乎热榜',
				}, {
					name: '百度热点'
				}, {
					name: '今日头条'
				},
				{
					name: 'IT之家'
				}
				],
				current: 0,
				swiperList: [
					'https://images.solargod.cn/photos/7b9be2a5fae0b769211f7252d3e3057a.png',
					'https://images.solargod.cn/photos/f9cc9d8b68f1405c302497b055e582fc.png',
					'https://images.solargod.cn/photos/e6337d734b5e2efe8ab97f40e3913d3f.png',
				],
				articleList: [],
				notice: '本站资源多为网络收集，如涉及版权问题请及时与站长联系，我们会在第一时间内删除资源!',
				newsUrl: 'https://py.solargod.cn/news/poster/0/0'
			};
		},
		onShow() {
			this.isLogin = uni.getStorageSync('isLogin')
		},
		onLoad() {
			this.getAticelList()
		},
		methods: {
			async getAticelList() {
				const res = await this.$http('/articles')
				this.articleList = res.data
			},
			async onPullDownRefresh() {
				await this.getAticelList()
				uni.stopPullDownRefresh()
			},
			changeTab(item) {
				this.current = item.index
				if(item.name == '知乎热榜') {
					this.newsUrl = 'https://py.solargod.cn/news/poster/0/0'
				} else if(item.name == '百度热点') {
					this.newsUrl = 'https://py.solargod.cn/news/poster/0/2'
				} else if(item.name == '今日头条') {
					this.newsUrl = 'https://py.solargod.cn/news/poster/0/3'
				} else if(item.name == 'IT之家') {
					this.newsUrl = 'https://py.solargod.cn/news/poster/1/2'
				}
			},
			handlePreView(newsUrl) {
				wx.previewImage({
					urls: [newsUrl]
				})
			},
			onShareAppMessage() {
				return {
					from: "menu"
				}
			},
			onShareTimeline() {},
		}
	};
</script>

<style lang="scss">
	.news-box {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;

		image {
			width: 100%;
			height: 2080rpx;
			padding: 0 20rpx;
		}
	}
	.tabs-box{
		position: sticky;
		top: 0;
		left: 0;
		margin: 0 auto;
		background-color: #FFFFFF;
		z-index: 999;
	}
</style>
