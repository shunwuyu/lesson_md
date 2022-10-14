Promise.reject('error!!!')
  .then((res) => {
    console.log('success', res)
  }).catch(err => {
    console.log('catch', err)
  })

