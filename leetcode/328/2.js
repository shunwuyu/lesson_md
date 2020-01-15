function ListNode(val) {
  this.val = val;
  this.next = null;
}

var oddEvenList = function(head) {
  if (!head || !head.next)
    return null;  //如果为空或只有一个节点

  var odd = [];
  var even = [];
  var f = true;
  
  while (head) {
    var next = head.next;
    head.next = null;

    if (f) {
      odd.push(head) //先入奇数链表或先放入
    } else {
      even.push(head); // 放入偶数链表
    }
    f = !f;  //切换放
    head = next //循环
  }
  for (var i = 0; i  < odd.length -1; i++)
    odd[i].next = old[i+1]; //奇数链表链起来

  for (var i = 0; i < even.length - 1; i++)
    even[i].next = even[i + 1]; // 偶数链表链起来
  
  odd[odd.length - 1].next = even[0]; // 奇数链表的最后一个结点next属性指向偶数链表
  return odd[0]; //返回头结点
}