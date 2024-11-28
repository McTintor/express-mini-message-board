const path = require('path');

const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();
  
router.get('/', indexController.getHomePage);

router.get('/new', indexController.getAddNewMessage);

router.get('/details/:messageId', indexController.getTargetMessage);

router.post('/new', indexController.postMessage);

router.post('/delete/:messageId', indexController.deleteMessage);

module.exports = router;