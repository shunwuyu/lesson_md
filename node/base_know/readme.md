[source](https://mp.weixin.qq.com/s/N9JPqe5WDhuB0cfxcS_reA)

- process?  进程
- node 1.js
- console.log(process, '----');
  console.log(process.argv, '----');
  process.argv.forEach(item => {
    console.log(item);
  });
- argv

- cross-env NODE_ENV=production node  2.js
- setTimeout   process.nextTick  放到 node 事件循环的 下一个tick 里  性能高 微任务
- global 对象

- 安全模块


- create database blog;
  use blog;
  
  create table `user`(
     `id` INT UNSIGNED AUTO_INCREMENT,
     `username` varchar(255),
     `password` varchar(255),
     PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  INSERT INTO user (username, password) VALUES ("alice", "123456");
