[source](https://www.hacksplaining.com/exercises/sql-injection)

- SQL INJECTION
  vulnerable    二进制命令 对你的数据库
  SQL注入，就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令
  SELECT *
  FROM users
 WHERE email = 'user@email.com'
   AND pass  = '' or 1=1--' LIMIT 1   永远可以

   --