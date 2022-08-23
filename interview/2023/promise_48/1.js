const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        // 宏任务  不管它
        setTimeout(() => {
            console.log(5);
            resolve(6);
            console.log(p)
        }, 0)
        // p 状态变成resolved  1  
        resolve(1);
    });
    resolve(2);
    // 本次微任务
    p.then((arg) => {
        console.log(arg);
    });
}));
// 微任务
first().then((arg) => {
    console.log(arg);
});
console.log(4);

