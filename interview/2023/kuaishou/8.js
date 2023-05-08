Promise.resolve()
  .then(function() {
    throw new Error('外部错误');
  }, function(err) {
    console.log('This is never called'); // 不可以
  })
  .catch(function(err) {
    console.log('捕捉到错误：', err.message); // 可以
  });