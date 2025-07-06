const alertModel = require('../models/alertModel');

const getAlerts = async () => {
  return await alertModel.getAllAlerts();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createAlert = async (alertData) => {
  return await alertModel.createAlert(alertData);
};

module.exports = {
  createAlert,
  getAlerts,
  // createUser,
};
