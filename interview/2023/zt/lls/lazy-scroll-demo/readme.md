[source](https://juejin.cn/post/7086460246238953479)

- ant-mobile的 infiniteScroll 无限滚动加载
- 没有这个组件时候 在用户拉动列表到底部的时候
    监听滚动条的高度，当可视区域的高度 + 滚动条滚动的高度 > 滚动内容高度 的时候做判断就OK了
    ```
     const onScroll = () => {
        let clientHeight = scrollRef.current.clientHeight; //可视区域高度
        let scrollTop  = scrollRef.current.scrollTop;  //滚动条滚动高度
        let scrollHeight = scrollRef.current.scrollHeight; //滚动内容高度
        if((clientHeight+scrollTop + 100) >(scrollHeight) && curPage <= allNumber){
        }
    }

<div onScroll={onScroll} ref={scrollRef}>
    ```