const app = getApp();
Page({
  data: {
    longitude: 116.397390,
    latitude: 39.908860,
    scale: 18,
    mapCtx: null,
    markers: []
  },
  onReady() {
    this.mapCtx = wx.createMapContext('myMap');
  },
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        let longitude = res.longitude;
        let latitude = res.latitude;
        this.setData({
          longitude,
          latitude
        }, () => {
          this.tocreate(res)
          // this.mapCtx.getCenterLocation({
          //   type: 'gcj02',
          //   success: (res) => {
          //     //计算最近的单车
          //     console.log(res);
          //     this.nearestBic(res)
          //   }
          // })
          wx.hideLoading();
        })
      }
    })
  },
  tocreate (res) {
    let markers = this.data.markers;
    let ran = Math.ceil(Math.random() * 20 + 5);
    for (let i = 0; i < ran; i++) {
      var t_bic = {
        "id": 0,
        "iconPath": "/images/map-bicycle.png",
        "callout": {},
        "latitude": 0,
        "longitude": 0,
        "width": 52.5,
        "height": 30
      }
      var sign_a = Math.random();
      var sign_b = Math.random();

      var a = (Math.ceil(Math.random() * 99)) * 0.00002;
      var b = (Math.ceil(Math.random() * 99)) * 0.00002;
      t_bic.id = i;
      t_bic.longitude = (sign_a > 0.5 ? res.longitude + a : res.longitude - a);
      t_bic.latitude = (sign_b > 0.5 ? res.latitude + b : res.latitude - b);
      markers.push(t_bic);
    }
    this.setData({
      markers
    })
  },
  nearestBic (res) {

  },
  toUser() {
    if (!app.globalData.loginStatus) {
      return wx.showModal({
        title: '提示',
        content: '请先登录',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login'
            })
          }
        }
      })
    }
    //若为模拟登录状态直接跳转
    return wx.navigateTo({
      url: '/pages/userCenter/userCenter',
    })
  },
  toMsg() {
    wx.navigateTo({
      url: '/pages/messageCenter/messageCenter',
    })
  },
  toReset() {
    //复位后调整缩放比，提升体验
    this.mapCtx.moveToLocation();
    this.setData({
      scale: 18
    })
  },
  toVisit(e) {
    let bic = e.markerId;
    console.log(this.data.markers[bic]);
  },
  toScan() {
    return wx.scanCode({
      success: (res) => {
        // console.log(res);
        // wx.showModal({
        //   title: 'code',
        //   content: JSON.stringify(res),
        // })
        wx.navigateTo({
          url: '/pages/unlock/unlock',
        })
      }
    })
  }
})