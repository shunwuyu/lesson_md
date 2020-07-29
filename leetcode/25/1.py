class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None
  
class Solution:
  def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
    if head is None or k < 2:
      return head
    return head

n1 = ListNode(1)
n2 = ListNode(2)
n3 = ListNode(3)
n4 = ListNode(4)
n5 = ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

demo = Solution()
print(demo.reverseKGroup(n1, 1))