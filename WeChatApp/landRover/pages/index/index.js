//index.js
//获取应用实例
const app = getApp()
const db = require('../../assets/db.js');
const module = require('../../modules/index.js');
const { testDrive } = module;

Page({
  data: {
    slides: db.slides
  },
  onLoad: function () {

  },
  testDrive,
  readMore(event) {
    // 美[ˈvihɪkəlz] 车辆
    wx.navigateTo({
      url: `/pages/vehicles/index?id=${event.target.dataset.id}`
    })
  },
})
