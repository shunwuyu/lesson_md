import express from 'express';
import postRouter from '../post/post.router';
import { currentUser } from '../auth/auth.middleware';
import { defaultErrorHandler } from './app.middleware';
import authRouter from '../auth/auth.router';
import userRouter from '../user/user.router';
const app = express();

/**
 * 当前用户
 */
 app.use(currentUser);

var bodyParser = require('body-parser');
/**
 * 处理 JSON
 */

app.use(bodyParser.json()); 
//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

app.use(express.json());



/**
 * 路由
 */
app.use(
  postRouter,
  authRouter,
  userRouter
)

/**
 * 默认异常处理器
 */
 app.use(defaultErrorHandler);

export default app;