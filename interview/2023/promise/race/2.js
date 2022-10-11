Promise.MyRace = function (promises) {
    return new Promise((resolve, reject) => {
        // 这里不需要使用索引，只要能循环出每一项就行
        for (const item of promises) {
            Promise.resolve(item).then(resolve, reject)
        }
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
    reject('p5 rejected 延时1秒')
  }, 1500)
})

// Promise.MyRace([p1, p2, p3])
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// Promise.MyRace([p4, p2, p3])
//   .then(res => console.log(res))
//   .catch(err => console.log(err)) // p4 rejected

// Promise.MyRace([p5, p2, p3])
//   .then(res => console.log(res))
//   .catch(err => console.log(err))