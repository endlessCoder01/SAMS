const farm_memberService = require('../services/farm_memberService');

const getAllMembers = async (req, res) => {
  try {
    const members = await farm_memberService.getMembers();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createMember = async (req, res) => {
  try {
    const newMember = await farm_memberService.createMember(req.body);
    res.status(201).json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllMembers,
  createMember,
};
