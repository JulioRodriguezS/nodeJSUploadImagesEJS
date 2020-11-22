const { Router } = require('express');
const router = Router();
const path = require('path');
const multer = require('multer');
const uuid = require('uuid');

const multerStorageConf = multer.diskStorage({
    destination: path.join(__dirname, '../public/images'),
    filename: (req, file, cb) => {
        cb(null, uuid.v4() + '.' + file.mimetype.split('/')[1])
    }
});
const upImg = multer({
    storage: multerStorageConf,
    dest: path.join(__dirname, '../public/images'),
    limits: {fieldSize: 1000000}
}).single('imgFile');

// routes
router
    .get('/', async (req, res, next) => {
        res.render('index')
    })
    .post('/upload', upImg, async (req, res, next) => {
        console.log(req.file);
        setTimeout(()=>{res.redirect('/')},2000);
    })
module.exports = router;