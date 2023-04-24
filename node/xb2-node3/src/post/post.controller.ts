import { Request, Response, NextFunction } from 'express';
import { getPostsTotalCount, getPosts } from './post.service';
/**
 * 内容列表
 */
export const index = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    // response.send('hello world')
    try {
        // 统计内容数量
        const totalCount = await getPostsTotalCount({ filter: request.filter });
        // 设置响应头部
        response.header('X-Total-Count', totalCount);
    } catch (error) {
        next(error);
    }

    try {
        const posts = await getPosts({
            sort: request.sort,
            filter: request.filter,
            pagination: request.pagination
        });
        response.send(posts);
    } catch (error) {
        next(error);
    }
}