const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, alertController.getAllAlerts);
router.post('/', authenticateToken, alertController.createAlert);

module.exports = router;
