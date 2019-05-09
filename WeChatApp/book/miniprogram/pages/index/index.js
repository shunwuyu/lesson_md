//index.js
const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command

const app = getApp()

Page({
  data: {
    book_list: []
  },
  onLoad: function (options) {
    var _this = this;

    db.collection('mybook').get({
      success: res => {
        this.setData({
          book_list: res.data
        })
      }
    })
  },
  viewItem: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../bookDetail/bookDetail?id=' + id
    });
  }
})
