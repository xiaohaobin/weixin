//引入插件
let tengxunMap = requirePlugin("tengxunMap")
let routeInfo = {
    startLat: 39.90469,    //起点纬度 选填
    startLng: 116.40717,    //起点经度 选填
    startName: "我的位置",   // 起点名称 选填
    endLat: 39.94055,    // 终点纬度必传
    endLng :116.43207,  //终点经度 必传
    endName:"来福士购物中心",  //终点名称 必传
    mode:"car"  //算路方式 选填
}
//起点：不填写或startName=“我的位置”或startName=“当前位置”或startName=“currentLocation”则插件会获取当前的定位位置作为起点位置发起算路，若正确填写起点信息，则以传入的起点信息发起算路。

Page({
	data:{
		token:null,
		routeInfo:routeInfo
	},
  onLoad(){
		this.setData({
			token:getApp().globalData.access_token
		})
		
	},

});

