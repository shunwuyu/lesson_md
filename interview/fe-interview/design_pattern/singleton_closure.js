const Singleton = (function () {
  let instance = null;

  return function () {
    if (instance) {
      return instance;
    }
    // 你的业务逻辑

    return instance = this;
  }
})();


const a = new Singleton();
const b = new Singleton();
console.log(a === b);