interface StackObj {
  [propName: number] : any;
}

// 实现数据结构栈
export default class ObjStack {
  // 定义栈并规定其类型
  private items: StackObj;
  private count: number;
  // 构造器
  constructor() {
    this.items = {};
    this.count = 0;
  }
  // 入栈
  push(item: any) {
    this.items[this.count] = item;
    this.count++;
  }
   // 出栈
  pop() {
    if (this.isEmpty()) {
        return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  // 返回栈顶元素
  peek() {
    if (this.isEmpty()) {
        return undefined;
    }
    return this.items[this.count - 1];
}
// 判断栈是否为空
isEmpty() {
    return this.count === 0;
}
// 清空栈内元素
clear() {
    this.items = [];
    this.count = 0;
}
// 获取栈内元素数量
size(): number {
    return this.count;
}
// 将栈内元素转为字符串
toString() {
    if (this.isEmpty()) {
        return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
    }
    return objString;
}
}