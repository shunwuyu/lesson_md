"use strict";
exports.__esModule = true;
var linked_list_models_1 = require("../../utils/linked-list-models");
var Util_1 = require("../../utils/Util");
var LinkedList = /** @class */ (function () {
    function LinkedList(equalsFn) {
        if (equalsFn === void 0) { equalsFn = Util_1.defaultEquals; }
        this.count = 0;
        this.next = undefined;
        this.equalsFn = equalsFn;
        this.head = null;
    }
    LinkedList.prototype.push = function (element) {
        var node = new linked_list_models_1.Node(element);
        var current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                // 赋值遍历到的元素
                current = current.next;
            }
            current.next = node;
        }
        // 链表长度自增
        this.count++;
    };
    // 移除链表指定位置的元素
    LinkedList.prototype.removeAt = function (index) {
        if (index >= 0 && index < this.count) {
            // 获取当前链表头部元素
            var current = this.head;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                // 获取目标参数上一个结点
                var previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            // 链表长度自减
            this.count--;
            // 返回当前删除的目标结点
            return current.element;
        }
        return undefined;
    };
    // 获取链表指定位置的结点
    LinkedList.prototype.getElementAt = function (index) {
        // 参数校验
        if (index >= 0 && index <= this.count) {
            // 获取链表头部元素
            var current = this.head;
            // 从链表头部遍历至目标结点位置
            for (var i = 0; i < index && current != null; i++) {
                // 当前结点指向下一个目标结点
                current = current.next;
            }
            // 返回目标结点数据
            return current;
        }
        return undefined;
    };
    LinkedList.prototype.insert = function (element, index) {
        // 参数有效性判断
        if (index >= 0 && index <= this.count) {
            // 声明节点变量，将当前要插入的元素作为参数生成结点
            var node = new linked_list_models_1.Node(element);
            // 第一个位置添加元素
            if (index === 0) {
                // 将节点变量(node)的下一个元素指向链表的头部元素
                node.next = this.head;
                // 链表头部元素赋值为节点变量
                this.head = node;
            }
            else {
                // 获取目标结点的上一个结点
                var previous = this.getElementAt(index - 1);
                // 将节点变量的下一个元素指向目标节点
                node.next = previous.next;
                /**
                 * 此时node中当前结点为要插入的值
                 * next为原位置处的结点
                 * 因此将当前结点赋值为node，就完成了结点插入操作
                 */
                previous.next = node;
            }
            // 链表长度自增
            this.count++;
            return true;
        }
        return false;
    };
    LinkedList.prototype.clear = function () {
        this.head = undefined;
        this.count = 0;
    };
    // 获取链表长度
    LinkedList.prototype.size = function () {
        return this.count;
    };
    // 判断链表是否为空
    LinkedList.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    // 获取链表头部元素
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.indexOf = function (element) {
        // 获取链表顶部元素
        var current = this.head;
        // 遍历链表内的元素
        for (var i = 0; i < this.count && current != null; i++) {
            // 判断当前链表中的结点与目标结点是否相等
            if (this.equalsFn(element, current.element)) {
                // 返回索引
                return i;
            }
            // 当前结点指向下一个结点
            current = current.next;
        }
        // 目标元素不存在
        return -1;
    };
    // 获取链表中的所有元素
    LinkedList.prototype.toString = function () {
        if (this.head == null) {
            return "";
        }
        var objString = "" + this.head.element;
        // 获取链表顶点的下一个结点
        var current = this.head.next;
        // 遍历链表中的所有结点
        for (var i = 1; i < this.size() && current != null; i++) {
            // 将当前结点的元素拼接到最终要生成的字符串对象中
            objString = objString + ", " + current.element;
            // 当前结点指向链表的下一个元素
            current = current.next;
        }
        return objString;
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
