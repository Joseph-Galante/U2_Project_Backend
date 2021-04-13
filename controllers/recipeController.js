//=============== SETUP ===============//

// grab models
const models = require('../models');

// controller obj
const recipeController = {};


//=============== METHODS ===============//

// get all recipes
recipeController.getAll = async (req, res) =>
{
    try {
        // grab all recipes
        const recipes = await models.recipe.findAll();
        // check if recipes exist
        if (recipes)
        {
            // return recipes
            res.json({ message: 'recipes found', recipes });
        }
        // no recipes
        else
        {
            res.status(404).json({ error: 'no recipes found'})
        }
    } catch (error) {
        res.status(400).json({ error: 'could not get recipes' });
    }
}


module.exports = recipeController;