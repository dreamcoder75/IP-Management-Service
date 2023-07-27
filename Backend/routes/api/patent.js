const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {newPatents, getPatentsAll, updatePatents, deletePatents, getPatentById} = require('../../controllers/patents');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.fieldname === 'attachments') {
        cb(null, 'public/attachments/');
      } else if (file.fieldname === 'images') {
        cb(null, 'public/images/');
      } else if (file.fieldname === 'invoices') {
        cb(null, 'public/invoices/');
      } else cb(new Error('Invalid fieldname'));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

const upload = multer({ storage });
  
router.post('/newPatents', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'attachments', maxCount: 10 }, { name: 'invoices', maxCount: 10 }]), newPatents);

router.post('/getPatentsAll', getPatentsAll);
router.post('/updatePatents/:id', updatePatents);
router.post('/deletePatents/:id', deletePatents);
router.post('/getPatentById/:id', getPatentById);

module.exports = router;
