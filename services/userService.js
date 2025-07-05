const userModel = require('../models/userModel');

const getUsers = async () => {
  return await userModel.getAllUsers();
};

const getUser = async (id) => {
  const user = await userModel.getUserById(id);
  if (!user) throw new Error('User not found');
  return user;
};

const createUser = async (userData) => {
  return await userModel.createUser(userData);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
