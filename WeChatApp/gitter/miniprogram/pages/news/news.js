const github = require('../../api/github.js')
const moment = require('../../lib/moment.js')
const utils = require('../../utils/util.js')

let refreshing = false
let tabIndex = 0
let scrollTop = 0
let lastRefresh = moment().unix()
console.log(lastRefresh)
// miniprogram/pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    events: [],
    isSignedIn: utils.isSignedIn(),
    loadingMoreActivity: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.isSignedIn);
    var lastMoment = moment(lastRefresh)
    if (scrollTop === 0 && moment().diff(lastMoment, 'minutes') >= 5) {
      wx.startPullDownRefresh({})
    }
  },
  changeTab (event) {
    tabIndex = event.detail.index
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  reloadData () {
    if (refreshing) return
      refreshing = true
    const successHandler = (events) => {
      console.log(events);
      wx.stopPullDownRefresh()
      this.setData({ events })
      lastRefresh = moment()
      refreshing = false
    }
    const errorHandler = (error) => {
    }
    github.events().get().then(successHandler).catch(errorHandler)
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
    if (tabIndex === 0) {
      this.reloadData()
    }
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