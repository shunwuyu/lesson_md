"use strict";
exports.__esModule = true;
/**
 * 实现队列
 *    队列的基础方法: 入队、出队、返回队首元素、获取队列大小、判断队列是否为空、清空队列、获取队列内所有数据
 */
var Queue = /** @class */ (function () {
    // 构造器
    function Queue() {
        // 队列中的三个必要变量: 队列大小、队首元素、队列对象
        this.count = 0; //队列大小
        this.lowestCount = 0;
        this.items = {};
    }
    // 入队
    Queue.prototype.enqueue = function (item) {
        // 队列的末尾添加元素: 将队列的大小作为key
        this.items[this.count] = item;
        this.count++;
    };
    // 出队
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        // 删除队首元素
        delete this.items[this.lowestCount];
        // 队首元素自增
        this.lowestCount++;
        return result;
    };
    // 返回队首元素
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    // 队列大小: 队列的大小 - 队首元素
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    // 判断队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.count - this.lowestCount === 0;
    };
    // 清空队列
    Queue.prototype.clear = function () {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    // 获取队列内所有数据
    Queue.prototype.toString = function () {
        if (this.isEmpty()) {
            return "";
        }
        var objString = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return Queue;
}());
exports["default"] = Queue;
