#!/usr/bin/env node
// events 是 Node 的 built-in 模块，它提供了 EventEmitter 类
const EventEmitter = require('events')
// 创建 EventEmitter 的事件实例
const ee = new EventEmitter()

// 为实例增加 open 事件的监听以及注册回调函数，事件名甚至可以是中文
ee.on('open', (a, b, c, d) => {
  console.log(a, b, c, d);
 console.log('事件发生了，第一个监听回调函数执行')
})

// 为实例再增加一个 增加 open 事件的监听器
ee.on('open', (error, result) => {
 console.log('事件发生了，第二个监听回调函数执行')
})
ee.once('one', () => {
  console.log('one event');
})
// 通过 emit 来发出事件，所有该事件队列里的回调函数都会顺序执行
ee.emit('open', 1, 2, 3, 4)
console.log('open array', ee.listeners('open'));
ee.emit('one');
ee.emit('one');
// ee.removeListener('open');
// 某个 callback
// removeAllListeners 移除所有事件的所有监听器
// ee.emit('open', 1, 2, 3, 4)
// console.log('触发后，隔一秒再触发一次')
// setTimeout(() => {
//  ee.emit('open')
// }, 1000)
// console.log(process.argv);