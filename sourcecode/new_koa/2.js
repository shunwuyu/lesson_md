let o1 = {a: 'hello'}
let o2 = Object.create(o1)
o2.b = 'world'
console.log('o1:', o1.b) // 创建出的对象不会影响原对象 o1: undefined
console.log('o2:', o2.a) // 创建出的对象会继承原对象的属性 o2: hello

