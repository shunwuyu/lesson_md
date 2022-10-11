const deleteDuplicates = function(head) {
    // 极端情况：0个或1个结点，则不会重复，直接返回
    if(!head || !head.next) {
        return head
    }
    // dummy 登场
    let dummy = new ListNode() 
    // dummy 永远指向头结点
    dummy.next = head   
    // cur 从 dummy 开始遍历
    let cur = dummy 
    // 当 cur 的后面有至少两个结点时
    while(cur.next && cur.next.next) {
        // 对 cur 后面的两个结点进行比较
        if(cur.next.val === cur.next.next.val) {
            // 若值重复，则记下这个值
            let val = cur.next.val
            // 反复地排查后面的元素是否存在多次重复该值的情况
            while(cur.next && cur.next.val===val) {
                // 若有，则删除
                cur.next = cur.next.next 
            }
        } else {
            // 若不重复，则正常遍历
            cur = cur.next
        }
    }
    // 返回链表的起始结点
    return dummy.next;
};