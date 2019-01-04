//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    
  },
  onLoad: function () {
   
  },
	onPullDownRefresh:function(){//监听下拉刷新,
		// wx.startPullDownRefresh();//开启下拉刷新的动画
		wx.stopPullDownRefresh();//关闭下拉刷新的动画
		console.log("完成：complete");
	},
	//打开view模块
	viewComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/view'
		})	
	},
	//打开scrollview模块
	scrollViewComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/scroll_view'
		})	
	},
	//打开swiper模块
	swiperComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/swiper'
		})	
	},
	//打开可移动的视图模块
	movableViewComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/movable-view'
		})	
	},
	//打开覆盖文本视图模块
	coverViewComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/cover-view'
		})	
	},
	//打开图标和富文本模块
	iconComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/icon'
		})	
	},
	//打开进度条模块
	progressComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/progress'
		})	
	},
	//打开按钮模块
	buttonComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/button'
		})	
	},
	//打开复选框模块
	checkboxComponent:function(){
		var _this = this;
		wx.navigateTo({
			url: '../componentEg/checkbox'
		})	
	},
})
