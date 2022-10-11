// 说说什么是闭包，闭包的优缺点是什么
// 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大的，所以不要乱滥用闭包，否则会导致页面的性能问题，在IE中可能会导致内存泄漏，所以可以在退回函数前，将不使用的局部变量全部删除。
function outer() {
  var a = '变量1'
  var inner = function() {
   console.info(a);
 }
 return inner; // inner就是一个闭包函数，因为它能访问到outer函数的作用域
 }
 
 let fn = outer();
 fn();