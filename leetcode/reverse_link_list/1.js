function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
  var cur = head,
    next;
  head = null;
  while(cur) {
    next = cur.next; //下一个
    cur.next = head; //反向
    if (next) {
      head = cur; // 新的头
      cur = next; // cur 下一个
    } else { //最后 一个
      return cur;
    }
  }
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
console.log(reverseList(a1));
