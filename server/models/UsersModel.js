const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        unique : true,
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("users" , UsersSchema)