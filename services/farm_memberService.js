const farm_memberModel = require('../models/farm_memberModel');

const getMembers = async () => {
  return await farm_memberModel.getAllMembers();
};


const createMember = async (memberData) => {
  return await farm_memberModel.createMember(memberData);
};

module.exports = {
  createMember,
  getMembers,
};
