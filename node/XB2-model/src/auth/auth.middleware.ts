import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import * as userService from '../user/user.serverice';
import jwt from 'jsonwebtoken';
import { PUBLIC_KEY } from '../app/app.config';
import { TokenPayload } from './auth.interface';

export const currentUser = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  let user: TokenPayload = {
    // 未登录的用户
    id: null,
    name: 'anonymous',
  };
  
  try {
    // 提取 Authorization
    const authorization = request.header('Authorization');
    console.log(authorization, '_____________________--')
    // 提取 JWT 令牌
    // const token = authorization.replace('Bearer ', '');

    // if (token) {
      // 验证令牌
      const decoded = jwt.verify(authorization, PUBLIC_KEY);

      user = decoded as TokenPayload;
      console.log(user, '+++++++++++')
    // }
  } catch (error) {}


  // 在请求里添加当前用户
  request.user = user

  next();
}


export const authGuard = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('👮🏼‍♀️ 验证用户身份');

  if (request.user.id) {
    next();
  } else {
    next(new Error('UNAUTHORIZED'));
  }
}

export const validateLoginDate = async(
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log('👮‍♂️ 验证用户登录数据');
  // 准备数据
  const { name, password } = request.body;
  // console.log(name, password, '-------');
  // 验证必填数据
  if (!name) return next(new Error('NAME_IS_REQUIRED'));
  if (!password) return next(new Error('PASSWORD_IS_REQUIRED'));
  // 验证用户名
  const user = await userService.getUserByName(name, { password: true });
  console.log(user, '+++++++++++++++++');
  if (!user) return next(new Error('USER_DOES_NOT_EXIST'));
  // 验证用户密码
  // console.log(user);
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) return next(new Error('PASSWORD_DOES_NOT_MATCH'));

  // 在请求主体里添加用户
  request.body.user = user;
   // 下一步
   next();
}