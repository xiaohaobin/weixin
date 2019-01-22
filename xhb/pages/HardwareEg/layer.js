// pages/HardwareEg/layer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  loading:function(){
    wx.showLoading({
      title: '加载中...'
    })
  },
  closeLoading:function(){
    wx.hideLoading();
  },
  comfirnLayer:function(){
    wx.showModal({
      title: 'comfirm弹层',
      content: '请选择一个？',
      success(res) {
        console.log(res);
        if (res.confirm) {
          wx.showToast({
            title: '选择确定',
            duration: 1000
          })

        } else {
          wx.showToast({
            title: '选择取消',
            duration: 1000
          })

        }
      }
    })
  },
  toastLayer:function(){
    wx.showToast({
      title: '提示....',
      icon: 'loading',
      duration: 1000
    })
  },
  ActionSheet:function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })

  }
})