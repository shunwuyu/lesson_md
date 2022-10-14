[source](https://juejin.im/post/5dd8cd7ae51d4523501f7331)
[hello](https://www.jianshu.com/p/a4d92d0d7e19)
- 生产者  生产消息的
- 消费者  接收消息的
- 通道channel  建立连接后， 会获取一个channel通道
- exchange 交换机， 消息需要先发送到exchange交换机， 也可以说是第一步存储消息的地方
- 消息队列：到达消费者前一刻存储消息的地方， exchange交换机会把消息传递到此。
- ack回执 收到消息后确认消息已经消费的应答


- amqblib