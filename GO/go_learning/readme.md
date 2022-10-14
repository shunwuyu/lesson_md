- 没有异常机制
- error 类型实现了error接口
- 可以通过errors.New 

panic 不可恢复的错误
panic 会执行defer 

os.Exit 不会输出

recover 成为恶魔
僵尸服务进程
重启是恢复不确定性的最好的方法

基本的可复用包

package 基本可利用模块
向外导出
以大写字母开始的申明

第三方的package 

最重要的协程机制 Groutine
更轻量级的线程
Java Thread Stack 1M
Groutine Stack  2K

KSE
1:1
M:N

锁

CSP  Communicating  Sequential process 
70  通道 