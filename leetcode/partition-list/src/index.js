import LinkedList from './linkedlist.js';

const linkedList = new LinkedList();
console.log(linkedList.append);
linkedList
   .append(1)
   .append(4)
   .append(3)
   .append(2)
   .append(5)
   .append(2)

const partition = (head, x) => {
  let cur = head,
    next,
    preHead,
    preTail,
    afterHead,
    afterTail;
  
  if (head === null) {
    return null;
  }
  while(cur) {
    next = cur.next;
    cur.next = null; //断掉之前的关系
    if (cur.val < x) {
      if (!preHead) {
        preHead = cur;
        preTail = cur;
      } else {
        preTail.next = cur;
        preTail = cur;
      }
    } else {
      if (!afterHead) {
        afterHead = cur;
        afterTail = cur;
      } else {
          afterTail.next = cur;
          afterTail = cur;
      }
    }
    cur = next;
  }
  if (preTail) {
    preTail.next = afterHead; //两队相连
    return preHead;
  } else {
      return afterHead; // 都大于
  }
};