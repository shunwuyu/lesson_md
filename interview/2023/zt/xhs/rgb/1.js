// function red() {
//   console.log('red');
// }
// function green() {
//   console.log('green');
// }
// function yellow() {
//   console.log('yellow');
// }

const light = function (timer, color) {
  return new Promise(resolve => {
      setTimeout(() => {
          // cb()
          console.log(color)
          resolve()
      }, timer)
  })
}
const main = function () {
  Promise.resolve().then(() => {
    return light(2000, '红灯')
  }).then(() => {
    return light(1000, '黄灯')
  }).then(() => {
    return light(3000, '绿灯')
  }).then(() => {
    return main()
  })
}

main();