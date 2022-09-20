const router = require('express').Router();
const userRoutes =('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;
