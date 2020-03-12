function ListNode(val) {
  this.val = val;
  this.next = null;
}

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(6);
const a4 = new ListNode(3);
const a5 = new ListNode(4);
const a6 = new ListNode(5);
const a7 = new ListNode(6);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;
a6.next = a7;

var removeElements = function(head, val) { // 头结点 拿遍， val 要检测的值
  // - 如果当前结点的下一个结点的值为val, 当前结点的next指向next.next
  // - 如果头结点的值 就为val呢， 下一个结点就为新的头结点， 七伤拳 头结点一失去， 怎个链表就没了， 怎么解决这个问题呢？
  // dummy 结点解决头结点有可能就是val的问题
  const dummy = {   //假的结点 
                // 头结点就是val, 要被删除的情况， 后面的结点可以先链到dummy结点
    next: head // 没有value 属性 
  }
  let current = dummy; // 当前结点为dummy
  while(current && current.next) { //一次遍历 尾结点next 指向null 没有值， 是不需要检查是否要删除的， 少一次执行
    let next = current.next; // 取当前结点的下一个结点
    if (next.val === val) { // 如果下一个结点是要删除的结点
      current.next = next.next; // 当前结点的next 指向下下一个结点
    }
    // 只有下一个节点不是要删除的节点才更新current
    if (next.val !== val) { // 不是要删除的结点 或者 下一个结点为空
      current = next; //当前结点设置为下一个结点， 进入下次
    }
  }
  return dummy.next;
}

console.log(removeElements(a1, 6));
