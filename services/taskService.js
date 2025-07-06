const taskModel = require('../models/taskModel');

const getTasks = async () => {
  return await taskModel.getAllTasks();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createTask = async (taskData) => {
  return await taskModel.createTask(taskData);
};

module.exports = {
  createTask,
  getTasks,
  // createUser,
};
