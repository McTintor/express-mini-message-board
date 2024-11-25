const path = require('path');

const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();
  
router.get('/', indexController.getHomePage);

router.get('/new', indexController.getAddNewMessage);

router.get('/:messageId', indexController.getMessage);

router.post('/new', indexController.postMessage);

module.exports = router;