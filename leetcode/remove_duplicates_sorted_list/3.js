function ListNode(val) {
  this.val = val;
  this.next = null;
  return this;
}

var removeDuplicates = function(head) {
  if (head == null || head.next == null) return head;
  var cur = head;
  while(cur.next != null) {
    if (cur.next.val == cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  } 
  return head
}

const n1 =  new ListNode(1);
const n2 =  new ListNode(1);
const n3 =  new ListNode(2);
n1.next = n2;
n2.next = n3;

console.log(removeDuplicates(n1));