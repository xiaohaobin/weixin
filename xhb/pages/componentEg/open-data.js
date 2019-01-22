// pages/componentEg/open-data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareTickets:null//分享标示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var _this = this;
    console.log("点击了分享");
    return {
      title: '转发...',  // 转发标题（默认：当前小程序名称）
      path: '/pages/index/index', // 转发路径（当前页面 path ），必须是以 / 开头的完整路径
      success(e) {
        // shareAppMessage: ok,
        // shareTickets 数组，每一项是一个 shareTicket ，对应一个转发对象
        // 需要在页面onLoad()事件中实现接口
        wx.showShareMenu({
          // 要求小程序返回分享目标信息
          withShareTicket: true
        });
        console.log(" onShareAppMessage的succ", e, e.shareTickets[0])
        _this.setData({
          shareTickets: e.shareTickets[0]
        })
      },
      fail(e) {
        console.log(" fail",e)
       
      },
    }
    
  },
  //获取获取转发详细信息
  shareInfo:function(){
    var _this = this;
    console.log(_this.data.shareTickets);
    if (_this.data.shareTickets){
      wx.getShareInfo({
        shareTicket: _this.data.shareTickets,//分享id标示
        timeout: 1000,
        success: function (res) {
          console.log("getShareInfo的succ", res);
        },
        fail: function (res) {
          console.log("fail", res);
        }
      })
    }else{
      console.log("请先点击分享按钮再来获取分享信息");
    }
    
  }
})