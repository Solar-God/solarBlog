<template>
	<view class="articleList">
		<scroll-view scroll-y="true">
			<view class="articleList-box" v-for="item in articleList" :key="item.id">
				<view open-type="navigate" @tap="handleNavigate(item.id)">
					<view class="img-box">
						<image class="img" :src="item.articleCover"></image>
					</view>
					<view class="content-box">
						<view class="title-box">
							<u--text :text="item.articleTitle"></u--text>
						</view>
						<view class="tags-box">
							<view class="tag">
								<u-tag :text="$dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss')" size="mini"
									icon="calendar-fill" type="error" plain></u-tag>
							</view>
							<view class="tag">
								<u-tag :text="item.categoryName" size="mini" icon="bookmark-fill" type="warning" plain>
								</u-tag>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="more">
				<u-loadmore :status="status" :nomore-text="nomoreText" />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: ["articleList","isLogin"],
		name: "articleList",
		data() {
			return {
				status: 'nomoreText',
				nomoreText: '实在没有了'
			};
		},
		methods: {
			handleNavigate(id) {
				if(this.isLogin) {
					uni.navigateTo({
						url: '/pages/articleDetail/articleDetail?id='+id
					})
				} else {
					uni.navigateTo({
						url: '/pages/mixLogin/index'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.articleList {
		height: 100%;
		max-width: 100%;
	}

	.articleList-box {
		height: auto;
		max-width: 100%;
		background-color: #FFFFFF;
		margin: 30rpx;
		box-shadow: #FFFFFF;
		border-radius: 20rpx;
	}

	.img-box {
		width: 100%;
		height: 360rpx;
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.tags-box {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		margin-top: 10rpx;
	}

	.more {
		margin-bottom: 20rpx;
	}
</style>
