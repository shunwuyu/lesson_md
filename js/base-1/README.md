[source](http://study.qiyun.360.cn/course/festar2018/examination/14?answer_id=421)

2018年前端星计划技术测评练习:
1. 给定两个长度相同的整数数组，将其中的数字分别一一配对，对每一对数字计算乘积，然后求和，计算出总和最小的配对方式，并打印出总和。

```js
// 输入示例：
[1,2,3], [1,2,3]
// 输出示例：
10
```
提示：
一个正序 一个倒序 a数组最大的数 *  b数组里最小的数 才是总和最小的配对
```js

function a(arr1, arr2) {
  arr1 = [...arr1].sort((a, b) => a-b)
  arr2 = [...arr2].sort((a, b) => b-a)

  return arr1
  .map((a, i) => a * arr2[i])
  .reduce((a, b) => a+b)
}
```
2. 定义一个 repeatify 函数。这个函数接受一个字符串和数字，来明确字符串需要重复几次。
`repeatStringNumTimes('hello', 3);`
```js
function repeatStringNumTimes(string, times) {
  var repeatedArr = []; //
  while (times > 0) {
    repeatedArr.push(string);
    times--;
  }
  return repeatedArr.join("");
}
repeatStringNumTimes("abc", 3)
```
