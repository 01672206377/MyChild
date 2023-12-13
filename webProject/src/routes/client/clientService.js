const express = require('express')
const router = express.Router();

const serviceController = require('../../app/controllers/client/serviceController')

router.get('/getBabyService', serviceController.getBaby)
router.get('/getMotherService', serviceController.getMother)
router.get('/:slug', serviceController.show)

module.exports = router