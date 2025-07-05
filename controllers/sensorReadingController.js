const sensorReadingService = require('../services/sensorReadingService');

const getAllReadings = async (req, res) => {
  try {
    const readings = await sensorReadingService.getReadings();
    res.json(readings);
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

const createReading = async (req, res) => {
  try {
    const newReading = await sensorReadingService.createReading(req.body);
    res.status(201).json(newReading);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllReadings,
  // getUserById,
  createReading,
};
