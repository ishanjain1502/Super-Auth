const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        name:{ type: String, required: true },
        email: {type: String, required: true},
        pin: {type: Number, required: true}
    },
    {
        collection : 'login-data'
    }
)

const model = mongoose.model('login-data', User)

model.exports = model