function ListNode(val) {
  this.val = val;
  this.next = null;
}

var n1 = new ListNode(1)
var n2 = new ListNode(2)
var n3 = new ListNode(3)
var n4 = new ListNode(4)
var n5 = new ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
// console.log(n1);
var reverseKGroup = function(head, k) {
  if (!head || k == 1) {
    return head;
  }
  var dummy = {  //哨兵结点
    // val 为空
    next: head
  }
  // 为每一波（k个）都定义一个开始节点， 结点节点 
  // 在start -> end 间完成reverse 就完成了这一部分的reverse
  var start = dummy; //初始化开始节点， 之后它会成为每小段的开始节点
  var end = head; // 初始化结束节点， 其实是新段的开始节点
  var count = 0; //计数 
  while(end != null) { //一次遍历 
    count++; // 计数加1
    if (count % k == 0 ) { // 要反转了
      // if(count < 3) {
      //   console.log(start.val, end.val, '+++++');
      // }
      // if(count > 3 && count < 5) {
      //   console.log(start.val, end.next.val, '+++++');
      // }
      // 反转链表
      // reverse 要负责返回本次的尾结点
      // 下一次的头结点
      // if(count < 3) {
      //   console.log(start.val, end.next.val, '....');
      // }

      start = reverse(start, end.next); //上一次reverse的尾结点
      end = start.next;  //end 在下一次时已指向下一轮的第一个结点
      // if(count < 3) {
      //   console.log(start.val, end.val, '+++++');
      // }
    } else {
      end = end.next
    }
  }
  return dummy.next;
}

function reverse(start, end) {
  
  var curr = start.next;  // 头结点 1
  var prev = start; // 上一个结点 dummy
  var first = curr; // 保存第一个结点 1
  // console.log(first, '+++++');
  while(curr != end) {   // 当前结点的下一个节点指向它的上一个节点
    temp = curr.next // 下一个节点 2
    curr.next = prev; //指向上一个节点 反过来
    prev = curr;  // 前驱结点变为当前结点
    curr = temp; // 当前节点为下一个结点
  }
  // console.log(prev.val); // 2 
  start.next = prev; //上一个start 链上了reverse后的数据 prev 变成了新的头节点
  // console.log(start.val);
  // console.log(curr, '----')
  first.next = curr; //原来的头节点变成了尾节点，尾节点指向下一个节点 
  return first;  //返回原来的尾节点， 做为新的段的dummy 
}

console.log(reverseKGroup(n1, 2));