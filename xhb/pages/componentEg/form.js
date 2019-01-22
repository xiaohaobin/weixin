Page({
	data: {
		formData: null,
		openid: "",
		access_token:""
	},
	formSubmit: function(e) {
		var _this = this;
		wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
			title: '加载中',
			icon: 'loading',
		});
				
		console.log("表单提交获取信息：",e);
		
		
		var fId = e.detail.formId;

		var l = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + getApp().globalData.access_token;
		var d = {
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
		};
		console.log(d);
		// getApp()是获取app.js的全局数据
		//请求
		wx.request({
			url: l,
			//注意不要用value代替data
			data: {
				data:getApp().globalData.tmp_push[1].data,//申请的模板消息的data，
				touser: getApp().globalData.openid,//全局参数openid
				template_id:getApp().globalData.tmp_push[1].id,//申请的模板消息id，
				page: '/pages/componentEg/form',
				form_id: fId,				
				color: '#ccc',
				emphasis_keyword: 'keyword1.DATA'//强调的关键词参数
			},
			method: 'POST',
			success: function(res) {
				wx.hideLoading();
				
				console.log("发送成功");
				console.log(res);
			},
			fail: function(err) {
				// fail  
				console.log("push err")
				console.log(err);
			}
		});

		this.setData({
			formData: JSON.stringify(e.detail.value)
		});
	},
	formReset: function() {
		console.log('form发生了reset事件')
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		var that = this;
		console.log(getApp().globalData);

	}
})
