const db = require("../config/db");

const createMember = async ({farm_id, user_id, role_on_farm, work_status}) => {
  const [result] = await db.query(
'INSERT INTO farm_members (`farm_id`, `user_id`, `role_on_farm`, `work_status`) VALUES (?, ?, ?, ?)',
    [farm_id, user_id, role_on_farm, work_status]
  );
  return { id: result.insertId, user_id, role_on_farm };
};


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
