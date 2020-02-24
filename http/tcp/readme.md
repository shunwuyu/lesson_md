[source](https://juejin.im/post/5e527c58e51d4526c654bf41)
[source](https://baike.baidu.com/item/UDP/571511?fromtitle=UDP%E5%8D%8F%E8%AE%AE&fromid=421768&fr=aladdin)
[source](https://blog.csdn.net/baidu_38432732/article/details/81303720)
1. TCP 和 UDP 的区别
  - TCP是一个面向连接的、可靠的、基于字节流的传输层协议。
    应用层->表示层(解码和编码)->会话层(session)->传输层(TCP,UDP)->网络层(IP,IP是在TCP/IP协议族中网络层的主要协议,任务仅仅是根据源主机和目的主机的地址来传送数据)->数据链路层(mac)->物理层
    1. 建立连接 三次握手   UDP没有链接过程
    2. 保证连接的可靠 有状态，另一个是可控制
      TCP 会精准记录哪些数据发送了，哪些数据被对方接收了，哪些没有被接收到，而且保证数据包按序到达，不允许半点差错。这是有状态。可控制。
    3. 面向字节流
       IP 层的特性
  - UDP 一个面向无连接的传输层协议
    UDP 是User Datagram Protocol
    是OSI（Open System Interconnection
    网络视频会议 UDP  当强调传输性能而不是传输的完整性时(应用层负责)
    UDP报文没有可靠性保证、顺序保证和流量控制字段等，可靠性较差。但是正因为UDP协议的控制选项较少，在数据传输过程中延迟小、数据传输效率高，适合对可靠性要求不高的应用程序，或者可以保障可靠性的应用程序

同步序列编号 SYN ACK 响应