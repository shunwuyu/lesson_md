// 助手类：用于表示双向链表中的结点元素
import Node from './node'

export default class DoublyNode<T> extends Node<T>{
    prev: any;

    constructor(element: any, next?: any, prev?: any) {
        // 调用Node类的构造函数
        super(element);
        // 新增prev属性，指向链表元素的上一个元素
        this.prev = prev;
    }

    
}