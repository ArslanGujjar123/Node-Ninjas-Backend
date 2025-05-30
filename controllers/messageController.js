const Message = require('../Models/Message');

exports.getMessagesByItem = async (req, res) => {
    try {
        const { itemID } = req.params;
        const messages = await Message.find({ itemID });

        if (!messages || messages.length === 0) {
            return res.status(404).json({ msg: "No messages found for the provided needID." });
        }

        res.status(200).json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error.message);
        res.status(500).json({ msg: "Server error" });
    }
};

exports.getConversation = async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                { sender: req.params.userId1, receiver: req.params.userId2 },
                { sender: req.params.userId2, receiver: req.params.userId1 }
            ]
        }).sort('timestamp');
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};