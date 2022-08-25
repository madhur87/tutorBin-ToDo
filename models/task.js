const mongoose = require('mongoose');

const taskSchemaCollection = new mongoose.Schema({
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tasks', taskSchemaCollection);
