// 将Object对象的属于语言内部的方法放到Reflect对象上，即从Reflect对象上拿Object对象内部方法。
// let obj={
//   name:"chen",
// }
// // let result = obj.name
// let result=Reflect.get(obj,"name")
// console.log(result);


let obj={
  //属性yu部署了getter读取函数
  get yu(){
    //this返回的是Reflect.get的receiver参数对象
    return this.name+this.age
  }
}

let receiver={
  name:"shen",
  age:"18",
}

let result=Reflect.get(obj,"yu",receiver)
console.log(result)