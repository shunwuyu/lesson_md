function myNew(){
  const obj = {};
  Constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj,arguments); // 判断构造函数是否存在返回值
  return typeof ret === 'object'? ret : obj;
}
