import dotenv from 'dotenv';

dotenv.config();

export const { APP_PORT } = process.env;

/**
 * 数据仓库配置
 */
 export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;
/**
 * CORS
 */
export const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN;