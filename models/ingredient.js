'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ingredient.belongsToMany(models.user, { through: 'userIngredients'});
    }
  };
  ingredient.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ingredient',
  });
  return ingredient;
};