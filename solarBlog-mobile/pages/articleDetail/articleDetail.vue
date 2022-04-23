<template>
	<view class="articleDetail">
		<view class="top">
			<view class="articleTitle">
				<text style="font-weight: bold;font-size: 30rpx;">{{articleObj.articleTitle}}</text>
			</view>
			<view class="tags-container">
				<view class="tags-box">
					<image src="../../static/articleDetail/svg/category.svg" class="svgIcon"></image>
					<text class="tagName">{{articleObj.categoryName || ''}}</text>
				</view>
				<view class="tags-box">
					<image src="@/static/articleDetail/svg/view.svg" class="svgIcon"></image>
					<text class="tagName">{{articleObj.viewsCount || ''}}</text>
				</view>
			</view>
		</view>
		<view class="content">
			<mp-html :content="articleObj.articleContent" :markdown="true"></mp-html>
		</view>
		<view class="divider">
			<u-divider text="文章结束了" textColor="#f4a300" lineColor="#5a3c2d"></u-divider>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleObj: ''
			}
		},
		onLoad(params) {
			this.getArticleDetail(params)
		},
		methods: {
			async getArticleDetail(params) {
				const res  = await this.$http("/articles/"+params.id)
				this.articleObj = res.data
			},
			onShareAppMessage(){
				return {
					from:"menu"
				}
			},
			onShareTimeline(){},
		}
	}
</script>

<style>
	.articleDetail{
		background-color: #e8e8e8;
		width: 100%;
		height: 100%;
	}
	.top{
		background-color: #FFFFFF;
		height: auto;
		margin: 1vw;
		padding:0  20rpx 20rpx 20rpx;
		border-radius: 20rpx;
		box-shadow: #FFFFFF;
	}
	.articleTitle{
		display: flex;
		align-content: center;
		justify-content: center;
	}
	.tags-container{
		display: flex;
		justify-content: center;
		margin-top: 10rpx;
	}
	.tags-box{
		margin: 15rpx;
		height: 40rpx;
		line-height: 40rpx;
	}
	.content{
		background-color: #FFFFFF;
		margin: 4rpx 0 6vw 0;
		padding:0  20rpx 20rpx 20rpx;
		border-radius: 20rpx;
	}
	.svgIcon{
		height: 20rpx;
		line-height: 20rpx;
		width: 25rpx;
	}
	.tagName{
		margin-left: 5rpx;
		height: 20rpx;
		line-height: 20rpx;
		width: 20rpx;
	}
	.divider {
	  padding-bottom: 4vw;
	}
</style>
