const db = require("../config/db");

const createTask = async ({farm_id,assigned_to, task_description, scheduled_date, status}) => {
  const [result] = await db.query(
'INSERT INTO tasks (`farm_id`, `assigned_to`, `task_description`, `scheduled_date`, `status`,) VALUES (?, ?, ?, ?, ?)',
    [farm_id,assigned_to, task_description, scheduled_date, status]
  );
  return { id: result.insertId, task_description, status };
};

// const getUserByEmail = async (email) => {
//   const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
//   return rows[0];
// };

// const getUserById = async (id) => {
//   const [rows] = await db.query(
//     "SELECT user_id, name, email FROM users WHERE user_id = ?",
//     [id]
//   );
//   return rows[0];
// };

const getAllTasks = async () => {
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows[0];
};

module.exports = {
  createTask,
  getAllTasks,
  // getUserByEmail,
  // getUserById,
};
