
Page({
  data: {
    demo: [],
		wifiList:{},
		apiData:null
  },
  onLoad: function () {
		
    this.demo = new Date();
		console.log(this.demo);
  },
	onPullDownRefresh:function(){//监听下拉刷新,
		// wx.startPullDownRefresh();//开启下拉刷新的动画
		wx.stopPullDownRefresh();//关闭下拉刷新的动画
		console.log("完成：complete");
	},
	getWifiList:function(){
		var _this = this;
		wx.navigateTo({
			url: '../HardwareEg/WIFI'
		})

	}
	
});
