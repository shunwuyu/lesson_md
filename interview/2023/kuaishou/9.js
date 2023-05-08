Promise.reject('Error 1')
  .then(function() {
    // 不会执行
  })
  .catch(function(err) {
    console.log('捕捉到第一个错误：', err);
    throw 'Error 2'; // 抛出第二个错误
  })
  .then(function() {
    // 不会执行
  })
  .catch(function(err) {
    console.log('捕捉到第二个错误：', err);
    throw 'Error 3'; // 抛出第三个错误
  })
  .then(function() {
    // 不会执行
  })
  .catch(function(err) {
    console.log('捕捉到第三个错误：', err);
  });