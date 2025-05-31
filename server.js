// Required Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const passport = require('passport');
const session = require("express-session");
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const initializeSocket = require('./Socket/socket');
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

initializeSocket(server);

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

//         await User.insertMany(users);
//         console.log("Data inserted successfully");
//     } catch (error) {
//         console.log(error);
//     }
// }
// insertData();
app.get("/health", (_, res) => res.send("OK"));

// app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// app.get("/auth/google/nodeNinjas", passport.authenticate("google", { failureRedirect: "/unauthorized" }), async (req, res) => {
//     try {
//         const email = req.user?.email;
//         if (!email) throw new Error("User email not found");

//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.redirect("https://node-ninjas-zeta.vercel.app/login?message=You%20are%20already%20registered,%20please%20login");
//         }

//         const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "1h" });
//         res.redirect(`https://node-ninjas-zeta.vercel.app/register?token=${token}`);
//     } catch (error) {
//         console.error("Google Sign-in Error:", error);
//         res.redirect("https://node-ninjas-zeta.vercel.app/login?message=An%20error%20occurred");
//     }
// });

// app.get("/unauthorized", (req, res) => {
//     res.redirect("https://node-ninjas-zeta.vercel.app/login");
// });

app.get("/", (req, res) => {
    res.send("Server running & API working ✅");
});


// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});