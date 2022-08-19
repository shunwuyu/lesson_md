Promise.MyAll = function (promises) {
    let arr = [],
      count = 0
    return new Promise((resolve, reject) => {
      promises.forEach((item, i) => {
        Promise.resolve(item).then(res => {
          arr[i] = res
          count += 1
          if (count === promises.length) resolve(arr)
        }, reject)
      })
    })
  }
  

  const p1 = Promise.resolve('p1')
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 延时一秒')
    }, 1000)
  })
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3 延时两秒')
    }, 2000)
  })
  
  const p4 = Promise.reject('p4 rejected')
  
  const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p5 rejected 延时1.5秒')
    }, 1500)
  })
  
  // 所有 Promsie 都成功
//   Promise.MyAll([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// Promise.MyAll([p1, p2, p4])
//   .then(res => console.log(res))
//   .catch(err => console.log(err)) // p4 rejected

// 一个延时失败的 Promise
Promise.MyAll([p1, p2, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 1.5秒后打印 p5 rejected 延时1.5秒
