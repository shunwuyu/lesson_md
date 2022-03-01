import express from 'express';
import cors from 'cors';
import { ALLOW_ORIGIN } from './app.config';
import userRouter from '../user/user.router';
import { defaultErrorHandler } from './app.middleware';

var bodyParser = require('body-parser');

// console.log(ALLOW_ORIGIN, '------')
const app = express();
/**
 * 处理 JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ALLOW_ORIGIN,
    exposedHeaders: 'X-Total-Count',
  }),
);

app.use(
  userRouter
);

/**
 * 默认异常处理器
 */
app.use(defaultErrorHandler);


export default app;