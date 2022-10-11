const async1 = async () => {
    console.log('async1');
    // 宏任务
    setTimeout(() => {
        console.log('timer1')
    }, 2000)
    // 停下来 
    // 没有返回值的话则不执行后面的内容
    await new Promise(resolve => {
        console.log('promise1')
    })
    console.log('async1 end')
    return 'async1 success'
} 
console.log('script start');
// 不执行then 
async1().then(res => console.log(res));
console.log('script end');
// .then函数中的参数期待的是函数，如果不是函数的话会发生透传
Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .catch(4)
    .then(res => console.log(res))
setTimeout(() => {
    console.log('timer2')
}, 1000)
 