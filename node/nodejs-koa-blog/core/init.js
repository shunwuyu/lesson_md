const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters()
  }
  static initLoadRouters() {
    console.log(process.cwd()); //项目路径
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    })

    function whenLoadModule(obj) {
      console.log(obj.routes);
      if (obj instanceof Router) {
          InitManager.app.use(obj.routes())
      }
    }
  }
}

module.exports = InitManager