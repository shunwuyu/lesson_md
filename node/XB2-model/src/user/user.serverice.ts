import { UserModel } from './user.model';
import { connection } from '../app/database/mysql';
/**
 * 创建用户
 */
export const createUser = async (user: UserModel) => {
  // 准备查询
  const statement = `
    INSERT INTO user
    SET ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, user);

  // 提供数据
  return data;

}

export const getUser = (condition: string) => {
  
  return async (param: string | number, options: GetUserOptions = {}) => {
    console.log(condition, '?????||||||||||||//////');
    // 准备选项
    const { password } = options;

    // 准备查询
    const statement = `
      SELECT 
        user.id,
        user.name,
        user.password
      FROM
        user
      WHERE 
        ${condition} = ?
    `;
    // 执行查询
    const [data] = await connection.promise().query(statement, param);
    console.log(data);
    // 提供数据
    return data[0].id ? data[0] : null;
  }
}


export const getUserByName = getUser('user.name')

/**
 * 获取用户
 */
 interface GetUserOptions {
  password?: boolean;
}

