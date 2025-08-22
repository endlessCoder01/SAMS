const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, taskController.getAllTasks);
router.post('/', authenticateToken, taskController.createTask);
router.patch('/updateTask/:id', authenticateToken, taskController.updateTask);
router.patch('/assignTask/:id', authenticateToken, taskController.AssignTask);
router.delete('/:id', authenticateToken, taskController.deleteTask);

module.exports = router;
