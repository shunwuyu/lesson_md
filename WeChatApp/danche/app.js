//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // wx.getStorage({
    //   key: 'loginStatus',
    //   success: (res) => {
    //     this.globalData.loginStatus = res.data
    //   }
    // })
  },
  globalData: {
    loginStatus: 0
  }
})