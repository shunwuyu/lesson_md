function ListNode(val) {
  this.val = val;
  this.next = null;
}

//递归
var reverseList = function(head) {
  // if (!head) {
  //   console.log('------------');
  //     return null;
  // }
  
  if (!head.next) {
      return head;
  }
  //新的头是下一个
  var newHead = reverseList(head.next);
  //  console.log(head.next.next);
  head.next.next = head;
  head.next = null;
  
  return newHead;
};

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
console.log(reverseList(a1));