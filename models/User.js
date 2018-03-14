const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = Schema({
    google_id: String,
    username: String,
    email: String,
    password: String,
    company: String,
});

module.exports = model('user', UserSchema);
