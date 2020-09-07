import Deque from "./lib/Deque.ts";

const deque = new Deque();
// 队列为空的情况下，往队首添加元素
deque.addFront("队首添加元素");
console.log(deque.peekFront());

// 队尾添加元素
deque.addBack("队尾添加元素");
console.log(deque.peekBack());

// 队首元素等于0的情况往队首添加元素
deque.addFront("队首元素等于0添加元素");
console.log(deque.peekFront());

// 队首元素大于0，往队首添加元素
deque.removeFront();
deque.addFront("队首元素大于0添加元素");
console.log(deque.peekFront());

// 获取队列大小
console.log("队列大小:",deque.size())

// 队列末尾添加元素
deque.addBack("队列末尾添加元素")

// 获取队列中的所有元素
console.log("队列中的所有元素: ",deque.toString())

// 移除队首元素
deque.removeFront();

// 移除队尾元素
deque.removeBack();

// 获取队首元素
console.log("队首元素: ",deque.peekFront());

// 获取队尾元素
console.log("队尾元素: ",deque.peekBack());