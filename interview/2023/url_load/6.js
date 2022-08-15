var a = 0
function foo(){
    var b =14
    function fo(){
        console.log(a, b)
    }
    fo()
}
// 这里的子函数 fo 内存就存在外部作用域的引用 a, b，所以这就会产生闭包
foo()