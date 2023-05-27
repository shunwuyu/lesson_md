function asyncAdd(a, b, callback) {
    setTimeout(function () {
      callback(null, a + b);
    }, 1000);
}