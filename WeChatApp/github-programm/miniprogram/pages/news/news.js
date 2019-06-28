// miniprogram/pages/news/news.js
const moment = require('../../lib/moment.js')
const github = require('../../api/github.js')
const utils = require('../../utils/util.js');

let scrollTop = 0
let refreshing = false
// 最后一次 刷新的时间
let lastRefresh = moment().unix()
// 下一次请求的 方法 返回 Promise
let nextFunc = null
let tabIndex = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    events: wx.getStorageSync('Cache:News:Events') || [],
    isSignedIn: utils.isSignedIn(),
    loadingMoreActivity: false
  },
  reloadData: function () {
    if (refreshing) return
    refreshing = true
    this.setData({
      isSignedIn: utils.isSignedIn()
    })
    const successHandler = ({ data, next }) => {
      wx.stopPullDownRefresh()
      const events = data.map(it => utils.asEvent(it))
      this.setData({ events })
      wx.setStorage({
        key: 'Cache:News:Events',
        data: events
      })
      // next 里面放着 下一次请求
      nextFunc = next
      lastRefresh = moment()
      refreshing = false
    }
    const errorHandler = (error) => {
      console.error(error)
      wx.stopPullDownRefresh()
    }
    if (utils.isSignedIn()) {
      const username = utils.getCurrentUser().login
      github.users(username).receivedEvents().then(successHandler).catch(errorHandler)
    } else {
      github.events().get().then(successHandler).catch(errorHandler)
    }
  },
  loadMoreActivities: function () {
    if (this.data.loadingMoreActivity) {
      return
    }

    if (nextFunc) {
      this.setData({
        loadingMoreActivity: true
      })
      nextFunc().then(({ data, next }) => {
        wx.stopPullDownRefresh()
        const events = data.map(it => utils.asEvent(it))
        // 数据合并一下
        this.setData({
          events: [...this.data.events, ...events],
          loadingMoreActivity: false
        })
        nextFunc = next
        lastRefresh = moment()
        refreshing = false
      }).catch(error => {
        wx.stopPullDownRefresh()
        this.setData({
          loadingMoreActivity: false
        })
      })
    }
  },
  changeTab: function (event) {
    tabIndex = event.detail.index
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isSignedIn: utils.isSignedIn()
    })
    var lastMoment = moment(lastRefresh)
    // 超过 5分钟 
    if (scrollTop === 0 && moment().diff(lastMoment, 'minutes') >= 5) {
      wx.startPullDownRefresh({})
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
    if (tabIndex === 0) {
      this.reloadData()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (tabIndex === 0) {
      this.loadMoreActivities()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})