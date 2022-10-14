// https://juejin.im/post/6844903753490006029
// 浅拷贝就是拷贝第一层的基本类型值，以及第一层的引用类型地址
let a = {
  name: "advanced",
  age: 18
}
let b = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  }
}
let c = Object.assign(a, b);
console.log(c);
console.log(a === c);

b.name = "change";
b.book.price = "55";
console.log(b);
console.log(a);

// 1、在第一步中，使用 Object.assign 把源对象 b 的值复制到目标对象 a 中，这里把返回值定义为对象 c，可以看出 b 会替换掉 a 中具有相同键的值，即如果目标对象（a）中的属性具有相同的键，则属性将被源对象（b）中的属性覆盖。这里需要注意下，返回对象 c 就是 目标对象 a。
// 2、在第二步中，修改源对象 b 的基本类型值（name）和引用类型值（book）。
// 3、在第三步中，浅拷贝之后目标对象 a 的基本类型值没有改变，但是引用类型值发生了改变，因为 Object.assign() 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用地址。

