const express = require('express');
const router = express.Router();
const sensorReadingController = require('../controllers/sensorReadingController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, sensorReadingController.getAllReadings);
router.post('/', authenticateToken, sensorReadingController.createReading);
// router.get('/:id', authenticateToken, userController.getUserById);

module.exports = router;
