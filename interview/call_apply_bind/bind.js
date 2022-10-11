Function.prototype.myBind = function (objThis, ...params) {
  const thisFn = this; // 存储源函数以及上方的params(函数参数)
  // 对返回的函数 secondParams 二次传参
  let fToBind = function (...secondParams) {
      const isNew = this instanceof fToBind // this是否是fToBind的实例 也就是返回的fToBind是否通过new调用
      const context = isNew ? this : Object(objThis) // new调用就绑定到this上,否则就绑定到传入的objThis上
      return thisFn.call(context, ...params, ...secondParams); // 用call调用源函数绑定this的指向并传递参数,返回执行结果
  };
  if (thisFn.prototype) {
      // 复制源函数的prototype给fToBind 一些情况下函数没有prototype，比如箭头函数
      fToBind.prototype = Object.create(thisFn.prototype);
  }
  return fToBind; // 返回拷贝的函数
};
