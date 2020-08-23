function myNew(){
  const obj = {};
  Constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj,arguments); // 判断构造函数是否存在返回值
  return typeof ret === 'object'? ret : obj;
}

完成11人 学费 20% 每人   24000*0.2 = 4800
奖励 1000每人 * 12000/13800 * 11 = 9565
已给四千   
还需付 765 