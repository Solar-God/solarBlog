<view class="articleList"><scroll-view scroll-y="true"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="__i0__" qq:key="id"><view class="articleList-box"><view open-type="navigate" data-event-opts="{{[['tap',[['handleNavigate',['$0'],[[['articleList','id',item.$orig.id,'id']]]]]]]}}" bindtap="__e"><view class="img-box"><image class="img" src="{{item.$orig.articleCover}}"></image></view><view class="content-box"><view class="title-box"><u--text vue-id="{{'6d8eea38-1-'+__i0__}}" text="{{item.$orig.articleTitle}}" bind:__l="__l"></u--text></view><view class="tags-box"><view class="tag"><u-tag vue-id="{{'6d8eea38-2-'+__i0__}}" text="{{item.g0}}" size="mini" icon="calendar-fill" type="error" plain="{{true}}" bind:__l="__l"></u-tag></view><view class="tag"><u-tag vue-id="{{'6d8eea38-3-'+__i0__}}" text="{{item.$orig.categoryName}}" size="mini" icon="bookmark-fill" type="warning" plain="{{true}}" bind:__l="__l"></u-tag></view></view></view></view></view></block><view class="more"><u-loadmore vue-id="6d8eea38-4" status="{{status}}" nomore-text="{{nomoreText}}" bind:__l="__l"></u-loadmore></view></scroll-view></view>