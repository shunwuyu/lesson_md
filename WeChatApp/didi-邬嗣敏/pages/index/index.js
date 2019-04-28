//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/index';

Page({
  data: {
    navScrollLeft: 0,
    currentTab: 1,
    duration: 1000,
    interval: 5000,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    this.requestCart();
    this.requestWaitingtime();
  },
  onShow() {
    this.setData({
      address: app.globalData.bluraddress,
      destination: app.globalData.destination,
      currentTab: app.globalData.id,
    })
  },
  requestCart(e) {
    util.request({
      url: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get',
      mock: false,
    }).then((res) => {

      const navData = res.data.navData;
      const imgUrls = res.data.imgUrls;
      const cost = res.data.cost
      this.setData({
        navData,
        imgUrls,
        cost
      })
    })
  },
  requestWaitingtime() {
    setTimeout(() => {
      util.request({
        url: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get',
        mock: false,
        data: {
        }
      }).then((res) => {
        const arr = res.data.waitingTimes;
        //   console.log(arr)
        var index = Math.floor((Math.random() * arr.length));
        // console.log(arr[index])
        this.setData({
          isLoading: false,
          waitingTimes: arr[index]
        })
      })
    }, 1000);
  },
  switchNav(event) {
    this.requestWaitingtime();
    const cart = event.currentTarget.dataset.name
    let text = this.data.navData;
    this.setData({
      cart,
      isLoading: true,
      waitingTimes: ''
    })
    var cur = event.currentTarget.dataset.current;
    const info = wx.getSystemInfoSync();
    var singleNavWidth = info.windowWidth / 8;
    this.setData({
      navScrollLeft: (cur - 1) * singleNavWidth,
      currentTab: cur,
    })
  },
})
