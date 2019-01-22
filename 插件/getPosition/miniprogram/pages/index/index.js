//引入插件
var plugin = requirePlugin("myPlugin")
//调用插件函数
console.log(plugin, plugin.getPluginInfo());

Page({
	data: {
		//为了改变插件数据而添加的参数
		region: ['广东省', '广州市', '海珠区']
	},
	onLoad: function() {
		console.log(plugin.getData())

	},
	submit() {
		console.log(this.data.region)
	},
	//为了监听插件数据变化的函数
	changeEvent(e) {
		console.log(e)
		this.setData({
			region: e.detail.region
		})
	},
	/**
	* 获取用户信息
	*/
	onGotUserInfo(e) {
		wx.setStorageSync("userInfo",e);
		console.log(e);
		console.log(e.detail)
		console.log(e.detail.errMsg)
		console.log(e.detail.userInfo)
		console.log(e.detail.rawData)
	},
	
})
