const farmService = require("../services/farmService");

const getAllFarms = async (req, res) => {
  try {
    const farms = await farmService.getFarms();
    res.json(farms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllWorkers = async (req, res) => {
  try {
    const farm_workers = await farmService.getAllWorkers();
    res.json(farm_workers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createFarm = async (req, res) => {
  try {
    const newFarm = await farmService.createFarm(req.body);
    res.status(201).json(newFarm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllFarms,
  getAllWorkers,
  createFarm,
};
