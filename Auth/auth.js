const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/User');
const router = express.Router();

const key = process.env.SECRET_KEY;


router.post('/register', async (req, res) => {
    try {
        const { username, email, phoneNumber, password } = req.body;



        // Check if email is already taken
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already Registered" });
        }
        const newUser = new User({
            username,
            email,
            phoneNumber,
            password
        });

        // Hash password before saving in database
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Create JWT Payload
        const payload = {
            id: savedUser._id,
            email: savedUser.email,
            role: savedUser.role,
        };

        const token1 = jwt.sign(payload, key, { expiresIn: '4h' });
        return res.json({
            success: true,
            token: 'Bearer ' + token1,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});



router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Email not found' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password Incorrect' });
        }

        // Create payload
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role,
        };

        // Sign token
        const token = jwt.sign(payload, key, { expiresIn: '4h' });

        res.json({
            success: true,
            token: 'Bearer ' + token,
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
