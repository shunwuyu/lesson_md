[source](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)

- 函数的运行环境到底是怎么决定的

JavaScript 语言之所以有this的设计，跟内存里面的数据结构有关系。

JavaScript 引擎会先在内存里面，生成一个对象{ foo: 5 }，然后把这个对象的内存地址赋值给变量obj。

也就是说，变量obj是一个地址（reference）。后面如果要读取obj.foo，引擎先从obj拿到内存地址，然后再从该地址读出原始的对象，返回它的foo属性。

三、 函数
属性的值可能是一个函数。

引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。

由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。

四、环境变量

JavaScript 允许在函数体内部，引用当前环境的其他变量。

var f = function () {
  console.log(x);
};

