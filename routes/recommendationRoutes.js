const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, recommendationController.getAllRecommendations);
router.post('/', authenticateToken, recommendationController.createRecommendation);
// router.get('/:id', authenticateToken, userController.getUserById);

module.exports = router;
