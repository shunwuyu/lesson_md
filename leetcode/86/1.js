function ListNode(val) {
  this.val = val;
  this.next = null;
}

var partition = function(head, x) {
  //
  var smaller = dummySmaller = new ListNode(-1);
  var greater = dummyGreater = new ListNode(-1);
    // console.log(smaller);
  while(head) {
    if (head.val < x) {
      smaller.next = head
      smaller = smaller.next
    } else {
      greater.next = head
      greater = greater.next
    }
    head = head.next
  }
  smaller.next = dummyGreater.next
  greater.next = null
    
  return dummySmaller.next 
}

const n1 = new ListNode(1);
const n2 = new ListNode(4);
const n3 = new ListNode(3);
const n4 = new ListNode(2);
const n5 = new ListNode(5);
const n6 = new ListNode(2);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

console.log(partition(n1, 3));