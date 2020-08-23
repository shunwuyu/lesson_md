if (typeof Object.assign2 != 'function') {
  // Attention 1
  Object.defineProperty(Object, "assign2", {
    value: function (target) {
      'use strict';
      if (target == null) { // Attention 2
        throw new TypeError('Cannot convert undefined or null to object');
      }

      // Attention 3
      var to = Object(target);
        
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {  // Attention 2
          // Attention 4
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}


let a = {
  name: "advanced",
  age: 18
}
let b = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  }
}
let c = Object.assign2(a, b);
console.log(c);

// 1、判断原生 Object 是否支持该函数，如果不存在的话创建一个函数 assign，并使用 Object.defineProperty 将该函数绑定到 Object 上。
// 2、判断参数是否正确（目标对象不能为空，我们可以直接设置{}传递进去,但必须设置值）。