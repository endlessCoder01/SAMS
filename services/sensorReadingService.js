const sensor_readingsModel = require('../models/sensor_readingsModel');

const getReadings = async () => {
  return await sensor_readingsModel.getAllReadings();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createReading = async (Data) => {
  return await sensor_readingsModel.createReading(Data);
};

module.exports = {
  createReading,
  getReadings,
  // createUser,
};
