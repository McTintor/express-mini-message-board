const path = require('path');

const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();
  
router.get('/', indexController.getHomePage);

module.exports = router;