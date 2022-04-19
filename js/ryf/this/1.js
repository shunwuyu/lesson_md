// var obj = {
//     foo: function () {}
// };

// var foo = obj.foo;

// // 写法一
// obj.foo()

// // 写法二
// foo()

// 都指向同一个函数， 但是执行结果可能不一样
// 加点什么， 更好调试呢？
// bar:1  

var obj = {
    foo: function () { console.log(this.bar) },
    bar: 1
  };
  
  var foo = obj.foo;
  var bar = 2;
  
  obj.foo() // 1
  foo() // 2