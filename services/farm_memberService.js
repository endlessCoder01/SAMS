const farm_memberModel = require('../models/farm_memberModel');

const getMembers = async () => {
  return await farm_memberModel.getAllMembers();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createMember = async (memberData) => {
  return await farm_memberModel.createMember(memberData);
};

module.exports = {
  createMember,
  getMembers,
  // createUser,
};
