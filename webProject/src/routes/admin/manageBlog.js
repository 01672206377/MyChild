const express = require('express')
const router = express.Router();

const blogController = require('../../app/controllers/admin/blogController')
const upload = require('../../app/middleware/upload')

router.get('/listBlog', blogController.listBlog)
router.get('/getCreateBlog', blogController.getCreateBlog)
router.post('/postCreateBlog', upload.single('avatar'), blogController.postCreateBlog)
router.get('/:id/editBlog', blogController.editBlog)
router.put('/:id', blogController.updateBlog)
router.delete('/:id', blogController.deleteBlog)

module.exports = router