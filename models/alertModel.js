const db = require("../config/db");

const createAlert = async ({farm_id, message, type, severity}) => {
  const [result] = await db.query(
'INSERT INTO alerts (`farm_id`, `message`, `type`, `severity`) VALUES (?, ?, ?, ?)',
    [farm_id, message, type, severity]
  );
  return { id: result.insertId, message, severity };
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

const getAllAlerts = async () => {
  const [rows] = await db.query("SELECT * FROM alerts");
  return rows;
};

module.exports = {
  createAlert,
  getAllAlerts,
  // getUserByEmail,
  // getUserById,
};
