const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const claimController = require('../controllers/claimController');

// Claim routes
router.get('/claims', claimController.getAllClaims);
router.get('/claims/found-item/:found_item_id', claimController.getClaimsByFoundItemId);
router.get('/claims/user/:claimant_user_id', claimController.getClaimsByClaimantUserId);

module.exports = router;
