import express from "express";
import * as userController from "./user.controller";
const router = express.Router();
import { validateUserData, hashPassword } from "./user.middleware";
//创建用户
// router.post("/users", (req, res) => {
//     console.log(req.body, '///--------------');
//     res.send('ddd')
// });
router.post("/users", validateUserData, hashPassword, userController.store);

//导出路由
export default router;