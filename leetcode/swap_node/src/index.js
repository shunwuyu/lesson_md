import LinkedList from "./LinkedList";

// import LinkedList from './LinkedList';
const swapPairs = (head) => {
  if (head === null) {
    return null;
  }

  let next = head.next,
    result = next? next : head, //结果头结点
    prevTail,
    curHead,
    nextHead;
  
  curHead = head; //当前头 
   
  while(next) { // 二个里的第二个指针， 如果没有就不用交换
    nextHead = next.next;  // 下一个轮回的第一个结点
    if (prevTail) { 
      prevTail.next = next;  
        // 上一轮回的第一个结点指向下一轮回的第二个结点 连上
    }
    next.next = curHead;   //交换一下
    curHead.next = nextHead; // 第一个结点的next 指向第二个结点的next
    prevTail = curHead; // 这次的第一个结点成为了这次的尾
    curHead = nextHead; // 当前结点要设置为下一轮的第一个结点
    next = curHead && curHead.next; // 下一轮的第二个结点
  }
  return result;
}

const list = new LinkedList();
list
  .append(1)
  .append(2)
  .append(3)
  .append(4)

let node = swapPairs(list.head);
// console.log(node.value);
// console.log(node);
while(node) {
  console.log(node.value);
  node = node.next;
}