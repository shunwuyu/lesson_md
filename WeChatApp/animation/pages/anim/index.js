// pages/anim/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  moveClick(){
    this.move(-75,-12.5,25,'moveOne');
    this.move(-25,12.5, 0,'moveTwo');
    this.move(25, 12.5,0,'moveThree');
    this.move(75, -12.5,-25,'moveFour');
    this.moveFunction(); // 该事件触发css3模块进行移动
  },
  move: function (w,h,m,ele) {
    let self = this;
    let moveFunc = function () {
    let animation = wx.createAnimation({
        duration: 2000,
        delay: 0,
        timingFunction: "linear",
    });

    animation.translate(w, 0).step()
    self.setData({ [ele]: animation.export() })
    let timeout = setTimeout(function () {
        animation.translate(m, h).step();

        self.setData({
            // [ele] 代表需要绑定动画的数组对象
            [ele]: animation.export()
        })
      }.bind(this), 2000)
    }
    moveFunc();
    let interval = setInterval(moveFunc,4000)
  },
  moveFunction(){
    this.setData({
        isMove: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isMove:true
    }, () => {
      console.log('-----');
      this.moveClick();
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})