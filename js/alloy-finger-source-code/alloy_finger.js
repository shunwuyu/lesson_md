/* AlloyFinger v0.1.2
 * By dntzhang
 * Github: https://github.com/AlloyTeam/AlloyFinger
 */
; (function () {
  function getLen(v) {
    // 返回一个数的平方根
      return Math.sqrt(v.x * v.x + v.y * v.y);
  }

  function dot(v1, v2) {
      return v1.x * v2.x + v1.y * v2.y;
  }

  function getAngle(v1, v2) {
      var mr = getLen(v1) * getLen(v2);
      if (mr === 0) return 0;
      var r = dot(v1, v2) / mr;
      if (r > 1) r = 1;
      return Math.acos(r);
  }

  function cross(v1, v2) {
      return v1.x * v2.y - v2.x * v1.y;
  }

  function getRotateAngle(v1, v2) {
      var angle = getAngle(v1, v2);
      if (cross(v1, v2) > 0) {
          angle *= -1;
      }

      return angle * 180 / Math.PI;
  }
  var AlloyFinger = function (el, option) {

      el.addEventListener("touchstart", this.start.bind(this), false);
      el.addEventListener("touchmove", this.move.bind(this), false);
      el.addEventListener("touchend", this.end.bind(this), false);
      el.addEventListener("touchcancel", this.cancel.bind(this), false);

      this.preV = { x: null, y: null };
      this.pinchStartLen = null;
      this.scale = 1;
      this.isDoubleTap = false;
      this.rotate = option.rotate || function () { };
      this.touchStart = option.touchStart || function () { };
      this.multipointStart = option.multipointStart || function () { };
      this.multipointEnd = option.multipointEnd || function () { };
      this.pinch = option.pinch || function () { };
      this.swipe = option.swipe || function () { };
      this.tap = option.tap || function () { };
      this.doubleTap = option.doubleTap || function () { };
      this.longTap = option.longTap || function () { };
      this.singleTap = option.singleTap || function () { };
      this.pressMove = option.pressMove || function () { };
      this.touchMove = option.touchMove || function () { };
      this.touchEnd = option.touchEnd || function () { };
      this.touchCancel = option.touchCancel || function () { };

      this.delta = null;
      this.last = null;
      this.now = null;
      this.tapTimeout = null;
      this.touchTimeout = null;
      this.longTapTimeout = null;
      this.swipeTimeout = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
      this.preTapPosition = { x: null, y: null };
  };

  AlloyFinger.prototype = {
      start: function (evt) {
          if (!evt.touches) return;
          this.now = Date.now();
          this.x1 = evt.touches[0].pageX;
          this.y1 = evt.touches[0].pageY;
          // 当前时间 - 上次时间
          this.delta = this.now - (this.last || this.now);
          this.touchStart(evt);
          if (this.preTapPosition.x !== null) {
              // 1. 时间在 0 ～ 250ms 之间
              // 2. 两次点击的范围 应在 一个 以30为半径的圆内 的
              this.isDoubleTap = (this.delta > 0 
                  && this.delta <= 250
                  && Math.abs(this.preTapPosition.x - this.x1) < 30 
                  && Math.abs(this.preTapPosition.y - this.y1) < 30);
          }
          // 记录下 一次 touchStart 点击的坐标
          this.preTapPosition.x = this.x1;
          this.preTapPosition.y = this.y1;
          this.last = this.now;
          var preV = this.preV,
              len = evt.touches.length;
          // 多根手指
          if (len > 1) {
              this._cancelLongTap();
              var v = { 
                  x: evt.touches[1].pageX - this.x1,
                  y: evt.touches[1].pageY - this.y1
              };
              // 两根手指 x 方向的距离
              preV.x = v.x;
              // 两根手指 y 方向的距离
              preV.y = v.y;
              // 两个手指时 得到了两个点的距离
              this.pinchStartLen = getLen(preV);
              // 多根手指按上去的时候
              this.multipointStart(evt);
          }
          // 按了 750 ms 认为这是一个长按事件
          this.longTapTimeout = setTimeout(function () {
              this.longTap(evt);
          }.bind(this), 750);
      },
      move: function (evt) {
          if (!evt.touches) return;
          var preV = this.preV,
              len = evt.touches.length,
              currentX = evt.touches[0].pageX,
              currentY = evt.touches[0].pageY;
          this.isDoubleTap = false;
          if (len > 1) {
              var v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };

              if (preV.x !== null) {
                  if (this.pinchStartLen > 0) {
                      evt.scale = getLen(v) / this.pinchStartLen;
                      this.pinch(evt);
                  }

                  evt.angle = getRotateAngle(v, preV);
                  this.rotate(evt);
              }
              preV.x = v.x;
              preV.y = v.y;
          } else {
              if (this.x2 !== null) {
                  evt.deltaX = currentX - this.x2;
                  evt.deltaY = currentY - this.y2;

              } else {
                  evt.deltaX = 0;
                  evt.deltaY = 0;
              }
              this.pressMove(evt);
          }

          this.touchMove(evt);

          this._cancelLongTap();
          this.x2 = currentX;
          this.y2 = currentY;
          if (evt.touches.length > 1) {
              this._cancelLongTap();
              evt.preventDefault();
          }
      },
      end: function (evt) {
          if (!evt.changedTouches) return;
          // 离开时 清空我们的长按事件 timeout
          // 按住750ms 才被认为是长按事件
          this._cancelLongTap();
          var self = this;
          if (evt.touches.length < 2) {
              this.multipointEnd(evt);
          }
          this.touchEnd(evt);
          //swipe
          if ((this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
              (this.y2 && Math.abs(this.preV.y - this.y2) > 30)) {
              evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
              this.swipeTimeout = setTimeout(function () {
                  self.swipe(evt);

              }, 0)
          } else {
              this.tapTimeout = setTimeout(function () {
                  self.tap(evt);
                  // trigger double tap immediately
                  if (self.isDoubleTap) {
                      self.doubleTap(evt);
                      clearTimeout(self.touchTimeout);
                      self.isDoubleTap = false;
                  } else {
                      self.touchTimeout = setTimeout(function () {
                          self.singleTap(evt);
                      }, 250);
                  }
              }, 0)
          }

          this.preV.x = 0;
          this.preV.y = 0;
          this.scale = 1;
          this.pinchStartLen = null;
          this.x1 = this.x2 = this.y1 = this.y2 = null;
      },
      cancel: function (evt) {
          console.log('cancel event');
          clearTimeout(this.touchTimeout);
          clearTimeout(this.tapTimeout);
          clearTimeout(this.longTapTimeout);
          clearTimeout(this.swipeTimeout);
          this.touchCancel(evt);
      },
      _cancelLongTap: function () {
          clearTimeout(this.longTapTimeout);
      },
      _swipeDirection: function (x1, x2, y1, y2) {
          return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
      }


  };

  if (typeof module !== 'undefined' && typeof exports === 'object') {
      module.exports = AlloyFinger;
  } else {
      window.AlloyFinger = AlloyFinger;
  }
})();
