import express from "express";
import userRouter from "../user/user.router";
import { defaultErrorHandler } from "./app.middleware";

const app = express();
//处理JSON
app.use(express.json());
//路由
app.use(
  userRouter
)
//异常处理器
app.use(defaultErrorHandler);
export default app;