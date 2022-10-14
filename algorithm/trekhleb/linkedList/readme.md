[source](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/README.zh-CN.md)

- 数组是什么？
    数据元素的集合
- 树是什么？
    二叉树是每个节点最多有两个子节点
    每个子节点又是一棵独立的树
- 树是否可以是数据元素的集合 
    可以， 都是存储数据的， 只不过因为特定的结构， 解决特定的问题
- 数组和树的区别是什么？
    线性（下标表达元素的前后顺序）和非线性（n叉）
- 数组和链表有什么区别
    元素的线性顺序不是由它们在内存中的物理位置给出的, 可以不连续
    链表 是数据元素的线性集合, 每个元素指向下一个元素。
- 为什么有了数组， 还要有链表呢？有什么优点。
    1. 允许在迭代期间有效地从序列中的任何位置插入或删除元素
        数组移动多次
- 缺点是?
    链表的一个缺点是访问时间是线性的 没有下标
- 数组为什么能更快的访问呢？
    数组缓存了位置   [1,2,3]    其实地址
    ![](https://static001.geekbang.org/resource/image/98/c4/98df8e702b14096e7ee4a5141260cdc4.jpg)

- 创建一个列表节点， 值为1, next 应该为null

- 数据结构中定义的ADT是什么意思？
    抽象数据类型 =  结构 + 特定行为

- ADD 操作
    Add(value)
        Pre: value is the value to add to the list  操作前
        Post: value has been placed at the tail of the list 操作后
        n ← node(value) 
        if head = ø
            head ← n
            tail ← n
        else
            tail.next ← n
            tail ← n
        end if
    end Add

- Prepend(value)
    Pre: value is the value to add to the list
    Post: value has been placed at the head of the list
    n ← node(value)
    n.next ← head
    head ← n
    if tail = ø
        tail ← n
    end
    end Prepend

- 搜索
    Contains(head, value)
        Pre: head is the head node in the list
            value is the value to search for
        Post: the item is either in the linked list, true; otherwise false
        n ← head
        while n != ø and n.value != value
            n ← n.next
        end while
        if n = ø
            return false
        end if
        return true
    end Contains

- 删除
    Remove(head, value)
  Pre: head is the head node in the list
       value is the value to remove from the list
  Post: value is removed from the list, true, otherwise false
  if head = ø
    return false
  end if
  n ← head
  if n.value = value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
    end if
    return true
  end if
  while n.next != ø and n.next.value != value
    n ← n.next
  end while
  if n.next != ø
    if n.next = tail
      tail ← n
    end if
    n.next ← n.next.next
    return true
  end if
  return false
end Remove

遍历
    Traverse(head)
    Pre: head is the head node in the list
    Post: the items in the list have been traversed
    n ← head
    while n != ø
        yield n.value
        n ← n.next
    end while
    end Traverse

反向遍历
    ReverseTraversal(head, tail)
    Pre: head and tail belong to the same list
    Post: the items in the list have been traversed in reverse order
    if tail != ø
        curr ← tail
        while curr != head
        prev ← head
        while prev.next != curr
            prev ← prev.next
        end while
        yield curr.value
        curr ← prev
        end while
    yield curr.value
    end if
    end ReverseTraversal


- 作业
    反向遍历 伪代码+实现