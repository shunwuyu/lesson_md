// pages/vehicles/index.js
const app = getApp()
const db = require('../../assets/db.js');
const module = require('../../modules/index.js');
const { testDrive } = module;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  testDrive,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    const entity = db.vehicles.find((item) => {
      return item.id == id
    })
    if (entity) {
      this.setData({
        entity
      })

      wx.setNavigationBarTitle({
        title: this.data.entity.header
      })
    } else {
      wx.redirectTo({
        url: '../index/index',
      })
    }
    
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