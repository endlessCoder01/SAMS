const farmModel = require('../models/farmModel');

const getFarms = async () => {
  return await farmModel.getAllFarms();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createFarm = async (userData) => {
  return await farmModel.createFarm(userData);
};

module.exports = {
  createFarm,
  getFarms,
  // createUser,
};
