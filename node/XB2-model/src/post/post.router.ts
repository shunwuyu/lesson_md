import express from 'express';
import * as postController from './post.controller';
import { authGuard } from '../auth/auth.middleware';

const router = express.Router();


/**
 * 创建内容
 */
router.post('/posts', authGuard, postController.store);

export default router
