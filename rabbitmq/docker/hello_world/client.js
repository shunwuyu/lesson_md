const amqp = require('amqplib');
const when = require('when');

amqp
  .connect('amqp://localhost')
  .then((conn) => {
    return when(conn.createChannel().then(ch => {
      const q = 'me';
      const msg = 'Hello World';
      return ch.assertQueue(q, {durable: false})
      .then((_qok) => {
        ch.sendToQueue(q, Buffer.from(msg));
        console.log(" [x] Sent '%s'",msg);
        return ch.close()
      })
    })).ensure( () => {
      conn.close();
    })
  }).then(null,console.warn);