import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
/**
 * HASH 密码
 */
 export const hashPassword = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // 准备数据
  const { password } = request.body;

  // HASH 密码
  request.body.password = await bcrypt.hash(password, 10);
  next();
}