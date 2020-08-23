import { Controller } from 'egg'

class UserController extends Controller {
  public async userInfo() {
    const {ctx} = this
    ctx.returnBody(200, "获取成功", {
      name: 'ysw'
    })
  }
}

module.exports = UserController