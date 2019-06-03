# 懒加载 https://juejin.im/post/5b0c3b53f265da09253cbed0
  懒加载也叫延迟加载，指的是在长网页中延迟加载图像，是一种很好优化网页性能的方式

# 为什么要用懒加载
  能提升用户的体验
  减少无效资源的加载
  防止并发加载的资源过多会阻塞js的加载

#方法1   Element.getBoundingClientRect()


#方法2   IntersectionObserver()   https://juejin.im/post/5c9376506fb9a070fc623b2c
  Web为开发者提供了 IntersectionObserver 接口,它可以异步监听目标元素与其祖先或视窗的交叉状态，注意这个接口是异步的，它不随着目标元素的滚动同步触发，所以它并不会影响页面的滚动性能。