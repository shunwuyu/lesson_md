function ListNode(val) {
    this.val = val;
    this.next = null;
}

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

var reverseBetween = function(head, left, right) {
    if (left === right) return head
    // 虚拟头节点
    const vNode = new ListNode(-1)
    vNode.next = head
    // 反转头节点的前一个节点
    let prev = vNode 
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next
    }
    // console.log(prev);
    // 反转尾节点
    let rightNode = prev;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }

    // 反转头节点 
    let leftNode = prev.next
    // 反转尾节点的后一个节点
    let curr = rightNode.next

    prev.next = null
    rightNode.next = null

    reverse(leftNode)
    // 拼接
    prev.next = rightNode
    leftNode.next = curr
    return vNode.next
}

var reverse = function(head) {
    let prev = null
    curr = head

    while(curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
}

console.log(reverseBetween(a1, 2, 4));