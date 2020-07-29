const amqp = require('amqplib');

async function consumer() {
  const connection = await amqp.connect('amqp://localhost:5672');
  const channel = await connection.createChannel();
  const queueName = 'helloKoalaQueue';
  await channel.assertQueue(queueName);
  await channel.consume(queueName, msg => {
    console.log('Consumer：', msg.content.toString());
    channel.ack(msg);
  });

}

consumer();