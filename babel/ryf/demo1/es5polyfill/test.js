"use strict";

var _this = void 0;

Array.prototype.map = function (callback) {
  //创建一个length值为原数组长度的新数组A
  var A = new Array(_this.length);
  var k = 0; //前测试循环语句，在循环前就会对出口条件求值

  while (k < _this.length) {
    var kValue;
    kValue = _this[k]; //传入的callback参数被赋值给了数组A对应的索引

    A[k] = callback(kValue, k);
    k++;
  } //返回这个新数组A


  return A;
}; //eg:


console.log([0, 1, 2, 3].map(function (item, index) {
  return item + 1;
}));