var value = 1;
// foo 里访问了本地作用域中没有的变量 value
// 引擎为了拿到这个变量就要去 foo 的上层作用域查询
// 是它 调用时 所在的 bar 作用域？还是它 定义时 所在的全局作用域？
// 词法作用域，就意味着函数被定义的时候，它的作用域就已经确定了，
// 和拿到哪里执行没有关系，因此词法作用域也被称为 “静态作用域”。
// 如果是动态作用域类型，那么上面的代码运行结果应该是 bar 作用域中的 2
function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar();