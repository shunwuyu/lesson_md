[source](https://juejin.cn/post/6844903728537927694#heading-1)

由data.json开始

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT '1',
  `intro` varchar(255) DEFAULT NULL,
  `stature` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;

INSERT INTO `user` VALUES ('1', 'xiaoming', '1', '5555555555', '111'),