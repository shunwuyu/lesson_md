// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function add(a, b) {
    return a + b;
}

add(1, 2)

var addCurry = curry(add);

addCurry(1)(2)

