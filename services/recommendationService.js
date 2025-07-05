const recommendationModel = require('../models/recommendationModel');

const getRecommendations = async () => {
  return await recommendationModel.getAllRecs();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createRecommendation = async (rec) => {
  return await recommendationModel.createRec(rec);
};

module.exports = {
  createRecommendation,
  getRecommendations,
  // createUser,
};
