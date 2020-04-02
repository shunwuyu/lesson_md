let New = function(fn, ...arg) {
  const obj = {}; // 创建一个javascript空对象 {};
  obj.__proto__ = fn.prototype; // 将要实例化对象的原形链指向该对象原形。
  fn.call(obj, ...arg); // 绑定该对象为this的指向
  return obj; // 返回该对象。
};

function fun1() {
  this.name = '?';
}

console.log(New(fun1), new fun1());