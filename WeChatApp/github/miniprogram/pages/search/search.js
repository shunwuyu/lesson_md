// miniprogram/pages/search/search.js
const github = require('../../api/github.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    q: '',
    repos: [],
    users: [],
    activeTab: 'repos',
    searching: {
      repos: false,
      users: false
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'Search',
    })
    const { q = '' } = options
    this.setData({ q })
    this.performSearch()
  },
  performSearch: function () {
    const { q, searching } = this.data
    console.log(q, searching);
    if (this.data.activeTab === 'repos') {
      if (searching.repos) {
        return
      }
      searching.repos = true
      this.setData({ searching })
      wx.showNavigationBarLoading({})
      github.search().repos({ q }).then(({ data, next }) => {
        this.repoSuccessHandler({ data, next })
        wx.hideNavigationBarLoading({})
      }).catch(error => {
        searching.repos = false
        this.setData({ searching })
        wx.hideNavigationBarLoading({})
      })
    } 
  },
  repoSuccessHandler: function ({ data, next }) {
    const { searching } = this.data
    const repos = data.items
    const hasMoreRepos = next != null
    searching.repos = false
    this.setData({
      repos: [...this.data.repos, ...repos],
      hasMoreRepos,
      searching,
      repoNext: next
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