const cropModel = require('../models/cropModel');

const getCrops = async () => {
  return await cropModel.getAllCrops();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createCrop = async (cropData) => {
  return await cropModel.createCrop(cropData);
};

module.exports = {
  createCrop,
  getCrops,
  // createUser,
};
