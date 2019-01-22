//app.js
App({
	onLaunch: function(ops) {
    if (ops.scene == 1044) {
      console.log("shareTicket:",ops.shareTicket)
    }
		
		// 展示本地存储能力
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		//获取屏幕系统的高度和宽度，并存储
		wx.getSystemInfo({
			success: function(res) {
				console.log("屏幕宽度：", res.windowWidth)
				console.log("屏幕高度：", res.windowHeight)
				// 进行保存屏幕的高度和宽度
				wx.setStorageSync('phoneattr', res)
			}
		});
		

		// 登录
		wx.login({
			success: (res) => {
				var _this = this;
				// 发送 res.code 到后台换取 openId, sessionKey, unionId		
					
				if (res.code) {
					wx.request({
						url: "https://api.weixin.qq.com/sns/jscode2session",
						data: {
							appid: "wx9b27b9d2a1cf7bf4", //去小程序后台获取
							secret: "0705d65f88783653a864d79d0653a473", //去小程序后台获取
							js_code: res.code,
							grant_type: "authorization_code",
							code: res.code //将code发给后台拿token
						},
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function(res) {
						
							_this.globalData.session_key = res.data.session_key; //拿到后将token存入全局变量  以便其他页面使用
							_this.globalData.openid = res.data.openid;
						}
					});
					
					//获取token
					wx.request({
						url: "https://api.weixin.qq.com/cgi-bin/token",
						method: 'GET',
						data: {
							appid:"wx9b27b9d2a1cf7bf4",
							secret:"0705d65f88783653a864d79d0653a473",	
							grant_type: "client_credential"
						},
						success: (res) => {
							// console.log("token信息",res);
							_this.globalData.access_token = res.data.access_token;
							
						}
					});
					
				}
			}
		});


		// 获取用户信息
		wx.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
					wx.getUserInfo({
						success: res => {
							// console.log("用户信息：",res);
							// 可以将 res 发送给后台解码出 unionId
							this.globalData.userInfo = res.userInfo
							
							// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
							// 所以此处加入 callback 以防止这种情况
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
				}
			}
		})
	},
	//全局数据
	globalData: {
		userInfo: null,
		num: 2,
		session_key: null,//会话秘钥
		access_token:null,
		openid:null,//openid(唯一标示id)
		appid:"wx9b27b9d2a1cf7bf4",//appid
		secret:"0705d65f88783653a864d79d0653a473",//app秘钥
		tmp_push:[//表单提交模板信息推送的id
			//订单支付成功通知
			{				
				id:"e_90NJ6odQPmrCuCD0oP_ZBHUK8aXY4DJKWRSyFnW8E",
				data:{
					"keyword1": {
						"value": "1314520",
						"color": "#4a4a4a"
					},
					"keyword2": {
						"value": "变形金刚旗舰店",
						"color": "#9b9b9b"
					},
					"keyword3": {
						"value": "1000000元",
						"color": "#9b9b9b"
					},
					"keyword4": {
						"value": "大黄蜂LV880型号",
						"color": "#9b9b9b"
					},
					"keyword5": {
						"value": "5000000元",
						"color": "#9b9b9b"
					},
					"keyword6": {
						"value": "2019年01月08日 12:30",
						"color": "#9b9b9b"
					}
				}
			},
			//机票预订成功通知
			{				
				id:"QMuSZHNIn2H2OykZj7lngITR6piqCGORJ0jIDb3oK7k",
				data:{
					"keyword1": {
						"value": "800元",
						"color": "#4a4a4a"
					},
					"keyword2": {
						"value": "TIY008",
						"color": "#9b9b9b"
					},
					"keyword3": {
						"value": "广州",
						"color": "#9b9b9b"
					},
					"keyword4": {
						"value": "北京",
						"color": "#9b9b9b"
					},
					"keyword5": {
						"value": "2018年12月9日 12:00",
						"color": "#9b9b9b"
					},
					"keyword6": {
						"value": "张三；李四",
						"color": "#9b9b9b"
					},
					"keyword7": {
						"value": "2018年12月8号 12:00",
						"color": "#9b9b9b"
					}
				}
			},
		]
				
				
		
	}
})
