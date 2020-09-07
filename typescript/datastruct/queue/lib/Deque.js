"use strict";
exports.__esModule = true;
/**
* 双端队列
*     队首队尾添加删除获取元素、获取队列大小、清空队列、队列判空、获取队列中的所有元素
*/
var Deque = /** @class */ (function () {
    function Deque() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // 队首添加元素
    Deque.prototype.addFront = function (item) {
        if (this.isEmpty()) {
            this.addBack(item);
        }
        else if (this.lowestCount > 0) {
            // 队首元素大于0
            this.lowestCount--;
            this.items[this.lowestCount] = item;
        }
        else {
            // 队首元素为0，我们需要将将队列里的0号key空出来，其他数据整体向后移动一位。
            for (var i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            // 队列长度自增
            this.count++;
            // 队首元素设为0
            this.lowestCount = 0;
            // 为队首的0号key添加当前元素
            this.items[0] = item;
        }
    };
    // 队尾添加元素
    Deque.prototype.addBack = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    // 移除队首元素
    Deque.prototype.removeFront = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    // 移除队尾元素
    Deque.prototype.removeBack = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    // 获取队首元素
    Deque.prototype.peekFront = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    // 获取队尾元素
    Deque.prototype.peekBack = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    // 获取队列大小
    Deque.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    // 清空队列
    Deque.prototype.clear = function () {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    // 队列判空
    Deque.prototype.isEmpty = function () {
        return this.count - this.lowestCount === 0;
    };
    // 获取队列中的所有元素
    Deque.prototype.toString = function () {
        if (this.isEmpty()) {
            return "";
        }
        var objString = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return Deque;
}());
exports["default"] = Deque;
