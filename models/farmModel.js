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

const getFarmsWithMembersByUserId = async (user_id) => {
  const [rows] = await db.query(
    `
    SELECT 
      f.farm_id,
      f.farm_name,
      f.location,
      f.size,
      f.soil_type,
      f.user_id AS owner_id,

      fm.id AS member_id,
      fm.user_id AS member_user_id,
      fm.role_on_farm,
      fm.work_status

    FROM farms f
    LEFT JOIN farm_members fm ON f.farm_id = fm.farm_id
    WHERE f.user_id = ? OR fm.user_id = ?
    `,
    [user_id, user_id]
  );

  return rows;
};



const getAllByFarmRole = async (farmRole) => {
  const [rows] = await db.query(
    `
    SELECT 
      u.user_id,
      u.name AS user_name,
      u.email,
      u.role AS user_role,
      f.farm_id,
      f.farm_name,
      f.location,
      f.size,
      f.soil_type,
      fm.role_on_farm,
      fm.work_status,
      fm.joined_at
    FROM farm_members fm
    JOIN users u ON fm.user_id = u.user_id
    JOIN farms f ON fm.farm_id = f.farm_id
    WHERE fm.role_on_farm = ?
    ORDER BY fm.joined_at DESC
    `,
    [farmRole]
  );

  return rows;
};

const getAllWorkers = async () => {
  const [rows] = await db.query(`
    SELECT 
      u.user_id,
      u.name AS user_name,
      u.email,
      u.role AS user_role,
      f.farm_id,
      f.farm_name,
      f.location,
      f.size,
      f.soil_type,
      fm.role_on_farm,
      fm.work_status,
      fm.joined_at
    FROM farm_members fm
    JOIN users u ON fm.user_id = u.user_id
    JOIN farms f ON fm.farm_id = f.farm_id
    ORDER BY fm.joined_at DESC

  `);

  return rows;
};

const getWorkersByFarmId = async (farm_id) => {

  const [rows] = await db.query(
    `
    SELECT 
      u.user_id,
      u.name AS user_name,
      u.email,
      u.role AS user_role,
      f.farm_id,
      f.farm_name,
      f.location,
      f.size,
      f.soil_type,
      fm.role_on_farm,
      fm.work_status,
      fm.joined_at
    FROM farm_members fm
    JOIN users u ON fm.user_id = u.user_id
    JOIN farms f ON fm.farm_id = f.farm_id
    WHERE f.farm_id = ?
    ORDER BY fm.joined_at DESC
  `,
    [farm_id]
  );

  return rows;
};

const getWorkersByStatus = async (farm_id, work_status) => {

  const [rows] = await db.query(
    `
    SELECT 
      u.user_id,
      u.name AS user_name,
      u.email,
      u.role AS user_role,
      f.farm_id,
      f.farm_name,
      f.location,
      f.size,
      f.soil_type,
      fm.role_on_farm,
      fm.work_status,
      fm.joined_at
    FROM farm_members fm
    JOIN users u ON fm.user_id = u.user_id
    JOIN farms f ON fm.farm_id = f.farm_id
    WHERE f.farm_id = ? AND fm.work_status = ?
    ORDER BY fm.joined_at DESC
  `,
    [farm_id, work_status]
  );

  return rows;
};

const getFarmByUserId = async (id) => {
  console.log("qwert", id)
  const [rows] = await db.query('SELECT * FROM farms WHERE user_id = ?', [id]);
  return rows;
};


const getAllFarms = async () => {
  const [rows] = await db.query("SELECT * FROM farms");
  return rows;
};

module.exports = {
  createFarm,
  getFarmByUserId,
  getAllFarms,
  getAllByFarmRole,
  getAllWorkers,
  getWorkersByFarmId,
  getWorkersByStatus,
  getFarmsWithMembersByUserId
};
