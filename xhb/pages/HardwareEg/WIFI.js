
Page({
  data: {
    header: [],
		wifiList:[],
		currWifiInfo:{
		},	
		stateTxt:"zzzz",
		formData:{},//所有表单的值对象
  },
  onLoad: function () {
		var _this = this;

		console.log("页面加载");
		 //初始化wifi模块
		wx.startWifi({
				complete:function(e){
					console.log("初始化wifi",e);
					
					//回显信息
					_this.callBackTodo(e,function(res){
						// console.log("kexiugai")
						_this.setData({
							stateTxt:"初始化wifi模块成功了"
						});
					});
				}
		});
	
  },
	onPullDownRefresh:function(){//监听下拉刷新,
		// wx.startPullDownRefresh();//开启下拉刷新的动画
		wx.stopPullDownRefresh();//关闭下拉刷新的动画
		console.log("完成：complete下拉刷新");
	},
	//获取当前连接到的wifi信息
	onWifiInfo:function(){
		var _this = this;
		
		//监听连接上 Wi-Fi 的事件
		wx.onWifiConnected(function(res){
			console.log("wifi改变连接了：",JSON.stringify(res));
			_this.setData({
				currWifiInfo:res.wifi,
				stateTxt:"获取当前连接的wifi信息成功了"
			});
			

		});

		//获取已连接中的 Wi-Fi 信息。
		wx.getConnectedWifi({
			complete:function(e){
				console.log("获取当前wifi信息：",e);
				
				//回显信息
				_this.callBackTodo(e,function(res){
					_this.setData({
						currWifiInfo:res.wifi,
						stateTxt:"获取当前连接的wifi信息成功了"
					});
				});

				console.log("状态字段："+ _this.data.stateTxt)
				
			}
		});
	},
	/**
	 * 回调函数提示
	 * @param {Object} e 请求的回调
	 * @param {Function} todo 请求成功回调
	 **/
	callBackTodo:function(e,todo){
		var _this = this;
		var txt;
		switch(e.errCode) {
			case 0://成功回调		
				todo(e);
				break;
			case 12000:
				txt = "未先调用 startWifi 接口";
				break;
			case 12001:
				txt = "当前系统不支持相关能力";
				break;
			case 12002:
				txt = "密码错误";
				break;
			case 12003:
				txt = "连接超时";
				break;
			case 12004:
				txt = "重复连接 Wi-Fi";
				break;
			case 12005:
				txt = "未打开 Wi-Fi 开关";//Android 特有，
				break;
			case 12006:
				txt = "未打开 GPS 定位开关";//Android 特有，
				break;
			case 12007:
				txt = "用户拒绝授权链接 Wi-Fi";
				break;
			case 12008:
				txt = "无效 SSID";
				break;
			case 12009:
				txt = "系统运营商配置拒绝连接 Wi-Fi";
				break;
			case 12010:
				txt = "系统其他错误:" + e.errMsg;
				break;
			case 12011:
				txt = "应用在后台无法配置 Wi-Fi";
				break;			
			default:		
				break;
		}

		_this.setData({
			stateTxt:txt
		});
		
	},
	//获取附近wifi列表
	getWifiList:function(){
		var _this = this;
		
		//监听获取wifi列表
		wx.onGetWifiList(function(res) {
			if (res.wifiList.length) {	
				console.log(res.wifiList);
				var list = [];
				for(var k in res.wifiList){
					list.push(res.wifiList[k]);
				}
				_this.setData({
					wifiList: list
				});
			} 
			
		});
		
		//获取wifi列表
		wx.getWifiList({
			complete:function(e){
				console.log("获取附近wifi列表：",e);
				
				//回显信息
				_this.callBackTodo(e,function(res){
					_this.setData({
						stateTxt:"获取附近wifi列表成功"
					});
				});
			}
		})
	},
	//连接wifiList
	connectWifi:function(e){
		var _this = this;
		console.log("要连接的wifi：",e.currentTarget.dataset.info.SSID);
		console.log(this.data.formData[e.currentTarget.dataset.info.SSID]);
		
		//连接指定wifi
		wx.connectWifi({
			SSID: e.currentTarget.dataset.info.SSID,
			password: this.data.formData[e.currentTarget.dataset.info.SSID],
			complete:function(e){				
				//回显信息
				_this.callBackTodo(e,function(res){
					_this.setData({
						stateTxt:"连接wifi（"+ e.currentTarget.dataset.info.SSID +"）成功"
					});
				});
			}

		})
	},
	//监听所有表单的值,并存储在数据中
	inputWacth:function(e){
		let formData = this.data.formData;
		let item = e.currentTarget.dataset.model;
		formData[item] = e.detail.value;
		this.setData({
			formData
		});
  }
});
