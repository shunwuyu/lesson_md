const app = getApp()
const github = require('../../api/github.js')
const moment = require('../../lib/moment.js')
const timeRange = [
  { label: 'Daily', value: 'Daily' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' }
]
const languages = [
  'All',
  'C', 'CSS', 'C#', 'C++',
  'Dart', 'Dockerfile',
  'Erlang',
  'Gradle', 'Go',
  'HTML', 'Haskell',
  'Java', 'JavaScript', 'JSON', 'Julia',
  'Kotlin',
  'MATLAB',
  'Python', 'PHP',
  'R', 'Ruby', 'Rust',
  'Shell', 'SQL', 'Swift',
  'TeX',
  'Vue'
].map(it => ({ label: it, value: it }))

const sinceCacheKey = 'Trending:Since'
const langCacheKey = 'Trending:Lang'
const trendsCacheKey = 'Trending:Data'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    since: timeRange[0],
    lang: languages[0],
    selectorValues: [timeRange, languages],
    selectedIndices: [wx.getStorageSync(sinceCacheKey) || 0, wx.getStorageSync(langCacheKey) || 0],
    trends: wx.getStorageSync(trendsCacheKey) || []
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function () {
    wx.startPullDownRefresh({})
  },

  onShareAppMessage: function (options) {
  },

  onPullDownRefresh: function () {
    this.reloadData()
  },
  reloadData: function () {
    const [timeIndex, langIndex] = this.data.selectedIndices
    // 语言
    const lang = languages[langIndex] || languages[0]
    // 日期 
    const since = timeRange[timeIndex] || timeRange[0]
    this.setData({ lang, since }, () => {
      wx.setStorage({
        key: sinceCacheKey,
        data: timeIndex,
      })
      wx.setStorage({
        key: langCacheKey,
        data: langIndex,
      })
    })
    github.trendings(since.value.toLowerCase(), lang.value.toLowerCase()).then(data => {
      wx.stopPullDownRefresh()
      this.setData({
        trends: data,
      }, () => {
        if (data.length > 0) {
          wx.setStorage({
            key: trendsCacheKey,
            data: data,
          })
        }
      })
    }).catch(error => wx.stopPullDownRefresh())
  },
  changeFilter: function (event) {
    const selectedIndices = event.detail.value
    this.setData({ selectedIndices })
    // 将页面滚动到目标位置
    wx.pageScrollTo({
      scrollTop: 0
    })
    // 开始下拉刷新
    wx.startPullDownRefresh({})
  },
  onSearch: function (e) {
    const q = e.detail;
    console.log('search', q);
    wx.navigateTo({
      url: `/pages/search/search?q=${q}`
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