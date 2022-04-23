<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.$http("/user/authorization").then(res => {
				if(res.code === 40100) {
					uni.clearStorageSync()
				}
			})
			this.checkUpdateVersion()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			 checkUpdateVersion() {
			        //判断微信版本是否 兼容小程序更新机制API的使用
			        if (wx.canIUse('getUpdateManager')) {
			            //创建 UpdateManager 实例
			            const updateManager = wx.getUpdateManager();
			            console.log('是否进入模拟更新');
			            //检测版本更新
			            updateManager.onCheckForUpdate(function(res) {
			             console.log('是否获取版本');
			            // 请求完新版本信息的回调
			            if (res.hasUpdate) {
			                //监听小程序有版本更新事件
			                updateManager.onUpdateReady(function() {
			                
			                //TODO 新的版本已经下载好，调用 applyUpdate 应用新版本并重启 （ 此处进行了自动更新操作）
			                updateManager.applyUpdate();
			                })
			                updateManager.onUpdateFailed(function() {
			                // 新版本下载失败
			                wx.showModal({
			                    title: '已经有新版本喽~',
			                    content: '请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开哦~',
			                })
			                })
			            }
			            })
			        } else {
			            //TODO 此时微信版本太低（一般而言版本都是支持的）
			            wx.showModal({
			            title: '溫馨提示',
			            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
			            })
			        }
			        },
		}
	}
</script>
<!-- 全部页面的公共css -->
<style lang="scss">
	@import "uview-ui/index.scss";
	@import "common/iconfont/iconfont.scss";
	@import "common/style/index.scss"
</style>
