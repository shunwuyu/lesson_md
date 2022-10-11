const amqp = require('amqplib');
async function product(params) {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    const routingKey = 'helloKoalaQueue';
    const msg = 'hello koala';
    for (let i = 0; i < 10000; i++) {
        await channel.publish('', routingKey, Buffer.from(`${msg} 第${i}条消息`));
    }
    await channel.close();
    await connection.close();
}
product();