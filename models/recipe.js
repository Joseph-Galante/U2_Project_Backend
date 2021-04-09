'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.recipe.belongsToMany(models.user, { through: 'userRecipes'});
    }
  };
  recipe.init({
    name: DataTypes.STRING,
    ing1: DataTypes.STRING,
    ing2: DataTypes.STRING,
    ing3: DataTypes.STRING,
    ing4: DataTypes.STRING,
    ing5: DataTypes.STRING,
    ing6: DataTypes.STRING,
    ing7: DataTypes.STRING,
    ing8: DataTypes.STRING,
    ing9: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};