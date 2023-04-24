import express from 'express';
import * as postController from './post.controller';
import { sort, filter, paginate } from './post.middleware';
import { POSTS_PER_PAGE } from '../app/app.config';

const router = express.Router();

/**
 * 内容列表
 */
router.get(
    '/posts',
    sort,
    filter,
    paginate(POSTS_PER_PAGE),
    postController.index,
);




export default router;