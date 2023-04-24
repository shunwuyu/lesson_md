import { connection } from '../app/database/mysql';
import { sqlFragment } from './post.provider';

export interface GetPostsOptionsFilter {
    name: string;
    sql?: string;
    param?: string;
}

export interface GetPostsOptionsPagination {
    limit: number;
    offset: number;
}

interface GetPostsOptions {
    sort?: string;
    filter?: GetPostsOptionsFilter;
    pagination?: GetPostsOptionsPagination;
}

/**
 * 统计内容数量
 */
export const getPostsTotalCount = async (options: GetPostsOptions) => {
    const { filter } = options;

  // SQL 参数
  let params = [filter.param];

  // 准备查询
  const statement = `
    SELECT
      COUNT(DISTINCT post.id) AS total
    FROM post
    WHERE ${filter.sql}
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, params);
  console.log(data)
  // 提供结果
  return data[0].total;
}

export const getPosts = async (options: GetPostsOptions) => {
    const {
      sort,
      filter,
      pagination: { limit, offset }
    } = options;
  
    // SQL 参数
    let params: Array<any> = [limit, offset];
  
    // 设置 SQL 参数
    if (filter.param) {
      params = [filter.param, ...params];
    }

  
    const statement = `
      SELECT
        post.id,
        post.title,
        post.content,
        ${sqlFragment.totalComments}
      FROM post
      WHERE ${filter.sql}
      GROUP BY post.id
      ORDER BY ${sort}
      LIMIT ?
      OFFSET ?
    `;
  
    const [data] = await connection.promise().query(statement, params);
    
    return data;
  };
  