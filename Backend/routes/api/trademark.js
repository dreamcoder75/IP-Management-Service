const express = require('express');
const router = express.Router();

const {newTrademarks} = require('../../controllers/trademarks');
router.post('/newTrademarks', newTrademarks);

module.exports = router;
