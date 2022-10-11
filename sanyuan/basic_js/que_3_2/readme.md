2. JS中类型转换有哪几种？
  ![](https://user-gold-cdn.xitu.io/2019/5/14/16ab5c97a03dff4c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
  JS中，类型转换只有三种：
  - 转换成数字
  - 转换成布尔值
  - 转换成字符串

  强制类型转换 Boolean(value) Number(value)  String(value) 
  隐式类型转换 JavaScript 默认自动转换

  if (表达式){}
  运算符
  
  当一侧操作数为 String 类型，会优先将另一侧转换为字符串类型。
  1+'2'
  当一侧操作数为 Number 类型，另一侧为原始类型，则将原始类型转换为 Number 类型。
  
  当一侧操作数为 Number 类型，另一侧为引用类型，将引用类型和 Number 类型转换成字符串后拼接。

对象
 表达式或语句中需要用到数字或字符串时，对象才被隐式转换。
  3*{valueOf:function () { return 5 }} // 15
