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

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '192.168.31.129',
    port: 3306,
    password: '1234567890',
    database: 'ysw_blog',
    username: 'root'
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575764132557_928';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
