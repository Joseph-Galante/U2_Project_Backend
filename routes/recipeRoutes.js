// grab controller
const recipeController = require('../controllers/recipeController');

// express
const express = require('express');
const recipeRoutes = express.Router();

// routes
recipeRoutes.get('/', recipeController.getAll);

module.exports = recipeRoutes;