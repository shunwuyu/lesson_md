'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true},
      user_id: { type: STRING(255), allowNull: false },
      username: { type: STRING(255), allowNull: false },
      email: { type: STRING(255), allowNull: false },
      password: { type: STRING(255), allowNull: false },
      avatar_url: STRING(256),
      mobile: STRING(32),
      prefix: STRING(32),
      abstract: { type: STRING(255), allowNull: true },
      sex: { type: INTEGER, defaultValue: 0 },
      created_at: DATE,
      updated_at: DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};