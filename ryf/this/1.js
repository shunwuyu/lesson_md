var obj = {
  foo: function () {}
};

var foo = obj.foo;

// 写法一
obj.foo()

// 写法二
foo()
// 指向同一个函数， 执行结果可能不一样。

