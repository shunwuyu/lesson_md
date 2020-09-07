import Queue from "./lib/Queue";
const queue = new Queue();

// 入队
queue.enqueue("队列中的第一条数据");
queue.enqueue("队列中的第二条数据");
queue.enqueue("队列中的第三条数据");
queue.enqueue("队列中的第四条数据");
queue.enqueue("队列中的第五条数据");
// 出队
queue.dequeue();

// 获取队首元素
console.log(queue.peek());
// 获取队列大小
console.log(queue.size());

// 获取队列中的所有元素
console.log(queue.toString());

// 判断队列中是否有数据
console.log(queue.isEmpty());
// 清空队列
queue.clear();