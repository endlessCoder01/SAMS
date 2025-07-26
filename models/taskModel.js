const db = require("../config/db");

const createTask = async ({farm_id,assigned_to, task_description, scheduled_date, status}) => {
  const [result] = await db.query(
'INSERT INTO tasks (`farm_id`, `assigned_to`, `task_description`, `scheduled_date`, `status`,) VALUES (?, ?, ?, ?, ?)',
    [farm_id,assigned_to, task_description, scheduled_date, status]
  );
  return { id: result.insertId, task_description, status };
};


const getAllTasks = async () => {
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows;
};

const deleteTaskById = async () => {
  const [rows] =  await db.query("DELETE FROM tasks WHERE id = ?", [id]);
  return rows;
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTaskById,
};
