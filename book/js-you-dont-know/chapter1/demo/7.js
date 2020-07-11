function foo(a) {
  var b = a;
  return a + b;
}
var c = foo( 2 );

// LHS(写入内存)：  3处
// c=, a=2(隐式变量分配), b=
// RHS(读取内存)：  4处
// 读foo(2), = a, a ,b
// (return a + b 时需要查找a和b)