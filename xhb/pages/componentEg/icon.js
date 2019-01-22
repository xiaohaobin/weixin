Page({
	data: {
		iconSize: [20, 30, 40, 50, 60, 70],
		iconColor: [
			'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
		],
		iconType: [
			'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
		],
		 nodes: [{
		  name: 'div',
		  attrs: {
			class: 'div_class',
			style: 'line-height: 60px; color: red;'
		  },
		  children: [{
			type: 'text',
			text: 'Hello&nbsp;World!'
		  }]
		}]
	},
	onLoad: function(e) {
		console.log("页面栈:",getCurrentPages());
		var _this = this;

		console.log("从别的页面传输过来的数据：",e);

	},
	onPullDownRefresh: function() { //监听下拉刷新,
		// wx.startPullDownRefresh();//开启下拉刷新的动画
		wx.stopPullDownRefresh(); //关闭下拉刷新的动画
		console.log("完成：complete下拉刷新");
	},	
	richTap:function(e){
		console.log(e);
	}
});
