const express = require('express');
const router = express.Router();
const cropController = require('../controllers/cropController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, cropController.getAllCrops);
router.post('/', authenticateToken, cropController.createCrop);
// router.get('/:id', authenticateToken, userController.getUserById);

module.exports = router;
