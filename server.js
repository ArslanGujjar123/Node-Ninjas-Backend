// Required Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const passport = require('passport');
const session = require("express-session");
const dotenv = require('dotenv');
const socketIo = require('socket.io');
const jwt = require("jsonwebtoken");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

dotenv.config();

const { messages, items, users } = require('./data')
const authRoutes = require('./Auth/auth');
const itemRoutes = require('./routes/item');
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
// App Setup
const app = express();
const server = http.createServer(app);

const User = require('./Models/User');
const Item = require('./Models/Item');
const Message = require('./Models/Message');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
const connectDB = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("MongoDB connected");
        }
    } catch (error) {
        console.error("MongoDB Error:", error);
    }
};
connectDB();
mongoose.connection.on("disconnected", connectDB);

app.use('/auth', authRoutes);
app.use('/api', itemRoutes);
app.use('/api', userRoutes);
app.use('/api', messageRoutes);

// const insertData = async () => {
//     try {

//         await Message.insertMany(messages);
//         console.log("Data inserted successfully");
//     } catch (error) {
//         console.log(error);
//     }
// }
// insertData();

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});