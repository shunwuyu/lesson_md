"use strict";
exports.__esModule = true;
var Queue_1 = require("./lib/Queue");
var Deque_1 = require("./lib/Deque");
/**
 * 击鼓传花函数
 * @param nameList 参与人员列表
 * @param num 多少次为一轮
 * @returns {{eliminates: [], winner: string}}
 */
var hotPotato = function (nameList, num) {
    if (nameList === void 0) { nameList = []; }
    if (num === void 0) { num = 0; }
    // 实例化一个队列
    var queue = new Queue_1["default"]();
    // 淘汰人员列表
    var eliminateList = [];
    // 所有参与人员入队
    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    // 队列的大小大于1就重复执行
    while (queue.size() > 1) {
        // 模拟击鼓传花，给定一个数字，然后遍历队列，从队列开头移除一项，再将其添加到队列末尾。
        for (var i = 0; i < num; i++) {
            // 将队首元素添加至队尾(如果你将花传给了旁边的人，你被淘汰的威胁就立刻解除了)
            queue.enqueue(queue.dequeue());
        }
        // 鼓声停止，传花结束，将当前手上有花的人(队首元素)淘汰。
        eliminateList.push(queue.dequeue());
    }
    // 游戏结束，返回淘汰者和胜利者
    return {
        eliminates: eliminateList,
        winner: queue.dequeue()
    };
};
var names = ["张三", "李四", "王五", "朱六", "郝七", "刘八", "彭九"];
var result = hotPotato(names, 9);
console.log(result);
var palindromeDetection = function (sourceString) {
    // 判断参数是否有效
    if (sourceString === undefined || sourceString === null || sourceString.length === 0) {
        return false;
    }
    // 实例化一个双端队列
    var deque = new Deque_1["default"]();
    // 去除字符串的空格并将其转为小写字母
    var lowerString = sourceString.toLocaleLowerCase().split(" ").join("");
    // 回文校验结果
    var isEqual = true;
    var firstChar, lastChar;
    // 字符串入队
    for (var i = 0; i < lowerString.length; i++) {
        // charAt获取指定索引处的字符
        deque.addBack(lowerString.charAt(i));
    }
    // 队列大小大于1且回文校验结果为true则继续执行校验
    while (deque.size() > 1 && isEqual) {
        // 队首和队尾元素出队
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        // 比较队尾元素和队首元素是否相等
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    // 返回验证结果
    return isEqual;
};
var testString = "madam";
var testStr = "admin";
var results = palindromeDetection(testString);
var testStrResult = palindromeDetection(testStr);
if (results) {
    console.log(testString + "\u662F\u56DE\u6587");
}
else {
    console.log(testString + "\u4E0D\u662F\u56DE\u6587");
}
if (testStrResult) {
    console.log(testStr + "\u662F\u56DE\u6587");
}
else {
    console.log(testStr + "\u4E0D\u662F\u56DE\u6587");
}
