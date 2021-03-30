import { connection } from '../app/database/mysql';
export const getPostById = async (
  postId: number,
) => {
  const statement = `
    SELECT
      post.id,
      post.title,
      post.content
    FROM post
    WHERE post.id = ?
  `;
  const [data] = await connection.promise().query(statement, postId);
  // 没找到内容
  if (!data[0].id) {
    throw new Error('NOT_FOUND');
  }

  // 提供数据
  return data[0];
}