const express = require('express');
const router = express.Router();
const farmController = require('../controllers/farmController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, farmController.getAllFarms);
router.post('/', authenticateToken, farmController.createFarm);
router.get('/user/:id', authenticateToken, farmController.getFarmByUserId);
router.get('/joined/user/:id', authenticateToken, farmController.getFarmsWithMembersByUserId);

module.exports = router;
