const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');

const server = new Hapi.Server();
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.start();
}

init();