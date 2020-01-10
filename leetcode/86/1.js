function ListNode(val) {
  this.val = val;
  this.next = null;
}

var partition = function(head, x) {
  const dummyHead1 = {
    next: null
  }
  const dummyHead2 = {
    next: null
  }
  let current = {
    next: head
  }
  let currentL1 = dummyHead1;
  let currentL2 = dummyHead2;
  while(current.next) {
    current = current.next;
    if (current.val < x) {
      currentL1.next = current;
      currentL1 = current;
    } else {
      currentL2.next = current;
      currentL2 = current;
    }
  }
  currentL2.next = null;
  currentL1.next = dummyHead2.next;
  return dummyHead1.next;
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