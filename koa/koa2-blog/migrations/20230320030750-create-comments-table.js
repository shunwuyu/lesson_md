'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('comments', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '文章作者'
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: '评论内容'
      },
      moment: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '注册时间'
      },
      postid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '用户id'
      },
      avatar: {
        type: Sequelize.STRING,
        comment: '用户头像'
      }
     });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
