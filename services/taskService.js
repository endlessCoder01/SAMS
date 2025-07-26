const taskModel = require('../models/taskModel');

const getTasks = async () => {
  return await taskModel.getAllTasks();
};

const createTask = async (taskData) => {
  return await taskModel.createTask(taskData);
};

const deleteTask = async (taskId) => {
  return await taskModel.deleteTaskById(taskId);
};

module.exports = {
  createTask,
  getTasks,
  deleteTask
};
