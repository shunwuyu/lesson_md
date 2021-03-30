import { Request, Response, NextFunction } from 'express';

export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error.message) {
    console.log('🚧', error.message);
  }

  let statusCode: number, message: string;
  /**
   * 处理异常
   */
  switch (error.message) {
    case 'UNAUTHORIZED':
      statusCode = 401;
      message = '请先登录';
      break;
    default:
      statusCode = 500;
      message = '服务暂时出了点问题 ~~ 🌴';
      break;
  }
  response.status(statusCode).send({ message });
}