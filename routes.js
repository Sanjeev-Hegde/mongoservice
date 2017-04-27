var express = require('express');
var router = express.Router();
var mongoInstance = require('./mongo/mongo_instance.js');

router.use('/login', require("./routes/login.js"));

module.exports = router;
