const multer = require('multer');

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) =>{
    // if (!file.mimetype.match(jpeg|png)) {
    //   cb(new Error('File is not supported'),false)
    //   return
    // }

    cb(null, true)
  }
})
