// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000, //自动切换时间间隔
    duration: 500,
    circular: true,
    indicatorActiveColor: '#f1f1f1',
    checked: true,
    isleft: true,
    city: "南昌",
    id: '',
    items: [],
    items0: [],
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 页面加载完成后
  onLoad() {
    // 发送请求获取数据
    console.log('Onload');
    // wx 是微信的缩写
    var that = this;

    wx.request({
      url: "https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/new-movie-list",
      data: {},
      method: 'GET',
      header: { 'Content-type': 'application/json' },
      success: function (res) {
        console.log(res)
        that.setData({
          items: res.data.data.movieList
          // items0: res.data.data.movies,
          // id: res.data.data.movies.id
        })
      }
    })
  },

  scroll(e) {
    console.log(e)
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },

  tabChangehot() {
    this.setData({
      isleft: true
    })
  },
  tabChangewaiting() {
    this.setData({
      isleft: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(3)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(4)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(5)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // wx.showNavigationBarLoading()
    console.log("onPullDownRefresh")
    setTimeout(() => {
      // 隐藏导航栏加载框
      // wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();

    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("我猜你还想看更多东西")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("分享")
  }
})