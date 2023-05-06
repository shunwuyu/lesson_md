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
    await queryInterface.createTable(
      'posts', 
      { 
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
        title: {
          type: Sequelize.TEXT,
          allowNull: false,
          comment: '文章作者'
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
          comment: '文章内容'
        },
        md: {
          type: Sequelize.TEXT,
          allowNull: false,
          comment: 'markdown'
        },
        uid: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: '用户id'
        },
        moment: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: '注册时间'
        },
        comments: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '0',
          comment: '文章评论数'
        },
        pv: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '0',
          comment: '浏览量'
        },
        avatar: {
          type: Sequelize.STRING,
          comment: '用户头像'
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('posts');
  }
};
