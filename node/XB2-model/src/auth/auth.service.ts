import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '../app/app.config';
// const secret = '113Bmongojsdalkfnxcvmas'
/**
 * 签发令牌
 */
 interface SignTokenOptions {
  payload?: any;
}

export const signToken = (options: SignTokenOptions) => {
  // 准备选项
  
  const { payload } = options;
  // console.log(PRIVATE_KEY, payload, '????')
  // 签发 JWT
  
  var token = jwt.sign(payload, PRIVATE_KEY , {
    //Token有效时间 单位s
    expiresIn:60 * 60 * 10
  });
  // 提供 JWT
  console.log(token, '----------------------');
  return token
  
};