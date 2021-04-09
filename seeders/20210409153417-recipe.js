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
   await queryInterface.bulkInsert('recipes', [
      {
        name: 'Bowl',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: 'wooden plank',
        ing5: '',
        ing6: 'wooden plank',
        ing7: '',
        ing8: 'wooden plank',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mushroom Stew',
        ing1: '',
        ing2: 'red mushroom',
        ing3: '',
        ing4: '',
        ing5: 'brown mushroom',
        ing6: '',
        ing7: '',
        ing8: 'bowl',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bread',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: '',
        ing5: '',
        ing6: '',
        ing7: 'wheat',
        ing8: 'wheat',
        ing9: 'wheat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Golden Apple',
        ing1: 'gold nugget',
        ing2: 'gold nugget',
        ing3: 'gold nugget',
        ing4: 'gold nugget',
        ing5: 'apple',
        ing6: 'gold nugget',
        ing7: 'gold nugget',
        ing8: 'gold nugget',
        ing9: 'gold nugget',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sugar',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: '',
        ing5: 'sugar cane',
        ing6: '',
        ing7: '',
        ing8: '',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cake',
        ing1: 'milk bucket',
        ing2: 'milk bucket',
        ing3: 'milk bucket',
        ing4: 'sugar',
        ing5: 'egg',
        ing6: 'sugar',
        ing7: 'wheat',
        ing8: 'wheat',
        ing9: 'wheat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cookies',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: '',
        ing5: '',
        ing6: '',
        ing7: 'wheat',
        ing8: 'cocoa beans',
        ing9: 'wheat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Melon Block',
        ing1: 'melon slice',
        ing2: 'melon slice',
        ing3: 'melon slice',
        ing4: 'melon slice',
        ing5: 'melon slice',
        ing6: 'melon slice',
        ing7: 'melon slice',
        ing8: 'melon slice',
        ing9: 'melon slice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Melon Seeds',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: '',
        ing5: 'melon slice',
        ing6: '',
        ing7: '',
        ing8: '',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pumpkin Seeds',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: '',
        ing5: 'pumpkin',
        ing6: '',
        ing7: '',
        ing8: '',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Golden Carrot',
        ing1: 'gold nugget',
        ing2: 'gold nugget',
        ing3: 'gold nugget',
        ing4: 'gold nugget',
        ing5: 'carrot',
        ing6: 'gold nugget',
        ing7: 'gold nugget',
        ing8: 'gold nugget',
        ing9: 'gold nugget',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pumpkin Pie',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: 'pumpkin',
        ing5: 'sugar',
        ing6: '',
        ing7: 'egg',
        ing8: '',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rabbit Stew',
        ing1: '',
        ing2: 'cooked rabbit',
        ing3: '',
        ing4: 'carrot',
        ing5: 'baked potato',
        ing6: 'mushroom',
        ing7: '',
        ing8: '',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suspicious Stew',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: 'red mushroom',
        ing5: 'brown mushroom',
        ing6: '',
        ing7: 'bowl',
        ing8: 'flower',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Honey Bottle',
        ing1: '',
        ing2: '',
        ing3: '',
        ing4: 'glass bottle',
        ing5: 'glass bottle',
        ing6: 'honey block',
        ing7: 'glass bottle',
        ing8: 'glass bottle',
        ing9: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('recipes', null, {});
  }
};
