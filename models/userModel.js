const db = require('../config/db');

const createUser = async ({ name, email, password_hash, phone_number, role, profile_picture }) => {
  const [result] = await db.query(
    'INSERT INTO users (name, email, password_hash, phone_number, role, profile_picture) VALUES (?, ?, ?, ?, ?, ?)',
    [name, email, password_hash, phone_number, role, profile_picture]
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
  return rows[0];
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
};
