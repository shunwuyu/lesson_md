#函数柯里化指的是将能够接收多个参数的函数转化为接收单一参数的函数，并且返回接收余下参数且返回结果的新函数的技术

  multi(2)(3)(4)=24?

<!-- 闭包 -->
  function multi(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      }
    }
  }
  1.代码不够优雅，实现步骤需要一层一层的嵌套函数。
  2.可扩展性差，假如是要实现 multi(2)(3)(4)...(n) 这样的功能，那就得嵌套 n 层函数

  function curry(fn) {
    <!-- arguments 是一个对应于传递给函数的参数的类数组对象，你可以使用arguments对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引0处
    arguments[0]，
    arguments[1]，
    arguments[2] -->
    <!-- Array.prototype.slice.call可以理解为：改变数组的slice方法的作用域，在特定作用域中去调用slice方法，call（）方法的第二个参数表示传递给slice的参数即截取数组的起始位置 -->
    <!-- 定义一个变量等于一个具有数组的slice方法并且该slice方法因为call修改了作用域而可以作用于这里的参数arguments里面 -->
    var args = Array.prototype.slice.call(arguments, 1); 
    return function() {
      var newArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(this, newArgs);
    }
  }