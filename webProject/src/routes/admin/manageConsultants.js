const express = require('express')
const router = express.Router();

const consultantController = require('../../app/controllers/admin/consultantController')
const upload = require('../../app/middleware/upload')

router.get('/listConsultant', consultantController.list)
router.get('/getCreateConsultant', consultantController.getCreate)
router.post('/postCreateConsultant', upload.single('avatar'), consultantController.postCreate)
router.get('/:id/editConsultant', consultantController.edit)
router.put('/:id', consultantController.update)
router.delete('/:id', consultantController.delete)

module.exports = router