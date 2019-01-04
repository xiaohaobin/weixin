Page({
  data: {
    imgUrls: [
		"../../img/game_1.jpg",
		"../../img/game_2.jpg",
		"../../img/mm_1.jpg",
		"../../img/mm_2.jpg"
    ],
	// imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度 
    indicatorDots: true,//是否显示指示点
    autoplay: true,//是否自动播放
    interval: 3000,//图片切换间隔
    duration: 1000,//滑动动画时长
	circular:true,//是否采用衔接滑动
  },
  onLoad:function(){
	  var _this = this;
	  var aImg = [
		"../../img/game_1.jpg",
		"../../img/game_2.jpg",
		"../../img/mm_1.jpg",
		"../../img/mm_2.jpg"
    ];
	 // 获得一个图片的高度即可
	 wx.getImageInfo({
		src:aImg[0],
		success: function(res){
			  // 获取当前屏幕的宽度
			  var attr = wx.getStorageSync('phoneattr')
			  console.log("获取当前屏幕的宽度");
			  console.log(attr.screenWidth);
			  console.log(res.width);
			  console.log(res.height);
			  var imgHeight = (res.height * attr.screenWidth)/(res.width);
			  _this.setData({
				  imgWidth: attr.screenWidth,
				  imgHeight: imgHeight
			  })  
		}
	}); 

  },
  //切换显示指示点
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  //切换是否自动播放
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  //图片切换间隔
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  //动画延迟时间
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})