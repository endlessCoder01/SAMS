const recommendationService = require('../services/recommendationService');

const getAllRecommendations = async (req, res) => {
  try {
    const farms = await recommendationService.getRecommendations();
    res.json(farms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// const getUserById = async (req, res) => {
//   console.log("id", req.params.id)
//   try {
//     const user = await recommendationService.getUser(req.params.id);
//     res.json(user);
//   } catch (err) {
//     res.status(404).json({ error: err.message });
//   }
// };

const createRecommendation = async (req, res) => {
  try {
    const newRec = await recommendationService.createRecommendation(req.body);
    res.status(201).json(newRec);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllRecommendations,
  // getUserById,
  createRecommendation,
};
