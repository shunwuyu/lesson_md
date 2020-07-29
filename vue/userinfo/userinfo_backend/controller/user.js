const formidable = require("formidable")
const md5 = require('md5-node');
const UserModel = require('../models/user');
class User {
  constructor(){
    
  }
  async login(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      console.log(fields);
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
        // console.log(user, '???')
        if (!user) {
          const newUser = {username, password: newpassword};
          const createUser = new UserModel(newUser);
          const userinfo = await createUser.save();
          res.send(userinfo);
        } else if (user.password.toString() !== newpassword.toString()){
          console.log('用户登录密码错误')
					res.send({
						status: 0,
						type: 'ERROR_PASSWORD',
						message: '密码错误',
					})
					return 
        } else {
          // console.log(user);
          // req.session.user_id = user._id;
          req.session.user_id = 'xxxx';
          // res.cookie('uid', user._id)
          res.send(user) 
          // const userinfo = await UserModel.findOne({user_id: user.user_id}, '-_id');
        }
      } catch(e) {
        console.log(e);
      }
    })
  }
  
}

module.exports = new User()