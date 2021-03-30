import { Request, Response, NextFunction } from 'express';
import * as userService from './user.serverice';

/**
 * 创建用户
 */
 export const store = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // 准备数据
  const { name, password } = request.body;
  try {
    // 该状态码表示已创建
    const data = await userService.createUser({ name, password });
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
}