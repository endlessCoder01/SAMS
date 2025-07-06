const testService = require('../services/testService');

const getAllTests = async (req, res) => {
  try {
    const tests = await testService.getTests();
    res.json(tests);
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

const createTest = async (req, res) => {
  try {
    const newCrop = await testService.createTest(req.body);
    res.status(201).json(newCrop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTests,
  // getUserById,
  createTest,
};
