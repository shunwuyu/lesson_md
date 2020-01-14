func reverseList(head *ListNode) *ListNode {
	var prev *ListNode
	for head != nil {
			temp := head.Next
			head.Next = prev
			prev = head
			head = temp
	}
	return prev
}