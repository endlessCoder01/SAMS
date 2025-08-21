const db = require("../config/db");

const createTask = async ({farm_id,assigned_to, task_description, scheduled_date, status}) => {
  const [result] = await db.query(
'INSERT INTO tasks (`farm_id`, `assigned_to`, `task_description`, `scheduled_date`, `status`) VALUES (?, ?, ?, ?, ?)',
    [farm_id,assigned_to, task_description, scheduled_date, status]
  );
  return { id: result.insertId, task_description, status };
};


const getAllTasks = async () => {
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows;
};

const updateTask = async (taskId, updates) => {

  console.log("maUpdates", updates)
  const fields = [];
  const values = [];

  if (updates.assigned_to) {
    fields.push("assigned_to = ?");
    values.push(updates.assigned_to);
  }
  if (updates.task_description) {
    fields.push("task_description = ?");
    values.push(updates.task_description);
  }
  if (updates.scheduled_date) {
    fields.push("scheduled_date = ?");
    values.push(updates.scheduled_date);
  }
  if (updates.status) {
    fields.push("status = ?");
    values.push(updates.status);
  }

  // nothing to update
  if (fields.length === 0) {
    return null;
  }

  values.push(taskId);

  const [result] = await db.query(
    `UPDATE tasks SET ${fields.join(", ")} WHERE task_id = ?`,
    values
  );

  return result.affectedRows > 0;
};

const deleteTaskById = async (id) => {
  const [rows] =  await db.query("DELETE FROM tasks WHERE task_id = ?", [id]);
  return rows;
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTaskById,
};
