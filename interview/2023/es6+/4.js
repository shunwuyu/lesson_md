function request(num) { // 模拟接口请求
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2)
        }, 1000)
    })
}

// request(5).then(res1 => {
//     console.log(res1) // 1秒后 输出 10

//     request(res1).then(res2 => {
//         console.log(res2) // 2秒后 输出 20
//     })
// })

// 如果有任务3呢？ 会出现什么情况？嵌套的多 有点回调地狱
// async function fn () {
//     const res1 = await request(5)
//     const res2 = await request(res1)
//     console.log(res2) // 2秒后输出 20
// }
// fn()
  
// async await 优点像生活中的什么？
// 排队  打饭
// 在async函数中，await规定了异步操作只能一个一个排队执行，从而达到用同步方式，执行异步操作的效果，
// 关键是什么？ await后面都是跟着异步操作Promise
// function request(num) { // 去掉Promise
//     setTimeout(() => {
//         console.log(num * 2)
//     }, 1000)
// }

async function fn() {
    const res1 = await request(1) // 2
    console.log(res1)
    const res2 = await request(2) // 4
    console.log(res2);
    return 2
    // 1秒后执行完  同时输出
}
const p = fn();
p.then(() => {
    console.log(p);
})
// async函数执行完会自动返回一个状态为fulfilled的Promise，
// 也就是成功状态，但是值却是undefined，那要怎么才能使值不
// 是undefined呢？很简单，函数有return返回值就行了