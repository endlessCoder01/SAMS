const cropService = require('../services/cropService');

const getAllCrops = async (req, res) => {
  try {
    const crops = await cropService.getCrops();
    res.json(crops);
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

const createCrop = async (req, res) => {
  try {
    const newCrop = await cropService.createCrop(req.body);
    res.status(201).json(newCrop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCrops,
  // getUserById,
  createCrop,
};
