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