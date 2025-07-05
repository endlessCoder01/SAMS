const sensorModel = require('../models/sensorsModel');

const getSensors = async () => {
  return await sensorModel.getAllSensors();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createSensor = async (sensorData) => {
  return await sensorModel.createSensor(sensorData);
};

module.exports = {
  createSensor,
  getSensors,
  // createUser,
};
