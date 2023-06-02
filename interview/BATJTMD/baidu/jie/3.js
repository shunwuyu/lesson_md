function reverseList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const newHead = reverseList(head.next);
    // 边界  设置当前节点由 下一个节点的next 设置  
    head.next.next = head;
    head.next = null;

    return newHead;
}