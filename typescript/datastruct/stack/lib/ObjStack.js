"use strict";
exports.__esModule = true;
// 实现数据结构栈
var ObjStack = /** @class */ (function () {
    // 构造器
    function ObjStack() {
        this.items = {};
        this.count = 0;
    }
    // 入栈
    ObjStack.prototype.push = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    // 出栈
    ObjStack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    // 返回栈顶元素
    ObjStack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    // 判断栈是否为空
    ObjStack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    // 清空栈内元素
    ObjStack.prototype.clear = function () {
        this.items = [];
        this.count = 0;
    };
    // 获取栈内元素数量
    ObjStack.prototype.size = function () {
        return this.count;
    };
    // 将栈内元素转为字符串
    ObjStack.prototype.toString = function () {
        if (this.isEmpty()) {
            return "";
        }
        var objString = "" + this.items[0];
        for (var i = 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return ObjStack;
}());
exports["default"] = ObjStack;
