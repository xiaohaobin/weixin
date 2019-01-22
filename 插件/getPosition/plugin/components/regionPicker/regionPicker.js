// plugin/components/regionPicker/region.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		region: {
			type: "Array",
			value: ['北京市', '北京市', '东城区']
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		bindRegionChange(e) {
			this.setData({
				region: e.detail.value
			})
			// 触发回调
			this.triggerEvent("changeEvent", {
				region: this.data.region
			})
		},
		loginSuccess(e) {
      console.log(e.detail.code) // wx.login 的 code
      console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
    }
	}
})
