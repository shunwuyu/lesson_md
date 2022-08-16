Promise.resolve(1)
.then(res => {
    console.log(res);
    // 会包装成resolve(2)
    return 2;
})
.catch(err => {
    return 3;
})
.then(res => {
    console.log(res);
});

// Promise可以链式调用
// promise 每次调用 .then 或者 
// .catch 都会返回一个新的 promise
// 从而实现了链式调用, 它并不像一般
// 我们任务的链式调用一样return this