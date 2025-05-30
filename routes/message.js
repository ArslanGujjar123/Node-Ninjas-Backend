const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const messageController = require('../controllers/messageController');

// Message routes (converted needID → itemID)
router.get('/messages/:itemID', messageController.getMessagesByItem);
router.get('/messages/:userId1/:userId2', messageController.getConversation);

module.exports = router;
