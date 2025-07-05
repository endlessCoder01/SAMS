const sensorService = require('../services/sensorService');

const getAllSensors = async (req, res) => {
  try {
    const sensors = await sensorService.getSensors();
    res.json(sensors);
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

const createSensor = async (req, res) => {
  try {
    const newSensor = await sensorService.createSensor(req.body);
    res.status(201).json(newSensor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllSensors,
  // getUserById,
  createSensor,
};
