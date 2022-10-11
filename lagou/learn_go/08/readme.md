- 可以有多个defer , 
  执行顺序后进先出的原则 栈

协程和通道

音乐软件， 听音乐的时候还想让它下载歌曲。 两件事 并发。 
并发 -》线程 -》 进程

一个软件 一个进程， 该软件的工作空间， 包含软件运行所需的所有资源。
内存空间、文件句柄， 还有线程

线程是进程的执行空间， 一个进程可以有多个线程， 被操作系统调用执行。 比如下载一个文件， 发送一个消息 多线程被操作系统同时调度执行的情况， 就是多线程的并发。 
主线程。 
Go 语言没有线程的概念， 只有协程。 goroutine 更加轻量， 一个程序可以子
随意启动成千上万个goroutine 被go runtime 所调度， 由自己调度， 决定同时执行多少个goroutne, 什么时候执行哪几个。 
go 关键字
go function 
go 关键字启动的goroutine 并不阻塞main goroutine 的执行，
Sleep 让main goroutine 等一秒

## Channel
  如果启动了多个goroutine, 它们之间该如何通信呢？ Go语言提供的channel要解决的问题
  channel 类型   <- chan
  ```GO
    ch:=make(chan string)
  ```
如果没有值， 则阻塞到ch 中有值可以接收为止。 
管道

## 无缓存channel, 
  不能存储任何数据， 数据不会做任何停留， 发送和接收是同时进行的。 同步channel.

## 有缓存channel 
  可阻塞的队列， 内部的元素先进先出 第二个参数指定channel
  容量的大小， 创建一个有缓冲channel, 

## 关闭channel 
```JS
  close(cacheCh)
```
panic 