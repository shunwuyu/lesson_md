const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const server = new Hapi.Server();

server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
  ]);
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
    ...routesShops,
    ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();