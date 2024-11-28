const db = require('../db/queries');

const getHomePage = async (req, res, next) => {
    try {
        const messages = await db.getAllMessages();
        console.log("Messages fetched: ", messages);
        res.render('index', {
            pageTitle: 'Messages',
            path: '/',
            messages: messages,
        })
    } catch (err) {
        console.error("Error fetching messages: ", err);
        res.status(500).json({error: "Internal server error"});
    }
}

const getAddNewMessage = async (req, res, next) => {
    res.render('form', {
        pageTitle: 'Add New Message',
        path: '/new'
    })
} 

const postMessage = async (req, res, next) => {
        const person = req.body.person;
        const title = req.body.title;
        const text = req.body.messageText;

        await db.insertMessage(person, title, text);

        res.redirect('/');
}

const getTargetMessage = async (req, res, next) => {
    const targetMessageId = req.params.messageId;
    const targetMessage = await db.getMessage(targetMessageId);

    res.render('details', {
        id: targetMessage[0].id,
        title: targetMessage[0].title,
        text: targetMessage[0].text,
        person: targetMessage[0].person,
        added: targetMessage[0].added,
        pageTitle: 'Details',
        path: ''
    });
};

const deleteMessage = async (req, res, next) => {
    const messageId = req.params.messageId;
  
    try {
      await db.deleteMessageById(messageId); // Call the database query
      res.redirect('/'); // Redirect back to the homepage after deletion
    } catch (err) {
      console.error("Error deleting message: ", err);
      res.status(500).send("Failed to delete the message.");
    }
  };

module.exports = {
    getHomePage,
    getAddNewMessage,
    postMessage,
    getTargetMessage,
    deleteMessage
}