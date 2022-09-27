const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const resultsRoutes = require('./api/results');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/results', resultsRoutes);


module.exports = router;