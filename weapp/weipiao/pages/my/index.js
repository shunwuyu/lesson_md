// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 116.397390,
    latitude: 39.908860,
    scale: 18,
    markers:[]
  },
  toMsg() {

  },
  toUser() {

  },
  toReset() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onReady() {
    this.mapCtx = wx.createMapContext('myMap');
  },
  onLoad(options) {
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
          wx.hideLoading();
        })
      }
    })
  },
  tocreate(res) {
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})