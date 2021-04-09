//=============== SETUP ===============//

// grab models
const models = require('../models');

// json web token - encrypt data
const jwt = require('jsonwebtoken');

// axios
const { default: axios } = require('axios');
const user = require('../models/user');

// controller obj
const userController = {};


//=============== METHODS ===============//

// create user
userController.create = async (req, res) =>
{
    try {
        // create user
        const user = await models.user.create(
        {
            
        })
    } catch (error) {
        
    }
}