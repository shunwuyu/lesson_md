// miniprogram/pages/login/login.js
const userUtils = require('../../utils/users.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  commitAccount(e) {
    let values = e.detail.value
    let username = values.username || ''
    let password = values.password || ''
    if (!username.replace(/\s+/g, '')) {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
      })
      return
    }
    if (!password.replace(/\s+/g, '')) {
      wx.showToast({
        title: '请输入登录密码',
        icon: 'none',
      })
      return
    }
    const token = this.getToken(username, password)
    // console.log(token);
    this.login(token)
  },
  getToken (username, password) {
    const str = username + ':' + password
    return 'Basic ' + wx.arrayBufferToBase64(new Uint8Array([...str].map(char => char.charCodeAt(0))))
  },
  login (token) {
    wx.showLoading({
      title: '正在登陆',
    })
    userUtils.signIn(token).then(({ user, token }) => {
      wx.showToast({ title: '登录成功' })
      wx.navigateBack({})
    }).catch(error => {
      wx.showToast({
        title: '登陆失败: ' + error.message,
        icon: 'none',
        duration: 5000
      })
    })
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