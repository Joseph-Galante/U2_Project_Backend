'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('ingredients', [
       {
        name: 'wooden plank',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'bowl',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'red mushroom',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'brown mushroom',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'wheat',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'apple',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'gold nugget',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'sugar cane',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'milk bucket',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'sugar',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'egg',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'cocoa beans',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'melon slice',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'pumpkin',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'carrot',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'cooked rabbit',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'baked potato',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'flower',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'glass bottle',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'honey block',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'gold ingot',
        createdAt: new Date(),
        updatedAt: new Date()
       }
     ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('ingredients', null, {});
  }
};
