const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, sensorController.getAllSensors);
router.post('/', authenticateToken, sensorController.createSensor);
// router.get('/:id', authenticateToken, userController.getUserById);

module.exports = router;
