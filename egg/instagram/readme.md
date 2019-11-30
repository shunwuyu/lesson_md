- npm init egg --type=simple
- localhost:7001
- login/register router
  namespace  config 
  npm i egg-router-plus --save
  exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus'
  } 
  csrf   config 配置
- service user.js
- uuid
- sequelize-cli
  .sequelizerc
  ./node_modules/.bin/sequelize-cli init
  ./node_modules/.bin/sequelize-cli db:create
  ./node_modules/.bin/sequelize-cli db:migrate
- model 安装配置  
  egg-sequelize
  exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
  }
  config  
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '1234567890',
    database: 'instagram'
  }
