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
