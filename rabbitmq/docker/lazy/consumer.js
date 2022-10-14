const rabbitmq = require('./rabbitmq.js');

async function consumerDLX(connnection) {
  const testExchangeDLX = 'testExDLX';
  const testRoutingKeyDLX = 'testRoutingKeyDLX';
  const testQueueDLX = 'testQueueDLX';

  const ch = await connnection.createChannel();
  await ch.assertExchange(testExchangeDLX, 'direct', { durable: true });
  const queueResult = await ch.assertQueue(testQueueDLX, {
    exclusive: false,
  });
  await ch.bindQueue(queueResult.queue, testExchangeDLX, testRoutingKeyDLX);
  await ch.consume(queueResult.queue, msg => {
    console.log('consumer msg：', msg.content.toString());
}, { noAck: true });
}

rabbitmq.init().then(connection => consumerDLX(connection));