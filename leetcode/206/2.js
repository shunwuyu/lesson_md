function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
  //无头
  if (!head || !head.next) return head;

  let cur = head; //当前结点
  let pre = null; //前驱结点

  while(cur) {
    const next = cur.next; // 当前节点的下一个节点 后继结点
    cur.next = pre; //将指针指向前一个节点， 如果是head, 那么就是null, 否则就是它的前趋结点
    pre = cur; // 前驱前点变成当前结点
    cur = next; // 后继结点变成当前节点
  }

  return pre;
}


const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

let node = reverseList(a1);
while(node) {
  console.log(node.val);
  node = node.next;
}
// console.log(node);