
const router = require('express').Router();

router.use('/', require('./api/data'));

module.exports = router;