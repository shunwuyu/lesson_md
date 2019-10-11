Page({
  data: {
    animationData: {}
  },
  onShow () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 2000)
  }
})