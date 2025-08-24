const taskService = require("../services/taskService");
const userService = require("../services/userService");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getTasksByUserId = async (req, res) => {
  const userId = req.params.id
  try {
    const tasks = await taskService.getTasksByUserId(userId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const updateTask = await taskService.updateTask(taskId, req.body);
    res.status(201).json(updateTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const AssignTask = async (req, res) => {
  const taskId = req.params.id;
  let values = req.body;

  const status = { status: values.userState };
  delete values.userState;

  try {
    const updateUser = await userService.updateUser(values.assigned_to, status);
    if (updateUser === true) {
      const updateTask = await taskService.updateTask(taskId, values);
      res.status(201).json(updateTask);
    } else {
      console.log(updateUser);
      res.status(405).json(updateUser);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const deletedTask = await taskService.deleteTask(id);
    res.status(201).json(deletedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTasksByUserId,
  AssignTask,
  updateTask,
  createTask,
  deleteTask,
};
