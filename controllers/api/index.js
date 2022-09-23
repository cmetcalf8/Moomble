const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');
console.log(userRoutes);
router.use('/users', userRoutes);
router.use('/restaurants', restaurantRoutes);

module.exports = router;
