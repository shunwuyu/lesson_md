const Controller = require('egg').Controller;

// 通过定义 Controller 类的方式来编写代码，所有的 Controller 文件都必须放在 app/controller 目录下。
class HomeController extends Controller {
    async index () {
        this.ctx.body = 'Hello World!'; // 设置响应内容。
    }
}

module.exports = HomeController;