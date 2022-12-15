// app.js
const WXAPI = require('apifm-wxapi');
App({
  onLaunch: async () =>{
    WXAPI.init('tz', 951);
    wx.getSystemInfo({
      success: res => {
        let menuButtonObject = wx.getMenuButtonBoundingClientRect();
        // console.log(menuButtonObject);
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.menuButtonObject = menuButtonObject;
      },
      fail(err) {
        console.log(err);
      }
    })
    const res = await WXAPI.goodsv2({
      miaosha: true
    })
    console.log(res, '??????//////')
  },
  globalData: {
    userInfo: null
  },
  
})
