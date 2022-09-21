const router = require('express').Router();
const userRoutes =('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');

router.use('/users', userRoutes);
router.use('/restaurants', restaurantRoutes);

module.exports = router;
