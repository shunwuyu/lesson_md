/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1617840265874_498';

  // add your middleware config here
  

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    password: '123456',
    port: 3306,
    database: 'egg_graphql',
  };


  config.security = {
    csrf: {
      enable: false
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  config.middleware = ['graphql'];

  return {
    ...config,
    ...userConfig,
  };
};
