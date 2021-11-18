const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Outcome = new Schema({
    value: Number,
    description: String,
    createdAt: {
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('outcomes',Outcome)

