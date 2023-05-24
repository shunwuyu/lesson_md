// 当我们运行这段代码时，它会首先输出 start 和 end，
// 然后按照以下顺序输出 promise、immediate 和 timeout。
// 这是因为在当前事件循环中，setTimeout 的回调被放入了
// 宏任务队列，而 Promise 的 then 回调被放入了微任务队列，
// 所以它们的执行顺序是不确定的，取决于浏览器或者运行环境的实现细节。
// 而 setImmediate 的回调被安排在宏任务队列的末尾，所以它总是在 setTimeout 回调之前执行。

// 需要注意的是，在 Node.js 中，setImmediate 
// 与浏览器中的行为略有不同，它的优先级高于 setTimeout。
// 这意味着当事件循环中同时存在 setImmediate 和 setTimeout 
// 回调时，setImmediate 的回调会优先执行。但在浏览器中，
// setTimeout 的回调先于 setImmediate 执行。

console.log('start');

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

setImmediate(() => {
  console.log('immediate');
});

console.log('end');