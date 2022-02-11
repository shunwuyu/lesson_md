import LinkedList from "./lib/linked_list";

const linkedList = new LinkedList();
linkedList.push(12);
linkedList.push(13);
linkedList.push(14);
linkedList.push(15);
linkedList.push(16);
linkedList.push(17);
linkedList.push(18);
linkedList.push(19);

// 移除索引为2的元素
linkedList.removeAt(2);
// 获取0号元素
console.log(linkedList.getElementAt(0));
// 查找19在链表中的位置
console.log(linkedList.indexOf(19));
// 在2号位置添加22元素
linkedList.insert(22,2);
// 获取链表中的所有元素
console.log(linkedList.toString());