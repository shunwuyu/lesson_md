function Singleton() {
  // 你的业务逻辑
}
Singleton.getInstance = function(...args) {
  if (!Singleton.instance) {
    Singleton.instance = new Singleton();
  }
  return Singleton.instance;
};
Singleton.instance = null;

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b);