const db = require("../config/db");

const createReading = async ({sensor_id, value, unit}) => {
  const [result] = await db.query('INSERT INTO sensor_readings (`sensor_id`, `value`, `unit`) VALUES (?, ?, ?)',
      [sensor_id, value, unit]
  );
  return { id: result.insertId, value, unit };
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

const getAllReadings = async () => {
  const [rows] = await db.query("SELECT * FROM sensor_readings");
  return rows[0];
};

module.exports = {
  createReading,
  getAllReadings,
  // getUserByEmail,
  // getUserById,
};
