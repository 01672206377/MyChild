
const express = require('express');
const router = express.Router();

const manageService = require('./manageService');
const manageDoctor = require('./manageDoctors');
const manageConsultant = require('./manageConsultants');
const manageBlog = require('./manageBlog');

router.use('/service', manageService);
router.use('/doctor', manageDoctor);
router.use('/consultant', manageConsultant);
router.use('/blog', manageBlog);
router.use('/', (req, res, next) => {
    res.render('admin/dashboard')
})

module.exports = router;