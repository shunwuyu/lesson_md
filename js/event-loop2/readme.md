[source](http://www.ruanyifeng.com/blog/2013/10/event_loop.html)
http://www.ruanyifeng.com/blog/2014/10/event-loop.html
- JavaScript程序是不会出现堵塞的，这就是为什么node.js平台可以用很少的资源，应付大流量访问的原因。 node

计算机系统的一种运行机制
JavaScript语言就采用这种机制，来解决单线程运行带来的一些问题。

运行以后的程序叫做"进程"（process）一般情况下，一个进程一次只能执行一个任务。

（1）排队。因为一个进程一次只能执行一个任务，只好等前面的任务执行完了，再执行后面的任务。

（2）新建进程。使用fork命令，为每个任务新建一个进程。

（3）新建线程。因为进程太耗费资源，所以如今的程序往往允许一个进程包含多个线程，由线程去完成任务。（进程和线程的详细解释，请看这里。）

网页就会出现"假死" 一旦遇到大量任务或者遇到一个耗时的任务，  因为JavaScript停不下来，也就无法响应用户的行为。

JavaScript从诞生起就是单线程。原因大概是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。后来就约定俗成，JavaScript为一种单线程语言。（Worker API可以实现多线程，但是JavaScript本身始终是单线程的。）

"Event Loop是一个程序结构，用于等待和发送消息和事件。（a programming construct that waits for and dispatches events or messages in a program.）"

一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"