[source](https://juejin.im/post/5b63fdd46fb9a04fa7757081)
## 分析
1. Toast 不需要同页面一起被渲染，而是根据需要被随时调用。 
   1. 不需要放在 render 方法里面
2. 提示不会打断用户操作，并且会在提示的一段时间后自动关闭
3. 几种不同的消息类型 success error warning

```js
Toast.info('普通提示')
Toast.success('成功提示', 3000)
Toast.warning('警告提示', 1000)
Toast.error('错误提示', 2000, () => {
    Toast.info('哈哈')
})
const hideLoading = Toast.loading('加载中...', 0, () => {
    Toast.success('加载完成')
})
setTimeout(hideLoading, 2000)

```