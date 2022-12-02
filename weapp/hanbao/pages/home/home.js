// pages/home/home.js
// const WXAPI = require('apifm-wxapi')
const APP = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: 0,
    navTop: 0,
    name: '',
    shopInfo: {
      name: '蜜雪冰城东里店',
    },
    banners: [
      {
        id: '1',
        picUrl: 'https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/168904/19/33042/40832/63885215Ea4af33f8/9aec6fd3279c03a0.jpg!cr_1053x420_4_0!q70.jpg'
      },
      {
        id: '2',
        picUrl: 'https://m15.360buyimg.com/mobilecms/jfs/t1/166718/6/32222/91324/637c2687E695da018/453755a5e5b193ca.jpg!cr_1125x449_0_166!q70.jpg'
      },
      {
        id: '3',
        picUrl: 'https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/212225/6/11238/61871/61e50ff9E7f02c060/8d0f3065b0c27182.jpg!cr_1053x420_4_0!q70.jpg'
      }
    ],
    goodsDynamic: [
      {
        "id": 1,
        "avatarUrl":"https://p3-passport.byteimg.com/img/user-avatar/1e97b69802d5f79f166650b938f191b7~100x100.awebp",
        "nick": "EdurtIO",
        "goodsName":"毛衣"
      },
      {
        "id": 2,
        "avatarUrl":"https://p3-passport.byteimg.com/img/user-avatar/4632f7c01f0be0aca577ce5f8e1bfbc0~100x100.awebp",
        "nick": "franz150",
        "goodsName":"毛巾"
      },
      {
        "id": 3,
        "avatarUrl":"https://p3-passport.byteimg.com/img/user-avatar/a31b7b7d760bc05636860f0263da672b~100x100.awebp",
        "nick": "alive",
        "goodsName":"牙刷"
      },
    ]
  },
  goSearch(){
    wx.navigateTo({
      url: '/pages/search/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('load')
    // this.initBanners()
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
    this.setData({
      navHeight: APP.globalData.navHeight,
      navTop: APP.globalData.navTop,
      windowHeight: APP.globalData.windowHeight,
      menuButtonObject: APP.globalData.menuButtonObject //小程序胶囊信息
    })
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