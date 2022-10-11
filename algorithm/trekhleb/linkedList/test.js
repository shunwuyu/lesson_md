const LinkedListNode  = require('./LinkedListNode');

// 创建一个列表节点， 值为1, next 应该为null
// const node = new LinkedListNode(1);
// console.log(node.value)
// console.log(node.next);

// 值为对象
// const nodeValue = { value: 1, key: 'test' };
// const node = new LinkedListNode(nodeValue);
// console.log(node.value.value);
// console.log(node.value.key);
// const {value, key} = node.value;
// console.log(value, key);

// 多个节点  1->2 怎么搞？
// const node2 = new LinkedListNode(2);
// const node1 = new LinkedListNode(1, node2);
// console.log(node1.next, node2.next);
// console.log(node1.value, node2.value, node1.next.value);

// 将节点变成字符串
// const node = new LinkedListNode(1);
// console.log(node.toString());

// 对象节点定制化输出如何做？
const nodeValue = { value: 1, key: 'test' };
const node = new LinkedListNode(nodeValue);
const toStringCallback = (value) => `value: ${value.value}, key: ${value.key}`;
console.log(node.toString(toStringCallback));
