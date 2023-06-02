// 迭代法
// 具体思路是从头结点开始，依次遍历每个节点，然后将其指针指向前一个节点，最后返回新的头结点。
function reverseList(head) {
    let prev = null;
    let curr = head;
  
    while (curr !== null) {
      const next = curr.next;
      // 反转
      curr.next = prev;
      // 当前节点 就是下个节点的next 
      prev = curr;
      curr = next;
    }
    // 新的头结点
    return prev;
  }