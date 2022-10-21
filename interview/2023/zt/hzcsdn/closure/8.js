// 作用域的应用场景
// 作用域的一个常见运用场景之一，就是 模块化
function module1 () {
    var a = 1;
    console.log(a);
  }
//   全局作用域污染 和 变量名冲突
// 上面的函数声明式写法，看起来还是有些冗余，更重要的是，module1 和 module2 的函数
// 名本身就已经对全局作用域造成了污染
(function () {
    var a = 1;
    console.log(a);
  })();
//   立即调用函数表达式


(function (global) {
    if (global...) {
      // is browser
    } else if (global...) {
      // is nodejs
    }
  })(window);