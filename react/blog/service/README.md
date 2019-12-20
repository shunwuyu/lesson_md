- CREATE DATABASE react_blog;
  create table blog_content ( id int auto_increment, title varchar(255) not null, type int(1), introduce varchar(255), content text, primary key(id)) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
  INSERT INTO blog_content (title, type, introduce, content) VALUES ('aaa', 1, 'bbbbbb', 'ddddddddd');