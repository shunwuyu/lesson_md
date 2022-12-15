// pages/wangyi/wangyi.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:0,
    navTop: 0,
    hideLogo: false
  },
  onScroll(e) {
    if (e.detail.scrollTop > 50) {
      this.setData({
        hideLogo: true
      })
    } else {
      this.setData({
        hideLogo: false
      })
    }
    console.log(e, '-----------');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      windowHeight: app.globalData.windowHeight,
      navTop: app.globalData.navTop
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})