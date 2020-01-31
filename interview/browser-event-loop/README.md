[国外一篇演示的文章](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
[html5-standard-event-loop-processing-model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
[掘金文章-一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.im/post/5c3d8956e51d4511dc72c200#heading-22)
## 原因
js 单线程:
单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务,
如果前一个任务耗时很长，后一个任务就不得不一直等着
## 分类
在JavaScript中，任务被分为两种，一种宏任务（MacroTask）也叫Task，一种叫微任务（MicroTask）。
1. MacroTask（宏任务）：
script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering。

2. MicroTask（微任务）：
Process.nextTick（Node独有）、Promise、Object.observe(废弃)、MutationObserver（具体使用方式查看这里）

## 题目
1. 题目：
```js
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
console.log('script end')
```
2. 题目:
```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});
console.log('script end');
```
3. 题目:
```js
console.log('script start')
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}
async1()
setTimeout(function() {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })
console.log('script end')
script start
async2 end
Promise
script end
async1 end
promise1
promise2
setTimeout
```
4. 题目:
```js
setTimeout(()=>{
    console.log("setTimeout1");
    Promise.resolve().then(data => {
        console.log(222);
    });
});
setTimeout(()=>{
    console.log("setTimeout2");
});
Promise.resolve().then(data=>{
    console.log(111);
});
```
5. 题目：
```js
console.log('script start');

setTimeout(function () {
    console.log('setTimeout---0');
}, 0);

setTimeout(function () {
    console.log('setTimeout---200');
    setTimeout(function () {
        console.log('inner-setTimeout---0');
    });
    Promise.resolve().then(function () {
        console.log('promise5');
    });
}, 200);

Promise.resolve().then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
});
Promise.resolve().then(function () {
    console.log('promise3');
});
console.log('script end');
```
6. 题目
```js
console.log('script start')
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  setTimeout(() => {
	console.log('async2 end') 
  }, 2000);
}
async1()
setTimeout(function() {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })
console.log('script end')
script start -> Promise -> script end -> async1 end -> promise1 -> promise2 -> setTimeout -> async2 end
```
## 说明
在每一次事件循环中，macrotask 只会提取一个执行，而 microtask 会一直提取，直到 microtasks 队列清空。也就是说如果我的某个 microtask 任务又推入了一个任务进入 microtasks 队列，那么在主线程完成该任务之后，仍然会继续运行 microtasks 任务直到任务队列耗尽。
事件循环每次只会入栈一个 macrotask ，主线程执行完该任务后又会先检查 microtasks 队列并完成里面的所有任务后再执行 macrotask。