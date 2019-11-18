class Solution:
  def isValid(self, s: str) -> bool:
    stack = []
    # 字典
    map = {
      "{":"}",
      "[":"]",
      "(":")"
    }
    # 遍历字符串的每个字符
    for x in s:
      # in 字典 如果是左半括号
      if x in map:
        print(map[x])
        stack.append(map[x])
      # 如果是右半括号
      else:
        # 栈
        if len(stack) != 0:
          # pop 出栈
          top_element = stack.pop()
          # 如果不是一样的， 不匹配
          if x != top_element:
            return False
          else:
            continue
        else:
          # 还没有匹配完
          return False
    # 栈是空的， 处理完了
    return len(stack) == 0

solution = Solution()
print(solution.isValid('()[]{}'))