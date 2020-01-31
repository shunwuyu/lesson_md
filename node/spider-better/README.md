## Object.keys
以前 前端文档不完善 window 对象上有啥 谁也不知道
循环出来看一下
response对象，包括headers 、statusCode、body 等，
我们用body就是网站的html内容

## 对比之前的代码
选择器 和 提取加工
如果想要的字段多了，那么代码会越写越多，维护困难，最重要的是「不环保」，今天抓什么值得买，明天抓惠惠网
代码还要copy一份改一改！一来二去，抓的越多，那么代码越乱，想想哪天不用request了
```js
handleMap
{
  title: {
    selector: '.itemName a',
    handler: 'removeTagText'
  }
}
```