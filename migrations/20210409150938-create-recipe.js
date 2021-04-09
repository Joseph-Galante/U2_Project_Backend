'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ing1: {
        type: Sequelize.STRING
      },
      ing2: {
        type: Sequelize.STRING
      },
      ing3: {
        type: Sequelize.STRING
      },
      ing4: {
        type: Sequelize.STRING
      },
      ing5: {
        type: Sequelize.STRING
      },
      ing6: {
        type: Sequelize.STRING
      },
      ing7: {
        type: Sequelize.STRING
      },
      ing8: {
        type: Sequelize.STRING
      },
      ing9: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recipes');
  }
};