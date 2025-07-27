const db = require('../config/db');

const createUser = async ({ name, email, password_hash, phone_number, home_address, role, profile_picture }) => {
  const [result] = await db.query(
    'INSERT INTO users (name, email, password_hash, phone_number, home_address, role, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [name, email, password_hash, phone_number, home_address, role, profile_picture]
  );
  return { id: result.insertId, name, email };
};

const getUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const getUserById = async (id) => {
  const [rows] = await db.query('SELECT user_id, name, email FROM users WHERE user_id = ?', [id]);
  return rows[0];
};

const getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

const saveRefreshToken = async (userId, token) => {
  const [rows] = await db.query('UPDATE users SET refresh_token = ? WHERE user_id = ?', [token, userId]);
};


module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  saveRefreshToken,
};
