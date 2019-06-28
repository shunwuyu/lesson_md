
const NOOP = function () {};
var CustomFinger = function (el, options) {
  el.addEventListener("touchstart", this.start.bind(this), false);
  el.addEventListener("touchmove", this.move.bind(this), false);
  el.addEventListener("touchend", this.end.bind(this), false);

  this.pressMove = options.pressMove || NOOP;
  this.x2 = this.y2 = null;

}
CustomFinger.prototype.start = function (evt) {

}
CustomFinger.prototype.move = function (evt) {
  if (!evt.touches) return;
  var len = evt.touches.length,
    currentX = evt.touches[0].pageX,
    currentY = evt.touches[0].pageY;
  if (len > 1) {
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
  this.x2 = currentX;
  this.y2 = currentY;

}
CustomFinger.prototype.end = function (evt) {
  this.x2 = this.y2 = null;
}