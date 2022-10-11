exports.keys = '1234567890';

exports.mysql = {
  client: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234567890',
    database: 'information_schema'
  },
  app: true,
  agent: false
}

exports.mysqlClient = {
  config: config => {
  }
}

