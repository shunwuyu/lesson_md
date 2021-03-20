// 泛型可以用在普通类型定义，类定义、函数定义上，
// 普通类型定义
// https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/779da9d0861f43ba93c50f05a290211d~tplv-k3u1fbpfcp-watermark.image 
// T 代表 Type 
// K（Key）：表示对象中的键类型；
// V（Value）：表示对象中的值类型
// E（Element）：表示元素类型。

type Dog<T> = { name: string, type: T }
// 普通类型使用
const dog: Dog<number> = { name: 'ww', type: 30 }

// 类定义
class Cat<T> {
  private type: T;
  constructor(type: T) { this.type = type; }
}

// 类使用
const cat: Cat<number> = new Cat<number>(20); 

// 函数定义
function swipe<T, U>(value: [T, U]): [U, T] {
  return [value[1], value[0]];
}

// 函数使用
swipe<Cat<number>, Dog<number>>([cat, dog])


function identity <T, U>(value: T, message: U) : T {
  console.log(message);
  return value;
}

console.log(identity<Number, string>(68, "Semlinker"));

class Stack {
  private arr: number[] = []

  public push(item: number) {
      this.arr.push(item)
  }

  public pop() {
      this.arr.pop()
  }
}

// 接受不同的类型呢？还得靠泛型的帮助
class Stack<T> {
  private arr: T[] = []

  public push(item: T) {
      this.arr.push(item)
  }

  public pop() {
      this.arr.pop()
  }
}


