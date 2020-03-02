class Admin {
  constructor(){
  
  }

  async login(req, res, next){
    res.send({
      status: 0,
      type: 'LOGIN_ADMIN_FAILED',
      message: '登录管理员失败',
    })
  }
}

module.exports =  new Admin()