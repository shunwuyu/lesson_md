[source](https://juejin.cn/post/7037765018313555982)

- 100 -> 10000 怎么办？
    用户在连续输入时，整个页面会陷入卡死的状态，只有在用户停止输入以后，才能看到输入内容以及对应的结果列表。
    浏览器主线程一直被 react 更新过程和浏览器布局过程占用，导致一直无法完成图层绘制，给用户造成了页面卡死的影响。
    