// 改为Promise.reject(1)
Promise.reject(1)
  .then(res => {
    console.log(res);
    // 会包装成Promise.resolve(2)
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3
  })
  .then(res => {
    console.log(res);
  });
// 1 3  
// catch 也是返回promise 
因为reject(1)此时走的就是catch，且第二个then中
的res得到的就是catch中的返回值。