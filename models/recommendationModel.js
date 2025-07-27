const db = require("../config/db");

const createRec = async ({crop_id, user_id, message, category}) => {
  const [result] = await db.query(
'INSERT INTO recommendations (`crop_id`, `user_id`, `message`, `category`) VALUES (?, ?, ?, ?)',
    [crop_id, user_id, message, category]
  );
  return { id: result.insertId, message, category};
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

const getAllRecs = async () => {
  const [rows] = await db.query("SELECT * FROM recommendations");
  return rows;
};

module.exports = {
  createRec,
  getAllRecs,
  // getUserByEmail,
  // getUserById,
};
