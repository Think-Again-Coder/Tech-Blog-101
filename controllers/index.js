const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//using root for home route and also api routes. 
router.use('/', homeRoutes);
router.use('/api/index.js', apiRoutes);

module.exports = router;
