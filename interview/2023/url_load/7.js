// return 回一个函数
var n = 10
function fn(){
    var n =20
    function f() {
       n++;
       console.log(n)
     }
    return f
}
// 这里的 return f, f()就是一个闭包，存在上级作用域的引用。
var x = fn()
x() // 21
