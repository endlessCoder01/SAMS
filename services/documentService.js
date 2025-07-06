const documentModel = require('../models/documentModel');

const getDocuments = async () => {
  return await documentModel.getAllDocuments();
};

// const getUser = async (id) => {
//   const user = await userModel.getUserById(id);
//   if (!user) throw new Error('User not found');
//   return user;
// };

const createDocument = async (documentData) => {
  return await documentModel.createDocument(documentData);
};

module.exports = {
  createDocument,
  getDocuments,
  // createUser,
};
