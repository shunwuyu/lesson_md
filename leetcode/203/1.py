class ListNode:
     def __init__(self, x):
         self.val = x
         self.next = None
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        prev = ListNode(0)
        prev.next = head
        cur = prev
        while cur.next:
            if cur.next.val == val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return prev.next