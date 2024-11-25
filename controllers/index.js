const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
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
        const user = req.body.user;
        const text = req.body.messageText;

        messages.push({ text, user, added: new Date() });

        res.redirect('/');
}