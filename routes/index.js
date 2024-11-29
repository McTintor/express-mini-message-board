const path = require('path');

const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();
  
router.get('/', indexController.getHomePage);

router.get('/new', indexController.getAddNewMessage);

router.get('/details/:messageId', indexController.getTargetMessage);

router.post('/new', indexController.postMessage);

router.post('/delete/:messageId', indexController.deleteMessage);

router.get('/edit/:messageId', indexController.getEditMessageForm); 

router.post('/edit/:messageId', indexController.postEditMessage);

module.exports = router;