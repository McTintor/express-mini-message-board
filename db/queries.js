const pool = require("./pool");

async function getAllMessages() {
    try {
      const { rows } = await pool.query("SELECT * FROM messages");
      return rows;
    } catch (err) {
      throw err;
    }
  }

async function insertMessage(person, title, text) {
    await pool.query("INSERT INTO messages (person, title, text, added) VALUES ($1, $2, $3, NOW())", [person, title, text]);
  }

async function getMessage(targetMessageId) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [targetMessageId]);
    return rows;
}  
  
module.exports = {
    getAllMessages,
    insertMessage,
    getMessage
};