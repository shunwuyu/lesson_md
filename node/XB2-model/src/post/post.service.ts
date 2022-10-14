import { connection } from '../app/database/mysql';

/**
 * 创建内容
 */
export const createPost = async (post) => {
  // 准备查询
  const statement = `
    INSERT INTO post
    SET ?
  `;
  console.log(statement, '++++++')
  // 执行查询
  const [data] = await connection.promise().query(statement, post);
  
  // 提供数据
  return data;
}