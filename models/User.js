const mongoose = require('mongoose');

const UserModuleSchema = new mongoose.Schema({
    moduleId: {
        type: Number,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    }
});

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    modules: {
        type: [UserModuleSchema]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);