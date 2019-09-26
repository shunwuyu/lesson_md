class SingleDog {
  show() {
    console.log('我是一个单例对象')
  }
  static getInstance() {
    if (!SingleDog.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      SingleDog.instance = new SingleDog()
    }
    return SingleDog.instance
  }
}

const s1 = SingleObject.getInstance()
const s2 = SingleObject.getInstance()

console.log(s1 === s2);