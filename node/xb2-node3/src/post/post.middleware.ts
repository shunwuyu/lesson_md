import { Request, Response, NextFunction } from 'express';
/**
 * 排序方式
 */
export const sort = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    // console.log('/////')
    // 获取客户端的排序方式
    const { sort } = request.query;
    // 排序用的 SQL
    let sqlSort: string;
    switch (sort) {
        case 'earliest':
          sqlSort = 'post.id ASC';
          break;
        case 'latest':
          sqlSort = 'post.id DESC';
          break;
        case 'most_comments':
          sqlSort = 'totalComments DESC ,post.id DESC';
          break;
        default:
          sqlSort = 'post.id DESC';
          break;
    }
    request.sort = sqlSort;
    next();
}

/**
 * 过滤列表
 */
export const filter = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // console.log('???')
  // 设置默认的过滤
  request.filter = {
    name: 'default',
    sql: 'post.id IS NOT NULL',
  };
  // 下一步
  next();
}

/**
 * 内容分页
 */
export const paginate = (itemsPerPage: number) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    // 当前页码
    const { page = 1 } = request.query;

    // 每页内容数量
    const limit = itemsPerPage || 30;

    // 计算出偏移量
    const offset = limit * (parseInt(`${page}`, 10) - 1);

    // 设置请求中的分页
    request.pagination = { limit, offset };

    // 下一步
    next();
  };
};