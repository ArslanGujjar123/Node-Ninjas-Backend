const Claim = require('../Models/Claims');

// Get all claims
exports.getAllClaims = async (req, res) => {
    try {
        const claims = await Claim.find();
        if (!claims || claims.length === 0) {
            return res.status(404).json({ message: 'No claims have been made yet.' });
        }
        res.json({ claims });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get claims by found item ID
exports.getClaimsByFoundItemId = async (req, res) => {
    try {
        const { found_item_id } = req.params;
        const claims = await Claim.find({ found_item_id });

        if (!claims || claims.length === 0) {
            return res.status(404).json({ message: `No claims found for item ID: ${found_item_id}` });
        }
        res.json({ claims });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get claims by claimant user ID
exports.getClaimsByClaimantUserId = async (req, res) => {
    try {
        const { claimant_user_id } = req.params;
        const claims = await Claim.find({ claimant_user_id });

        if (!claims || claims.length === 0) {
            return res.status(404).json({ message: `No claims found for user ID: ${claimant_user_id}` });
        }
        res.json({ claims });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
