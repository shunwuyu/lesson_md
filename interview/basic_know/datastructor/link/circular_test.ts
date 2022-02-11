import CircularLinkedList from "./lib/circular_list";

const circularLinkedList = new CircularLinkedList();
circularLinkedList.push(11);
circularLinkedList.push(12);
circularLinkedList.push(13);
// 循环链表的0号位置插入元素
circularLinkedList.insert(10,0);
console.log(circularLinkedList.toString());
// 获取链表的最后一个元素
console.log(circularLinkedList.getElementAt(3))