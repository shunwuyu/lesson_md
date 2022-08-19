// 实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中
const time = (timer) => {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve()
        }, timer)
    })
}
const ajax1 = () => time(2000).then(() => {
    console.log(1);
    return 1
})

const ajax2 = () => time(1000).then(() => {
    console.log(2);
    return 2
  })

const ajax3 = () => time(1000).then(() => {
    console.log(3);
    return 3
})
// 点类似于Promise.all()，不过.all()不需要管执行顺序，
// 只需要并发执行就行了。但是这里需要等上一个执行完毕之后才能执行下一个
function mergePromise (ajaxArray) {
// 在这里写代码
    const data = [];
    let promise = Promise.resolve();
    ajaxArray.forEach(ajax => {
        promise = promise.then(ajax).then(res => {
            data.push(res);
            return data; // 把每次的结果返回
        })
    })
    return promise;
}

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log("done");
    console.log(data); // data 为 [1, 2, 3]
});