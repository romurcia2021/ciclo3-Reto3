const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Income = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    createrAt: {
        type: Date,
        default: Date.now
    },
   value: Number
})

module.exports = mongoose.model('incomes', Income)
