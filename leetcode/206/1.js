function ListNode(val) {
  this.val = val;
  this.next = null;
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

let node = a1;
while(node) {
  console.log(node.val);
  node = node.next;
}

