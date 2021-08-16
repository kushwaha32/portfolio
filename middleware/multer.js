
const multer = require("multer");

const path = require("path");

// image storage function
   
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "--" + Date.now() + path.extname(file.originalname));
    }

 });
 // check file type
 
 const checkFileType = (file, cb) => {
      // allowed extension
      const fileType = /jpeg|jpg|png|gif/;
      // check ext name
      const extName = fileType.test(path.extname(file.originalname).toLowerCase());
      // check mime
      const mimeType = fileType.test(file.mimetype);

      if(extName && mimeType){
          return cb(null, true)
      }else{
        cb('error: image only');
      }
 }

//image upload
const upload = multer({
      storage: imageStorage,
      limits: {fileSize: 10000000},
      fileFilter: (req, file, cb) => {
         checkFileType(file, cb);
      }

});


module.exports.upload = upload;