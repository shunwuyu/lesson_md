// 实现数据结构栈
export default class Stack {
  // 定义栈并规定其类型
  private items: any[];
   // 构造器
  constructor() {
    this.items = [];
  }
  // 入栈
  push(item: any) {
    this.items.push(item);
  }
  // 出栈
  pop() {
    return this.items.pop();
  }
  // 返回栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // 清空栈栈内元素
  clear() {
    this.items = [];
  }
  // 获取栈内元素数量
  size(): number {
    return this.items.length;
  }
  // 将栈内元素转为字符串
  toString() {
    return this.items.toString();
  }
}