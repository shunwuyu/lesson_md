import { Service } from 'egg';

export default class User extends Service {
  
  constructor(ctx: any) {
    super(ctx);
  }

  async register() {
    const { ctx } = this;
    // console.log(ctx, '+++++++++++++++==')
    // const { code, name, phone, password } = data;
    // console.log(code, name, phone, password);
  } 
}

