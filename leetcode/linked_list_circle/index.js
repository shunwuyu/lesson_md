function ListNode(val) {
  this.val = val;
  this.next = null;
}
var hasCycle = function(head) {
  var slow = head,
      fast = head;
  
  while(fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast /*只有环*/|| (fast && fast.next === slow)/*相遇*/) {
          return true;
      }
  }
  return false;
};

const a1 =  new ListNode(3);
const a2 =  new ListNode(2);
const a3 =  new ListNode(0);
const a4 =  new ListNode(4);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a2;

console.log(hasCycle(a1));
