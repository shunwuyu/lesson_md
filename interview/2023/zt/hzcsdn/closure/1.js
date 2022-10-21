// 编译阶段，变量和函数被声明，作用域即被确定。
// 运行函数 foo()，此时会创建一个 foo 函数的执行上下文，
// 执行上下文内部存储了 foo 中声明的所有变量函数信息。
// 函数 foo 运行完毕，将内部函数 bar 的引用赋值给外部的变量 baz ，此时 baz 指针指向的还是 bar
//  ，因此哪怕它位于 foo 作用域之外，它还是能够获取到 foo 的内部变量
// baz 在外部被执行，baz 的内部可执行代码 console.log 向作用域请求获取 a 变量，本地作用域没有找到
// ，继续请求父级作用域，找到了 foo 中的 a 变量，返回给 console.log，打印出 2
function foo() {
    var a = 2;
  
    function bar() {
      console.log( a );
    }
  
    return bar;
  }
  
  var baz = foo();
  
  baz();

