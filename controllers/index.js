const moment = require('moment');

const messages = [
    {
      messageId: Math.random(),
      title: "Hi there!",
      text: "This is a message saying Hi there!",
      user: "Amando",
      added: moment(new Date()).format('DD.MM.YYYY HH:mm')
    },
    {
      messageId: Math.random(),
      title: "Hello World!",
      text: "This is a message saying Hello World!",
      user: "Charles",
      added: moment(new Date()).format('DD.MM.YYYY HH:mm')
    }
  ];

exports.getHomePage = (req, res, next) => {
    res.render('index', {
        messages: messages,
        pageTitle: 'Mini Message Board',
        path: '/'
    })
}

exports.getAddNewMessage = (req, res, next) => {
    res.render('form', {
        pageTitle: 'Add New Message',
        path: '/new'
    })
} 

exports.postMessage = (req, res, next) => {
        const messageId = Math.random();
        const user = req.body.user;
        const title = req.body.title;
        const text = req.body.messageText;

        messages.push({ messageId, title, text, user, added: moment(new Date()).format('DD.MM.YYYY HH:mm') });

        res.redirect('/');
}

exports.getMessage = (req, res, next) => {
    const targetMessageId = req.params.messageId;
    const targetMessage = messages.find(message => message.messageId.toString() === targetMessageId);

    res.render('details', {
        messageId: targetMessage.messageId,
        title: targetMessage.title,
        text: targetMessage.text,
        user: targetMessage.user,
        added: targetMessage.added,
        pageTitle: 'Details',
        path: ''
    })
}