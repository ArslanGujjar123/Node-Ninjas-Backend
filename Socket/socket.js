const socketIo = require('socket.io');
const User = require('../Models/User');
const Message = require('../Models/Message');

const initializeSocket = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: '*',
            credentials: false,
        }
    });

    io.on("connection", (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on("authenticate", async (username) => {
            try {
                await User.findOneAndUpdate({ username }, { socketId: socket.id });
                console.log(`User ${username} authenticated with socket ID: ${socket.id}`);
            } catch (err) {
                console.error("Auth Error:", err);
            }
        });

        socket.on("sendMessage", async ({ itemID, sender, receiver, content, timestamp }) => {
            try {
                const message = new Message({ itemID, sender, receiver, content, timestamp, read: false });
                await message.save();

                // Find receiver's socket ID from database
                const receiverUser = await User.findOne({ username: receiver });
                if (receiverUser?.socketId) {
                    io.to(receiverUser.socketId).emit("receiveMessage", message);
                }

                socket.emit("messageSent", message);
            } catch (err) {
                console.error("Message Error:", err);
                socket.emit("messageError", { error: "Failed to send message" });
            }
        });

        socket.on("markMessagesAsRead", async ({ itemID, currentUser, otherUser }) => {
            try {
                await Message.updateMany(
                    {
                        itemID,
                        "sender": otherUser,
                        "receiver": currentUser,
                        read: false
                    },
                    { $set: { read: true } }
                );

                // Notify the other user that messages have been read
                const otherUserData = await User.findOne({ username: otherUser });
                if (otherUserData?.socketId) {
                    io.to(otherUserData.socketId).emit("messagesRead", { itemID, reader: currentUser });
                }
            } catch (err) {
                console.error("Mark as Read Error:", err);
            }
        });

        socket.on("disconnect", async () => {
            console.log(`Client disconnected: ${socket.id}`);
            try {
                await User.findOneAndUpdate({ socketId: socket.id }, { socketId: null });
            } catch (err) {
                console.error("Disconnect Error:", err);
            }
        });
    });

    io.engine.pingInterval = 25000; // 25 sec ping
    io.engine.pingTimeout = 60000;  // 60 sec timeout

    return io;
};

module.exports = initializeSocket;
