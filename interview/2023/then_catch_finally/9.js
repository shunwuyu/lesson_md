Promise.reject('err!!!')
  .then((res) => {
    console.log('success', res)
  }, (err) => {
    console.log('error', err)
  }).catch(err => {
    console.log('catch', err)
  })

//   'error' 'error!!!'
// 它进入的是then()中的第二个参数里面，
// 而如果把第二个参数去掉，就进入了catch()中：

