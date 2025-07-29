const alertModel = require('../models/alertModel');

const getAlerts = async () => {
  return await alertModel.getAllAlerts();
};
const getAlertsByJoin = async () => {
  return await alertModel.getAllAlertsByJoin();
};


const createAlert = async (alertData) => {
  return await alertModel.createAlert(alertData);
};

module.exports = {
  createAlert,
  getAlerts,
getAlertsByJoin,
};
