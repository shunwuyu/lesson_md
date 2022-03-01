import LinkedList from "./linked_list";
import defaultEquals from "./util";
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

// 比较两个元素大小，如果a < b则返回-1，否则返回1
function defaultCompare(a: any, b: any) {
    if(a === b){
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export default class OrderedList<T> extends LinkedList<T>{
    private compareFn;
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn)
        this.compareFn = compareFn;
    }
    getIndexNextSortedElement(element: T) {
        let current = this.head
        let i = 0;
        for (; i < this.size() && current; i++) {
            // 用compareFn函数比较传入构造函数的元素
            const comp = this.compareFn(element, current.element);
            // 要插入小于current的元素时，我们就找到了插入元素的位置
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            // 继续下一轮遍历
            current = current.next;
        }
        return i;
    }
    insert(element: T, index: number = 0): boolean {
        if(this.isEmpty()){
            // 链表为空直接调用父级的insert方法往0号元素插入元素
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element,pos);
    }
}