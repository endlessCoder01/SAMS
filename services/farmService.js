const farmModel = require('../models/farmModel');

const getFarms = async () => {
  return await farmModel.getAllFarms();
};

const getAllWorkers = async () => {
  const workers = await farmModel.getAllWorkers();
  if (!workers) throw new Error('User not found');
  return workers;
};
const getFarmByUserId = async (id) => {
  const farms = await farmModel.getFarmByUserId(id);
  if (!farms) throw new Error('User not found');
  return farms;
};


const createFarm = async (userData) => {
  return await farmModel.createFarm(userData);
};

module.exports = {
  createFarm,
  getFarmByUserId,
  getFarms,
  getAllWorkers
};
