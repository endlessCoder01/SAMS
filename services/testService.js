const testModel = require('../models/testModel');

const getTests = async () => {
  return await testModel.getAllTests();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createTest = async (testData) => {
  return await testModel.createTest(testData);
};

module.exports = {
  createTest,
  getTests,
  // createUser,
};
