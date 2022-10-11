- 使用多个参数的函数转换成一系列使用一个参数的函数的技术
    function add(a, b, c) {
        return a + b + c
    }
    add(1, 2, 3)

    let addCurry = curry(add)
    addCurry(1)(2)(3)

    使函数从一次调用传入多个参数变成多次调用每次传一个参数