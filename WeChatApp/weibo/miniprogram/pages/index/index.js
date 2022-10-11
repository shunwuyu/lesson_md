Page({
  data: {
    userDetail: undefined
  },
  getUserInfo: function(e) {
    this.setData({
      userDetail: e.detail
    }, function() {
      wx.navigateTo({
        url: "/pages/circle/circle"
      })
    })
  },
  
})