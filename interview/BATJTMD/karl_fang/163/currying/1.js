
// 每次的返回值都为一个函数，(闭包)
// 并使用下一个参数作为形参，（慢慢收集）
// 直到三个参数都被传入后，（length）
// 返回的最后一个函数内部执行求和操作，
// 其实是充分的利用了闭包的特性function

function add(a, b, c) {
    return a + b + c;
}

// 参数不是函数， 高阶函数特性没有发挥到极致
//不具备通用性 无法转换形参个数  有时多传参， 有时少
// 柯里化函数
function addCurrying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// 调用原函数
add(1, 2, 3); // 6

// 调用柯里化函数
addCurrying(1)(2)(3) // 6
