const path = require('path')
const multer = require('multer')
const fs = require('fs')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/uploads/')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        if 
        (
            file.mimetype == 'image/png' || 
            file.mimetype == 'image/jpeg'
        ) 
        {
            cb(null, true);
        } else {
            console.log('Chỉ hỗ trợ file jpg và png!');
            cb(null, false);
        }
    }
    ,
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload