var express = require('express');
var router = express.Router();
var user = require('./users.js');
var signin = require('./signin.js');
var book = require('../routes/components/book.controller.js');
// User routes
router.get('/', book);
router.post('/signup', user);
router.post('/signin', signin);
module.exports = router;
