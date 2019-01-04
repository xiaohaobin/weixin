Page({
	data: {

	},
	onLoad: function() {
		var _this = this;

		console.log("页面加载");

	},
	onPullDownRefresh: function() { //监听下拉刷新,
		// wx.startPullDownRefresh();//开启下拉刷新的动画
		wx.stopPullDownRefresh(); //关闭下拉刷新的动画
		console.log("完成：complete下拉刷新");
	},

});
