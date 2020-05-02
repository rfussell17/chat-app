const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "Pass22!",
  host: "localhost",
  port: 5432,
  database: "chat_app"
});

async function getMessages() {
  try {
    const client = await pool.connect();
    const res = await client.query(`
    SELECT m.id, m.text, u.username FROM messages AS m
      INNER JOIN users AS u
      ON u.id = m.user_id`);
    return {
      data: res.rows,
      success: true,
      error: null
    }
  } catch(err) {
    return {
      success: false,
      error: err
    }
  }
}


async function getUsers() {
  const client = await pool.connect();
  const res = await client.query('SELECT * FROM users');
  return res.rows;
}
async function createMessage(user_id, text) {
  const client = await pool.connect();
  try {
    const res = await client.query('INSERT INTO messages (user_id, text) VALUES($1, $2) RETURNING user_id', [user_id, text]);
    return {
      data: res.rows[0].user_id,
      success: true,
      error: null
    }
  } catch (err) {
    return {
      success: false,
      error: err
    }
  }
}
async function getUserId(user_id) {
  const client = await pool.connect();
  const res = await client.query('SELECT * FROM users WHERE id (user_id) VALUES($1) RETURNING user_id', [user_id]);
    return res.rows;
}
async function createUser(user_id, username) {
  const client = await pool.connect();
  try {
    const res = await client.query('INSERT INTO users (user_id, username) VALUES($1, $2) RETURNING user_id', [user_id, username]);
    return {
      data: res.rows[0].username,
      success: true,
      error: null
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
  getUserId: getUserId,
  createMessage: createMessage,
  createUser: createUser
}