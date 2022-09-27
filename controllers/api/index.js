const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const resultsRoutes = require('./resultsRoutes');
console.log(userRoutes);
router.use('/users', userRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/results', resultsRoutes);


module.exports = router;
