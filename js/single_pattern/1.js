class SingleDog {
  show() {
      console.log('我是一个单例对象')
  }
}

const s1 = new SingleDog()
const s2 = new SingleDog()

// false
console.log(s1 === s2)