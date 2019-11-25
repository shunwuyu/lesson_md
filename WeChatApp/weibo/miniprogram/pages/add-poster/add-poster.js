// miniprogram/pages/add-poster/add-poster.js
wx.cloud.init()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: undefined,
    text: "",
    remainLen: 140,
    imageSrc: "",
    clickable: true
  },
  bindTextInput: function (e) {
    const t = e.detail.value
    const len = e.detail.value.length
    const r = 140 - len
    this.setData({
      text: e.detail.value,
      remainLen: r
    })
  },
  onSendTap: function() {
    if (this.data.text === "" && this.data.imageSrc === "") {
      wx.showModal({
        title: "错误",
        content: "不能发送空内容",
        showCancel: false,
        confirmText: "好的"
      })
      return
    }
    if (!this.data.clickable) return
    this.setData({
      clickable: false
    })
    wx.showLoading({
      title: "发送中",
      mask: true
    })
    this.sendToDb()
  },
  sendToDb: function (fileId = "") {
    const posterData = {
      authorId: this.data.userId,
      msg: this.data.text,
      // photoId: fileId,
      date: db.serverDate()
    }
    db.collection("poster")
      .add({
        data: {
          ...posterData
        }
      })
      .then(res => {
        wx.showToast({
          title: "发送成功"
        })
        wx.navigateBack({
          delta: 1
        })
      })
      .catch(error => {
        this.onSendFail()
      })
      .finally(wx.hideLoading())

  },
  onSendFail: function () {
    wx.hideLoading()
    wx.showToast({
      title: "发送失败",
      image: "/images/error.png"
    })
    this.setData({
      clickable: true
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