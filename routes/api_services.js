const express = require('express');
const router = express.Router();
const database = require('./database')

router.use('/database', database)












module.exports = router;