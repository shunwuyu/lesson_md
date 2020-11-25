"use strict";
exports.__esModule = true;
// 助手类： 用于表示链表中的第一个以及其他元素
// 泛型来创建可重用的组件
var Node = /** @class */ (function () {
    function Node(element, next) {
        this.element = element;
        this.next = next;
    }
    return Node;
}());
exports.Node = Node;
