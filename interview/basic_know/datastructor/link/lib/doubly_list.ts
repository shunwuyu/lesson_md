import LinkedList from "./linked_list";
import  defaultEquals  from "./util";
import  DoublyNode  from "./doubly_node";

export default class DoublyLinkedList<T> extends LinkedList<T> {
    private tail: any;
    constructor(equalsFn = defaultEquals) {
        // 调用Node类的构造函数
        super(equalsFn);
        // 新增属性，用于指向链表的最后一个元素
        this.tail = undefined;
    }

    push(element: T) {
        // 创建双向链表辅助结点
        const node = new DoublyNode(element);
        if (this.head == null) {
            // 链表头部为空，头部和尾部都指向node
            this.head = node;
            this.tail = node;
        } else {
            // 将链表尾部结点中的next指向node
            this.tail.next = node;
            // 将node结点中的prev指向当前链表尾部元素
            node.prev = this.tail;
            // 当前链表末尾元素指向node
            this.tail = node;
        }
        // 链表长度自增
        this.count++;
    }

    // 重写insert方法
    insert(element: T, index: number) {
        // 参数有效性判断
        if (index >= 0 && index <= this.count) {
            // 创建结点
            const node = new DoublyNode(element);
            // 声明链表元素辅助变量（current），默认指向当前链表头部(this.head)
            let current = this.head;

            // 链表头部添加元素
            if (index === 0) {
                // 链表头部为空
                if (this.head == null) {
                    // 调用push方法
                    this.push(element);
                } else {
                    // 不为空，将node.next指向当前头部元素
                    node.next = this.head;
                    // 链表头部的元素结点中上一个位置指向node
                    current.prev = node;
                    // 头部元素指向node
                    this.head = node;
                }
            } else if (index === this.count) {
                // 链表尾部添加元素，链表元素辅助变量指向挡脸链表尾部元素
                current = this.tail;
                // 链表元素辅助变量结点中的下一个元素指向node
                current.next = node;
                // node结点中的prev指向current
                node.prev = current;
                // 当前链表尾部元素指向node
                this.tail = node;
            } else {
                // 链表的其他位置插入元素
                const previous = super.getElementAt(index - 1);
                // 元素变量指向目标结点
                current = previous.next;
                // node的下一个指向目标结点位置的元素
                node.next = current;
                // 目标结点指向结点变量
                previous.next = node;
                // 目标结点的上一个结点指向结点变量
                current.prev = node;
                // 结点插入完毕，调整结点的上一个指针指向
                node.prev = previous;
            }
            // 链表长度自增
            this.count++;
            // 返回true
            return true;
        }
        return false;
    }

    // 从任意位置移除元素
    removeAt(index: number): any {
        // 参数有效性判断
        if (index >= 0 && index < this.count) {
            // current变量指向链表头部
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
                if (this.count === 1) {
                    // 链表长度为1，直接将链表的末尾元素指向设为undefined
                    this.tail = undefined;
                } else {
                    // 将链表头部的上一个元素指向undefined
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                // 链表末尾移除元素
                current = this.tail;
                // 链表末尾元素指向其上一个元素
                this.tail = current.prev;
                // 链表末尾的下一个元素设为undefined
                this.tail.next = undefined;
            } else {
                // 双向链表其他位置移除元素
                current = super.getElementAt(index);
                // 获取当前要移除元素的上一个元素
                const previous = current.prev;
                // 目标元素的下一个元素指向当前要移除元素的下一个元素
                previous.next = current.next;
                // 当前要移除元素的下一个元素指向要移除元素的上一个元素
                current.next.prev = previous;
            }
            // 链表长度自减
            this.count--;
            // 返回当前要移除的元素
            return current.element;
        }
        return undefined;
    }

    // 获取链表尾部元素
    getTail() {
        return this.tail;
    }

    // 清空链表
    clear() {
        super.clear();
        this.tail = undefined;
    }

    // 从链表尾部向头部获取链表元素
    inverseToString() {
        if (this.tail == null) {
            return "";
        }
        let objString = `${this.tail.element}`;
        // 获取链表尾部元素的上一个元素
        let previous = this.tail.prev;
        while (previous != null) {
            // 将当前获取到的链表元素拼接至链表字符串对象中
            objString = `${objString}, ${previous.element}`;
            // 获取当前链表尾部元素的上一个元素
            previous = previous.prev;
        }
        return objString;
    }
}