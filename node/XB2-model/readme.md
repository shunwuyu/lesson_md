- 以数据库为主线驱动

- controller 
- bodyparse
- 路由 

 CREATE TABLE `post` (
    `id`int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `content` longtext,
     PRIMARY KEY(`id`)
 )ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;


cd config
openssl
genrsa -out private.key 4096
rsa -in private.key -pubout -out public.key
exit