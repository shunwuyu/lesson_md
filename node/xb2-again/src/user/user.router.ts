import express from 'express';
const router = express.Router();
import {
  validateUserData,
  hashPassword
} from './user.middleware';
import * as userController from './user.controller';
/**
 * 创建用户
 */
router.post('/users', validateUserData, hashPassword, userController.store);
export default router