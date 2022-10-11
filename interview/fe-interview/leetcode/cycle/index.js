function ListNode(val) {
  this.val = val;
  this.next = null;
}
var hasCycle = function(head) {
  if(head == null || head.next == null){
    return false;
  }
  let fast = head.next;
  let slow = head;
  while(slow != fast){
      if(fast == null || fast.next == null){
        return false;
     }
      slow = slow.next;
      fast = fast.next.next;
  }
  return true;
};

const a1 = new ListNode(3);
const a2 = new ListNode(2);
const a3 = new ListNode(0);
const a4 = new ListNode(4);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a2;

console.log(hasCycle(a1));