// AMQP，即Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准高级消息队列协议
var amqp = require('amqplib');
amqp
  .connect('amqp://127.0.0.1')
  .then((conn) => {
    // console.log(conn);
    //process 全局变量， 它提供当前Node.js 进程的信息并对其进行控制。 ctrl+c 退出
    process.on('SIGINT', function () {
      console.log('Exit now!');
      process.exit();
    });
    //连接成功后创建通道
    return conn.createChannel()
      .then((ch) => {
        //通道创建成功后我们通过通道对象的assertQueue方法来监听hello队列， 并设置durable持久化为false. 这里消息将会保存在内存 
        const ok = ch
          //不要持久存
          .assertQueue('me', { durable: false })
          .then((_qok) => {
            //noAck 不做出回应
            return ch.consume('me', (msg) => {
              console.log("[x] Received '%s'", msg.content.toString());
            }, {noAck: true})
          });
          return ok.then((_consumeOk) => {
            console.log('[*] Waiting for message. To exit press CRTL+C');
          })
      })
  }).then(null, console.warn)