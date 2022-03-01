import LinkedList from './linked_list'
import defaultEquals from "./util";
import Node from './node';

export default class CircularLinkedList<T> extends LinkedList<T> {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    // 重写insert函数
    insert(element: T, index: number) {
        if (index >= 0 && index <= this.count) {
            // 声明结点变量
            const node = new Node(element);
            // 声明链表元素变量，默认指向当前链表头部元素
            let current = this.head;
            if (index === 0) {
                // 链表头部添加元素
                if (this.head == null) {
                    // 链表头部为空
                    this.head = node;
                    // 链表的最后一个结点指向链表头部
                    node.next = this.head;
                } else {
                    // 链表头部不为空，node中的next指向当前链表头部
                    node.next = current;
                    // 确保最后一个元素指向新添加的元素，current指向当前元素的最后一个元素
                    current = this.getElementAt(this.size() - 1);
                    // 更新最后一个元素
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                // 链表其他位置插入元素
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    // 重写removeAt方法
    removeAt(index: number): any {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    //链表长度为1直接将链表头部指向undefined
                    this.head = undefined;
                } else {
                    // 链表长度不为1，保存链表头部元素，将其从循环链表中移除
                    const removed = this.head;
                    // 链表元素变量指向链表尾部
                    current = this.getElementAt(this.size());
                    // 链表头部指向链表头部元素中的next
                    this.head = this.head.next;
                    // 链表尾部元素中的next指向新的链表头部
                    current.next = this.head;
                    // 更新链表元素的引用，用于返回当前移除的值
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}