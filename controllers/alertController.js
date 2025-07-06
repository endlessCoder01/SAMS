const alertService = require('../services/alertService');

const getAllAlerts = async (req, res) => {
  try {
    const alerts = await alertService.getAlerts();
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// const getUserById = async (req, res) => {
//   console.log("id", req.params.id)
//   try {
//     const user = await farmService.getUser(req.params.id);
//     res.json(user);
//   } catch (err) {
//     res.status(404).json({ error: err.message });
//   }
// };

const createAlert = async (req, res) => {
  try {
    const newAlert = await alertService.createAlert(req.body);
    res.status(201).json(newAlert);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllAlerts,
  // getUserById,
  createAlert,
};
