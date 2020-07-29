function ListNode(val) {
  this.val = val;
  this.next = null;
}

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);

var oddEvenList = function(head) { 
  if (!head || !head.next) return head; // 空链表或只有一个节点， 直接返回
  const dummyHead1 = {  //奇数哨兵节点
    next: head    
  } 
  const dummyHead2 = { //偶数哨兵节点
    next: head.next 
  }
  let odd = dummyHead1.next; //奇数节点
  let event = dummyHdead2.next; //偶数节点

  while(odd && odd.next && even && event.next) { // 只要有一个节点的next 为null 说明就到了原链表的尾节点 可以结束
    const oddNext = odd.next.next; // 下一个奇节点
    const eventNext = event.next.next; //下一个偶节点
    odd.next = oddNext;  //合并到奇节点
    even.next = evenNext; //合并到偶节点

    odd = oddNext;  // 更新为下一个
    even = evenNext; // 更新为下一个
  }

  odd.next = dummyHead2.next; //拼接奇偶链表
  return dummyHead1.next;  // 返回头节点
}