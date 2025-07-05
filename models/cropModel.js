const db = require("../config/db");

const createCrop = async ({farm_id, crop_type, planting_date, harvest_date, status}) => {
  const [result] = await db.query(
'INSERT INTO crops (`farm_id`, `crop_type`, `planting_date`, `harvest_date`, `status`) VALUES (?, ?, ?, ?, ?)',
    [farm_id, crop_type, planting_date, harvest_date, status]
  );
  return { id: result.insertId, crop_type, status };
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

const getAllCrops = async () => {
  const [rows] = await db.query("SELECT * FROM crops");
  return rows[0];
};

module.exports = {
  createCrop,
  getAllCrops,
  // getUserByEmail,
  // getUserById,
};
