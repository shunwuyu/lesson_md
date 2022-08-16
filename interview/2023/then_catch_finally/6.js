Promise.resolve().then(() => {
    // return new Error('error!!!')
    // return Promise.reject(new Error('error!!!'));
    throw new Error('error!!!')
}).then(res => {
    console.log("then: ", res)
}).catch(err => {
    console.log("catch: ", err)
})
// "then: " "Error: error!!!"
// 返回任意一个非 promise 的值都会被包裹成 promise 对象
// 因此这里的return new Error('error!!!')也被
// 包裹成了return Promise.resolve(new Error('error!!!'))
