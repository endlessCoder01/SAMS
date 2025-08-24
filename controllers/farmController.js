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

const getFarmByUserId = async (req, res) => {
  try {
    console.log("hoyoo", req.params.id);
    const farms = await farmService.getFarmByUserId(req.params.id);
    res.json(farms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFarmsWithMembersByUserId = async (req, res) => {
  try {
    const farm = await farmService.getFarmsMembersByUserId(req.params.id);
    res.json(farm);
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
  getFarmByUserId,
  getFarmsWithMembersByUserId,
  createFarm,
};
