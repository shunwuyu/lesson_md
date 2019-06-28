function ListNode(val) {
  this.val = val;
  this.next = null;
}

let a1 = new ListNode(1),
  a2 = new ListNode(2),
  a3 = new ListNode(3),
  a4 = new ListNode(4),
  a5 = new ListNode(5),
  a6 = new ListNode(6),
  a7 = new ListNode(7),
  a8 = new ListNode(8),
  a9 = new ListNode(9),
  a10 = new ListNode(8),
  a11 = new ListNode(7),
  a12 = new ListNode(6);
  a1.next = a2;
  a2.next = a3;
  a3.next = a4;
  a4.next = a5;
  a5.next = a6;
  a6.next = a7;
  a7.next = a8;
  a8.next = a9;
  a9.next = a10;
  a10.next = a11;
  a11.next = a12;


let ret = addTwoNumbers(a1, b1);
while(ret) {
  console.log(ret.val);
  ret = ret.next;
}