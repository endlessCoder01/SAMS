const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv").config();

const registerUser = async ({ name, email, password, phone_number, role, profile_picture }) => {
  const existing = await userModel.getUserByEmail(email);
  if (existing) throw new Error("Email already in use");

  const hashedPassword = await bcrypt.hash(password, 10);
  return await userModel.createUser({ name, email, password_hash: hashedPassword, phone_number, role, profile_picture });
};

const loginUser = async ({ email, password }) => {
  const user = await userModel.getUserByEmail(email);
  // console.log("user", user);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) throw new Error("Invalid credentials");
  const userDetails = { userId: user.id, email: user.email };
  const token = generateAccessToken(userDetails);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  return {token, refreshToken};
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "45s" });
}

module.exports = { registerUser, loginUser };
