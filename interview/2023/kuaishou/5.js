class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
}

function deleteNode(head, val) {
    // 处理链表为空的情况
    if (!head) return null;
    // 处理待删除节点为头节点的情况
    if (head.val === val) return head.next;
    let prev = head;
    let curr = head.next;
    while (curr) {
        if (curr.val === val) {
          prev.next = curr.next;
          return head;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
}