const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
	userInfo:{
		avatarUrl:"",
		nickName:"",
		country:"",
		province:"",
		city:"",
		gender:"",
		language:""
	}
  },
  setDisabled(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo,e.detail.userInfo.nickName)
    console.log(e.detail.rawData)
	this.setData({
		'userInfo.avatarUrl':e.detail.userInfo.avatarUrl,//头像
		'userInfo.nickName':e.detail.userInfo.nickName,
		'userInfo.country':e.detail.userInfo.country+',',
		'userInfo.province':e.detail.userInfo.province+',',
		'userInfo.city':e.detail.userInfo.city,
		'userInfo.gender':'('+(e.detail.userInfo.gender == 1 ? '男' : '女')+')',//性别，1为男
		'userInfo.language':e.detail.userInfo.language//语言
	})
  },
}

for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  }(types[i]))
}

Page(pageObject)