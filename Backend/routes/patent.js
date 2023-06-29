const express = require('express');
const router = express.Router();

const {newPatents, getPatentsAll, updatePatents} = require('../controllers/patents');

router.post('/newPatents', newPatents);
router.post('/getPatentsAll', getPatentsAll);
router.post('/updatePatents', updatePatents);

module.exports = router;
