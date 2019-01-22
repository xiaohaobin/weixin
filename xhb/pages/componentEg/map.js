// map.js
Page({
	data: {
    centerLng: 113.324520,
    centerLat: 23.099994,
		markers: [{
			iconPath: '../../img/icon66.png',
			id: 0,
			latitude: 23.099994,
			longitude: 113.324520,
			width: 50,
			height: 50,
			callout: { //气泡
				content: "我是marker的callout",
				color: "#000000",
				bgColor: "#ffffff",
				display: "BYCLICK", //'BYCLICK':点击显示; 'ALWAYS':常显
				padding: 10,
				borderRadius: 8
			},
			label: {
				content: "我是marker的label",
				color: "#000000",
				bgColor: "#ffffff",
				anchorX: 0,
				anchorY: 0,
				padding: 5,
				borderRadius: 5
			}
		}],
		polyline: [{
			points: [{
				longitude: 113.3245211,
				latitude: 23.10229
			}, {
				longitude: 113.324520,
				latitude: 23.21229
			}],
			color: '#FF0000DD',
			width: 2,
			dottedLine: true
		}],
		polygons: [{
			points: [{
					longitude: 113.3245211,
					latitude: 23.10228
				}, {
					longitude: 113.324520,
					latitude: 23.21228
				},
				{
					longitude: 113.333333,
					latitude: 23.21111
				}
			],
			fillColor: "#e43537",
			strokeWidth: 5,
			strokeColor: "#3385ff",
			zIndex: 1000
		}],
		controls: [{ //控件
			id: 1,
			iconPath: '../../img/location.jpg',
			position: {
				left: 0,
				top: 300 - 50,
				width: 50,
				height: 50
			},
			clickable: true
		}],
		circles: [{
			latitude: 113.333333,
			longitude: 23.21111,
			color: "#3385ff",
			fillColor: "#3385ff",
			radius: 20,
			strokeWidth: 5,
		}]
	},
	//视野发生变化时触发
	regionchange(e) {
		console.log(e.type)
	},
	//点击标注
	markertap(e) {
    console.log("点击标注")
		console.log(e, e.markerId)
	},
	//点击控件
	controltap(e) {
    console.log("点击控件")
		console.log(e, e.controlId)
	},
	onReady(e) {
		// 使用 wx.createMapContext 获取 map 上下文
		this.mapCtx = wx.createMapContext('map')
	},
	getCenterLocation() {
		this.mapCtx.getCenterLocation({
			success(res) {
				console.log(res.longitude)
				console.log(res.latitude)
        //使用微信内置地图查看位置
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 14,
          name:"地图控件注册中心位置",
          address:"母鸡...",
          success:function(res){
             console.log("succ",res) 
          },
          fail: function (res) {
            console.log("fail", res)
          }
        })
			}
		})
	},
  //移动到当前定位
	moveToLocation() {
		this.mapCtx.moveToLocation()
	},
  //指定标注到指定经纬度位置
	translateMarker() {
    var _this = this;
   
		this.mapCtx.translateMarker({
			markerId: 0,
			autoRotate: true,
			duration: 1000,
			destination: {
				latitude: 24.10229,
				longitude: 113.3345211,
			},
			animationEnd() {
				console.log('animation end')
        
			},
      success(res){
        console.log("succ",res);
        _this.setData({
          centerLng: 113.3345211,
          centerLat: 24.10229
        });
      },
      fail(){
        console.log("fail", res);
      }
		})
	},
	includePoints() {
		this.mapCtx.includePoints({
			padding: [10],
			points: [{
				latitude: 23.10229,
				longitude: 113.3345211,
			}, {
				latitude: 23.00229,
				longitude: 113.3345211,
			}],
      success(res) {
        console.log("succ", res);       
      },
      fail() {
        console.log("fail", res);
      }
		})
	},
  //获取当前地图的视野范围
  getRegion(){
    this.mapCtx.getRegion({
      success(res) {
        console.log("succ", res);
      },
      fail() {
        console.log("fail", res);
      }
    })
  },
  getScale(){
    this.mapCtx.getScale({
      success(res) {
        console.log("succ", res);
      },
      fail() {
        console.log("fail", res);
      }
    })
  }
})
