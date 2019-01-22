// redirect.js navigator.js
Page({
	data:{
		extraData:{
			id:"007",
			name:"mmp"
		}
	},
  onLoad(options) {
		console.log("页面栈:",getCurrentPages());
  },
	navigateTo:function(){
		wx.navigateTo({
			url: 'icon?id=1'
		})
	},
	redirectTo:function(){
		wx.redirectTo({
			url: 'button?id=1'
		})
	},
	switchTabTo:function(){
		wx.switchTab({
		  url: '/pages/hardwareModule/hardwareModule'
		})
	},
	navigateBack:function(){
		var p = getCurrentPages();
		var len = (p.length > 1 ? (p.length - 2) : (p.length - 1))
		wx.navigateBack({
			delta: len
		})
	}
	
})