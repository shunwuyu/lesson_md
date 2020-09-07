"use strict";
exports.__esModule = true;
// 实现数据结构栈
var Stack = /** @class */ (function () {
    // 构造器
    function Stack() {
        this.items = [];
    }
    // 入栈
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // 出栈
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // 返回栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    // 判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // 清空栈栈内元素
    Stack.prototype.clear = function () {
        this.items = [];
    };
    // 获取栈内元素数量
    Stack.prototype.size = function () {
        return this.items.length;
    };
    // 将栈内元素转为字符串
    Stack.prototype.toString = function () {
        return this.items.toString();
    };
    return Stack;
}());
exports["default"] = Stack;
