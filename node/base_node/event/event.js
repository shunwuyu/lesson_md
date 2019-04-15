const EventEmitter = require('events')
const ee = new EventEmitter()

ee.on('open', (error, result) => {
    console.log('事件发生了， 第一个监听回调函数执行');
})

ee.on('open', (error, result) => {
    console.log('事件发生了， 第二个监听回调函数');
})

ee.emit('open');
console.log('触发后， 隔一秒再触发一次');
setTimeout(() => {
    ee.emit('open')
}, 1000);