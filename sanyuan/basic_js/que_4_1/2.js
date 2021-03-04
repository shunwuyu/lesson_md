// function f1() { // 返回一个函数。刚刚已经举例。
//   var a = 2
//   function f2() {
//     console.log(a);//2   闭包产生的本质就是，当前环境中存在指向父级作用域的引用
//   }
//   return f2;
// }
// var x = f1();
// x();

// var f3;
// function f1() {
//   var a = 2
//   f3 = function() {
//     console.log(a);
//   }
// }
// f1();
// f3();
// 2. 作为函数参数传递
var a = 1;
function foo(){
  var a = 2;
  function baz(){
    console.log(a);
  }
  bar(baz);
}
function bar(fn){
  // 这就是闭包
  fn();
}
// 输出2，而不是1
foo();

// 在定时器、事件监听、Ajax请求、跨窗口通信、
// Web Workers或者任何异步中，
// 只要使用了回调函数，实际上就是在使用闭包。

// setTimeout(function timeHandler(){
//   console.log('111');
// }，100)

// // 事件监听
// $('#app').click(function(){
//   console.log('DOM Listener');
// })

// 4. IIFE(立即执行函数表达式)创建闭包,
//  全局作用域window和当前函数的作用域，因此可以全局的变量。
// var a = 2;
// (function IIFE(){
//   // 输出2
//   console.log(a);
// })();