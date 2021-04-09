//=============== SETUP ===============//

// grab models
const models = require('./models');

// express
const express = require('express');
const app = express();

// route table
const rowdy = require ('rowdy-logger');
const routesReport = rowdy.begin(app);

// route modules
const userRoutes = require('./routes/userRoutes');

// controller modules
const userController = require('./controllers/userController');

// allow json body for api write methods
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(require('cors')());

// logger for server requests
const morgan = require('morgan');
app.use(morgan('tiny'));


//=============== ROUTES ===============//

//authoirze user before every request
app.use(userController.authorizeUser);
app.use('/users', userRoutes);


//=============== SERVER ===============//

const PORT = process.env.port || 3001
app.listen(PORT, () => {
  console.log(`backend server on port ${PORT}`);
  routesReport.print();
})

