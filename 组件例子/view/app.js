App({
  onLaunch: function () {
			wx.getSystemInfo({
				success: function (res) {
					console.log("屏幕宽度：",res.windowWidth)
					console.log("屏幕高度：",res.windowHeight)
					// 进行保存屏幕的高度和宽度
					wx.setStorageSync('phoneattr', res)
					
				}
			});
  }
})
