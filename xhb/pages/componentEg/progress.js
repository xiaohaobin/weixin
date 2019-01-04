Page({
	data: {
		val1:5,
		activeMode:"backwards",
		timer:null,
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
	bindactiveendFn:function(e){
		console.log("动画完成",e);
	},
	addFn:function(){
		if(this.data.timer){
			console.log(this.data.timer)
			return false;			
		} 
		this.timerFn();
	},
	timerFn:function(){
		var _this = this;
		_this.data.timer = setTimeout(function(){
			_this.data.val1 += 1;
			var v = _this.data.val1
			console.log(v);
			_this.setData({
				val1:v
			});	
			_this.timerFn();
		},100);
		
		if(_this.data.val1 >= 100) clearTimeout(_this.data.timer);
	},
	endFn:function(){
		this.setData({
			val1:100
		});	
	}
});

