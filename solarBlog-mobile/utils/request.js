// 本地服务器
const baseUrl = "http://127.0.0.1:3300"

// 全局请求封装
export const request =  (url, method, params,contentType) => {
// const token = uni.getStorageSync('token');
	uni.showLoading({
		title: "加载中"
	});
	const cookie = uni.getStorageSync('cookies').substring(0,uni.getStorageSync('cookies').indexOf(';'))
	return new Promise((resolve, reject) => {
		wx.request({
			url: baseUrl + url,
			method: method || 'GET',
			header: {
				Cookie: '__qc_wId=340; '+ cookie,
				'Content-Type': contentType || 'application/json',
			},
			data: params || {},
			success(res) {
				if(res.header['Set-Cookie']) {
					uni.setStorageSync('cookies',res.header['Set-Cookie'])
				}
				if(res.data.code === 40100) {
					uni.clearStorageSync()
					uni.navigateBack()
				}
				resolve(res.data);
			},
			fail(err) {
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
};
