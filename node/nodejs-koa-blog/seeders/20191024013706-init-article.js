'use strict';
const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'article',
    [
      { id: 1,
         title: '今夜一起学习Node.js吗？?32324', 
         author: '梁凤波',
         content: '原型对象都包含一个指向构造函数的指针，而实例对象都包含一个指向原型对象的内部指针',
         cover: 'http://cdn.boblog.com/FuyyakhdqFMQa8tli6lw7WH-rM0',
         category_id: '1',
          ...timestamps 
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    // 删除 shop 表 id 为 1，2，3，4 的记录
    return queryInterface.bulkDelete('shops', { id: { [Op.in]: [1, 2, 3, 4] } }, {});
  },
};
