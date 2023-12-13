const express = require('express')
const router = express.Router();

const actorController = require('../../app/controllers/admin/doctorController')
const upload = require('../../app/middleware/upload')

router.get('/listDoctor', actorController.list)
router.get('/getCreateDoctor', actorController.getCreate)
router.post('/postCreateDoctor', upload.single('avatar'), actorController.postCreate)
router.get('/:id/editDoctor', actorController.edit)
router.put('/:id', actorController.update)
router.delete('/:id', actorController.delete)

module.exports = router