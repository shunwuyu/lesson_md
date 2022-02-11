import DoublyLinkedList from "./lib/doubly_list";

const doublyLinkedList = new DoublyLinkedList();
// 双向链表尾部插入元素
doublyLinkedList.push(12);
doublyLinkedList.push(14);
doublyLinkedList.push(16);
// 双向链表任意位置插入元素
doublyLinkedList.insert(13,1);
doublyLinkedList.insert(11,0);
doublyLinkedList.insert(14,4);
//移除指定位置元素
doublyLinkedList.removeAt(4);
doublyLinkedList.insert(15,4);
// 删除链表中的元素
doublyLinkedList.remove(16);
console.log(doublyLinkedList.toString());
// 获取链表尾部元素
console.log(doublyLinkedList.getTail());
console.log(doublyLinkedList.inverseToString());
// 获取链表长度
console.log("链表长度",doublyLinkedList.size())
doublyLinkedList.removeAt(4);
// 清空链表
doublyLinkedList.clear();
console.log(doublyLinkedList.isEmpty());