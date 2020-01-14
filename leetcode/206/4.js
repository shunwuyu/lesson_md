const reverseList = (head) => {
  if (head == null || head.next == null) {
    return head; //找到了头结点 递归的退出条件
  } else {
    //公式 当前结点的next指向的结点的next指回当前结点， 就反转了
    // 再把当前结点的next 属性给干掉， 
    let newHead = reverseList(head.next); //递归
    head.next.next = head; // 反过来了
    head.next = null; //把之前的干掉
    return newHead
  }
}