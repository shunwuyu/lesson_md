const rabbitmq = require('./rabbitmq');

async function producerDLX(connection) {
  const testExchange = 'testEx';
  const testQueue = 'textQu';
  const testExchangeDLX = 'testExDLX';
  const testRoutingKeyDLX = 'testRoutingKeyDLX';

  const ch = await connection.createChannel();
  await ch.assertExchange(testExchange, 'direct', { durable: true })
  const queueResult = await ch.assertQueue(testQueue, {
    exclusive: false,
    deadLetterExchange: testExchangeDLX,
    deadLetterRoutingKey: testRoutingKeyDLX,
  });
  await ch.bindQueue(queueResult.queue, testExchange);
  const msg = 'hello world!';
  console.log('producer msg:', msg);
  await ch.sendToQueue(queueResult.queue, Buffer.from(msg),{
    expiration: '30000'
  });
  ch.close();
}

rabbitmq.init().then(connection => producerDLX(connection));