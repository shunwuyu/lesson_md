// pages/destination/destination.js
import util from '../../utils/index';
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
    value: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestHistory();
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
  requestHistory () {
    util.request({
      url: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get',
      mock: false,
    }).then((res) => {
      const entity = res.data.entity;
      this.setData({
        address: entity
      })
    })
  },
  searchInputend(e) {

    var that = this;
    var value = e.detail.value
    var address = that.address;
    if (value === '') {
      this.requestHistory();
    }
    // 地名推荐
    app.globalData.qqmapsdk.getSuggestion({
      keyword: value,
      region: '南昌',
      success: function (res) {
        let data = res.data
        that.setData({
          address: data,
          value
        })
      }
    })
  },
})