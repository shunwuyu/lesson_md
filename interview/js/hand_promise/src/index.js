const Promise = require('./promise')

// let p = new Promise((resolve,  reject) => {
//     // 调用then 有三种状态 resolve reject  异步
//     // 4
//     // throw '出现错误'
    // resolve(100)
//     // 1 resolve(100) // this丢失
//     // 3 setTimeout(() => {
//     //     resolve(100)
//     // }, 1000)
//     // 2  reject('失败')
// // then 的执行是不会等的
// }).then(data => {
//     console.log('data:', data)
//     // return undefined  
//     return data //  第二个 then
// }, reason => {
//     console.log('reason:', reason)
// }).then(data => {
//     console.log('第二个promise', data) // undefined 
// }, reason => {
//     console.log('第二个promise 失败', reason)
// })

// let p = new Promise((resolve,  reject) => {
//     // 调用then 有三种状态 resolve reject  异步
//     // 4
//     // throw '出现错误'
//     resolve(100)
//     // 1 resolve(100) // this丢失
//     // 3 setTimeout(() => {
//     //     resolve(100)
//     // }, 1000)
//     // 2  reject('失败')
// // then 的执行是不会等的
// // then 什么都不传
// }).then().then(data => {
//     console.log('第二个promise', data) // undefined 
// }, reason => {
//     console.log('第二个promise 失败', reason)
// })
let p = new Promise((resolve,  reject) => {
    // 调用then 有三种状态 resolve reject  异步
    // 4
    // throw '出现错误'
    resolve(100)
    // 1 resolve(100) // this丢失
    // 3 setTimeout(() => {
    //     resolve(100)
    // }, 1000)
    // 2  reject('失败')
// then 的执行是不会等的
// then 什么都不传
}).then(data => {
    console.log('第一个成功', data) // undefined 
    // return data  没有 
    return new Promise((resolve, reject) => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    })
}, reason => {
    console.log('第一个失败', reason)
}).then(data => {
    console.log('第二个promise成功', data) // undefined 
}, reason => {
    console.log('第二个promise 失败', reason)
})