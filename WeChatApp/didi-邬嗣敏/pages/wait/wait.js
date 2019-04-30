// pages/wait/wait.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress_txt: '以等待',
    count: 0,
    waitTimer: null,
    time: '00:00',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.drawProgressbg();
    this.countInterval();
    this.drawProgress(0);
  },
  parseTime: function (time) {
    var time = time.toString();
    return time[1] ? time : '0' + time;
  },
  countInterval: function () {
    var curr = 0;
    var timer = new Date(0, 0);
    var randomTime = Math.floor(20 * Math.random());
    this.countTimer = setInterval(() => {
      if (this.data.count <= randomTime) {
        // curr 秒数 +
        timer.setMinutes(curr / 60);
        timer.setSeconds(curr % 60);
        curr++;
        // (60 / 2) 一个比列
        this.setData({
          time: this.parseTime(timer.getMinutes()) + ":" + this.parseTime(timer.getSeconds()),
        });
        this.data.count++;
        this.drawProgress(this.data.count / (60 / 2));
      } else {
        this.setData({
          progress_txt: "匹配成功"
        });
        wx.redirectTo({
          url: "/pages/orderService/orderService",
        });
        clearInterval(this.countTimer);
      }
    }, 1000)
  },
  drawProgress: function (step) {
    console.log('step', step)
    var context = wx.createCanvasContext('canvasProgress');
    context.setLineWidth(4);
    context.setStrokeStyle("#fbcb02");
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(110, 110, 100, -Math.PI / 2, step * Math.PI / 2 - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },
  drawProgressbg: function () {
    var ctx = wx.createCanvasContext('canvasProgressbg');
    ctx.setLineWidth(4);
    // 描边颜色
    ctx.setStrokeStyle("#e5e5e5");
    // 设置线条的端点样式 向线条的每个末端添加圆形
    ctx.setLineCap("round");
    ctx.beginPath();
    // x y r startDeg endDeg 弧度的方向是否是逆时针
    // 起始弧度，单位弧度（在3点钟方向）
    // number eAngle
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.draw();
  },
  toCancel() {
    clearInterval(this.countTimer);
    wx.redirectTo({
      url: "/pages/cancel/cancel"
    })
  },
  backIndex() {
    clearInterval(this.countTimer);
    wx.redirectTo({
      url: "/pages/index/index",
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      address: app.globalData.bluraddress,
    })
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