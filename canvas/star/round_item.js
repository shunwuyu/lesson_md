/**
 * @author 韩雨汐
 * @desc  星星
 * 一个功能一个文件, 一个类一个文件
 * 模块化， 多人协作
 */
function RoundItem(index, x, y, ctx) {
  this.index = index;
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.r = Math.random() * 2 + 1;
  this.color = 'rgba(255,255,255,1)';
}
RoundItem.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
  this.ctx.closePath();
  this.ctx.fill();
} 

RoundItem.prototype.move = function() {
  this.y -= 0.15;
  this.draw();
}