const messages = [
    {
      messageId: Math.random(),
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      messageId: Math.random(),
      text: "Hello World!",
      user: "Charles",
      added: new Date()
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
        const text = req.body.messageText;

        messages.push({ messageId, text, user, added: new Date() });

        res.redirect('/');
}

exports.getMessage = (req, res, next) => {
    const targetMessageId = req.params.messageId;
    const targetMessage = messages.find(message => message.messageId.toString() === targetMessageId);

    res.render('details', {
        messageId: targetMessage.messageId,
        text: targetMessage.text,
        user: targetMessage.user,
        added: targetMessage.added,
        pageTitle: 'Details'
    })
}