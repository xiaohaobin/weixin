Component({
  data: {
    list:[]
  },
  attached: function(){
    // 可以在这里发起网络请求获取插件的数据
    this.setData({
      list: [{
        name: '电视',
        price: 1000
      }, {
        name: '电脑',
        price: 4000
      }, {
        name: '手机',
        price: 3000
      }]
    })
  },
	methods:{
		loginSuccess(e) {
		  console.log(e.detail.code) // wx.login 的 code
		  console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
		},
		
	}
})