const express = require('express');
const router = express.Router();

const clientServie = require('./clientService')

router.use('/service', clientServie)

module.exports = router;