const db = require("../config/db");

const createFarm = async ({
  user_id,
  farm_name,
  location,
  size,
  soil_type,
}) => {
  const [result] = await db.query(
    "INSERT INTO farms (`user_id`, `farm_name`, `location`, `size`, `soil_type`) VALUES (?, ?, ?, ?, ?)",
    [user_id, farm_name, location, size, soil_type]
  );
  return { id: result.insertId, farm_name, location };
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

const getAllFarms = async () => {
  const [rows] = await db.query("SELECT * FROM farms");
  return rows;
};

module.exports = {
  createFarm,
  getAllFarms,
  // getUserByEmail,
  // getUserById,
};
