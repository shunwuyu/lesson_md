//logs.js
const GameManager = require('./game_manager.js');

Page({
  data: {
    grids: [],
    score: 0,
    highscore: 0,
    over: false,  // 游戏结束显示
    win: false,
  },
  GameManager: null,
  touchStartClientX: 0,
  touchStartClientY: 0,
  touchEndClientX: 0,
  touchEndClientY: 0,
  onLoad: function () {
    wx.showLoading({
      title: '正在加载 ...',
    })
    this.GameManager = new GameManager(4);
    this.setData({
      grids: this.GameManager.setup(), // 初始化数据 随机插入了两块
      highscore: wx.getStorageSync('highscore') || 0
    });
  },
  onReady: function() {
    wx.hideLoading();
  },
  touchStart: function (events) {
    var touch = events.touches[0];
    this.touchStartClientX = touch.clientX;
    this.touchStartClientY = touch.clientY;
  },
  touchMove: function (events) {
    var touch = events.touches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
  },
  touchEnd: function (events) {
    // 计算 x 方向上的 偏移
    // 计算 y 方向上的 偏移
    var dx = this.touchEndClientX - this.touchStartClientX;
    var absDx = Math.abs(dx);
    var dy = this.touchEndClientY - this.touchStartClientY;
    var absDy = Math.abs(dy);
    // 距离超过 10 认为滑动了
    if (Math.max(absDx, absDy) > 10) {
      // x 方向的偏移大于 y 方向 认为 左右动
      // y 方向的偏移大于 x 方向 认为 上下动
      // 左右动 开始滑动 坐标小于 结束滑动的 > 0 右边
      // 1 右边 3 左
      // 0 上 2 下
      var direction = absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0);

      var data = this.GameManager.move(direction) || {
        grids: this.data.grids,
        over: this.data.over,
        won: this.data.won,
        score: this.data.score
      };

      var highscore = wx.getStorageSync('highscore') || 0;
      if (data.score > highscore) {
        wx.setStorageSync('highscore', data.score);
      }

      this.updateView({
        grids: data.grids,
        over: data.over,
        won: data.won,
        score: data.score,
        highscore: Math.max(highscore, data.score)
      });
    }
  }
})
