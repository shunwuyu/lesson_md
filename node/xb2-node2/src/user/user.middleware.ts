import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

export const validateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("‍(创建用户时)验证用户数据");
  // 准备数据
  // console.log(req.body, '--------------------------');
  const { name, password } = req.body;
  console.log(name, password, '+++++')
  // 验证(创建用户时)必填数据
  if (!name) return next(new Error("NAME_IS_REQUIRED"));
  if (!password) return next(new Error("PASSWORD_IS_REQUIRED"));
  //验证(创建用户时)用户名是否存在
  // const user = await userService.getUserByName(name);
  // if (user) return next(new Error("USER_ALREADY_EXIST"));
  // 下一步
  next();
}

//Hash密码
export const hashPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //准备数据
  const { password } = req.body;
  //Hash密码
  req.body.password = await bcrypt.hash(password, 10);
  // 下一步
  next();
};