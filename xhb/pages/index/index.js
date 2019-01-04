//模块化引入until公共通用类脚本
const util = require('../../utils/util.js');
const common = require('../../utils/common.js');

//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		motto: '欢迎欢迎，热烈欢迎',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		mainName: {
			name:"李白"
		},
		msg:"setData的用法",
		onTimeNum:0,//当前时间的时间戳
	},
	//事件处理函数
	bindViewTap: function () {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	//下拉刷新
	onPullDownRefresh: function () {
		wx.stopPullDownRefresh();
	},
	//页面加载的时候
	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
		
		//定时刷新时间戳
		this.getTimesamp();
	},
	//页面准备状态的时候
	onReady: function () {
		console.log("页面准备状态的时候");
	},

	onShow: function () {
		console.log("页面显示的时候")
		console.log(this.route)
	},
	onHide: function () {
		console.log("页面隐藏的时候");

	},
	onUnload: function () {
		console.log("页面卸载的时候");
	},
	onReachBottom: function () {
		console.log("页面上拉触底事件的处理函数");
	},
	onShareAppMessage: function () {
		console.log("用户点击右上角转发的时候");
	},
	onPageScroll: function () {
		// console.log("页面滚动触发事件的处理函数");
	},
	//当前页面是 tab 页时，点击 tab 时触发
	onTabItemTap(item) {
		console.log("当前是 tab 页时，点击 tab 时触发", this.customData.hi);
		console.log(item.index)
		console.log(item.pagePath)
		console.log(item.text)
		this.viewTap();
	},
	// Event handler.
	viewTap: function () {
		this.setData({
			text: '设置一些用于更新视图的数据。'
		}, function () { //this.setData()方法 的回调
			console.log("setData方法回调");
		})
	},
	customData: {
		hi: 'MINA'
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},
	//测试
	testData: function () {
		this.setData({
			'mainName.name':'点击更新当前时间',
			'msg':Date.parse(new Date())/1000
		});
		console.log(Date.parse(new Date())/1000);
	},
	//点击获取1到100的随机数
	clickMe: function () {
		
		this.setData({
			msg: common.randNum(1,100)
		});
	},
	requestFn: function () {
		//微信小程序的异步请求
		var oRequest = wx.request({
			// url: 'http://xhb.com/php/test.php', //仅为示例，并非真实的接口地址
			url: 'http://zhangnan.xicp.net:9599/webPublic/php/test.php',
			method: 'POST', //必须大写
			dataType: 'json', ///如果设为json，会尝试对返回的数据做一次 JSON.parse 	,
			responseType: 'text', //设置响应的数据类型。合法值：text、arraybuffer
			data: {
				userName: "胡歌",
				userPwd: "3271"
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res, statusCode, header) {
				console.log("success：", res.data)
			},
			fail: function (res) {
				console.log("接口调用失败：", res);
			},
			complete: function (res) { //接口调用结束的回调函数（调用成功、失败都会执行）
				console.log("complete:", res);
			}
		});

		//取消请求
		// oRequest.abort(); // 取消请求任务
	},
	//每秒获取当前时间戳
	getTimesamp:function(){
		var _this = this;
		setTimeout(function(){
			_this.setData({
				onTimeNum:util.getTimeNum()
			});
			_this.getTimesamp();
		},1000);
	}
})
