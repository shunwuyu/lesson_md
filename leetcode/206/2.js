function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
  //无头
  if (!head || !head.next) return head;

  let cur = head;
  let pre = null;

  while(cur) {
    const next = cur.next; //已拿下下一个结点
    cur.next = pre; //改写next 指针 往回指
    pre = cur; // pre 就成新的前一个结点
    cur = next;
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