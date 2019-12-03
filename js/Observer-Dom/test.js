//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    //计算导航栏相关距离
    let menuButtonObject = wx.getMenuButtonBoundingClientRect(); 
    console.log(menuButtonObject) //获取按钮信息
    wx.getSystemInfo({
      success(res) {
        // let that = this
        console.log(res) //测试获取设备信息
        let statusBarHeight  = res.statusBarHeight;  //状态栏的高度
        let navTop = menuButtonObject.top //胶囊按钮与顶部的距离
        let navHeight = menuButtonObject.height + statusBarHeight + (navTop - statusBarHeight) * 2
        //导航栏的高度
        let navWidth = res.windowWidth - menuButtonObject.right//按钮右边的空隙的距离
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
        // console.log(navHeight)
      },
      fail(err){
        console.log(err)
      }
    })
      
  },
  globalData: {
    userInfo: null,
    navHeight:null,
    navTop:null,
    windowHeight:null
  }
})