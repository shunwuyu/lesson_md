import express from 'express';
import postRouter from '../post/post.router';

const app = express();

app.use(
  postRouter
)

export default app;