const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const userController = require('../controllers/userController');


// User routes
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.delete('/user/:id', userController.deleteUser);



module.exports = router;
