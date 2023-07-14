const express = require('express');
const router = express.Router();

const {newDesigns} = require('../../controllers/design');
router.post('/newDesigns', newDesigns);

module.exports = router;
