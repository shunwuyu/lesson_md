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
      'users', 
      { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: '用户名'
        },
        pass: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: '密码'
        },
        avator: {
          type: Sequelize.STRING,
          comment: '头像'
        },
        moment: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: '注册时间'
        },
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
    await queryInterface.dropTable('users');
  }
};
