// function* gen() {
//     yield 1
//     yield 2
//     yield 3
//     return 4
// }

// const g = gen()
// console.log(g.next()) // { value: 1, done: false }
// console.log(g.next()) // { value: 2, done: false }
// console.log(g.next()) // { value: 3, done: false }
// console.log(g.next()) // { value: undefined, done: true }
function fn(num) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(num)
        }, 3000)
    })
}
function* gen() {
    yield fn(1)
    yield fn(2)
    return 3
}
const g = gen()
// console.log(g.next()) // { value: Promise { <pending> }, done: false }
// console.log(g.next()) // { value: Promise { <pending> }, done: false }
// console.log(g.next()) // { value: 3, done: true }
const next1 = g.next()
next1.value.then(res1 => {
    console.log(next1) // 1秒后输出 { value: Promise { 1 }, done: false }
    console.log(res1) // 1秒后输出 1
  
    const next2 = g.next()
    next2.value.then(res2 => {
      console.log(next2) // 2秒后输出 { value: Promise { 2 }, done: false }
      console.log(res2) // 2秒后输出 2
      console.log(g.next()) // 2秒后输出 { value: 3, done: true }
    })
  })
  
  