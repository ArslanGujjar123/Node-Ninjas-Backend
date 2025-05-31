const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const itemController = require('../controllers/itemController');


// Item routes (converted from "Need")
router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getUserItems);
router.post('/item', itemController.createItem);
router.put('/item/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);



module.exports = router;
