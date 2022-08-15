// 函数作为参数
var a = '林一一'
function foo(){
    var a = 'foo'
    function fo(){
        console.log(a)
    }
    return fo
}

function f(p){
    var a = 'f'
    p()
}
f(foo()) 
// 使用 return fo 返回回来，fo() 就是闭包，f(foo()) 执行的参数就是函数 fo，因为 fo() 中的 a 的上级作用域就是函数foo()，所以输出就是foo


