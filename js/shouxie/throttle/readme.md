![](https://juejin.cn/post/6946022649768181774#heading-15)

- 防抖达到了什么效果，
    多次触发， 只执行一次 var setUseAction = debounce(getUserAction, 10000, true);

- 如果把限频改成 N 秒内只执行一次？  叫节流

- 加功能
    1. 支持取消节流
    2. 另外通过传入第三个参数 options.leading 来表示是否可以立即执行一次
    3. opitons.trailing 表示结束调用的时候是否还要执行一次，默认都是 true
    