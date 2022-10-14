// 比赛，赛跑  .race
// 它只会获取最先执行完成的那个结果，其它的异步任务虽然
// 也会继续进行下去，
// 不过race已经不管那些任务的结果了。
function runAsync (x) {
    const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
    return p
}
// 1 'result: ' 1  2  3
Promise.race([runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log('result: ', res))
  .catch(err => console.log(err))
