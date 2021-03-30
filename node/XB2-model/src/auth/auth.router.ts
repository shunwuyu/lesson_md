import express from 'express';
import * as authController from './auth.cotroller';
import { validateLoginDate } from './auth.middleware';
const router = express.Router();
/**
 * 用户登录
 */
 router.post('/login', validateLoginDate, authController.login);


/**
 * 导出路由
 */
 export default router;