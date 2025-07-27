const db = require("../config/db");

const createMember = async ({farm_id, user_id, role_on_farm}) => {
  const [result] = await db.query(
'INSERT INTO farm_members (`farm_id`, `user_id`, `role_on_farm`) VALUES (?, ?, ?)',
    [farm_id, user_id, role_on_farm]
  );
  return { id: result.insertId, user_id, role_on_farm };
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

const getAllMembers = async () => {
  const [rows] = await db.query("SELECT * FROM farm_members");
  return rows;
};

module.exports = {
  createMember,
  getAllMembers,
  // getUserByEmail,
  // getUserById,
};
