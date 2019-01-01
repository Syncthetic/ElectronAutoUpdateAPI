var router = require('express').Router();
module.exports = router;

// application resources
router.use('/applications', require('./applications/plural'))
router.use('/application',  require('./applications/singular'))
