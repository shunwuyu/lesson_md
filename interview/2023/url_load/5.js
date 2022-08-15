var n = 10
function fn(){
    var n =20
    function f() {
       n++;
       console.log(n)
     }
    f()
    return f
}

var x = fn()
x()
x()
console.log(n)
// 21
//     22
//     23
//     10
// fn 的返回值是什么变量 x 就是什么
// 思路：fn 的返回值是什么变量 x 就是什么，这里 fn 的返回值是函数名 
// f 也就是 f 的堆内存地址，
// x() 也就是执行的是函数 f()，而不是 fn()，输出的结果显而易见