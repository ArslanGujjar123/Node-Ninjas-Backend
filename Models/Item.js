const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    dateLostFound: {
        type: Date,
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
    
    },
    user_email: {
        type: String,
        
    },
    imageUrl: {
        type: String
    },
    type: {
        type: String,
        enum: ['Found', 'Lost'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
