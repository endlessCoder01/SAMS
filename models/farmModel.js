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


const getAllFarms = async () => {
  const [rows] = await db.query("SELECT * FROM farms");
  return rows;
};

module.exports = {
  createFarm,
  getAllFarms,
  getAllByFarmRole,
  getAllWorkers,
  getWorkersByFarmId,
  getWorkersByStatus
};
