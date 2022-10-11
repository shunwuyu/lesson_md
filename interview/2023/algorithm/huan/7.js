
const removeNthFromEnd = function(head, n) {
    // 初始化 dummy 结点
    const dummy = new ListNode()
    // dummy指向头结点
    dummy.next = head
    // 初始化快慢指针，均指向dummy
    let fast = dummy
    let slow = dummy

    // 快指针闷头走 n 步
    while(n!==0){
        fast = fast.next
        n--
    }
    
    // 快慢指针一起走
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    
    // 慢指针删除自己的后继结点
    slow.next = slow.next.next
    // 返回头结点
    return dummy.next
};