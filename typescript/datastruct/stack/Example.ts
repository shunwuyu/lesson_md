import Stack from "./lib/Stack";
import ObjStack from "./lib/ObjStack";

// 十进制转二进制（数组栈）
const decimalToBinary = function (decNumber) {
    // 实例化一个栈(数组栈)
    const stack = new Stack();
    // 传进来的十进制数
    let number = decNumber;
    // 余数
    let rem;
    // 二进制结果
    let binaryString = "";
    // 当前十进制结果除以二不为0时继续进行运算
    while (number > 0) {
        // 模运算
        rem = Math.floor(number % 2);
        // 将余数入栈
        stack.push(rem);
        // 当前十进制结果除以二
        number = Math.floor(number / 2);
    }
    // 栈不为空就取出栈内元素拼接到二进制结果中
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    // 返回二进制结果
    return binaryString;
}
// 十进制转二进制（对象栈）
const decimalToBinaryObjStack = function (decNumber) {
    // 实例化一个栈(数组栈)
    const stack = new ObjStack();
    // 传进来的十进制数
    let number = decNumber;
    // 余数
    let rem;
    // 二进制结果
    let binaryString = "";
    // 当前十进制结果除以二不为0时继续进行运算
    while (number > 0) {
        // 模运算
        rem = Math.floor(number % 2);
        // 将余数入栈
        stack.push(rem);
        // 当前十进制结果除以二
        number = Math.floor(number / 2);
    }
    // 栈不为空就取出栈内元素拼接到二进制结果中
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    // 返回二进制结果
    return binaryString;
}

// 进制转换
// const hexConversion = function (decNumber,hex) {
//     const stack = new ObjStack();
//     const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     // 结果进行除法运算后的值
//     let number = decNumber;
//     // 余数
//     let rem;
//     // 转换后的进制字符串
//     let hexString = "";

//     // 判断进制是否有效
//     if(!(hex >= 2 && hex <= 36)){
//         return "";
//     }

//     while (number > 0){
//         // 取余数
//         rem = Math.floor(number % hex);
//         // 入栈
//         stack.push(rem);
//         // 对结果进行除法运算
//         number = Math.floor(number / hex);
//     }
//     while (!stack.isEmpty()){
//         console.log("栈内元素:",stack.peek())
//         console.log(`栈内元素(${hex}进制):`,digits[stack.peek()]);
//         // 拼接进制字符
//         hexString += digits[stack.pop()];
//     }
//     return  hexString;
// }

const testNumber = 999989993232287;
console.time("数组栈");
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈");

console.time("对象栈");
const testObjNumber = 999989993232287;
console.log(decimalToBinaryObjStack(testObjNumber));
console.timeEnd("对象栈");

// const number = 989098;
// hexConversion(number,16)