/*
  本模块运行react-scripts里的脚本 (Create React App)
  可以自定义webpack配置，通过在项目根目录创建"overrides-config.dev.js" 、 "overrides-config.prod.js" 文件.

  A config-overrides file should export a single function that takes a
  config and modifies it as necessary.

  module.exports = function(webpackConfig) {
    webpackConfig.module.rules[0].use[0].options.useEslintrc = true;
  };
*/
/**
 * 对于rewire，它的基本功能与require相同，都是用于导入模块
 * 只是，它会为导入的模块添加两个特殊的函数：__get__与__set__。
 * 顾名思义，这两个函数可以分别用于获取和修改模块中的变量/函数。
 * 测试的时候，当我们需要获取或者重写私有变量/函数，rewire非常有用.
 */
var rewire = require('rewire');
var proxyquire = require('proxyquire');

switch(process.argv[2]) {
  // The "start" script is run during development mode
  case 'start':
    rewireModule('react-scripts/scripts/start.js', loadCustomizer('./overrides-config.dev'));
    break;
  // The "build" script is run to produce a production bundle
  case 'build':
    rewireModule('react-scripts/scripts/build.js', loadCustomizer('./overrides-config.prod'));
    break;
  default:
    console.log('customized-build only supports "start", "build", and "test" options.');
    process.exit(-1);
}

// Attempt to load the given module and return null if it fails.
function loadCustomizer(module) {
  try {
    return require(module);
  } catch(e) {
    if(e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
  }

  // If the module doesn't exist, return a
  // noop that simply returns the config it's given.
  return config => config;
}

function rewireModule(modulePath, customizer) {
  // Load the module with `rewire`, which allows modifying the
  // script's internal variables.
  let defaults = rewire(modulePath);

  // Reach into the module, grab its global 'config' variable,
  // and pass it through the customizer function.
  // The customizer should *mutate* the config object, because
  // react-scripts imports the config as a `const` and we can't
  // modify that reference.
  /**
   * 上述代码中的config就是webpack.config.dev.js(开发时)
   * 或webpack.config.prod.js(生产打包时)中module.exports的对象
   */
  let config = defaults.__get__('config');
  customizer(config);
}
