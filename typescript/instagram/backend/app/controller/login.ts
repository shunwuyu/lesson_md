import { Controller } from 'egg'

class UserController extends Controller {
  public async register () {
    const {ctx} = this;
    ctx.body = {
      mes: '2121212'  
    }
  }
}

module.exports = UserController