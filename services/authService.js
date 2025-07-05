const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
require('dotenv').config();

const registerUser = async ({ name, email, password }) => {
  const existing = await userModel.getUserByEmail(email);
  if (existing) throw new Error('Email already in use');

  const hashedPassword = await bcrypt.hash(password, 10);
  return await userModel.createUser({ name, email, password: hashedPassword });
};

const loginUser = async ({ email, password }) => {
  const user = await userModel.getUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return token;
};

module.exports = { registerUser, loginUser };
