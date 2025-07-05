const db = require('../config/db');

const createUser = async ({ name, email, password }) => {
  const [result] = await db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );
  return { id: result.insertId, name, email };
};

const getUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const getUserById = async (id) => {
  const [rows] = await db.query('SELECT id, name, email FROM users WHERE id = ?', [id]);
  return rows[0];
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
