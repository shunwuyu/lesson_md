import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590987711854_821';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.github = {
    // 固定的
    login_url: 'https://github.com/login/oauth/authorize',
    // github Client ID
    client_id: 'e713ba0b111bf746f30f',
    // github Client Secret
    client_secret: '766438c1b27e387a3625373bf0e4d90d7d2204bd',
    // 此参数表示只获取用户信息
    scope: [ 'user' ],
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
