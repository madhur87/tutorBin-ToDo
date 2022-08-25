const mongoose = require('mongoose');

//Create User Schema
const userSchemaCollection = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 5,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', userSchemaCollection);