## 数据库连接
数据库连接是一种昂贵的资源。
频繁的建立、关闭连接，会极大的减低系统的性能，
需要连接池：一定数量的数据库连接 对外暴露出去方法
1. 统一的连接管理
2. 资源重用

## sql
```sql
create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(100) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
);
```