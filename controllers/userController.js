const User = require('../Models/User');



exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().lean();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users found" });
        }
        res.json({ users });
    } catch (error) {
        console.error("error fetching users", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error Finding user' });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
}