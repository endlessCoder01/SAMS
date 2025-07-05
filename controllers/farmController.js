const farmService = require('../services/farmService');

const getAllFarms = async (req, res) => {
  try {
    const farms = await farmService.getFarms();
    res.json(farms);
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
  // getUserById,
  createFarm,
};
