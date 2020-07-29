## vue

```js
<div>{{ isLogin }}</div>
data {
  return {
    isLogin: false
  }
}
setTimeout(() => {
  this.isLogin = true;
}, 2000)
```

2s 之后 设置了 isLogin
设置了之后 页面刷新
怎样才能知道 isLogin 被设置了

```js
data = {
  isLogin: false;
}
data.isLogin = true;
```
## proxy
这个词的原意是代理，用在这里表示由它来“代理”某些操作
