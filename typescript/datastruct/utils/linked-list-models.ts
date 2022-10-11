// 助手类： 用于表示链表中的第一个以及其他元素
// 泛型来创建可重用的组件
export class Node<T>{
  element: any;
  next: any;
  constructor (element: T, next?: any) {
    this.element = element;
    this.next = next
  }
}