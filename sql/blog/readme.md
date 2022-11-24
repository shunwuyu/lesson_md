CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255)  NOT NULL,
  `password` varchar(255)  NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`) 
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

InnoDB 表类型之一   B+Tree 索引  哈希索引  全文索引

INSERT INTO `user` (`id`, `name`, `password`) VALUES
('1', '王皓', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('2', '小雪', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('3', '李白', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('4', '杜甫', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('5', '白居易', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('6', '张三', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq');


CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255)  NOT NULL,
  `content` longtext ,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
INSERT INTO `post` (`id`, `title`, `content`, `userId`) VALUES
('1', '黄鹤楼送孟浩然之广陵', '故人西辞黄鹤楼，烟花三月下扬州', '3'),
('2', '春夜喜雨', '好雨知时节，当春乃发生', '4'),
('3', '琵琶行', '浔阳江头夜送客，枫叶荻花秋瑟瑟', '5'),
('4', '静夜思', '床前明月光，疑是地上霜', '3'),
('5', '望岳', '会当凌绝顶，一览众山小', '4'),
('6', '浪淘沙', '白浪茫茫与海连，平沙浩浩四无边', '5'),
('7', '将进酒', '君不见黄河之水天上来，奔流到海不复回', '3'),
('8', '天末怀李白', '凉风起天末，君子意如何', '4'),
('9', '花非花', '花非花，雾非雾，夜半来，天明去', '5'),
('10', '望庐山瀑布', '日照香炉生紫烟，遥看瀑布挂前川', '3'),
('11', '绝句二首', '迟日江山丽，春风花草香', '4'),
('12', '秋思', '夕照红于烧，晴空碧胜蓝', '5'),
('13', '早发白帝城', '朝辞白帝彩云间，千里江陵一日还', '3'),
('14', '龙门镇', '细泉兼轻冰，沮洳栈道湿', '4'),
('15', '采莲曲', '菱叶萦波荷飐风，荷花深处小船通', '5'),
('16', '独坐敬亭山', '众鸟高飞尽，孤云独去闲', '3'),
('17', '三绝句', '楸树馨香倚钓矶，斩新花蕊未应飞', '4'),
('18', '江南春', '青门柳枝软无力，东风吹作黄金色', '5'),
('19', '白云泉', '天平山上白云泉，云自无心水自闲', '5'),
('20', '叶子的肖像', '叶子的肖像，每张都不一样', '1'),
('21', '月下独酌', '花间一壶酒，独酌无相亲', '3'),
('22', '叶子的肖像', '叶子的肖像，每张都不一样', '1'),
('23', '登楼', '花近高楼伤客心，万方多难此登临', '4'),
('24', '大明湖的荷花', '大明湖里没青蛙，大明湖里有荷花', '1'),
('25', '关山月', '明月出天山，苍茫云海间', '3');
添加约束  关系型


CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` longtext ,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `parentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  KEY `userId` (`userId`),
  KEY `parentId` (`parentId`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`parentId`) REFERENCES `comment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

INSERT INTO `comment` (`id`, `content`, `postId`, `userId`, `parentId`) VALUES
('1', '好一副美丽的春夜雨景~~', '2', '3', NULL),
('2', '同是天涯沦落人，相逢何必曾相识', '3', '3', NULL),
('3', '旅途愉快 😋', '5', '3', NULL),
('4', '没事出来溜达溜达 ：）', '5', '4', '3'),
('5', '多日不见，甚是想念', '1', '4', NULL),
('6', '找机会一块儿出来坐坐', '1', '3', '5'),
('7', '仿佛听到了雨声', '2', '5', NULL),
('8', '随风潜入夜，润物细无声', '2', '4', NULL),
('9', '想家了', '4', '4', NULL),
('10', '嗯', '4', '3', '9'),
('11', '潮汐涨落，能量世大 ~~~', '6', '3', NULL),
('12', '笔落惊风雨，诗成泣鬼神', '7', '4', NULL),
('13', '世间万物，变幻无常', '9', '3', NULL),
('14', '阳光灿烂，鸟语花香', '11', '3', NULL),
('15', '美丽的夕阳，总能勾起按下快门的冲动~~', '12', '3', NULL),
('16', '冬天来了', '8', '5', NULL),
('17', '壮观', '10', '5', NULL),
('18', '人逢喜事精神爽', '13', '4', NULL),
('19', '不辞辛苦行，迫此短景急', '14', '4', NULL),
('20', '万里桥西一草堂，百花潭水即沧浪', '15', '4', NULL),
('21', '浮云连海岳，平野入青徐', '16', '4', NULL),
('22', '柯条未尝损，根蕟不曾移', '17', '5', NULL),
('23', '枝枝总到地，叶叶自开春', '18', '4', NULL),
('24', '石间见海眼，天畔萦水府', '19', '4', NULL),
('25', '来如春梦不多时，去似朝云无觅处', '20', '5', NULL),
('26', '天上秋期近，人间月影清', '21', '4', NULL),
('27', '百草竞春华，丽春应最胜', '22', '4', NULL),
('28', '海天东望夕茫茫，山势川形阔复长', '23', '5', NULL),
('29', '沈竿续蔓深莫测，菱叶荷花静如拭', '24', '4', NULL),
('30', '写的好 ~', '25', '5', NULL),
('31', '字字珠玑 ~', '25', '4', NULL),
('32', '谢谢 😄', '25', '3', '31'),
('33', '感谢捧场 ~', '25', '3', '30');

select post.id, post.title, post.content, user.id as userId, user.name as userName from post LEFT JOIN user ON user.id=post.userId;

