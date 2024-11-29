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

async function deleteMessageById(id) {
    try {
      await pool.query('DELETE FROM messages WHERE id = $1', [id]);
    } catch (err) {
      throw err;
    }
  }

  async function updateMessageById(id, person, title, text) {
    try {
      await pool.query(
        'UPDATE messages SET person = $1, title = $2, text = $3 WHERE id = $4',
        [person, title, text, id]
      );
    } catch (err) {
      throw err;
    }
  }
  
module.exports = {
    getAllMessages,
    insertMessage,
    getMessage,
    deleteMessageById,
    updateMessageById
};