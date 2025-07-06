const express = require('express');
const router = express.Router();
const farm_memberController = require('../controllers/farm_memberController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, farm_memberController.getAllMembers);
router.post('/', authenticateToken, farm_memberController.createMember);
// router.get('/:id', authenticateToken, userController.getUserById);

module.exports = router;
