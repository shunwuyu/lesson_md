Array.prototype.map = function(callbackFn, thisArg) {
    // 处理数组类型异常
    if (this === null || this === undefined) {
      throw new TypeError("Cannot read property 'map' of null or undefined");
    }
    // 处理回调类型异常
    if (Object.prototype.toString.call(callbackFn) != "[object Function]") {
      throw new TypeError(callbackFn + ' is not a function')
    }
    // 草案中提到要先转换为对象
    let O = Object(this);
    console.log(O, '////');
    let T = thisArg;
  
    
    let len = O.length;
    let A = new Array(len);
    for(let k = 0; k < len; k++) {
      // 还记得原型链那一节提到的 in 吗？in 表示在原型链查找
      // 如果用 hasOwnProperty 是有问题的，它只能找私有属性
      if (k in O) {
        let kValue = O[k];
        // 依次传入this, 当前项，当前索引，整个数组
        let mappedValue = callbackFn.call(T, kValue, k, O);
        A[k] = mappedValue;
      }
    }
    return A;
  }


  let nums = [1, 2, 3];
let obj = {val: 5};
let newNums = nums.map(function(item,index,array) {
  return item + index + array[index] + this.val; 
  //对第一个元素，1 + 0 + 1 + 5 = 7
  //对第二个元素，2 + 1 + 2 + 5 = 10
  //对第三个元素，3 + 2 + 3 + 5 = 13
}, obj);
console.log(newNums);