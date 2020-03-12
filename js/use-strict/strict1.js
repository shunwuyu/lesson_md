// "use strict";
function test() {
  var a = 1;
  console.log(a);
  var obj = {
    test: 1,
    test: 2
  }
  console.log(obj.test);
}
test();
// 给不可写属性赋值
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
//obj1.x = 9; // 抛出TypeError错误
var o = { p: 1, p: 2 };
// delete Object.prototype;
// function sum(a, a, c) { // !!! 语法错误
//   return a + a + c; // 代码运行到这里会出错
// }
// sum(1, 1, 1);
false.true = "";              //TypeError
(14).sailing = "home";        //TypeError
"with".you = "far away";      //TypeError

var x = 17;
var evalX = eval("'use strict'; var x = 42;");
console.log(x);
console.log(evalX);

function fun() { return this; }
console.log(1, fun.call(2) === 2);