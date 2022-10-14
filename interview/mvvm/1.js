var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    // console.log(receiver, '-----------')
    console.log(`proxy get ${key}`)
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    console.log(`proxy set ${key}`)
    return Reflect.set(target, key, value, receiver)
  }
})

// obj.text = 'hello world!'
var _text = obj.text