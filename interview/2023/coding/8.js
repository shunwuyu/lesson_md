// 宏任务和微任务
// 宏任务：macrotask,包括setTimeout、setInerVal、
// setImmediate(node独有)、requestAnimationFrame(浏览器独有)、
// I/O、UI rendering(浏览器独有)
// 微任务：microtask,包括process.nextTick(Node独有)、
// Promise.then()、Object.observe、MutationObserver
// Promise构造函数中的代码是同步执行的，
// new Promise()构造函数中的代码是同步代码，并不是微任务

console.log(1);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});
