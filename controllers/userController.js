//=============== SETUP ===============//

// grab models
const models = require('../models');

// data encryption
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// controller obj
const userController = {};


//=============== HELPER FUNCTIONS ===============//

// authorize user before every request - called before methods section
userController.authorizeUser = async (req, res, next) =>
{
    try {
        // check if request requires authorization
        if (req.headers.authorization)
        {
            // decrypt user id
            const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
            // grab user
            const user = await models.user.findOne({ where: { id: decryptedId.userId}});
            // allow other requests access user
            req.user = user;
        }
        // no auth headers in request - signup/login requests
        else
        {
            req.user = null;
        }

        next();
    } catch (error) {
        // status 400 - bad request
        res.status(400).json({ message: 'user authorization error', error: error.message })
    }
}


//=============== METHODS ===============//

// signup
userController.create = async (req, res) =>
{
    try {
        // hash password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // create user
        const user = await models.user.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        // encrypt id
        const encryptedId = jwt.sign({ userId: user.id}, process.env.JWT_SECRET);
        console.log(encryptedId)
        // return encrypted user id
        res.json({ message: 'signup successfull', userId: encryptedId })
    } catch (error) {
        // check if error is from unqiue email validation
        if (error.message === 'Validation error')
        {
            res.json({ error: 'email already taken'});
        }
        // unknown error
        else
        {
            res.json({ error: error.message });
        }
    }
}

// login
userController.login = async (req, res) =>
{
    try {
        // grab user by email
        const user = await models.user.findOne({ where: { email: req.body.email}});
        // check if passwords match
        if (bcrypt.compareSync(req.body.password, user.password))
        {
            // encrypt id
            const encryptedId = jwt.sign({ userId: user.id}, process.env.JWT_SECRET);
            // return encrypted user id
            res.json({ message: 'login successfull', userId: encryptedId })
        }
        // wrong password
        else
        {
            // status 401 - unauthorized
            res.status(401).json({ error: 'incorrect password' })
        }
    } catch (error) {
        // status 400 - bad request
        res.status(400).json({ message: 'login failed', error: error.message });
    }
}

// get profile
userController.profile = async (req, res) =>
{
    try {
        // grab user
        const user = req.user;
        // check if user exists
        if (user)
        {
            // return user
            res.json({ message: 'user profile found', user })
        }
        // no user
        else
        {
            // status 404 - could not be found
            res.status(404).json({ error: 'no profile found'});
        }
    } catch (error) {
        // status 400 - bad request
        res.status(400).json({ error: 'failed to  load profile'});
    }
}

// update profile
userController.update = async (req, res) =>
{
    try {
        // grab user
        const user = req.user;
        // check if user exists
        if (user)
        {
            // update user
            user.update(req.body);
            // return user
            res.json({ message: 'user profile updated', user })
        }
        // no user
        else
        {
            // status 404 - could not be found
            res.status(404).json({ error: 'no profile found'});
        }
    } catch (error) {
        // status 400 - bad request
        res.status(400).json({ error: 'failed to  update profile'});
    }
}

module.exports = userController;