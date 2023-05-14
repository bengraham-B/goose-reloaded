
//* =================================== Creating the Schema for reloads ===================================
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reloadSchema = new Schema({
    caliber:{
        type: String,
        required: true,
    },
    powder: {
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model("Reload",reloadSchema )