// miniprogram/pages/accountBooks/accountBooks.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isList: false,
    accounts: []
  },
  switchList() {
    // 设置页面风格样式
    let isList = !this.data.isList
    this.setData({
      isList
    })
    wx.setStorage({
      key: "isList",
      data: isList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中'
    })
    db.collection('accounts')
      .get({
        success: res => {
          
          this.setData({
            accounts: res.data, // 反转数组，优先显示创建早的账本
          }, function(res) {
            console.log(res);
          })
          
          wx.hideLoading()
        }
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

  }
})