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
  try {
    const client = await pool.connect();
    const res = await client.query(`
    SELECT u.id, u.username FROM messages AS m
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

  async function getUserId() {
    try {
      const client = await pool.connect();
      const res = await client.query(`
      SELECT username FROM users WHERE users.id = messages.user_id`);
        return {
          data: res.rows.id,
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

async function createMessage(user_id, text, username) {
  try {
    const client = await pool.connect();
    const res = await client.query(`
    INSERT INTO messages (user_id, text, username)
     VALUES($1, $2, $3)`, [user_id, text, username])
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

async function createUser(user_id, username) {
  try {
    const client = await pool.connect();
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