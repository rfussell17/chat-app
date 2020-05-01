const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "Pass22!",
  host: "localhost",
  port: 5432,
  database: "chat_app",
});
async function getMessages() {
  const client = await pool.connect();
  const res = await client.query('SELECT * FROM messages');
  return res.rows;
}
async function getUsers() {
  const client = await pool.connect();
  const res = await client.query('SELECT * FROM users');
  return res.rows;
}
async function createMessage(userId, message) {
  const client = await pool.connect();
  try {
    const res = await client.query('INSERT INTO messages (user_id, message) VALUES($1, $2) RETURNING user_id', [userId, message]);
    return {
      data: res.rows[0].user_id,
      success: true,
      errur: null
    }
  } catch (err) {
    return {
      success: false,
      error: err
    }
  }
}
module.exports = {
  getMessages: getMessages,
  getUsers: getUsers,
  createMessage: createMessage
}