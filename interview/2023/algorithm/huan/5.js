const deleteDuplicates = function(head) {
    // 设定 cur 指针，初始位置为链表第一个结点
    let cur = head;
    // 遍历链表
    while(cur != null && cur.next != null) {
        // 若当前结点和它后面一个结点值相等（重复）
        if(cur.val === cur.next.val) {
            // 删除靠后的那个结点（去重）
            cur.next = cur.next.next;
        } else {
            // 若不重复，继续遍历
            cur = cur.next;
        }
    }
    return head;
};