class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

a1 = ListNode(1)
a2 = ListNode(2)
a3 = ListNode(3)
a4 = ListNode(4)
a5 = ListNode(5)

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5

node = a1
while node: 
  print(node.val)
  node = node.next

class Solution:
  def reverseList(self, head: ListNode) -> ListNode:
    if not head: return None
    prev = None
    cur = head
    while cur:
      cur.next, prev, cur = prev, cur, cur.next
    return prev