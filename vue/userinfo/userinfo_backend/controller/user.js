const formidable = require("formidable")
const md5 = require('md5-node');
const UserModel = require('../models/user');
class User {
  constructor(){
    
  }
  async login(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      const {username, password} = fields;
      // console.log({username, password})
      try{
				if (!username) {
					throw new Error('用户名参数错误');
				}else if(!password){
					throw new Error('密码参数错误');
				}
			}catch(err){
        console.log('登陆参数错误', err);
        res.send({
					status: 0,
					type: 'ERROR_QUERY',
					message: err.message,
        }) 
        return
      }

      const newpassword = md5(password);
      // console.log(newpassword)
      try{
        console.log('bbb');
        const user = await UserModel.findOne({username});
        console.log(user, '???')
        if (!user) {
        
        } else {

        }
      } catch(e) {
        console.log(e);
      }
    })
  }
  
}

module.exports = new User()