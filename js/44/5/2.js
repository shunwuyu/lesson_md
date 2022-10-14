// https://juejin.cn/post/6844903985695080455
// 答案是会打印1
// 函数声明提升的优先级高于变量声明的提升
// 当js解析器在遇到函数声明时，
// 会优先将其提升到定义体顶部，
// 其次再是var声明的变量，
// 这样就导致函数a被变量a给覆盖的情况，
// 所以最终将打印1。
console.log( a) // function 
var a = 1;
function a(){
    console.log(a)
}
console.log(a)