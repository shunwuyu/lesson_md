'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'goods',
      [
        {
          id: 1, name: '商品1-1', shop_id: 1, thumb_url: '1.png', ...timestamps,
        },
        {
          id: 2, name: '商品1-2', shop_id: 1, thumb_url: '2.png', ...timestamps,
        },
        {
          id: 3, name: '商品1-3', shop_id: 1, thumb_url: '3.png', ...timestamps,
        },
        {
          id: 4, name: '商品2-1', shop_id: 2, thumb_url: '4.png', ...timestamps,
        },
      ],
      {},
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     const { Op } = Sequelize;
     // 删除 shop 表 id 为 1，2，3，4 的记录
     return queryInterface.bulkDelete('goods', { id: { [Op.in]: [1, 2, 3, 4] } }, {});
  }
};
