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
  
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '1234567890',
    database: 'instagram'
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574988688695_5269';

  // add your middleware config here
  config.middleware = [];

  config.security = { csrf: { enable: false } }

  config.password_secret = 'ps1234secr';
  config.auth_cookie_name = 'token';
  config.jwtSecret = 'shawzhou';
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
