// finally() 方法是一个在Promise执行结束时，
// 无论结果是解决还是拒绝，都会被执行的回调函数
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10)
    }, 1000)
}) 
promise
  // 计算函数
  .then(function(result) {
    return result * 2;
  })
  // 处理函数
  .catch(function(err) {
    console.log('An error occurred:', err);
  })
  // 最终处理函数
  .finally(function() {
    console.log('Promise结束');
  });