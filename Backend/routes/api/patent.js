const express = require('express');
const router = express.Router();

const {newPatents, getPatentsAll, updatePatents, deletePatents, getPatentById} = require('../../controllers/patents');
  
router.post('/newPatents', newPatents);
router.post('/getPatentsAll', getPatentsAll);
router.post('/updatePatents/:id', updatePatents);
router.post('/deletePatents/:id', deletePatents);
router.post('/getPatentById/:id', getPatentById);

module.exports = router;
