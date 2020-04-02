let New = function(fn, ...arg) {
  // 创建一个对象，将要实例化对象的原形链指向该对象
  const obj = Object.create(fn.prototype);
  fn.call(obj, ...arg);
  return obj;
}

function fun1() {
  this.name = '?';
}

console.log(New(fun1), new fun1());