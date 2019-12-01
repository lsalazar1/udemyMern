const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bio: {
        type: String,
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    food: {
        type: String,
        required: true
    },
    guests: [
        {
            name: {
                type: String,
                required: true
            },
            food: {
                type: String,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);