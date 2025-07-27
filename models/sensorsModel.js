const db = require("../config/db");

const createSensor = async ({farm_id, sensor_type, sensor_name, location, is_active}) => {
  const [result] = await db.query(
 'INSERT INTO  sensors (`farm_id`, `sensor_type`, `sensor_name`, `location`, `is_active`) VALUES (?, ?, ?, ?, ?)',
     [farm_id, sensor_type, sensor_name, location, is_active]
  );
  return { id: result.insertId, sensor_name, location };
};


const getAllSensors = async () => {
  const [rows] = await db.query("SELECT * FROM sensors");
  return rows;
};

module.exports = {
  createSensor,
  getAllSensors,
  // getUserByEmail,
  // getUserById,
};
