export default class Node<T>{
    element: T;
    next: any;
    // 默认传一个元素进来
    constructor (element: T) {
        this.element = element;
        this.next = undefined;
    }
}