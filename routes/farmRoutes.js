const express = require('express');
const router = express.Router();
const farmController = require('../controllers/farmController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, farmController.getAllFarms);
router.post('/', authenticateToken, farmController.createFarm);
// router.get('/:id', authenticateToken, userController.getUserById);

module.exports = router;
