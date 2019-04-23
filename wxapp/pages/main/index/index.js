// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '电影列表',
    lists:[
      {
        name: '旅梦的春天',
        time: '2019-05-01',
        desc: '又是一个春暖花开，万物复苏的季节，喻老师作为旅梦开发团的首领，即将带着我们来一次猿类大迁徙',
        imgUrl: 'https://user-gold-cdn.xitu.io/2019/4/19/16a3436b93cfcc17?w=642&h=881&f=jpeg&s=59560'
      },
      {
        name: '旅梦的春天',
        time: '2019-05-01',
        desc: '又是一个春暖花开，万物复苏的季节，喻老师作为旅梦开发团的首领，即将带着我们来一次猿类大迁徙',
        imgUrl: 'https://user-gold-cdn.xitu.io/2019/4/19/16a3436b93cfcc17?w=642&h=881&f=jpeg&s=59560'
      },
      {
        name: '旅梦的春天',
        time: '2019-05-01',
        desc: '又是一个春暖花开，万物复苏的季节，喻老师作为旅梦开发团的首领，即将带着我们来一次猿类大迁徙',
        imgUrl: 'https://user-gold-cdn.xitu.io/2019/4/19/16a3436b93cfcc17?w=642&h=881&f=jpeg&s=59560'
      },
      {
        name: '旅梦的春天',
        time: '2019-05-01',
        desc: '又是一个春暖花开，万物复苏的季节，喻老师作为旅梦开发团的首领，即将带着我们来一次猿类大迁徙',
        imgUrl: 'https://user-gold-cdn.xitu.io/2019/4/19/16a3436b93cfcc17?w=642&h=881&f=jpeg&s=59560'
      },
      {
        name: '旅梦的春天',
        time: '2019-05-01',
        desc: '又是一个春暖花开，万物复苏的季节，喻老师作为旅梦开发团的首领，即将带着我们来一次猿类大迁徙',
        imgUrl: 'https://user-gold-cdn.xitu.io/2019/4/19/16a3436b93cfcc17?w=642&h=881&f=jpeg&s=59560'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1)
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