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

// p1无延时，p2延时1s，p3延时2s
// Promise.race([p1, p2, p3])
//   .then(res => console.log(res)) // p1
//   .catch(err => console.log(err)) 
// p4无延时reject
// Promise.race([p4, p2, p3])
//   .then(res => console.log(res))
//   .catch(err => console.log(err)) // p4 rejected

// p5 延时1.5秒reject，p2延时1s
Promise.race([p5, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 1s后打印: p2 延时一秒
