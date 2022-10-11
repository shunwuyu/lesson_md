import { Request, Response, NextFunction } from "express";
//异常处理器
export const defaultErrorHandler = (
  e: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (e.message) {
    console.log(`有异常，位置是在：${e.message}`);
  }

  let statusCode: number, message: string;
  //处理异常
  switch (e.message) {
    case "NAME_IS_REQUIRED":
      statusCode = 400; // 错误请求 来自用户
      message = "请提供用户名"; 
      console.log("缺少用户名");
      break;
    default:
      statusCode = 500;
      message = "服务暂时出了点问题 ~~ ";
      break;
  }

  res.status(statusCode).send({ message });
}