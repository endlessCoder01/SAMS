const db = require("../config/db");

const createTest = async ({farm_id, test_type, description, tested_by, results_summary, test_date}) => {
  const [result] = await db.query(
'INSERT INTO tests (`farm_id`, `test_type`, `description`, `tested_by`, `results_summary`, `test_date`) VALUES (?, ?, ?, ?, ?, ?)',
    [farm_id, test_type, description, tested_by, results_summary, test_date]
  );
  return { id: result.insertId, description, test_type };
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

const getAllTests = async () => {
  const [rows] = await db.query("SELECT * FROM tests");
  return rows;
};

module.exports = {
  createTest,
  getAllTests,
  // getUserByEmail,
  // getUserById,
};
