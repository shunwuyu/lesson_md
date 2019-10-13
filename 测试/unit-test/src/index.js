const add = function(a, b) {
  if (a === 0) return 3;
  return a + b;
}
const testPromise = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 2000);
  })
}
module.exports = {
  add,
  testPromise
}