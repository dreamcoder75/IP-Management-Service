const multer = require('multer');
const express = require('express');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.fieldname === "files") {
        cb(null, "uploads/files/");
      } else if (file.fieldname === "images") {
        cb(null, "uploads/images/");
      } else {
        cb(new Error("Invalid fieldname"));
      }
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage });

router.post("/upload/files", upload.array("files", 10), (req, res) => {
    console.log("Uploaded files:", req.files);
    const numberOfFiles = parseInt(req.body.filenumber, 10);
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host');
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/uploads/files/' + req.files[i].filename)
    }

    console.log("Number of files:", numberOfFiles);
  
    res.status(200).json({paths : reqFiles});
  });
  
router.post("/upload/images", upload.array("images", 10), (req, res) => {
    console.log("Uploaded images:", req.files);
    const numberOfImages = parseInt(req.body.imagenumber, 10);
    const reqImages = [];
    const url = req.protocol + '://' + req.get('host');
    for (var i = 0; i< req.files.length; i++) {
        reqImages.push(url + '/uploads/images/' + req.files[i].filename)
    }
    console.log("Number of images:", numberOfImages);
  
    res.status(200).json({paths : reqImages});
  });

 module.exports = router;