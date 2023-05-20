
//* =================================== Creating the Schema for reloads ===================================
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reloadSchema = new Schema({
    caliber:{
        type: String,
        required: false,
    },
    powder: {
        type: String,
        required: false
    },
    user_id:{
        type: String,
        required: false
    }

}, {timestamps: true})

module.exports = mongoose.model("Reload",reloadSchema )