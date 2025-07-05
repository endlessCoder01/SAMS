const db = require("../config/db");

const createSensor = async ({farm_id, sensor_type, sensor_name, location, is_active}) => {
  const [result] = await db.query(
 'INSERT INTO  sensors (`farm_id`, `sensor_type`, `sensor_name`, `location`, `is_active`) VALUES (?, ?, ?, ?, ?)',
     [farm_id, sensor_type, sensor_name, location, is_active]
  );
  return { id: result.insertId, sensor_name, location };
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

const getAllSensors = async () => {
  const [rows] = await db.query("SELECT * FROM sensors");
  return rows[0];
};

module.exports = {
  createSensor,
  getAllSensors,
  // getUserByEmail,
  // getUserById,
};
