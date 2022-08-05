// https://juejin.cn/post/6844904102053281806#heading-4
function* gen() {
    const num1 = yield 1
    console.log(num1)
    const num2 = yield 2
    console.log(num2)
    return 3
}


const g = gen()
console.log(g.next()) // { value: 1, done: false }
console.log(g.next(11111))
// 11111
//  { value: 2, done: false }
console.log(g.next(22222)) 

// 总结  Promise+next传参
// - yield后面接Promise
// - next函数传参

