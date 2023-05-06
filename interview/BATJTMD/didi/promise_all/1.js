// Promise.all() 接受一个由Promise 组成的数组作为参数，
//  并返回一个新的 Promise
//  当所有 Promise 完成后，新的 Promise
//   的状态会根据所有 Promise 的状态而决定
//   只有当所有 Promise 都成功时，新的 Promise 
//   状态才会变为“成功”，否则只要有一个 Promise 失败，
//   新的 Promise 状态就会变为“失败”。

// 与 Promise.all() 方法的区别在于，Promise.allSettled() 
// 方法不会提前结束，哪怕有 Promise 被拒绝，该方法仍然执行，
// 只有当所有 Promise 的状态都变为 settled 状态（resolved 
// 或 rejected）时，该方法的回调才会被执行。
const p1 = new Promise((resolve, reject) => {
    resolve(1)
})

const p2 = new Promise((resolve, reject) => {
    reject(2)
})

const func = async ()=>{ 
    // var result = await Promise.all([p1,p2]) 
    // try {
    //     var result = await Promise.all([p1,p2]) 
    // } catch(e) {
    //     console.log(e)
    // }
    var result = await Promise.allSettled([p1,p2]) 
    console.log(result);
}

func()

