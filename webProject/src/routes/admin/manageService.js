const express = require('express')
const router = express.Router();

const adminController = require('../../app/controllers/admin/serviceController')
const upload = require('../../app/middleware/upload')

router.get('/listService', adminController.listService)
router.get('/getCreateService', adminController.getCreateService)
router.post('/postCreateService', upload.single('avatar'), adminController.postCreateService)
router.get('/:id/editService', adminController.editService)
router.put('/:id', adminController.updateService)
router.delete('/:id', adminController.deleteService)

module.exports = router