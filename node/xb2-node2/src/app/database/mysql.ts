import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'blog',
});