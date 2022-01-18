const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: false
    },
    userType: {
        type: Number,
        default: 2
    }
})


module.exports = mongoose.model('user', userSchema)