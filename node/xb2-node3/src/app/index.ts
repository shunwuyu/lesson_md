import express from 'express';
import cors from 'cors';
import { ALLOW_ORIGIN } from './app.config';
import postRouter from '../post/post.router';
import { defaultErrorHandler } from './app.middleware';

const app = express();

app.use(
    cors({
        origin: ALLOW_ORIGIN,
        exposedHeaders: 'X-Total-Count',
    }),
);

/**
 * 路由
 */
app.use(
    postRouter
);

/**
 * 默认异常处理器
 */
app.use(defaultErrorHandler);

export default app;