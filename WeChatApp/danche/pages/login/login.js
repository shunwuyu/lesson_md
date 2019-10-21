// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    phoneText: '',
    smsText: '',
    btn_disable: 'disable',
    sms_disable: 'disable',
    btnText: "获取验证码"
  },
  input(e) {
    let value = e.detail.value;
    
    this.setData({
      phoneText: value
    })

    if (this.data.phoneText.length == 11) {
      this.setData({
        sms_disable: '',
        show: true
      })
      if (this.data.smsText.length == 4) {
        this.setData({
          btn_disable: ''
        })
      }
    } else {
      this.setData({
        sms_disable: 'disable',
        toNext: '',
        btn_disable: 'disable',
        show: false
      })
    }
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

  }
})