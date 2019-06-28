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
    callCart: false,
    index: '',
    costType: [
      { typeName: '拼车', typeImagUrl: '../../assets/images/costCart.png', pay: null },
      { typeName: '快车', typeImagUrl: '../../assets/images/costCart.png', pay: null  },
      { typeName: '优享', typeImagUrl: '../../assets/images/goodCart.png', pay: null },
    ]
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
  switchCart(e) {
    const id = e.currentTarget.dataset.index;
    this.setData({
      index: id,

    })

  },
  toWait(e) {
    // 关闭所有页面，打开到应用内的某个页面
    wx.navigateTo({
      url: "/pages/wait/wait",
    })
      // wx.setTopBarText({
      //   text: '等待应答'
      // })
  },
  toCast(e) {
    const destination = this.data.destination
    if (destination == '') {
      wx.showToast({
        title: '目的地不能为空',
        icon: 'fail',
        mask: true,
        duration: 1000
      })
    } else {
      let { endLatitude, endLongitude, qqmapsdk } = app.globalData;
      // from 默认是当前位置
      qqmapsdk.calculateDistance({
        mode: 'driving',
        to: [{
          latitude: endLatitude,
          longitude: endLongitude
        }],
        success: (res) => {
          const distance = res.result.elements[0].distance
          var num1 = 8 + 1.9 * (distance / 1000)
          var num2 = 12 + 1.8 * (distance / 1000)
          var num3 = 16 + 2.9 * (distance / 1000)
          var pay1 = num1.toFixed(1)
          var pay2 = num2.toFixed(1)
          var pay3 = num3.toFixed(1)
          this.setData({
            "costType[0].pay": pay1,
            "costType[1].pay": pay2,
            "costType[2].pay": pay3,
          })
        },
      });
      this.setData({
        callCart: true
      })
    }
  },
  onShow() {
    this.setData({
      address: app.globalData.bluraddress,
      destination: app.globalData.destination,
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
