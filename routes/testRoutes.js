const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, testController.getAllTests);
router.post('/', authenticateToken, testController.createTest);
// router.get('/:id', authenticateToken, userController.getUserById);

module.exports = router;
