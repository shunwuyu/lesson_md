// 它会先输出 start 和 end，然后按照以下顺序输出 promise 1、promise 2、promise 3、next tick 1 和 next tick 2。
console.log('start');

process.nextTick(() => {
  console.log('next tick 1');
});

Promise.resolve().then(() => {
  console.log('promise 1');
}).then(() => {
  console.log('promise 2');
});

process.nextTick(() => {
  console.log('next tick 2');
});

Promise.resolve().then(() => {
  console.log('promise 3');
})

console.log('end');