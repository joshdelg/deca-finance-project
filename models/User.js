const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    started: {
        type: Boolean,
        default: false
    },
    answer: {
        type: Number
    },
    correct: {
        type: Boolean,
        default: false
    }
});

const UserModuleSchema = new mongoose.Schema({
    moduleId: {
        type: Number,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },
    questions: {
        type: [QuestionSchema]
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